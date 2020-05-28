import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/components/login/login.component';
import { LogoutComponent } from '../app/components/logout/logout.component';
import { RegisterComponent } from '../app/components/register/register.component';
import { CarritoComponent } from '../app/components/carrito/carrito.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { PaginaSecundariaComponent } from './pagina-secundaria/pagina-secundaria.component';
import { AboutComponent } from './components/about/about.component';
import { PaginaTerceraComponent } from './pagina-tercera/pagina-tercera.component';


const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'lista', component: PaginaPrincipalComponent },
  { path: 'detalles', component: PaginaSecundariaComponent },
  { path: 'user', component: PaginaTerceraComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: '/lista', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
