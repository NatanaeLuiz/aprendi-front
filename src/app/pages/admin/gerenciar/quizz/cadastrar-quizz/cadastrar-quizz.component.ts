import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { BackendService } from '../../../../../services/backend.service';

@Component({
  selector: 'app-cursos',
  imports: [],
  templateUrl: './cadastrar-quizz.component.html',
  styleUrl: './cadastrar-quizz.component.css'
})
export class CadastrarQuizzComponent implements OnInit {

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

  editarCurso(){
    this.router.navigate(['/admin/editar-curso']);
  }

  redirecionarCadastroCurso(){
    this.router.navigate(['/admin/cadastro-curso']);

   }
}
