import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-editar-aula',
  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ],
  templateUrl: './editar-aula.component.html',
  styleUrls: ['./editar-aula.component.css']
})
export class EditarAula implements OnInit {

  constructor() {}

  ngOnInit(): void {}
}
