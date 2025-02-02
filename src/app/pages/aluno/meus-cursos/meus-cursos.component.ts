import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-meus-cursos',
  imports: [RouterLink, NgFor],
  templateUrl: './meus-cursos.component.html',
  styleUrl: './meus-cursos.component.css'
})
export class MeusCursosComponent {

  cardCursos: String[] = ['curso1', 'curso2', 'curso2', 'curso4']

  //TODO: Consumir Backend serviço de todos cursos do usuario X
}
