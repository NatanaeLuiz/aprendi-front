import { Component, OnInit } from '@angular/core';
import { InstituicaoService } from '../service/instituicao.service';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { Instituicao } from '../model/instituicao.model';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cadastro-instituicao',
  templateUrl: './edita-instituicao.component.html',
  styleUrl: './edita-instituicao.component.css',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink]
})
export class EditaInstituicaoComponent implements OnInit {

  instituicao: Instituicao = {
    nomeInstituicao: '',
    cpfOuCnpj: '',
    quantidadeLicencasProfessor: null,
    quantidadeLicencasAluno: null
  };

  isLoading = false;
  mensagemSucesso: string | null = null;
  mensagemErro: string | null = null;
  instituicoes: Instituicao[] = [];

  constructor(private instituicaoService: InstituicaoService) {}

  ngOnInit(): void {

   const state = history.state;

   if(state && state.instituicao) {
      this.instituicao = state.instituicao;
   }

  }

  editarInstituicao(form: NgForm): void {
    if (form.invalid) {
      this.mensagemErro = 'Preencha todos os campos obrigatórios!';
      return;
    }

    this.isLoading = true;
    this.mensagemErro = null;
    this.mensagemSucesso = null;

    this.instituicaoService.editarInstituicao(this.instituicao.cpfOuCnpj, this.instituicao).subscribe({
      next: () => {
        this.mensagemSucesso = 'Instituição editada com sucesso!';
        this.isLoading = false;
        form.resetForm();
      },
      error: (error) => {
        this.mensagemErro = 'Erro ao eidtar instituição. Tente novamente.';
        console.error(error);
        this.isLoading = false;
      }
    });
  }
}
