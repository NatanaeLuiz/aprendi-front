import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { CursoService } from '../service/curso.service';
import { InstituicaoService } from '../../instituicao/service/instituicao.service';
import { Instituicao } from '../../instituicao/model/instituicao.model';
import { Curso } from '../model/cursos.model';

@Component({
  selector: 'app-cadastro-curso',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ],
  standalone: true,
  templateUrl: './cadastro-curso.component.html',
  styleUrls: ['./cadastro-curso.component.css']
})
export class CadastroCurso implements OnInit {
  formGroup = new FormGroup({
    text: new FormControl(''),
  });

  curso: Curso = {
    nome: '',
    descricao: '',
    ativo: true,
    urlBanner: '',
    cargaHoraria: '',
    dataCriacao: '',
    dataAtualizacao: '',
    instituicao: '',
    modulos: []
  };

  instituicoes: Instituicao[] = [];
  isLoading = false;
  mensagemSucesso: string | null = null;
  mensagemErro: string | null = null;

  constructor(
    private cursoService: CursoService,
    private instituicaoService: InstituicaoService,
    private router: Router
  ) {}

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

  salvarCurso(form: NgForm): void {
    if (form.invalid) {
      this.mensagemErro = 'Preencha todos os campos obrigatórios!';
      return;
    }

    this.isLoading = true;
    this.mensagemErro = null;
    this.mensagemSucesso = null;

    this.cursoService.cadastrarCurso(this.curso).subscribe({
      next: () => {
        console.log("curso enviar", this.curso)
        this.mensagemSucesso = 'Curso cadastrado com sucesso!';
        this.isLoading = false;
      },
      error: (error) => {
        console.log("curso enviar", this.curso)
        this.mensagemErro = error.message || 'Erro ao cadastrar curso. Tente novamente.';
        console.error(error);
        this.isLoading = false;
      }
    });
  }

  redirecionarCadastroModulo(): void {
    this.router.navigate(['/admin/cadastro-modulo']);
  }
}
