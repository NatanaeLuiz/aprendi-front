import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { BackendService } from '../../../../../services/backend.service';

@Component({
  selector: 'app-alunos',
  imports: [],
  templateUrl: './listar-alunos.component.html',
  styleUrl: './listar-alunos.component.css'
})
export class ListarAlunosComponent implements OnInit {

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
  redirecionarCadastroAluno(){
    this.router.navigate(['/admin/cadastro-aluno']);
    // this.dialog.open(CadastroAluno, {
    //   width: '50%', // Define a largura do diálogo
    //   height: 'auto', // Define a altura automática (opcional)
    //   disableClose: true, // Para impedir o fechamento ao clicar fora do diálogo
    // });

  }
}
