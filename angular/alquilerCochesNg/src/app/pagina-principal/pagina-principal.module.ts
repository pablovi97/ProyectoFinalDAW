import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginaPrincipalRoutingModule } from './pagina-principal-routing.module';
import { CocheActualizarComponent } from './coche-actualizar/coche-actualizar.component';
import { FiltroCochesComponent } from './filtro-coches/filtro-coches.component';


@NgModule({
  declarations: [CocheActualizarComponent, FiltroCochesComponent],
  imports: [
    CommonModule,
    PaginaPrincipalRoutingModule
  ]
})
export class PaginaPrincipalModule { }
