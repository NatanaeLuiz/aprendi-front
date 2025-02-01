import { Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { HomeComponent } from './pages/aluno/home/home.component';
import { PainelComponent } from './pages/aluno/painel/painel.component';
import { UserFormComponent } from './pages/auth/cadastrar/user-form/user-form.component';
import { MeusCursosComponent } from './pages/aluno/meus-cursos/meus-cursos.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { CalendarioComponent } from './pages/admin/calendario/calendario.component';
import { LayoutAlunoComponent } from './pages/aluno/layout/layout-aluno';
import { LayoutAdminComponent } from './pages/admin/layout/layout-admin';
import { ListarInstituicaoComponent } from './pages/admin/gerenciar/instituicao/listar-institucao/listar-instituicao.component';
import { ListarCursosComponent } from './pages/admin/gerenciar/cursos/listar-cursos/listar-cursos.component';
import { ListarModulosComponent } from './pages/admin/gerenciar/modulos/listar-modulos/listar-modulos.component';
import { ListarAulasComponent } from './pages/admin/gerenciar/aulas/listar-aulas/listar-aulas.component';
import { CadastroCurso } from './pages/admin/gerenciar/cursos/cadastro-curso/cadastro-curso.component';
import { CadastroModulo } from './pages/admin/gerenciar/modulos/cadastro-modulo/cadastro-modulo.component';
import { CadastroAula } from './pages/admin/gerenciar/aulas/cadastro-aula/cadastro-aula.component';
import { ListarAlunosComponent } from './pages/admin/gerenciar/alunos/listar-alunos/listar-alunos.component';
import { CadastroAluno } from './pages/admin/gerenciar/alunos/cadastro-aluno/cadastro-aluno.component';
import { ListarProfessorComponent } from './pages/admin/gerenciar/professores/listar-professores/listar-professor.component';
import { CadastroProfessor } from './pages/admin/gerenciar/professores/cadastro-professor/cadastro-professor.component';
import { ListarAdministradorComponent } from './pages/admin/gerenciar/administradores/listar-administrador/listar-administrador.component';
import { CadastroAdministrador } from './pages/admin/gerenciar/administradores/cadastro-administrador/cadastro-administrador.component';
import { CadastroInstituicaoComponent } from './pages/admin/gerenciar/instituicao/cadastro-instituicao/cadastro-instituicao.component';
import { EditaInstituicaoComponent } from './pages/admin/gerenciar/instituicao/edita-instituicao/edita-instituicao.component';
import { ModulosComponent } from './pages/aluno/modulos/modulos.component';
import { ParticipantesComponent } from './pages/aluno/modulos/participantes/participantes.component';
import { NotasComponent } from './pages/aluno/modulos/notas/notas.component';

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
        path: 'modulos',
        component: ModulosComponent,
        title: 'modulos',
        children: [
          
        ]
      },
      {
        path: 'modulos/participantes',
        component: ParticipantesComponent,
        title: 'participantes'
      },
      {
        path: 'modulos/notas',
        component: NotasComponent,
        title: 'notas'
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
        path: 'instituicao',
        component: ListarInstituicaoComponent,
        title: 'Instituição'
      },
      {
        path: 'cadastro-instituicao',
        component: CadastroInstituicaoComponent,
        title: 'Cadastro Instituição'
      },
      {
        path: 'edita-instituicao',
        component: EditaInstituicaoComponent,
        title: 'Editar Instituição'
      },
      {
        path: 'cursos',
        component: ListarCursosComponent,
        title: 'Cursos'
      },
      {
        path: 'modulos',
        component: ListarModulosComponent,
        title: 'Modulos'
      },
      {
        path: 'aulas',
        component: ListarAulasComponent,
        title: 'Aulas'
      },
      {
        path: 'calendario',
        component: CalendarioComponent,
        title: 'Calendaio'
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
        path: 'alunos',
        component: ListarAlunosComponent,
        title: 'alunos'
      },
      {
        path: 'cadastro-aluno',
        component: CadastroAluno,
        title: 'Cadastro Aluno'
      },
      {
        path: 'professor',
        component: ListarProfessorComponent,
        title: 'professor'
      },
      {
        path: 'cadastro-professor',
        component: CadastroProfessor,
        title: 'Cadastro Professor'
      },
      {
        path: 'administrador',
        component: ListarAdministradorComponent,
        title: 'administrador'
      },
      {
        path: 'cadastro-administrador',
        component: CadastroAdministrador,
        title: 'Cadastro Administrador'
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
