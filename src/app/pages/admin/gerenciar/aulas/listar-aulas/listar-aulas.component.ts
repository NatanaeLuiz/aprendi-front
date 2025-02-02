import { Component, inject, OnInit } from '@angular/core';
import { BackendService } from '../../../../../services/backend.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-aulas',
  imports: [],
  templateUrl: './listar-aulas.component.html',
  styleUrl: './listar-aulas.component.css'
})
export class ListarAulasComponent implements OnInit {

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

  editarAula(){
    this.router.navigate(['/admin/editar-aula']);
  }

  redirecionarCadastroAula(){
    this.router.navigate(['/admin/cadastro-aula']);

   }
}
