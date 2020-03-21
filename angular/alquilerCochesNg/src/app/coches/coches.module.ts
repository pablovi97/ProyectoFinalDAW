import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CochesComponent } from './coches.component';
import { CochesListaComponent } from './coches-lista/coches-lista.component';



@NgModule({
  declarations: [CochesComponent, CochesListaComponent],
  imports: [
    CommonModule
  ]
})
export class CochesModule { }
