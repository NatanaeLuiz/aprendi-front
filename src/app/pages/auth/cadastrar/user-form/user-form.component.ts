import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-form',
  imports: [MatButtonModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {

  @Input() btnAcao!: string;

  // Emite evento ao submeter o formulário
  @Output() formSubmit = new EventEmitter<void>();

  constructor(private route: ActivatedRoute) {}

  //Utilizando parametros no endereço url
  ngOnInit(): void {
    // Captura o parâmetro "acao" da URL
    this.route.data.subscribe(data => {
      this.btnAcao = data['acao'];
    });
  }

  onSubmit() {
    this.formSubmit.emit();
  }
}
