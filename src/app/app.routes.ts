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
import { LayoutProfessorComponent } from './pages/professor/layout/layout-professor';
import { MeusCursosProfessorComponent } from './pages/professor/meus-cursos/meus-cursos-professor.component';
import { PainelProfessorComponent } from './pages/professor/painel/painel-professor.component';
import { HomeProfessorComponent } from './pages/professor/home/home-professor.component';
import { EditarAlunoComponent } from './pages/admin/gerenciar/alunos/editar-aluno/editar-aluno.component';
import { EditarProfessor } from './pages/admin/gerenciar/professores/editar-professor/editar-professor.component';
import { EditarAdministrador } from './pages/admin/gerenciar/administradores/editar-administrador/editar-administrador.component';
import { EditarCursoComponent } from './pages/admin/gerenciar/cursos/editar-curso/editar-curso.component';
import { EditarModulo } from './pages/admin/gerenciar/modulos/editar-modulo/editar-modulo.component';
import { EditarAula } from './pages/admin/gerenciar/aulas/editar-aula/editar-aula.component';
import { ListarQuizzComponent } from './pages/admin/gerenciar/quizz/listar-quizz/listar-quizz.component';
import { CadastrarQuizzComponent } from './pages/admin/gerenciar/quizz/cadastrar-quizz/cadastrar-quizz.component';
import { EditarQuizzComponent } from './pages/admin/gerenciar/quizz/editar-quizz/editar-quizz.component';
import { Error404Component } from './components/erro404/error-404.component';
import { PerfilAluno } from './pages/aluno/perfil/tela-perfil/perfil-aluno.component';
import { PerfilProfessor } from './pages/professor/perfil/tela-perfil/perfil-professor.component';
import { PerfilAdministrador } from './pages/admin/gerenciar/perfil/tela-perfil/perfil-administrador.component';
import { ModificarPerfilAdministrador } from './pages/admin/gerenciar/perfil/modificar-perfil/modificar-perfil-administrador.component';
import { ModificarPerfilAluno } from './pages/aluno/perfil/modificar-perfil/modificar-perfil-aluno.component';
import { ModificarPerfilProfessor } from './pages/professor/perfil/modificar-perfil/modificar-perfil-professor.component';

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
        path: 'perfil-aluno',
        component: PerfilAluno,
        title: 'Perfil'
      },
      {
        path: 'modificar-perfil-aluno',
        component: ModificarPerfilAluno,
        title: 'Editar Perfil'
      },
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
    path: 'professor',
    component: LayoutProfessorComponent,
    children:[
      {
        path: 'perfil-professor',
        component: PerfilProfessor,
        title: 'Perfil'
      },
      {
        path: 'modificar-perfil-professor',
        component: ModificarPerfilProfessor,
        title: 'Editar Perfil'
      },
      {
        path: 'meus-cursos-professor',
        component: MeusCursosProfessorComponent,
        title: 'meus-cursos'
      },
      {
        path: 'painel-professor',
        component: PainelProfessorComponent,
        title: 'Painel'
      },
      {
        path: 'home-professor',
        component: HomeProfessorComponent,
        title: 'Home'
      }
    ]
  },
  {
    path: 'admin',
    component: LayoutAdminComponent,
    children:[
      {
        path: 'perfil-administrador',
        component: PerfilAdministrador,
        title: 'Perfil'
      },
      {
        path: 'modificar-perfil-administrador',
        component: ModificarPerfilAdministrador,
        title: 'Editar Perfil'
      },
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
        path: 'editar-curso',
        component: EditarCursoComponent,
        title: 'Editar curso'
      },
      {
        path: 'cadastro-modulo',
        component: CadastroModulo,
        title: 'Cadastro Modulo'
      },
      {
        path: 'editar-modulo',
        component: EditarModulo,
        title: 'Editar Modulo'
      },
      {
        path: 'cadastro-aula',
        component: CadastroAula,
        title: 'Cadastro Aula'
      },
      {
        path: 'editar-aula',
        component: EditarAula,
        title: 'Editar Aula'
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
        path: 'editar-aluno',
        component: EditarAlunoComponent,
        title: 'Editar Aluno'
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
        path: 'editar-professor',
        component: EditarProfessor,
        title: 'Editar Professor'
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
      },
      {
        path: 'editar-administrador',
        component: EditarAdministrador,
        title: 'Editar Administrador'
      },
      {
        path: 'quizz',
        component: ListarQuizzComponent,
        title: 'Listar Quizz'
      },
      {
        path: 'cadastro-quizz',
        component: CadastrarQuizzComponent,
        title: 'Cadastro Quizz'
      },
      {
        path: 'editar-quizz',
        component: EditarQuizzComponent,
        title: 'Editar Quizz'
      }
      ]
  },

  { path: 'cadastro', component: UserFormComponent, data: { acao: 'Cadastrar' } },
    //{ path: 'editar', component: UserFormComponent, data: { acao: 'Editar' } },
  {
    path: '**', // Redirecionamento para página não encontrada
    component: Error404Component
  }
];
