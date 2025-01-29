import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from '../../auth/login/service/auth.service';
import { HeaderAlunoComponent } from '../header/header-aluno.component';
import { SidebarAlunoComponent } from '../sidebar/sidebar-aluno.component';


@Component({
  selector: 'app-layout-aluno',
  imports: [RouterOutlet, HeaderAlunoComponent, SidebarAlunoComponent],
  templateUrl: './layout-aluno.component.html',
  styleUrl: './layout-aluno.component.css'
})
export class LayoutAlunoComponent {

  userRole: string | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.userRole = this.authService.getUserRole();
  }


}
