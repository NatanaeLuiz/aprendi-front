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

  editarModulo(){
    this.router.navigate(['/admin/editar-modulo']);
  }

  redirecionarCadastroCurso(){
    this.router.navigate(['/admin/cadastro-modulo']);
   }
}
