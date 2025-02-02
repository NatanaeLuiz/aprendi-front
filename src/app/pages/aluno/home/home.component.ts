import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../../services/backend.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  cardCursos: String[] = ['curso1', 'curso2', 'curso2', 'curso4']

  //TODO: Consumir Backend serviço de todos cursos ATIVOS da instituição X (O serviço deve retornar o professor do modulo)

  constructor(private backEnd: BackendService){

  }

  ngOnInit(): void {
      this.backEnd.getCurso().subscribe({
        next: (Response) => {
          console.log(Response);
        }
      })
  }
}
