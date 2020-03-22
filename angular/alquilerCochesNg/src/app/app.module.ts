import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CochesListaComponent } from './components/coches-lista/coches-lista.component';
import { CochesDetallesComponent } from './components/coches-detalles/coches-detalles.component';
@NgModule({
  declarations: [
    AppComponent,
    CochesListaComponent,
    CochesDetallesComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
