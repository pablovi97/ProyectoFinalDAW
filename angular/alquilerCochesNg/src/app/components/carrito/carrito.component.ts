import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/service/api.service';
import { Pedido } from 'src/app/shared/models/pedido.model';
import { Detallepedido } from 'src/app/shared/models/detallepedido.model';
import { Coche } from 'src/app/shared/models/coche.model';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {
  pedido: Pedido | null;
  usuario: Usuario | null;
  constructor(private _apiService: ApiService, private _router: Router) { }

  ngOnInit(): void {
    this.recogerPedido();
  }
  recogerPedido() {
    if (sessionStorage.getItem('pedido')) {
      this.pedido = JSON.parse(sessionStorage.getItem('pedido'));
      console.log(this.pedido);
    }
  }


  eliminarDetalle(det: Detallepedido) {
    //Quitamos el detallePedidos que selecionamos del array de pedidos guardado en sesion
    console.log(det);
    let index = this.pedido.detallesPedidos.indexOf(det);
    this.pedido.detallesPedidos.splice(index, 1);
    //si el array de detallepedidos esta vacio quitamos el pedido de la sesion
    if (this.pedido.detallesPedidos.length == 0) {
      sessionStorage.removeItem('pedido')
    } else {
      let pedidoJSON = JSON.stringify(this.pedido);
      sessionStorage.setItem('pedido', pedidoJSON);
    }
    location.reload();


  }
  subirPedido() {
    if (sessionStorage.getItem('usuario')) {

      this.usuario = JSON.parse(sessionStorage.getItem('usuario'));
      this._apiService.subirPedido(this.usuario.id).subscribe(data => {
        this.pedido = data.data;
        this.subirDetallesPedido();
        //Cuando ya hayamos subido nuestro pedido borramos el pedido de la sesión
        sessionStorage.removeItem('pedido')
        this._router.navigate(['lista']);
      },
        error => console.log(error));

    } else {
      this._router.navigate(['login']);
    }
  }

  subirDetallesPedido() {
    //aqui usamos el pedido de la sesión porque contiene el array de detalle
    console.log(this.pedido);
    var ped = JSON.parse(sessionStorage.getItem('pedido'));
    var detalles = ped.detallesPedidos;
    for (let det of detalles) {
      //El pedido que usamos tiene un id porque es el resultado de subirlo a la base de datos
      this._apiService.subirDetalle(this.pedido.idPedido,
        det.fkCoche, det.cantidad, det.precioTotal
        , det.fechaIniRent, det.fechaFinRent)
        .subscribe(error => console.log(error));
      this.actualizarStock(det);
    }


  }
  /*
  modificarfechas(detalle :Detallepedido){
    let index = this.pedido.detallesPedidos.indexOf(detalle);
   if (new Date((<HTMLInputElement>document.getElementById('desde')).value) > new Date((<HTMLInputElement>document.getElementById('hasta')).value)) {
    (<HTMLInputElement>document.getElementById('error')).innerText = "Has introducido mal la fecha";
    (<HTMLInputElement>document.getElementById('exito')).innerText = "";
    this._router.navigate(['carrito']);
  }else{
    this.pedido.detallesPedidos[index].fechaIniRent =(<HTMLInputElement>document.getElementById('desde')).value; 
    this.pedido.detallesPedidos[index].fechaFinRent =(<HTMLInputElement>document.getElementById('hasta')).value; 
    sessionStorage.removeItem('pedido')
    let pedidoJSON = JSON.stringify(this.pedido);
    sessionStorage.setItem('pedido', pedidoJSON);
    var fecha1 = new Date(   this.pedido.detallesPedidos[index].fechaIniRent).getTime();
    var fecha2 = new Date(   this.pedido.detallesPedidos[index].fechaIniRent).getTime();
    var diff = fecha1 - fecha2;
    this.pedido.detallesPedidos[index].precioTotal =Math.abs( (this.pedido.detallesPedidos[index].cantidad * this.pedido.detallesPedidos[index].cocheped.precio) * (diff / (1000 * 60 * 60 * 24)));

    (<HTMLInputElement>document.getElementById('exito')).innerText = "fecha actualizada!";
    (<HTMLInputElement>document.getElementById('error')).innerText = "";
  }
  }*/
  //ACTUALIZAR STOCK
  actualizarStock(det: Detallepedido) {

    det.cocheped.stockModelo = det.cocheped.stockModelo - det.cantidad;
    this._apiService.actualizarCoche(det.cocheped).subscribe();

  }
}


interface Usuario {
  //En la sesion se guarda como "id" no como idUsuario
  id: number,
  name: string,
  email: string,
  password: string,
  rol: string
}