
import { ApiService } from '../../shared/service/api.service';
import { Subscription } from 'rxjs';
import { Coche } from '../../shared/models/coche.model';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-coches-lista',
  templateUrl: './coches-lista.component.html',
  styleUrls: ['./coches-lista.component.scss']
})
//FALLO SI NO TE LOGEAS NO SALEN LOS COCHES
export class CochesListaComponent implements OnInit {
  coches: Coche[];
  subscription: Subscription;
  selectedCoche: Coche | null = null;
  constructor(private _apiService: ApiService, private _router: Router) { }
  logged: string;
  usuario: Usuario | null;
  rol: string | null;

  ngOnInit() {
    this.getCoches();
  }


  onDelete(coche: Coche) {
    const scope = this;
    scope._apiService.deleteCoche(coche.idCoche).subscribe();
  }

  getCoches(): void {
    console.log('Entra en el metodo!')
    const scope = this;
    scope.subscription = scope._apiService.getCochesObserv().subscribe(

      {
        next(cochesObserv) { scope.coches = cochesObserv; }
      }
    )
    this.getlogeado();
  }

  getlogeado() {
    if (sessionStorage.getItem('usuario')) {
      this.usuario = JSON.parse(sessionStorage.getItem('usuario'));
      this.rol = this.usuario.rol;
    }

  }
  onSelect(coch: Coche) {
    this.selectedCoche = coch;
    let cocheJSON = JSON.stringify(coch);
    localStorage.setItem('coche', cocheJSON);
    this._router.navigate(['detalles']);

  }

  onCreate() {
    var tipoCarroceria = (<HTMLInputElement>document.getElementById('carroceria')).value
    var marca = (<HTMLInputElement>document.getElementById('marca')).value
    var stockModelo = +(<HTMLInputElement>document.getElementById('stock')).value
    var km = +(<HTMLInputElement>document.getElementById('km')).value
    var motor = (<HTMLInputElement>document.getElementById('motor')).value
    var anio = +(<HTMLInputElement>document.getElementById('anio')).value
    var precio = +(<HTMLInputElement>document.getElementById('precio')).value
    var cv = +(<HTMLInputElement>document.getElementById('CV')).value
    var plazas = +(<HTMLInputElement>document.getElementById('plazas')).value
   
      this._apiService.introducirCoche( tipoCarroceria, marca, stockModelo, km, motor, anio
        , precio, cv, plazas).subscribe();
  }

}
interface Usuario {
  idUsuario: number,
  name: string,
  email: string,
  password: string,
  rol: string
}