import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Curso } from '../model/cursos.model';
import { CursoService } from '../service/curso.service';

@Component({
  selector: 'app-editar-curso',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './editar-curso.component.html',
  styleUrls: ['./editar-curso.component.css']
})
export class EditarCursoComponent implements OnInit {
  router = inject(Router);

  // Variável para armazenar os dados originais
  curso: Curso = {
    nome: '',
    descricao: '',
    ativo: true,
    urlBanner: '',
    cargaHoraria: '',
    dataCriacao: '',
    dataAtualizacao: '',
    instituicao: '',
    uuid: '',
    modulos: []
  };

  isLoading = false;
  mensagemSucesso: string | null = null;
  mensagemErro: string | null = null;

  constructor(private cursoService: CursoService) {}

  ngOnInit(): void {
    const state = history.state;
    if (state && state.curso) {
      this.curso = state.curso;
    }
  }


  editarCurso(form: NgForm): void {
    if (form.invalid) {
      this.mensagemErro = 'Preencha todos os campos obrigatórios!';
      return;
    }

    this.isLoading = true;
    this.mensagemErro = null;
    this.mensagemSucesso = null;

    console.log('entrou aqui', this.curso.uuid)
    this.cursoService.editarCurso(this.curso.uuid, this.curso).subscribe({
      next: (cursoAtualizado) => {
        console.log('entrou aqui', this.curso.uuid)
        this.mensagemSucesso = 'Curso editado com sucesso!';
        this.isLoading = false;
        this.curso = cursoAtualizado;
        this.router.navigate(['/admin/cursos']);
      },
      error: (error) => {
        console.log('entrou aqui', this.curso.uuid)
        this.mensagemErro = 'Erro ao editar curso. Tente novamente.';
        console.error(error);
        this.isLoading = false;
      }
    });
  }
}
