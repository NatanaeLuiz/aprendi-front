import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from '../../../../../../environments/environment';
import { Aluno } from '../model/aluno.model';

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
            console.error('Erro ao cadastrar instituição:', error);
            return throwError(() => new Error('Erro ao cadastrar instituição. Tente novamente.'));
          })
        );
    }
}
