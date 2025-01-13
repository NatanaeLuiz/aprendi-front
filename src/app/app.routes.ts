import { Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { HomeComponent } from './pages/aluno/home/home.component';
import { PainelComponent } from './pages/aluno/painel/painel.component';
import { UserFormComponent } from './pages/auth/cadastrar/user-form/user-form.component';
import { MeusCursosComponent } from './pages/aluno/meus-cursos/meus-cursos.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { LayoutAlunoComponent } from './pages/aluno/layout/layout-aluno';
import { LayoutAdminComponent } from './pages/admin/layout/layout-admin';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'aluno',
    component: LayoutAlunoComponent,
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
    component: LayoutAdminComponent,
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
