import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cadastro-aula',
  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ],
  templateUrl: './cadastro-aula.component.html',
  styleUrls: ['./cadastro-aula.component.css']
})
export class CadastroAula implements OnInit {

  constructor() {}

  ngOnInit(): void {}
}
