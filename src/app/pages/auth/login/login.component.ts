import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from './service/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  router = inject(Router)

  onLogin(username: string, password: string) {

    this.authService.login(username, password).subscribe(user => {
      if (user.role === 'admin') {
        this.router.navigate(['/admin/dashboard']);
      } else if (user.role === 'aluno') {
        this.router.navigate(['/aluno/meus-cursos']);
      }
    });
  }

}

  // router = inject(Router)
  // onLogin(){
  //   this.router.navigateByUrl("aluno/meus-cursos")
  // }

