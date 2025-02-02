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
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { TipoUsuarioEnum } from '../../alunos/model/tipoUsuarioEnum.model';

@Component({
  selector: 'app-cadastro-professor',
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
  templateUrl: './editar-administrador.component.html',
  styleUrls: ['./editar-administrador.component.css']
})
export class EditarAdministrador implements OnInit {

  instituicoes: Instituicao[] = [];
  cursos: Curso[] = [];
  administrador = {
    email: '',
    senha: '',
    nome: '',
    sobrenome: '',
    tipoUsuario: TipoUsuarioEnum.ADMINISTRADOR,
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
    private cursoService: CursoService) {}

    ngOnInit(): void {
      const state = history.state;
      if (state && state.administrador) {
        this.administrador = state.administrador;
      }

      console.log(this.carregarInstituicoes())
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

  editarAdministrador(form: NgForm): void {
    if (form.invalid) {
      this.mensagemErro = 'Preencha todos os campos obrigatórios!';
      return;
    }

    this.isLoading = true;
    this.mensagemErro = null;
    this.mensagemSucesso = null;


  }

}
