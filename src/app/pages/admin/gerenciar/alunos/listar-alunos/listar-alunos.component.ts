import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AlunoService } from '../service/aluno.service';
import { Pagina } from '../../../../utils/pagina.model';
import { Aluno } from '../model/aluno.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listar-git alunos',
  templateUrl: './listar-alunos.component.html',
  styleUrl: './listar-alunos.component.css',
  standalone: true,
  imports:[CommonModule]
})
export class ListarAlunosComponent implements OnInit {

  alunos: Aluno[] = [];
  isLoading = false;
  mensagemSucesso: string | null = null;
  mensagemErro: string | null = null;
  paginaAtual: number = 0;
  tamanhoPagina: number = 10;
  totalPaginas: number = 0;

  router = inject(Router)

  constructor(private alunoService: AlunoService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.carregarAlunos();
  }

  carregarAlunos(): void {
    this.alunoService.listarAlunos(this.paginaAtual, this.tamanhoPagina).subscribe({
      next: (response: Pagina<Aluno>) => {
        console.log(response.content)
        this.alunos = response.content;
        this.totalPaginas = response.totalPages;
      },
      error: (error) => {
        console.error('Erro ao buscar alunos:', error);
      }
    });
  }

  excluirAluno(cpfOuCnpj: string): void {
    if (confirm('Tem certeza que deseja excluir este aluno?')) {
      this.isLoading = true;
      this.alunoService.deleteAluno(cpfOuCnpj).subscribe({
        next: () => {
          this.carregarAlunos();
        },
        error: (error) => {
          console.error(error);
          this.isLoading = false;
        }
      });
    }
  }

  editarAluno(aluno: Aluno){
    this.router.navigate(['/admin/editar-aluno'], {state: {aluno}});
    console.log(aluno);
  }

  redirecionarCadastroAluno(): void {
    this.router.navigate(['/admin/cadastro-aluno']);
  }

  mudarPagina(pagina: number): void {
    this.paginaAtual = pagina;
    this.carregarAlunos();
  }
}
