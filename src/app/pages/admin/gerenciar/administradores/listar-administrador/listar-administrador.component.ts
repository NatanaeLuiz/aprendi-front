import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { BackendService } from '../../../../../services/backend.service';

@Component({
  selector: 'app-alunos',
  imports: [],
  templateUrl: './listar-administrador.component.html',
  styleUrl: './listar-administrador.component.css'
})
export class ListarAdministradorComponent implements OnInit {

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
  redirecionarCadastroAdministrador(){
    this.router.navigate(['/admin/cadastro-administrador']);
    // this.dialog.open(CadastroAluno, {
    //   width: '50%', // Define a largura do diálogo
    //   height: 'auto', // Define a altura automática (opcional)
    //   disableClose: true, // Para impedir o fechamento ao clicar fora do diálogo
    // });

  }
}
