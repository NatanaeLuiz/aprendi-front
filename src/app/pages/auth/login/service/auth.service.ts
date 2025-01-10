import { of } from "rxjs";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    private user: any;
  
    login(username: string, password: string) {
      if (username === 'admin' && password === '1234') {
        this.user = { username, role: 'admin' };
        return of(this.user);
      } else if (username === 'aluno' && password === '1234') {
        this.user = { username, role: 'aluno' };
        return of(this.user);
      } else {
        throw new Error('Usuário ou senha inválidos');
      }
    }
  
    isAdmin() {
      return this.user?.role === 'admin';
    }
  
    isAluno() {
      return this.user?.role === 'aluno';
    }
  }