import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../auth/login/service/auth.service';

@Component({
  selector: 'app-header-aluno',
  imports: [RouterLink],
  templateUrl: './header-aluno.component.html',
  styleUrl: './header-aluno.component.css'
})
export class HeaderAlunoComponent {

  constructor(private authService: AuthService) {}

  onClick() {
    this.authService.logout();
  }
}
