import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from '../../../../../../environments/environment';
import { Curso } from '../../cursos/model/cursos.model';
import { Pagina } from '../../../../utils/pagina.model';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}


  cadastrarCurso(curso: Curso): Observable<Curso> {
    return this.http.post<Curso>(`${this.apiUrl}/cursos/salvar`, curso)
      .pipe(
        catchError(error => {
          const errorMessage = error.error?.message || 'Erro ao cadastrar curso. Tente novamente.';
          console.error('Erro ao cadastrar curso:', error);
          return throwError(() => new Error(errorMessage));
        })
      );
  }

  listarCursos(): Observable<Curso[]> {
    return this.http.get<Curso[]>(`${this.apiUrl}/cursos`)
      .pipe(
        catchError(error => {
          console.error('Erro ao listar cursos:', error);
          return throwError(() => new Error('Erro ao listar cursos. Tente novamente.'));
        })
      );
  }

  listarCursosPaginada(pagina: number, tamanhoPagina: number): Observable<Pagina<Curso>> {
    const params = new HttpParams()
      .set('page', pagina.toString())
      .set('size', tamanhoPagina.toString());

    return this.http.get<Pagina<Curso>>(`${this.apiUrl}/cursos/paginada?page=${pagina}&size=${tamanhoPagina}`, {params})
      .pipe(
        catchError(error => {
          console.error('Erro ao listar cursos:', error);
          return throwError(() => new Error('Erro ao listar cursos. Tente novamente.'));
        })
      );
  }

  deleteCurso(uuid: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/cursos/${uuid}`)
      .pipe(
        catchError(error => {
          console.error('Erro ao deletar curso:', error);
          return throwError(() => new Error('Erro ao deletar curso. Tente novamente.'));
        })
      );
  }

  editarCurso(uuid: string, aluno: Curso): Observable<Curso> {
    return this.http.put<Curso>(`${this.apiUrl}/cursos/atualizar/${uuid}`, aluno)
      .pipe(
        catchError(error => {
          console.error('Erro ao curso aluno:', error);
          return throwError(() => new Error('Erro ao atualizar curso. Tente novamente.'));
        })
      );
  }
}
