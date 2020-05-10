import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginaSecundariaRoutingModule } from './pagina-secundaria-routing.module';
import { CrearComentariosComponent } from './crear-comentarios/crear-comentarios.component';


@NgModule({
  declarations: [CrearComentariosComponent],
  imports: [
    CommonModule,
    PaginaSecundariaRoutingModule
  ]
})
export class PaginaSecundariaModule { }
