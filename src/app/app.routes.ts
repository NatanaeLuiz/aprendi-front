import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PainelComponent } from './components/painel/painel.component';
import { CursosComponent } from './components/cursos/cursos.component';
//import { NavComponent } from './components/nav/nav.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'painel', component: PainelComponent},
    {path: 'cursos', component: CursosComponent},
];
