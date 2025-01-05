import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-form',
  imports: [],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {

  @Input() btnAcao!: string;
}
