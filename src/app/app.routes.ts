import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { PainelComponent } from './pages/painel/painel.component';
import { UserFormComponent } from './components/user-form/user-form.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  { path: 'cadastro', component: UserFormComponent, data: { acao: 'Cadastrar' } },
  //{ path: 'editar', component: UserFormComponent, data: { acao: 'Editar' } },
  {
    path: '',
    component: LayoutComponent,
    children:[

      {
        path: 'home',
        component: HomeComponent,
        title: 'Home'
      },
      {
        path: 'painel',
        component: PainelComponent,
        title: 'Painel'
      },
      {
        path: 'cursos',
        component: CursosComponent,
        title: 'Cursos'
      }
    ]

  }
];
