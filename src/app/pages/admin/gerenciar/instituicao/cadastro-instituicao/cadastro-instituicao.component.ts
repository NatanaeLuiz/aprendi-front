import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-cadastro-curso',
  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ],
  templateUrl: './cadastro-instituicao.component.html',
  styleUrls: ['./cadastro-instituicao.component.css']
})
export class CadastroInstituicao implements OnInit {
  cursoAtivo: boolean | null = null; // Valor inicial pode ser null, true ou false

  router = inject(Router)

  constructor() {}

  ngOnInit(): void {}

  redirecionarCadastroModulo(){
    this.router.navigate(['/admin/cadastro-modulo']);

   }
}
