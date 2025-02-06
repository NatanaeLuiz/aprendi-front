import { Component, OnInit } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { InstituicaoService } from '../../instituicao/service/instituicao.service';
import { Instituicao } from '../../instituicao/model/instituicao.model';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TipoUsuarioEnum } from '../../alunos/model/tipoUsuarioEnum.model';
import { AdministradorService } from '../service/administrador.service';
import { Administrador } from '../service/model/administrador.model';

@Component({
  selector: 'app-cadastro-administrador',
  imports: [
    MatDialogModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule,
    RouterLink,
    ReactiveFormsModule
  ],
  standalone: true,
  templateUrl: './cadastro-administrador.component.html',
  styleUrls: ['./cadastro-administrador.component.css']
})
export class CadastroAdministrador implements OnInit {

  formGroup = new FormGroup({
    text: new FormControl(''), // Define o campo do editor
  });

  instituicoes: Instituicao[] = [];
  perfis: TipoUsuarioEnum[] = [TipoUsuarioEnum.ADMINISTRADOR, TipoUsuarioEnum.DIRETOR, TipoUsuarioEnum.SUPORTE];
  administrador: Administrador = {
    email: '',
    senha: '',
    nome: '',
    sobrenome: '',
    tipoUsuario: TipoUsuarioEnum.ADMINISTRADOR,
    instituicao: '',
    // telefones: [],
    statusUsuario: true,
    cpfOuCnpj: ''
  };

  isLoading = false;
  mensagemSucesso: string | null = null;
  mensagemErro: string | null = null;

  constructor(
    private instituicaoService: InstituicaoService,
    private administradorService: AdministradorService
  ) {}

  ngOnInit(): void {
    this.carregarInstituicoes();
  }

  carregarInstituicoes(): void {
    this.instituicaoService.listarInstituicoes().subscribe({
      next: (instituicoes) => {
        this.instituicoes = instituicoes;
      },
      error: (error) => {
        console.error('Erro ao carregar as instituições:', error);
      }
    });
  }

  salvarAdministrador(form: NgForm): void {
    if (form.invalid) {
      this.mensagemErro = 'Preencha todos os campos obrigatórios!';
      return;
    }

    this.isLoading = true;
    this.mensagemErro = null;
    this.mensagemSucesso = null;

    this.administradorService.cadastrarAdministrador(this.administrador).subscribe({
      next: () => {
        this.mensagemSucesso = 'Administrador cadastrado com sucesso!';
        this.isLoading = false;
      },
      error: (error) => {
        this.mensagemErro = error.message || 'Erro ao cadastrar administrador. Tente novamente.';
        console.error(error);
        this.isLoading = false;
      }
    });
  }
}
