import { Component, inject, OnInit } from '@angular/core';
import { BackendService } from '../../../services/backend.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-alunos',
  imports: [],
  templateUrl: './alunos.component.html',
  styleUrl: './alunos.component.css'
})
export class AlunosComponent implements OnInit {

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
