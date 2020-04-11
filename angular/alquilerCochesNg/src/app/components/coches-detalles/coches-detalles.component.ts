import { Component, OnInit } from '@angular/core';
import { Coche } from '../../shared/models/coche.model';
@Component({
  selector: 'app-coches-detalles',
  templateUrl: './coches-detalles.component.html',
  styleUrls: ['./coches-detalles.component.scss']
})
export class CochesDetallesComponent implements OnInit {
  coche: Coche |null;

  constructor() {  }

  ngOnInit(): void {
    this.getCoche();
  }

  getCoche() {
    this.coche = JSON.parse(localStorage.getItem('coche'));
  }
}
