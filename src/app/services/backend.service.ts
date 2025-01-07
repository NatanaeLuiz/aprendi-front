import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  url: string = 'http://localhost:8085'
  constructor(private http: HttpClient) {}

  getCurso(){
    return this.http.get<any>(this.url + '/cursos/1').pipe(
      map((response) => {
        return response;
      })
    );
  }

}
