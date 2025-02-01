import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { BackendService } from '../../../../../services/backend.service';
import { Instituicao } from '../model/instituicao.model';
import { InstituicaoService } from '../service/instituicao.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cursos',
  templateUrl: './listar-instituicao.component.html',
  styleUrl: './listar-instituicao.component.css',
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class ListarInstituicaoComponent implements OnInit {

  router = inject(Router)
  isLoading = false;
  mensagemSucesso: string | null = null;
  mensagemErro: string | null = null;
  instituicoes: Instituicao[] = [];

  instituicao: Instituicao = {
    nomeInstituicao: '',
    cpfOuCnpj: '',
    quantidadeLicencasProfessor: null,
    quantidadeLicencasAluno: null
  };

  constructor(
     private dialog: MatDialog,
    private instituicaoService: InstituicaoService){

  }

  ngOnInit(): void {
    this.carregarInstituicoes();
  }

  editarInstituicao(instituicao: Instituicao){
    this.router.navigate(['/admin/edita-instituicao'], {state: {instituicao}});
  }

  carregarInstituicoes(): void {
    this.isLoading = true;
    this.instituicaoService.listarInstituicoes().subscribe({
      next: (instituicoes) => {
        this.instituicoes = instituicoes;
        this.isLoading = false;
      },
      error: (error) => {
        this.mensagemErro = 'Erro ao carregar instituições. Tente novamente.';
        console.error(error);
        this.isLoading = false;
      }
    });
  }

  excluirInstituicao(cpfOuCnpj: string): void {
    if (confirm('Tem certeza que deseja excluir esta instituição?')) {
      this.isLoading = true;
      this.instituicaoService.deleteInstituicao(cpfOuCnpj).subscribe({
        next: () => {
          this.carregarInstituicoes();
        },
        error: (error) => {
          console.error(error);
          this.isLoading = false;
        }
      });
    }
  }

  redirecionarCadastroInstituicao(){
    this.router.navigate(['/admin/cadastro-instituicao']);
   }

}
