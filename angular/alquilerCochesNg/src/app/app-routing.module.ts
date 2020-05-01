import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { CochesListaComponent } from './components/coches-lista/coches-lista.component';
//import { CochesDetallesComponent } from './components/coches-detalles/coches-detalles.component';
import { LoginComponent } from '../app/components/login/login.component';
import { LogoutComponent } from '../app/components/logout/logout.component';
import { RegisterComponent } from '../app/components/register/register.component';
import { CarritoComponent } from '../app/components/carrito/carrito.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { PaginaSecundariaComponent } from './pagina-secundaria/pagina-secundaria.component';
const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'lista', component: PaginaPrincipalComponent },
  { path: 'detalles', component: PaginaSecundariaComponent },
  { path: '', redirectTo: '/lista', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
