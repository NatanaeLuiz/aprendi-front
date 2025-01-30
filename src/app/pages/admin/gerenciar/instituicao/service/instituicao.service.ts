import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Instituicao } from '../model/instituicao.model';
import { environment } from '../../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InstituicaoService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  cadastrarInstituicao(instituicao: Instituicao): Observable<Instituicao> {
    return this.http.post<Instituicao>(`${this.apiUrl}/instituicoes/salvar`, instituicao)
      .pipe(
        catchError(error => {
          console.error('Erro ao cadastrar instituição:', error);
          return throwError(() => new Error('Erro ao cadastrar instituição. Tente novamente.'));
        })
      );
  }
}
