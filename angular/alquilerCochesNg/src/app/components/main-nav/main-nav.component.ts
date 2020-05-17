import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {
  usuario: Usuario | null;
  constructor(private router: Router) { }
  numeroDetalle: number | null;


  ngOnInit() {
    this.logeado();
    //this.numeroDeta();
  }
  logeado() {

    this.usuario = JSON.parse(sessionStorage.getItem('usuario'));

  }

  numeroDeta() {
    var ped = JSON.parse(sessionStorage.getItem('pedido'));
    this.numeroDetalle = ped.detallesPedidos.length;
    console.log(this.numeroDetalle);
  }


  verCarrito() {
    this.router.navigate(['carrito']);
  }
  busqueda() {
    console.log('le has dado a busqueda');
    var busqueda = (<HTMLInputElement>document.getElementById('busqueda')).value;
    localStorage.setItem('valorBusqueda', busqueda);
    console.log(window.location.pathname)
    if (window.location.pathname == '/lista') {
      location.reload();
    }else{
      this.router.navigate(['lista']);
    }

  }
}
interface Usuario {
  idUsuario: number,
  name: string,
  email: string,
  password: string,
  rol: string
}