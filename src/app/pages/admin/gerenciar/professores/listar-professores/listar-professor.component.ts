import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ProfessorService } from '../service/professor.service';
import { Professor } from '../model/professor.model';
import { Pagina } from '../../../../utils/pagina.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alunos',
  templateUrl: './listar-professor.component.html',
  styleUrl: './listar-professor.component.css',
  standalone: true,
  imports:[CommonModule]
})
export class ListarProfessorComponent implements OnInit {

  router = inject(Router)
    professores: Professor[] = [];
    isLoading = false;
    mensagemSucesso: string | null = null;
    mensagemErro: string | null = null;
    paginaAtual: number = 0;
    tamanhoPagina: number = 10;
    totalPaginas: number = 0;


  constructor(private professorService: ProfessorService, private dialog: MatDialog){

  }

  ngOnInit(): void {
    this.carregarProfessores()
  }

    carregarProfessores(): void {
      this.professorService.listarProfessor(this.paginaAtual, this.tamanhoPagina).subscribe({
        next: (response: Pagina<Professor>) => {
          console.log(response.content)
          this.professores = response.content;
          this.totalPaginas = response.totalPages;
        },
        error: (error) => {
          console.error('Erro ao buscar professores:', error);
        }
      });
    }

    mudarPagina(pagina: number): void {
      this.paginaAtual = pagina;
      this.carregarProfessores();
    }

    excluirProfessor(cpfOuCnpj: string): void {
      if (confirm('Tem certeza que deseja excluir este professor?')) {
        this.isLoading = true;
        this.professorService.deleteProfessor(cpfOuCnpj).subscribe({
          next: () => {
            this.carregarProfessores();
          },
          error: (error) => {
            console.error(error);
            this.isLoading = false;
          }
        });
      }
    }

    redirecionarCadastroProfessor(){
      this.router.navigate(['/admin/cadastro-professor']);
    }
}
