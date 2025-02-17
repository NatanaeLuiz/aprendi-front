import { Component, inject, OnInit } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Instituicao } from '../../../admin/gerenciar/instituicao/model/instituicao.model';
import { TipoUsuarioEnum } from '../../../admin/gerenciar/alunos/model/tipoUsuarioEnum.model';
import { InstituicaoService } from '../../../admin/gerenciar/instituicao/service/instituicao.service';
import { AlunoService } from '../../../admin/gerenciar/alunos/service/aluno.service';

@Component({
  selector: 'app-modificar-perfil-aluno',
  imports: [
    MatDialogModule,
    CommonModule ,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule,RouterLink
    ],
  templateUrl: './modificar-perfil-aluno.component.html',
  styleUrl: './modificar-perfil-aluno.component.css'
})
export class ModificarPerfilAluno implements OnInit {

instituicoes: Instituicao[] = [];
  aluno = {
    email: '',
    senha: '',
    nome: '',
    sobrenome: '',
    tipoUsuario: TipoUsuarioEnum.ALUNO,
    instituicao: '',
    telefones : [],
    statusUsuario: false,
    cpfOuCnpj: ''
  };

  isLoading = false;
  mensagemSucesso: string | null = null;
  mensagemErro: string | null = null;

  constructor(
    private instituicaoService: InstituicaoService,
    private alunoService: AlunoService) {}

  ngOnInit(): void {
    console.log(this.carregarInstituicoes())
    this.carregarInstituicoes();
  }

  carregarInstituicoes(): void {
    this.instituicaoService.listarInstituicoes().subscribe({
      next: (instituicoes) => {
        this.instituicoes = instituicoes;
      },
      error: (error) => {
        console.error('Erro ao carregar as instituições:', error);
      }
    });
  }


  salvarAluno(form: NgForm): void {
    if (form.invalid) {
      this.mensagemErro = 'Preencha todos os campos obrigatórios!';
      return;
    }

    this.isLoading = true;
    this.mensagemErro = null;
    this.mensagemSucesso = null;

    console.log('dados a serem enviados', this.aluno)
    this.alunoService.cadastrarAluno(this.aluno).subscribe({
      next: () => {
        console.log(this.aluno);
        this.mensagemSucesso = 'Aluno cadastrado com sucesso!';
        this.isLoading = false;
      },
      error: (error) => {
        console.log(this.aluno);
        this.mensagemErro = error.message || 'Erro ao cadastrar aluno. Tente novamente.';
        console.error(error);
        this.isLoading = false;
      }
    });
  }



}

