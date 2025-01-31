import { Component, inject, OnInit } from '@angular/core';
import { InstituicaoService } from '../service/instituicao.service';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { Instituicao } from '../model/instituicao.model';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-cadastro-instituicao',
  templateUrl: './cadastro-instituicao.component.html',
  styleUrl: './cadastro-instituicao.component.css',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink]
})
export class CadastroInstituicaoComponent implements OnInit {

 router = inject(Router)

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
  }

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
        this.router.navigate(['/admin/instituicao']);
      },
      error: (error) => {
        this.mensagemErro = 'Erro ao cadastrar instituição. Tente novamente.';
        console.error(error);
        this.isLoading = false;
      }
    });
  }
}
