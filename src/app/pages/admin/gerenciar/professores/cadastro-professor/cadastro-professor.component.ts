import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../../../../services/backend.service';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cadastro-curso',
  imports: [
    MatDialogModule,
    CommonModule ,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule,
    RouterLink],
  templateUrl: './cadastro-professor.component.html',
  styleUrl: './cadastro-professor.component.css'
})
export class CadastroProfessor implements OnInit {

  constructor(private backEnd: BackendService){

  }

  cursoAtivo: boolean | null = null; // Valor inicial pode ser null, true ou false

  instituicoes = [
    { id: 1, nome: 'Instituição A' },
    { id: 2, nome: 'Instituição B' },
  ];

  cursosDisponiveis = [
    { id: 1, nome: 'Curso A' },
    { id: 2, nome: 'Curso B' },
    { id: 3, nome: 'Curso C' },
  ];

  ngOnInit(): void {
      // this.backEnd.getCurso().subscribe({
      //   next: (Response) => {
      //     console.log(Response);
      //   }
      // })
  }

}

