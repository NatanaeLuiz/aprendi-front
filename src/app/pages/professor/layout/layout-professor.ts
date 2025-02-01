import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from '../../auth/login/service/auth.service';
import { HeaderProfessorComponent } from '../header/header-professor.component';
import { SidebarProfessorComponent } from '../sidebar/sidebar-professor.component';


@Component({
  selector: 'app-layout-aluno',
  imports: [RouterOutlet, HeaderProfessorComponent, SidebarProfessorComponent],
  templateUrl: './layout-professor.component.html',
  styleUrl: './layout-professor.component.css'
})
export class LayoutProfessorComponent {

  userRole: string | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.userRole = this.authService.getUserRole();
  }


}
