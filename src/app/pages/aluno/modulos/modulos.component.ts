import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavModuloComponent } from './nav-modulo/nav-modulo.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-modulos',
  imports: [NavModuloComponent, NgFor],
  templateUrl: './modulos.component.html',
  styleUrl: './modulos.component.css'
})
export class ModulosComponent {
  modulos: String[] = ['Teste1', 'Teste2', 'Teste3', 'Teste4', 'teste5']

}
