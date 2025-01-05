import { Routes } from '@angular/router';
import { UserFormComponent } from './components/user-form/user-form.component';
import { HomeComponent } from './pages/home/home.component';
import { PainelComponent } from './pages/painel/painel.component';
import { CursosComponent } from './pages/cursos/cursos.component';
//import { NavComponent } from './components/nav/nav.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'painel', component: PainelComponent},
    {path: 'cursos', component: CursosComponent},
    {path: 'user-create', component: UserFormComponent},
];
