import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Pagina } from '../../../../utils/pagina.model';
import { CommonModule } from '@angular/common';
import { AdministradorService } from '../service/administrador.service';
import { Administrador } from '../service/model/administrador.model';

@Component({
  selector: 'app-listar-administrador',
  templateUrl: './listar-administrador.component.html',
  styleUrls: ['./listar-administrador.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ListarAdministradorComponent implements OnInit {

  administradores: Administrador[] = [];
  isLoading = false;
  mensagemSucesso: string | null = null;
  mensagemErro: string | null = null;
  paginaAtual: number = 0;
  tamanhoPagina: number = 10;
  totalPaginas: number = 0;

  router = inject(Router)

  constructor(private administradorService: AdministradorService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.carregarAdministradores();
  }

  carregarAdministradores(): void {
    this.administradorService.listarAdministrador(this.paginaAtual, this.tamanhoPagina).subscribe({
      next: (response: Pagina<any>) => {
        console.log(response.content);
        this.administradores = response.content;
        this.totalPaginas = response.totalPages;
      },
      error: (error) => {
        console.error('Erro ao buscar administradores:', error);
        this.mensagemErro = 'Erro ao carregar administradores.';
      }
    });
  }

  excluirAdministrador(id: string): void {
    if (confirm('Tem certeza que deseja excluir este administrador?')) {
      this.isLoading = true;
      this.administradorService.deleteAdministrador(id).subscribe({
        next: () => {
          this.mensagemSucesso = 'Administrador excluído com sucesso!';
          this.carregarAdministradores();
        },
        error: (error) => {
          console.error('Erro ao excluir administrador:', error);
          this.isLoading = false;
          this.mensagemErro = 'Erro ao excluir administrador.';
        }
      });
    }
  }

  editarAdministrador(admin: any): void {
    this.router.navigate(['/admin/editar-administrador'], { state: { admin } });
    console.log(admin);
  }

  redirecionarCadastroAdministrador(): void {
    this.router.navigate(['/admin/cadastro-administrador']);
  }

  mudarPagina(pagina: number): void {
    this.paginaAtual = pagina;
    this.carregarAdministradores();
  }
}
