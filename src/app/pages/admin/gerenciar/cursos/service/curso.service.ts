import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from '../../../../../../environments/environment';
import { Curso } from '../../cursos/model/cursos.model';

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

  listarCursosPaginada(page: number, size: number): Observable<Curso[]> {
    return this.http.get<Curso[]>(`${this.apiUrl}/cursos?page=${page}&size=${size}`)
      .pipe(
        catchError(error => {
          console.error('Erro ao listar cursos:', error);
          return throwError(() => new Error('Erro ao listar cursos. Tente novamente.'));
        })
      );
  }
}
