import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { BackendService } from '../../../../../services/backend.service';

@Component({
  selector: 'app-listar-quizz',
  imports: [],
  templateUrl: './listar-quizz.component.html',
  styleUrl: './listar-quizz.component.css'
})
export class ListarQuizzComponent implements OnInit {

  router = inject(Router)

  constructor(private backEnd: BackendService, private dialog: MatDialog){

  }

  ngOnInit(): void {
      this.backEnd.getCurso().subscribe({
        next: (Response) => {
          console.log(Response);
        }
      })
  }

  editarQuizz(){
    this.router.navigate(['/admin/editar-quizz']);
  }

  redirecionarCadastroQuizz(){
    this.router.navigate(['/admin/cadastro-quizz']);

   }
}
