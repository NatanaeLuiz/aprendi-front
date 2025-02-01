import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../auth/login/service/auth.service';

@Component({
  selector: 'app-header-professor',
  imports: [RouterLink],
  templateUrl: './header-professor.component.html',
  styleUrl: './header-professor.component.css'
})
export class HeaderProfessorComponent {

  constructor(private authService: AuthService) {}

  onClick() {
    this.authService.logout();
  }
}
