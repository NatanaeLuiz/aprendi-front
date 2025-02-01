import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../auth/login/service/auth.service';

@Component({
  selector: 'app-nav-modulo',
  imports: [RouterLink],
  templateUrl: './nav-modulo.component.html',
  styleUrl: './nav-modulo.component.css'
})
export class NavModuloComponent {

  constructor(private authService: AuthService) {}

}
