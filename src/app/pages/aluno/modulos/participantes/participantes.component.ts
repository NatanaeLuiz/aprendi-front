import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavModuloComponent } from '../nav-modulo/nav-modulo.component';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-participantes',
  imports: [NavModuloComponent, NgFor, CommonModule],
  templateUrl: './participantes.component.html',
  styleUrl: './participantes.component.css'
})
export class ParticipantesComponent {
  isLoading = false;
  participantesCurso: String[] = ['participante1', 'participante2', 'participante3', 'participante4', 'participante5']

}
