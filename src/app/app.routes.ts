import { Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { HomeComponent } from './pages/aluno/home/home.component';
import { PainelComponent } from './pages/aluno/painel/painel.component';
import { UserFormComponent } from './pages/auth/cadastrar/user-form/user-form.component';
import { MeusCursosComponent } from './pages/aluno/meus-cursos/meus-cursos.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { CursosComponent } from './pages/admin/cursos/cursos.component';
import { CalendarioComponent } from './pages/admin/calendario/calendario.component';
import { LayoutAlunoComponent } from './pages/aluno/layout/layout-aluno';
import { LayoutAdminComponent } from './pages/admin/layout/layout-admin';
import { CadastroCurso } from './pages/admin/FormsCadastros/cadastro-curso/cadastro-curso.component';
import { CadastroAluno } from './pages/admin/FormsCadastros/cadastro-aluno/cadastro-aluno.component';
import { AlunosComponent } from './pages/admin/alunos/alunos.component';
import { CadastroModulo } from './pages/admin/FormsCadastros/cadastro-modulo/cadastro-modulo.component';
import { CadastroAula } from './pages/admin/FormsCadastros/cadastro-aula/cadastro-aula.component';

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
      },
      {
        path: 'cursos',
        component: CursosComponent,
        title: 'Cursos'
      },
      {
        path: 'calendario',
        component: CalendarioComponent,
        title: 'Calendaio'
      },
      {
        path: 'alunos',
        component: AlunosComponent,
        title: 'alunos'
      },
      {
        path: 'cadastro-curso',
        component: CadastroCurso,
        title: 'Cadastro Curso'
      },
      {
        path: 'cadastro-modulo',
        component: CadastroModulo,
        title: 'Cadastro Modulo'
      },
      {
        path: 'cadastro-aula',
        component: CadastroAula,
        title: 'Cadastro Aula'
      },
      {
        path: 'cadastro-aluno',
        component: CadastroAluno,
        title: 'Cadastro Aluno'
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
