import { Component, inject, OnInit } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Instituicao } from '../../instituicao/model/instituicao.model';
import { TipoUsuarioEnum } from '../../alunos/model/tipoUsuarioEnum.model';
import { InstituicaoService } from '../../instituicao/service/instituicao.service';
import { AlunoService } from '../../alunos/service/aluno.service';
import { AdministradorService } from '../../administradores/service/administrador.service';

@Component({
  selector: 'app-modificar-perfil-administrador',
  imports: [
    MatDialogModule,
    CommonModule ,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule,RouterLink
    ],
  templateUrl: './modificar-perfil-administrador.component.html',
  styleUrl: './modificar-perfil-administrador.component.css'
})
export class ModificarPerfilAdministrador implements OnInit {

instituicoes: Instituicao[] = [];
  administrador = {
    email: '',
    senha: '',
    nome: '',
    sobrenome: '',
    tipoUsuario: TipoUsuarioEnum.ADMINISTRADOR,
    instituicao: '',
    telefones : [],
    statusUsuario: false,
    cpfOuCnpj: ''
  };

  isLoading = false;
  mensagemSucesso: string | null = null;
  mensagemErro: string | null = null;

  constructor(
    private instituicaoService: InstituicaoService,
    private administradorService: AdministradorService) {}

  ngOnInit(): void {
    console.log(this.carregarInstituicoes())
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

    console.log('dados a serem enviados', this.administrador)
    this.administradorService.cadastrarAdministrador(this.administrador).subscribe({
      next: () => {
        console.log(this.administrador);
        this.mensagemSucesso = 'Perfil do Administrador editado com sucesso!';
        this.isLoading = false;
      },
      error: (error) => {
        console.log(this.administrador);
        this.mensagemErro = error.message || 'Erro ao editar perfil. Tente novamente.';
        console.error(error);
        this.isLoading = false;
      }
    });
  }



}

