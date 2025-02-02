import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cadastro-modulo',
  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ],
  templateUrl: './editar-modulo.component.html',
  styleUrls: ['./editar-modulo.component.css']
})
export class EditarModulo implements OnInit {
  cursoAtivo: boolean | null = null; // Valor inicial pode ser null, true ou false

  constructor() {}

  ngOnInit(): void {}
}
