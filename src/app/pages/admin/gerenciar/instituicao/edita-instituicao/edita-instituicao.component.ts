import { Component, OnInit } from '@angular/core';
import { InstituicaoService } from '../service/instituicao.service';
import { FormsModule, NgForm } from '@angular/forms';
import { Instituicao } from '../model/instituicao.model';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cadastro-instituicao',
  templateUrl: './edita-instituicao.component.html',
  styleUrl: './edita-instituicao.component.css',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule
  ]
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

  constructor(private instituicaoService: InstituicaoService, private toastr: ToastrService) {}

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
      next: (instituicaoAtualizada) => {
        this.mensagemSucesso = 'Instituição editada com sucesso!';
        this.isLoading = false;
        this.instituicao = instituicaoAtualizada
        this.showSuccess()
      },
      error: (error) => {
        this.mensagemErro = 'Erro ao editar instituição. Tente novamente.';
        console.error(error);
        this.isLoading = false;
      }
    });
  }
  showSuccess() {
    this.toastr.success('Instituição atualizada com sucesso!', 'Sucesso!');
  }
}
