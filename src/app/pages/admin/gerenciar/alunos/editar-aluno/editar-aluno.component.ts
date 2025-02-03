import { Component, inject, OnInit } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { InstituicaoService } from '../../instituicao/service/instituicao.service';
import { Instituicao } from '../../instituicao/model/instituicao.model';
import { Router, RouterLink } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { TipoUsuarioEnum } from '../model/tipoUsuarioEnum.model';
import { Aluno } from '../model/aluno.model';
import { AlunoService } from '../service/aluno.service';

@Component({
  selector: 'app-editar-aluno',
  standalone: true,
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
  templateUrl: './editar-aluno.component.html',
  styleUrls: ['./editar-aluno.component.css']
})
export class EditarAlunoComponent implements OnInit {

  router = inject(Router)
  instituicoes: Instituicao[] = [];
  aluno: Aluno = {
    email: '',
    senha: '',
    nome: '',
    sobrenome: '',
    tipoUsuario: TipoUsuarioEnum.ALUNO,
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
    private alunoService: AlunoService
  ) {}

  ngOnInit(): void {
    const state = history.state;
    if (state && state.aluno) {
      this.aluno = state.aluno;
    }
    this.carregarInstituicoes();
  }

  carregarInstituicoes(): void {
    this.instituicaoService.listarInstituicoes().subscribe({
      next: (instituicoes: Instituicao[]) => {
        this.instituicoes = instituicoes;
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

    this.alunoService.editarAluno(this.aluno.cpfOuCnpj, this.aluno).subscribe({
      next: (alunoAtualizado) => {
        this.mensagemSucesso = 'Aluno editado com sucesso!';
        this.isLoading = false;
        this.aluno = alunoAtualizado;
        this.router.navigate(['/admin/aluno']);
      },
      error: (error) => {
        this.mensagemErro = 'Erro ao editar aluno. Tente novamente.';
        console.error(error);
        this.isLoading = false;
      }
    });
  }
}
