import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginaPrincipalRoutingModule } from './pagina-principal-routing.module';
import { CocheActualizarComponent } from './coche-actualizar/coche-actualizar.component';


@NgModule({
  declarations: [CocheActualizarComponent],
  imports: [
    CommonModule,
    PaginaPrincipalRoutingModule
  ]
})
export class PaginaPrincipalModule { }
