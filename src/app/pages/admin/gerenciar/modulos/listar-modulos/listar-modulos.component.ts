import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { BackendService } from '../../../../../services/backend.service';

@Component({
  selector: 'app-modulos',
  imports: [],
  templateUrl: './listar-modulos.component.html',
  styleUrl: './listar-modulos.component.css'
})
export class ListarModulosComponent implements OnInit {

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
    this.router.navigate(['/admin/cadastro-modulo']);
  //   this.dialog.open(CadastroCurso, {
  //     width: '50%', // Define a largura do diálogo
  //     height: 'auto', // Define a altura automática (opcional)
  //     disableClose: true, // Para impedir o fechamento ao clicar fora do diálogo
  //   });

   }
}
