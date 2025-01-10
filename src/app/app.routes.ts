import { Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './pages/aluno/home/home.component';
import { PainelComponent } from './pages/aluno/painel/painel.component';
import { UserFormComponent } from './pages/auth/cadastrar/user-form/user-form.component';
import { MeusCursosComponent } from './pages/aluno/meus-cursos/meus-cursos.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/aluno/home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'aluno',
    component: LayoutComponent,
    children:[
      {
        path: 'meus-cursos',
        component: MeusCursosComponent,
        title: 'meus-cursos'
      },
      {
        path: 'painel',
        component: PainelComponent,
        title: 'Painel'
      },
      {
        path: 'home',
        component: HomeComponent,
        title: 'Home'
      }
    ]
  },
  {
    path: 'admin',
    component: LayoutComponent,
    children:[
      {
        path: 'dashboard',
        component: DashboardComponent,
        title: 'Dashboard'
      }
    ]
  },
  { path: 'cadastro', component: UserFormComponent, data: { acao: 'Cadastrar' } },
    //{ path: 'editar', component: UserFormComponent, data: { acao: 'Editar' } },
  {
    path: '**', // Redirecionamento para página não encontrada
    redirectTo: '/login'
  }
];
