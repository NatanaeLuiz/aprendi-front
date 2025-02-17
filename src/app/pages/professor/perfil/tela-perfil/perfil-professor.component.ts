import { Component, inject, OnInit } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-perfil-professor',
  imports: [
    MatDialogModule,
    CommonModule ,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule, RouterLink
    ],
  templateUrl: './perfil-professor.component.html',
  styleUrl: './perfil-professor.component.css'
})
export class PerfilProfessor implements OnInit {

  constructor(){

  }

  ngOnInit(): void {

  }



}

