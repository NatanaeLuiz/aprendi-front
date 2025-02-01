import { Component, OnInit } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ProfessorService } from '../service/professor.service';
import { Instituicao } from '../../instituicao/model/instituicao.model';
import { TipoUsuarioEnum } from '../../alunos/model/tipoUsuarioEnum.model';
import { InstituicaoService } from '../../instituicao/service/instituicao.service';

@Component({
  selector: 'app-cadastro-curso',
  imports: [
    MatDialogModule,
    CommonModule ,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule,
    RouterLink],
  templateUrl: './cadastro-professor.component.html',
  styleUrl: './cadastro-professor.component.css'
})
export class CadastroProfessor implements OnInit {

  instituicoes: Instituicao[] = [];
  isLoading = false;
  mensagemSucesso: string | null = null;
  mensagemErro: string | null = null;

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

  constructor(private professorService: ProfessorService, private instituicaoService: InstituicaoService){

  }

  ngOnInit(): void {
    this.carregarInstituicoes()
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
        this.mensagemErro = 'Erro ao cadastrar professor. Tente novamente.';
        console.error(error);
        this.isLoading = false;
      }
    });
  }
}

