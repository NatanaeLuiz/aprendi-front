import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { Curso } from '../model/cursos.model';
import { CursoService } from '../service/curso.service';
import { Pagina } from '../../../../utils/pagina.model';

@Component({
  selector: 'app-listar-cursos',
  templateUrl: './listar-cursos.component.html',
  styleUrl: './listar-cursos.component.css',
  standalone: true,
  imports: [CommonModule]
})
export class ListarCursosComponent implements OnInit {

  cursos: Curso[] = [];
  isLoading = false;
  mensagemSucesso: string | null = null;
  mensagemErro: string | null = null;
  paginaAtual: number = 0;
  tamanhoPagina: number = 10;
  totalPaginas: number = 0;

  router = inject(Router);

  constructor(private cursoService: CursoService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.carregarCursos();
  }

  carregarCursos(): void {
    this.cursoService.listarCursosPaginada(this.paginaAtual, this.tamanhoPagina).subscribe({
      next: (response: Pagina<Curso>) => {
        console.log(response.content);
        this.cursos = response.content;
        this.totalPaginas = response.totalPages;
      },
      error: (error) => {
        console.error('Erro ao buscar cursos:', error);
      }
    });
  }

  excluirCurso(uuid: string): void {
    if (confirm('Tem certeza que deseja excluir este curso?')) {
      this.isLoading = true;
      this.cursoService.deleteCurso(uuid).subscribe({
        next: () => {
          this.carregarCursos();
        },
        error: (error) => {
          console.error(error);
          this.isLoading = false;
        }
      });
    }
  }

  editarCurso(curso: Curso): void {
    this.router.navigate(['/admin/editar-curso'], { state: { curso } });
    console.log(curso);
  }

  redirecionarCadastroCurso(): void {
    this.router.navigate(['/admin/cadastro-curso']);
  }

  mudarPagina(pagina: number): void {
    this.paginaAtual = pagina;
    this.carregarCursos();
  }
}
