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
  templateUrl: './cadastro-modulo.component.html',
  styleUrls: ['./cadastro-modulo.component.css']
})
export class CadastroModulo implements OnInit {
  cursoAtivo: boolean | null = null; // Valor inicial pode ser null, true ou false

  constructor() {}

  ngOnInit(): void {}
}
