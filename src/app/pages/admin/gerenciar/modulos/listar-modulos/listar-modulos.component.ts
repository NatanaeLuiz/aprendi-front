import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { ModuloService } from '../service/modulo.service';
import { Pagina } from '../../../../utils/pagina.model';
import { Modulo } from '../modulo.model';

@Component({
  selector: 'app-listar-modulos',
  templateUrl: './listar-modulos.component.html',
  styleUrl: './listar-modulos.component.css',
  standalone: true,
  imports: [CommonModule]
})
export class ListarModulosComponent implements OnInit {

  modulos: Modulo[] = [];
  isLoading = false;
  mensagemSucesso: string | null = null;
  mensagemErro: string | null = null;
  paginaAtual: number = 0;
  tamanhoPagina: number = 10;
  totalPaginas: number = 0;

  router = inject(Router);

  constructor(private moduloService: ModuloService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.carregarModulos();
  }

  carregarModulos(): void {
    this.moduloService.listarModulosPaginada(this.paginaAtual, this.tamanhoPagina).subscribe({
      next: (response: Pagina<Modulo>) => {
        this.modulos = response.content;
        this.totalPaginas = response.totalPages;
      },
      error: (error) => {
        console.error('Erro ao buscar módulos:', error);
      }
    });
  }

  excluirModulo(uuid: string): void {
    if (confirm('Tem certeza que deseja excluir este módulo?')) {
      this.isLoading = true;
      this.moduloService.deleteModulo(uuid).subscribe({
        next: () => {
          this.carregarModulos();
        },
        error: (error) => {
          console.error(error);
          this.isLoading = false;
        }
      });
    }
  }

  editarModulo(modulo: Modulo): void {
    this.router.navigate(['/admin/editar-modulo'], { state: { modulo } });
  }

  redirecionarCadastroModulo(): void {
    this.router.navigate(['/admin/cadastro-modulo']);
  }

  mudarPagina(pagina: number): void {
    this.paginaAtual = pagina;
    this.carregarModulos();
  }
}
