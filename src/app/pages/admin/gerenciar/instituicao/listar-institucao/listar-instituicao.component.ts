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

  constructor(private backEnd: BackendService,
     private dialog: MatDialog,
    private instituicaoService: InstituicaoService){

  }

  ngOnInit(): void {
    this.listarTodasInsituicoes();
  }

  private listarTodasInsituicoes() {
    this.isLoading = true;
    this.instituicaoService.listarInstituicoes().subscribe({
      next: (instituicoes) => {
        this.instituicoes = instituicoes;
        this.isLoading = false;
      },
      error: (error) => {
        this.mensagemErro = 'Erro ao listar todas as instituições.';
        console.error(error);
        this.isLoading = false;
      }
    });
  }

  redirecionarCadastroInstituicao(){
    this.router.navigate(['/admin/cadastro-instituicao']);
   }

}
