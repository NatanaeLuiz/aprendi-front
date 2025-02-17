import { Component, OnInit } from '@angular/core';
import { NavModuloComponent } from './nav-modulo/nav-modulo.component';
import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { ModalComponent } from '../../../components/modal/modal.component';
import { Modulo } from './modulo';

@Component({
  selector: 'app-modulos',
  imports: [NavModuloComponent, NgFor, NgIf, ModalComponent, NgTemplateOutlet],
  templateUrl: './modulos.component.html',
  styleUrl: './modulos.component.css'
})
export class ModulosComponent implements OnInit {
  
  modulos: Modulo[] = [];

  ngOnInit(): void {
    this.modulos = [
      {
        id: 1,
        titulo: 'Princípios da Aprendizagem Criativa',
        descricao: 'Descrição do Modulo 1'
      },
      {
        id: 2,
        titulo: 'Aprendizagem Criativa testando',
        descricao: 'Descrição do Modulo 2'
      },
      {
        id: 3,
        titulo: 'Princípios da Aprendizagem Criativa',
        descricao: 'Descrição do Modulo 3'
      },
      {
        id: 4,
        titulo: 'Princípios da Aprendizagem Criativa',
        descricao: 'Descrição do Modulo 4'
      },
      {
        id: 5,
        titulo: 'Princípios da Aprendizagem Criativa',
        descricao: 'Descrição do Modulo 5'
      },
    ]
  }

  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
    console.log('Modal Aberto:', this.isModalOpen);
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
