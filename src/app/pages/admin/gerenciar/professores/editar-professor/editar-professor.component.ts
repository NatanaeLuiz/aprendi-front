import { Component, inject, OnInit } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { InstituicaoService } from '../../instituicao/service/instituicao.service';
import { Instituicao } from '../../instituicao/model/instituicao.model';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { ProfessorService } from '../service/professor.service';
import { TipoUsuarioEnum } from '../../alunos/model/tipoUsuarioEnum.model';
import { Router, RouterLink } from '@angular/router';
import { Professor } from '../model/professor.model';

@Component({
  selector: 'app-editar-professor',
  imports: [
    MatDialogModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule,
    RouterLink
  ],
  standalone: true,
  templateUrl: './editar-professor.component.html',
  styleUrls: ['./editar-professor.component.css']
})
export class EditarProfessor implements OnInit {

  router = inject(Router)
  instituicoes: Instituicao[] = [];
  professor: Professor = {
    email: '',
    senha: '',
    nome: '',
    sobrenome: '',
    tipoUsuario: TipoUsuarioEnum.PROFESSOR,
    instituicao: '',
    // telefones: [],
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
      const state = history.state;
      if (state && state.professor) {
        this.professor = state.professor;
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


  editarProfessor(form: NgForm): void {
    if (form.invalid) {
      this.mensagemErro = 'Preencha todos os campos obrigatórios!';
      return;
    }

    this.isLoading = true;
    this.mensagemErro = null;
    this.mensagemSucesso = null;

    this.professorService.editarProfessor(this.professor.cpfOuCnpj, this.professor).subscribe({
      next: (professorAtualizado) => {
        this.mensagemSucesso = 'Aluno editado com sucesso!';
        this.isLoading = false;
        this.professor = professorAtualizado;
        this.router.navigate(['/admin/professor']);
      },
      error: (error) => {
        this.mensagemErro = 'Erro ao editar aluno. Tente novamente.';
        console.error(error);
        this.isLoading = false;
      }
    });
  }

}
