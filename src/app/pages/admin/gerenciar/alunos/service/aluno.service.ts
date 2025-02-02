import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from '../../../../../../environments/environment';
import { Aluno } from '../model/aluno.model';
import { Pagina } from '../../../../utils/pagina.model';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

    cadastrarAluno(aluno: Aluno): Observable<Aluno> {
      return this.http.post<Aluno>(`${this.apiUrl}/usuarios/salvar`, aluno)
        .pipe(
          catchError(error => {
            const errorMessage = error.error?.message || 'Erro ao cadastrar professor. Tente novamente.';
            console.error('Erro ao cadastrar professor:', error);
            return throwError(() => new Error(errorMessage));
          })
        );
    }

  listarAlunos(pagina: number, tamanhoPagina: number): Observable<Pagina<Aluno>> {
    const params = new HttpParams()
      .set('page', pagina.toString())
      .set('size', tamanhoPagina.toString());

    return this.http.get<Pagina<Aluno>>(`${this.apiUrl}/usuarios/tipo/ALUNO`, { params })
      .pipe(
        catchError(error => {
          console.error('Erro ao listar alunos:', error);
          return throwError(() => new Error('Erro ao buscar alunos. Tente novamente.'));
        })
      );
  }

  deleteAluno(cpfOuCnpj: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/usuarios/${cpfOuCnpj}`)
      .pipe(
        catchError(error => {
          console.error('Erro ao deletar instituição:', error);
          return throwError(() => new Error('Erro ao deletar instituição. Tente novamente.'));
        })
      );
  }

}
