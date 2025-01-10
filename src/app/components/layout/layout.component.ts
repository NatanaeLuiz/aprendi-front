import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderAlunoComponent } from '../../pages/aluno/header/header-aluno.component';
import { HeaderAdminComponent } from '../../pages/admin/header/header-admin.component';
import { SidebarAlunoComponent } from "../../pages/aluno/sidebar/sidebar-aluno.component";
import { SidebarAdminComponent } from "../../pages/admin/sidebar/sidebar-admin.component";

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, HeaderAdminComponent, SidebarAdminComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  @Input() isAdmin: boolean = false;
}
