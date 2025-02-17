import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { Curso } from '../../cursos/model/cursos.model';
import { Modulo } from '../modulo.model';
import { ModuloService } from '../service/modulo.service';
import { CursoService } from '../../cursos/service/curso.service';

@Component({
  selector: 'app-cadastro-modulo',
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
  templateUrl: './cadastro-modulo.component.html',
  styleUrls: ['./cadastro-modulo.component.css']
})
export class CadastroModulo implements OnInit {
  formGroup = new FormGroup({
    text: new FormControl(''),
  });

  modulo: Modulo = {
    tituloModulo: '',
    descricao: '',
    ordemModulo: 0,
    uuidCurso: '',
    uuid:''
  };

  cursos: Curso[] = [];
  isLoading = false;
  mensagemSucesso: string | null = null;
  mensagemErro: string | null = null;

  constructor(
    private moduloService: ModuloService,
    private cursoService: CursoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.carregarCursos();
  }

  carregarCursos(): void {
    this.cursoService.listarCursos().subscribe({
      next: (cursos) => {
        this.cursos = cursos;
      },
      error: (error) => {
        console.error('Erro ao carregar os cursos:', error);
      }
    });
  }

  salvarModulo(form: NgForm): void {
    if (form.invalid) {
      this.mensagemErro = 'Preencha todos os campos obrigatórios!';
      return;
    }

    this.isLoading = true;
    this.mensagemErro = null;
    this.mensagemSucesso = null;

    this.moduloService.cadastrarModulo(this.modulo).subscribe({
      next: () => {
        this.mensagemSucesso = 'Módulo cadastrado com sucesso!';
        this.isLoading = false;
        this.router.navigate(['/admin/modulos']);
      },
      error: (error) => {
        this.mensagemErro = error.message || 'Erro ao cadastrar módulo. Tente novamente.';
        console.error(error);
        this.isLoading = false;
      }
    });
  }

  redirecionarCadastroCurso(): void {
    this.router.navigate(['/admin/cadastro-curso']);
  }
}
