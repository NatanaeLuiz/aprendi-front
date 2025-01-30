import { Component, OnInit } from '@angular/core';
import { InstituicaoService } from './instituicao.service';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { Instituicao } from '../model/instituicao.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cadastro-instituicao',
  templateUrl: './cadastro-instituicao.component.html',
  styleUrl: './cadastro-instituicao.component.css',
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class CadastroInstituicaoComponent implements OnInit {

  instituicao: Instituicao = {
    nome: '',
    cpfOuCnpj: '',
    quantidadeLicencasProfessor: null,
    quantidadeLicencasAluno: null
  };

  isLoading = false;
  mensagemSucesso: string | null = null;
  mensagemErro: string | null = null;

  constructor(private instituicaoService: InstituicaoService) {}

  ngOnInit(): void {}

  salvarInstituicao(form: NgForm): void {
    if (form.invalid) {
      this.mensagemErro = 'Preencha todos os campos obrigatórios!';
      return;
    }

    this.isLoading = true;
    this.mensagemErro = null;
    this.mensagemSucesso = null;

    this.instituicaoService.cadastrarInstituicao(this.instituicao).subscribe({
      next: () => {
        this.mensagemSucesso = 'Instituição cadastrada com sucesso!';
        this.isLoading = false;
        form.resetForm();
      },
      error: (error) => {
        this.mensagemErro = 'Erro ao cadastrar instituição. Tente novamente.';
        console.error(error);
        this.isLoading = false;
      }
    });
  }
}
