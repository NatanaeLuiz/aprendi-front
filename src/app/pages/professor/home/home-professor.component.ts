import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../../services/backend.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home-professor.component.html',
  styleUrl: './home-professor.component.css'
})
export class HomeProfessorComponent implements OnInit {

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
