import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/service/api.service';
import { Pedido } from 'src/app/shared/models/pedido.model';
import { Detallepedido } from 'src/app/shared/models/detallepedido.model';
import { Coche } from 'src/app/shared/models/coche.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-user-zone',
  templateUrl: './user-zone.component.html',
  styleUrls: ['./user-zone.component.scss']
})
export class UserZoneComponent implements OnInit {
  //ZONA DEL USUAARIO
  //para visualizar sus pedidos
  usuario: Usuario | null;
  nombreuser: string;
  marca: string;
  pedidos: Pedido[];
  coche: any | null;
  detallePedidos: Detallepedido[] | null = null;
  constructor(private _apiService: ApiService) { }

  ngOnInit(): void {
    this.getlogeado();
    this.getPedidos();
  }

  //Recogemos los pedidos del usuario
  getPedidos() {
    this._apiService.getPedidosbyUser(this.usuario.id).subscribe(

      data => this.pedidos = data, error => console.log(error)
    )
  }

  //Verifica si hay algun usuario logeado y nos quedamos con su nombre
  getlogeado() {
    if (sessionStorage.getItem('usuario')) {
      this.usuario = JSON.parse(sessionStorage.getItem('usuario'));
      this.nombreuser = this.usuario.name;
    }
  }

  //Cuando clickamos un pedido y recogemos su array de detalles de la api
  verDetalle(pedido: Pedido) {
    this._apiService.getDetallePedidoByPedido(pedido.idPedido).subscribe(
      data => this.detallePedidos = data, error => console.log(error)
    );
    console.log(this.detallePedidos);
  }

//Cuando clickamos un detalle vemos el vehiculo con sus datos recogidos de la api
  verCoche(detallepedido: Detallepedido) {
    console.log('verCoche')
    const scope = this ;
    console.log(detallepedido.fkCoche);
    this._apiService.getCocheId(detallepedido.fkCoche).subscribe(
      {
        next(cochesObserv) { localStorage.setItem( 'cocheselected' ,JSON.stringify( cochesObserv)) }
      }
    )
    scope.coche = JSON.parse(localStorage.getItem('cocheselected'));
    console.log(scope.coche);
   this.marca = scope.coche.marca;
  }
}

interface Usuario {
  id: number,
  name: string,
  email: string,
  password: string,
  rol: string
}