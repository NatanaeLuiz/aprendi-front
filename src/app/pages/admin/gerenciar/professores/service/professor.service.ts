import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from '../../../../../../environments/environment';
import { Pagina } from '../../../../utils/pagina.model';
import { Professor } from '../model/professor.model';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

    cadastrarProfessor(professor: Professor): Observable<Professor> {
      return this.http.post<Professor>(`${this.apiUrl}/usuarios/salvar`, professor)
        .pipe(
          catchError(error => {
            console.error('Erro ao cadastrar professor:', error);
            return throwError(() => new Error('Erro ao cadastrar professor. Tente novamente.'));
          })
        );
    }

  listarProfessor(pagina: number, tamanhoPagina: number): Observable<Pagina<Professor>> {
    const params = new HttpParams()
      .set('page', pagina.toString())
      .set('size', tamanhoPagina.toString());

    return this.http.get<Pagina<Professor>>(`${this.apiUrl}/usuarios/tipo/PROFESSOR`, { params })
      .pipe(
        catchError(error => {
          console.error('Erro ao listar professores:', error);
          return throwError(() => new Error('Erro ao buscar professores. Tente novamente.'));
        })
      );
  }

  deleteProfessor(cpfOuCnpj: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/usuarios/${cpfOuCnpj}`)
      .pipe(
        catchError(error => {
          console.error('Erro ao deletar professor:', error);
          return throwError(() => new Error('Erro ao deletar professor. Tente novamente.'));
        })
      );
  }

}
