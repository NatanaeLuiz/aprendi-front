import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavModuloComponent } from '../nav-modulo/nav-modulo.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notas',
  imports: [NavModuloComponent, CommonModule],
  templateUrl: './notas.component.html',
  styleUrl: './notas.component.css'
})
export class NotasComponent {
  isLoading = false;
  notasCurso: String[] = ['questao1', 'questao2', 'questao3', 'questao4', 'questao5']

}
