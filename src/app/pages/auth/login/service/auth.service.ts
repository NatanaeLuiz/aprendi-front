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
        localStorage.setItem('userRole', 'admin'); // Persistir a role no localStorage
        return of(this.user);
      } else if (username === 'aluno' && password === '1234') {
        this.user = { username, role: 'aluno' };
        localStorage.setItem('userRole', 'aluno'); // Persistir a role no localStorage
        return of(this.user);
      } else if (username === 'professor' && password === '1234') {
        this.user = { username, role: 'professor' };
        localStorage.setItem('userRole', 'professor'); // Persistir a role no localStorage
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

    isProfessor() {
      return this.user?.role === 'professor';
    }

    getUserRole(): string | null {
      return localStorage.getItem('userRole'); // Recuperar a role do localStorage
    }

    logout() {
      this.user = null;
      localStorage.removeItem('userRole');
    }
  }
