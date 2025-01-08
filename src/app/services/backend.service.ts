import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private url: string = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getCurso(){
    return this.http.get<any>(this.url + '/cursos/1').pipe(
      map((response) => {
        return response;
      })
    );
  }

}
