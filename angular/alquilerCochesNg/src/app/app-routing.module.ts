import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CochesListaComponent} from './components/coches-lista/coches-lista.component';
import {CochesDetallesComponent} from './components/coches-detalles/coches-detalles.component';
import { LoginComponent } from '../app/components/login/login.component';
import { LogoutComponent } from '../app/components/logout/logout.component';
import { RegisterComponent } from '../app/components/register/register.component';
const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'lista', component: CochesListaComponent },
  {path: 'detalles' , component:CochesDetallesComponent},
  // Por defecto lo mandamos a pokemons
  { path: '', redirectTo: '/lista', pathMatch: 'full' },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
