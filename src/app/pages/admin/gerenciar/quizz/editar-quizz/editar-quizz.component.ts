import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { BackendService } from '../../../../../services/backend.service';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


// Criando a Interface aqui por enquanto
interface Resposta {
  marcada: boolean;
  opcao: string;
}

@Component({
  selector: 'app-editar-quizz',
  imports: [ FormsModule, MatInputModule, MatFormFieldModule, CommonModule, FormsModule],
  templateUrl: './editar-quizz.component.html',
  styleUrl: './editar-quizz.component.css'
})


export class EditarQuizzComponent implements OnInit {

  router = inject(Router)
     // Array que armazenará as opções de resposta
     respostas: Resposta[] = [];
     tipoPergunta: string = ''; // Será "multipla" ou "unica"


  constructor(private backEnd: BackendService, private dialog: MatDialog){

  }

  ngOnInit(): void {
      this.backEnd.getCurso().subscribe({
        next: (Response) => {
          console.log(Response);
        }
      })
  }


  // Método para adicionar uma nova resposta
  adicionarResposta(): void {
    // Adiciona um objeto com valores padrão
    this.respostas.push({ marcada: false, opcao: '' });
  }

  // Método para remover uma resposta
  removerResposta(index: number): void {
    this.respostas.splice(index, 1);
  }


  editarCurso(){
    this.router.navigate(['/admin/editar-curso']);
  }

  redirecionarCadastroCurso(){
    this.router.navigate(['/admin/cadastro-curso']);

   }

}
