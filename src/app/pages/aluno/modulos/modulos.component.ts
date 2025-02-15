import { Component } from '@angular/core';
import { NavModuloComponent } from './nav-modulo/nav-modulo.component';
import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { ModalComponent } from '../../../components/modal/modal.component';

@Component({
  selector: 'app-modulos',
  imports: [NavModuloComponent, NgFor, NgIf, ModalComponent, NgTemplateOutlet],
  templateUrl: './modulos.component.html',
  styleUrl: './modulos.component.css'
})
export class ModulosComponent {
  modulos: String[] = ['Teste1', 'Teste2', 'Teste3', 'Teste4', 'teste5']

  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
    console.log('Modal Aberto:', this.isModalOpen);
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
