import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginaTerceraRoutingModule } from './pagina-tercera-routing.module';
import { VerDetallesComponent } from './ver-detalles/ver-detalles.component';


@NgModule({
  declarations: [VerDetallesComponent],
  imports: [
    CommonModule,
    PaginaTerceraRoutingModule
  ]
})
export class PaginaTerceraModule { }
