import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderAdminComponent } from '../header/header-admin.component';
import { SidebarAdminComponent } from '../sidebar/sidebar-admin.component';
import { AuthService } from '../../auth/login/service/auth.service';


@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, HeaderAdminComponent, SidebarAdminComponent],
  templateUrl: './layout-admin.component.html',
  styleUrl: './layout-admin.component.css'
})
export class LayoutAdminComponent {

  userRole: string | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.userRole = this.authService.getUserRole();
  }

  
}
