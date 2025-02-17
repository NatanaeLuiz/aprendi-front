import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from '../../../../../../environments/environment';
import { Modulo } from '../modulo.model';
import { Pagina } from '../../../../utils/pagina.model';

@Injectable({
  providedIn: 'root'
})
export class ModuloService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  cadastrarModulo(modulo: Modulo): Observable<Modulo> {
    return this.http.post<Modulo>(`${this.apiUrl}/modulos/salvar`, modulo).pipe(
      catchError((error) => {
        const errorMessage = error.error?.message || 'Erro ao cadastrar módulo. Tente novamente.';
        console.error('Erro ao cadastrar módulo:', error);
        return throwError(() => new Error(errorMessage));
      })
    );
  }

  listarModulosPaginada(pagina: number, tamanho: number): Observable<Pagina<Modulo>> {
    return this.http.get<Pagina<Modulo>>(`${this.apiUrl}?page=${pagina}&size=${tamanho}`).pipe(
      catchError((error) => {
        console.error('Erro ao listar módulos:', error);
        return throwError(() => new Error('Erro ao listar módulos. Tente novamente.'));
      })
    );
  }

  deleteModulo(uuid: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/modulos/${uuid}`).pipe(
      catchError((error) => {
        console.error('Erro ao deletar módulo:', error);
        return throwError(() => new Error('Erro ao deletar módulo. Tente novamente.'));
      })
    );
  }

  editarModulo(uuid: string, camposAlterados: Partial<Modulo>): Observable<Modulo> {
    return this.http.put<Modulo>(`${this.apiUrl}/modulos/atualizar/${uuid}`, camposAlterados).pipe(
      catchError((error) => {
        console.error('Erro ao atualizar módulo:', error);
        return throwError(() => new Error('Erro ao atualizar módulo. Tente novamente.'));
      })
    );
  }
}
