import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {
usuario :Usuario |null;
  constructor(  private router: Router) { }
numeroDetalle :number|null;  


  ngOnInit(){
this.logeado();
//this.numeroDeta();
  }
  logeado(){
   
      this.usuario = JSON.parse(sessionStorage.getItem('usuario'));

  }

  numeroDeta(){
 var ped =   JSON.parse(sessionStorage.getItem('pedido'));
 this.numeroDetalle = ped.detallesPedidos.length;
 console.log(this.numeroDetalle);
  }
/*
  events: string[] = [];
  opened: boolean;

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
*/

  verCarrito(){
    this.router.navigate(['carrito']);
  }
}
interface Usuario {
  idUsuario: number,
  name: string,
  email: string,
  password: string,
  rol: string
}