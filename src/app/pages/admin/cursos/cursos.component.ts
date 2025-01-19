import { Component, inject, OnInit } from '@angular/core';
import { BackendService } from '../../../services/backend.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CadastroCurso } from '../FormsCadastros/cadastro-curso/cadastro-curso.component';

@Component({
  selector: 'app-cursos',
  imports: [],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent implements OnInit {

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
  redirecionarCadastroCurso(){
    this.router.navigate(['/admin/cadastro-curso']);
  //   this.dialog.open(CadastroCurso, {
  //     width: '50%', // Define a largura do diálogo
  //     height: 'auto', // Define a altura automática (opcional)
  //     disableClose: true, // Para impedir o fechamento ao clicar fora do diálogo
  //   });

   }
}
