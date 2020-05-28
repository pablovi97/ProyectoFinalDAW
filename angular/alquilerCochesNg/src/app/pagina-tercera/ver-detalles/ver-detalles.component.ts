import { Component, OnInit, Input } from '@angular/core';
import { Pedido } from 'src/app/shared/models/pedido.model';

@Component({
  selector: 'app-ver-detalles',
  templateUrl: './ver-detalles.component.html',
  styleUrls: ['./ver-detalles.component.scss']
})
export class VerDetallesComponent implements OnInit {
  @Input() pedido: Pedido;
  constructor() { }
//NO SE USA!!
  ngOnInit(): void {
    this.verDetalle();
  }


  verDetalle(){
    console.log(this.pedido)
  }
}
