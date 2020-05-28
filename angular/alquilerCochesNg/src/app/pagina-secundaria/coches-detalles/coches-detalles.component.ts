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
  
  alquilar(coche: Coche): void {

    var dc = new Detallepedido();
    dc.fechaIniRent = (<HTMLInputElement>document.getElementById('fechaMin')).value;
    dc.fechaFinRent = (<HTMLInputElement>document.getElementById('fechaMax')).value;
    //Verificamos si la fecha introducida tiene sentido
    //en caso de que la fecha inicial sea mayor pues le devolvemos a la misma pagina con un mensaje de error
    if (new Date(dc.fechaIniRent) > new Date(dc.fechaFinRent)) {
      (<HTMLInputElement>document.getElementById('errorfecha')).innerText = "Has introducido mal la fecha";
      this._router.navigate(['detalles']);
    } else if (new Date(dc.fechaIniRent) === new Date(dc.fechaFinRent)) {
      (<HTMLInputElement>document.getElementById('errorfecha')).innerText = "introduce al menos un dia de diferencia";
      this._router.navigate(['detalles']);
    } else {

      dc.fkCoche = coche.idCoche;
      dc.cocheped = coche;
      dc.cantidad = + (<HTMLInputElement>document.getElementById('cantidad')).value;
      var fecha1 = new Date(dc.fechaIniRent).getTime();
      var fecha2 = new Date(dc.fechaFinRent).getTime();
      var diff = fecha1 - fecha2;
      dc.precioTotal = Math.abs((dc.cantidad * coche.precio) * (diff / (1000 * 60 * 60 * 24)));

      dc.nombreVehiculo = coche.marca;
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
              var fecha1 = new Date(dc.fechaIniRent).getTime();
              var fecha2 = new Date(dc.fechaFinRent).getTime();
              var diff = fecha1 - fecha2;
              //el precio total la cantidad de dias por el precioy numero de coches
              dc.precioTotal = Math.abs((dc.cantidad * coche.precio) * (diff / (1000 * 60 * 60 * 24)));
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
        //Metemos el detalle pedido dentro del array detallePedidos en el objeto Pedidos
        pedido.detallesPedidos.push(dc);
      }
      //Subimos el pedido al session storage
      let pedidoJSON = JSON.stringify(pedido);
      sessionStorage.setItem('pedido', pedidoJSON);
      //Esto lo hacemos para saber de que pagina venimos
      localStorage.setItem('detalles', 'detalles');
      this._router.navigate(['carrito']);
    }

  }

  reservar(coche: Coche): void {

  }
}
