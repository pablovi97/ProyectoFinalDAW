import { Component, OnInit } from '@angular/core';
import { Coche } from '../../shared/models/coche.model';
import { Detallepedido } from 'src/app/shared/models/detallepedido.model';
import { Pedido } from 'src/app/shared/models/pedido.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-coches-detalles',
  templateUrl: './coches-detalles.component.html',
  styleUrls: ['./coches-detalles.component.scss']
})
export class CochesDetallesComponent implements OnInit {
  coche: Coche | null;


  constructor(private _router: Router) { }

  ngOnInit(): void {
    this.getCoche();
  }

  getCoche(): void {
    this.coche = JSON.parse(localStorage.getItem('coche'));
  }

  alquilar(coche: Coche): void {

    var dc = new Detallepedido();
    dc.fkCoche = coche.idCoche;
    dc.cantidad = + (<HTMLInputElement>document.getElementById('cantidad')).value;
    dc.precioTotal = dc.cantidad * coche.precio;
    //LAS FECHAS NO SE PILLAN BIEN
    dc.fechaIniRent = (<HTMLInputElement>document.getElementById('fechaMin')).value;
    dc.fechaFinRent = (<HTMLInputElement>document.getElementById('fechaMax')).value;
    var pedido = JSON.parse(sessionStorage.getItem('pedido'));
    var bool: boolean = false;
    if (sessionStorage.getItem('pedido') != null) {  
      var detalle = pedido.detallesPedidos;
      for (let obj of detalle) {
        if (obj.fkCoche == coche.idCoche) {
          if(obj.fechaIniRent == dc.fechaIniRent && obj.fechaFinRent == dc.fechaFinRent  ){
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
