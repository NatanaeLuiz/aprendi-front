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
import { ProfessorService } from '../../../admin/gerenciar/professores/service/professor.service';

@Component({
  selector: 'app-modificar-perfil-professor',
  imports: [
    MatDialogModule,
    CommonModule ,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule,RouterLink
    ],
  templateUrl: './modificar-perfil-professor.component.html',
  styleUrl: './modificar-perfil-professor.component.css'
})
export class ModificarPerfilProfessor implements OnInit {

instituicoes: Instituicao[] = [];
professor = {
    email: '',
    senha: '',
    nome: '',
    sobrenome: '',
    tipoUsuario: TipoUsuarioEnum.PROFESSOR,
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
    private professorService: ProfessorService) {}

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


  salvarProfessor(form: NgForm): void {
    if (form.invalid) {
      this.mensagemErro = 'Preencha todos os campos obrigatórios!';
      return;
    }

    this.isLoading = true;
    this.mensagemErro = null;
    this.mensagemSucesso = null;

    console.log('dados a serem enviados', this.professor)
    this.professorService.cadastrarProfessor(this.professor).subscribe({
      next: () => {
        console.log(this.professor);
        this.mensagemSucesso = 'Professor cadastrado com sucesso!';
        this.isLoading = false;
      },
      error: (error) => {
        console.log(this.professor);
        this.mensagemErro = error.message || 'Erro ao cadastrar professor. Tente novamente.';
        console.error(error);
        this.isLoading = false;
      }
    });
  }



}

