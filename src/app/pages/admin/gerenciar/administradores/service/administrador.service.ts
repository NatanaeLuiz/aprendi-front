import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from '../../../../../../environments/environment';
import { Pagina } from '../../../../utils/pagina.model';
import { Administrador } from './model/administrador.model';
import { CadastroAdministrador } from '../cadastro-administrador/cadastro-administrador.component';

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

    cadastrarAdministrador(administrador: Administrador): Observable<Administrador> {
      return this.http.post<Administrador>(`${this.apiUrl}/usuarios/salvar`, administrador)
        .pipe(
          catchError(error => {
            const errorMessage = error.error?.message || 'Erro ao cadastrar Administrador. Tente novamente.';
            console.error('Erro ao cadastrar Administrador:', error);
            return throwError(() => new Error(errorMessage));
          })
        );
    }

  listarAdministrador(pagina: number, tamanhoPagina: number): Observable<Pagina<Administrador>> {
    const params = new HttpParams()
      .set('page', pagina.toString())
      .set('size', tamanhoPagina.toString());

    return this.http.get<Pagina<Administrador>>(`${this.apiUrl}/usuarios/tipo/ADMINISTRADOR`, { params })
      .pipe(
        catchError(error => {
          console.error('Erro ao listar administradores:', error);
          return throwError(() => new Error('Erro ao buscar administrador. Tente novamente.'));
        })
      );
  }

  deleteAdministrador(cpfOuCnpj: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/usuarios/${cpfOuCnpj}`)
      .pipe(
        catchError(error => {
          console.error('Erro ao deletar administrador:', error);
          return throwError(() => new Error('Erro ao deletar administrador. Tente novamente.'));
        })
      );
  }

  editarAdministrador(cpfOuCnpj: string, administrador: Administrador): Observable<Administrador> {
    return this.http.put<Administrador>(`${this.apiUrl}/usuarios/atualizar/${cpfOuCnpj}`, administrador)
      .pipe(
        catchError(error => {
          console.error('Erro ao atualizar administrador:', error);
          return throwError(() => new Error('Erro ao atualizar administrador. Tente novamente.'));
        })
      );
    }
}
