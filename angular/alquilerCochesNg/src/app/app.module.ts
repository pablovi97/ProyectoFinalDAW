import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CochesListaComponent } from './components/coches-lista/coches-lista.component';
import { CochesDetallesComponent } from './components/coches-detalles/coches-detalles.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule , ReactiveFormsModule  } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatTreeModule} from '@angular/material/tree';
import {MatSelectModule} from '@angular/material/select';
import {MatListModule} from '@angular/material/list';
import {MatSliderModule} from '@angular/material/slider';
import {MatStepperModule} from '@angular/material/stepper';
import { LogoutComponent } from './components/logout/logout.component';
import { CarritoComponent } from './components/carrito/carrito.component';


@NgModule({
  declarations: [
    AppComponent,
    CochesListaComponent,
    CochesDetallesComponent,
    MainNavComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    CarritoComponent,


  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatCardModule,
    MatDatepickerModule,
    FormsModule,
    MatStepperModule,
    MatSliderModule,
    MatListModule,
    MatSelectModule,
    MatTreeModule,
    ReactiveFormsModule,


 
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
