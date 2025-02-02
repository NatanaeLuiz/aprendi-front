import { Component, OnInit } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { InstituicaoService } from '../../instituicao/service/instituicao.service';
import { Instituicao } from '../../instituicao/model/instituicao.model';
import { CursoService } from '../../cursos/service/curso.service';
import { Curso } from '../../cursos/model/cursos.model';
import { AlunoService } from '../service/aluno.service';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { TipoUsuarioEnum } from '../model/tipoUsuarioEnum.model';
import { Aluno } from '../model/aluno.model';

@Component({
  selector: 'app-cadastro-aluno',
  imports: [
    MatDialogModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule
  ],
  standalone: true,
  templateUrl: './editar-aluno.component.html',
  styleUrls: ['./editar-aluno.component.css']
})
export class EditarAluno implements OnInit {

  cursos: Curso[] = [];
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
    private cursoService: CursoService,
    private alunoService: AlunoService) {}

  ngOnInit(): void {
    const state = history.state;
    if (state && state.aluno) {
      this.aluno = state.aluno;
    }

   // console.log(this.carregarInstituicoes())
    this.carregarInstituicoes();
  }


  carregarInstituicoes(): void {
    this.instituicaoService.listarInstituicoes().subscribe({
      next: (instituicoes: Instituicao[]) => {
        this.instituicoes = instituicoes; // Atribuir a lista correta
      },
      error: (error) => {
        console.error('Erro ao carregar as instituições:', error);
      }
    });
  }

  editarAluno(form: NgForm): void {
    if (form.invalid) {
      this.mensagemErro = 'Preencha todos os campos obrigatórios!';
      return;
    }

    this.isLoading = true;
    this.mensagemErro = null;
    this.mensagemSucesso = null;


  }

}
