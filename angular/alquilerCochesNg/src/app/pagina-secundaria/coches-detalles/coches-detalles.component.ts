import { Component, OnInit } from '@angular/core';
import { Coche } from '../../shared/models/coche.model';
import { Detallepedido } from 'src/app/shared/models/detallepedido.model';
import { Pedido } from 'src/app/shared/models/pedido.model';
import { Router } from '@angular/router';
import { Comentario } from 'src/app/shared/models/comentario.model';
@Component({
  selector: 'app-coches-detalles',
  templateUrl: './coches-detalles.component.html',
  styleUrls: ['./coches-detalles.component.scss']
})
export class CochesDetallesComponent implements OnInit {
  coche: Coche | null;
  comentario: Comentario | null;

  constructor(private _router: Router) { }

  ngOnInit(): void {
    this.getCoche();
  }

  getCoche(): void {
    this.coche = JSON.parse(localStorage.getItem('coche'));
  }
  //Cogemos los comentarios de la base de datos
  getComentario():void{

  }

  alquilar(coche: Coche): void {

    var dc = new Detallepedido();
    dc.fkCoche = coche.idCoche;
    dc.cantidad = + (<HTMLInputElement>document.getElementById('cantidad')).value;
    dc.precioTotal = dc.cantidad * coche.precio;
    dc.fechaIniRent = (<HTMLInputElement>document.getElementById('fechaMin')).value;
    dc.fechaFinRent = (<HTMLInputElement>document.getElementById('fechaMax')).value;
    var pedido = JSON.parse(sessionStorage.getItem('pedido'));
    var bool: boolean = false;
    //Verificamos si hay alguna sesion de pedido creado , en caso de si usamos esa por lo contrario creamos una nueva
    if (sessionStorage.getItem('pedido') != null) {

      var detalle = pedido.detallesPedidos;
      for (let obj of detalle) {
        //Si es el mismo coche (que se comparan con su id) se suma la cantidad
        if (obj.fkCoche == coche.idCoche) {
          //Si tienen la misma fecha se suman las cantidades si no se añade como un DetallePedido Nuevo
          if (obj.fechaIniRent == dc.fechaIniRent && obj.fechaFinRent == dc.fechaFinRent) {
            obj.cantidad += dc.cantidad;
            bool = true;
          }

        }
      }
    } else {
      pedido = new Pedido();
      pedido.detallesPedidos = new Array();
    }
    if (bool == false) {
      console.log(pedido);

      pedido.detallesPedidos.push(dc);
    }
    let pedidoJSON = JSON.stringify(pedido);
    sessionStorage.setItem('pedido', pedidoJSON);
    this._router.navigate(['lista']);

  }

  reservar(coche: Coche): void {

  }
}
