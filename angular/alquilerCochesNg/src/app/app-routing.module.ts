import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CochesListaComponent} from './components/coches-lista/coches-lista.component';
import { LoginComponent } from '../app/components/login/login.component';
const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'lista', component: CochesListaComponent },
  // Por defecto lo mandamos a pokemons
  { path: '', redirectTo: '/lista', pathMatch: 'full' },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
