import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/service/api.service';
import { Pedido } from 'src/app/shared/models/pedido.model';
import { Detallepedido } from 'src/app/shared/models/detallepedido.model';

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
    }

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