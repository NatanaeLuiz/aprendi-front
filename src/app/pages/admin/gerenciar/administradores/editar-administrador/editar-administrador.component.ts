import { Component, OnInit, inject } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { InstituicaoService } from '../../instituicao/service/instituicao.service';
import { Instituicao } from '../../instituicao/model/instituicao.model';
import { Curso } from '../../cursos/model/cursos.model';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { TipoUsuarioEnum } from '../../alunos/model/tipoUsuarioEnum.model';
import { Router, RouterLink } from '@angular/router';
import { AdministradorService } from '../service/administrador.service';
import { Administrador } from '../service/model/administrador.model';

@Component({
  selector: 'app-editar-administrador',
  imports: [
    MatDialogModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule,
    RouterLink
  ],
  standalone: true,
  templateUrl: './editar-administrador.component.html',
  styleUrls: ['./editar-administrador.component.css']
})
export class EditarAdministrador implements OnInit {

  router = inject(Router)
  instituicoes: Instituicao[] = [];
  administrador: Administrador = {
    email: '',
    senha: '',
    nome: '',
    sobrenome: '',
    tipoUsuario: TipoUsuarioEnum.ADMINISTRADOR,
    instituicao: '',
    // telefones : [],
    statusUsuario: false,
    cpfOuCnpj: ''
  };

  isLoading = false;
  mensagemSucesso: string | null = null;
  mensagemErro: string | null = null;

  constructor(private instituicaoService: InstituicaoService, private administradorService: AdministradorService) {}

    ngOnInit(): void {
      const state = history.state;
      if (state && state.adminstrador) {
        this.administrador = state.adminstrador;
      }

      console.log(this.carregarInstituicoes())
      this.carregarInstituicoes();
    }

  carregarInstituicoes(): void {
    this.instituicaoService.listarInstituicoes().subscribe({
      next: (instituicoes: Instituicao[]) => {
        this.instituicoes = instituicoes; // Atribuir a lista correta
      },
      error: (error) => {
        console.error('Erro ao carregar as instituições:', error);
      }
    });
  }

  editarAdministrador(form: NgForm): void {
    if (form.invalid) {
      this.mensagemErro = 'Preencha todos os campos obrigatórios!';
      return;
    }

    this.isLoading = true;
    this.mensagemErro = null;
    this.mensagemSucesso = null;

    this.administradorService.editarAdministrador(this.administrador.cpfOuCnpj, this.administrador).subscribe({
      next: (administradorAtualizado) => {
        this.mensagemSucesso = 'Administrador editado com sucesso!';
        this.isLoading = false;
        this.administrador = administradorAtualizado;
        this.router.navigate(['/admin/administrador']);
      },
      error: (error) => {
        this.mensagemErro = 'Erro ao editar Administrador. Tente novamente.';
        console.error(error);
        this.isLoading = false;
      }
    });
  }

}
