
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

export class CochesListaComponent implements OnInit {
  coches: Coche[];
  subscription: Subscription;
  selectedCoche: Coche | null = null;
  editCoche: Coche | null = null;
  busqueda: string | null;
  constructor(private _apiService: ApiService, private _router: Router) {
  }
  logged: string;
  usuario: Usuario | null;
  rol: string | null;






  carroceria: Carr[] = [
    { value: 'coupe', viewValue: 'Coupe' },
    { value: 'berlina', viewValue: 'Berlina' },
    { value: 'cabrio', viewValue: 'Cabrio' },
    { value: 'familiar', viewValue: 'familiar' },
    { value: 'monovolumen', viewValue: 'monovolumen' },
    { value: '4x4suv', viewValue: '4x4 SUV' },
    { value: 'pick up', viewValue: 'Pick Up' },
  ];

  @Output() newStu = new EventEmitter();
  newForm: FormGroup = this.newFormGroup();

  ngOnInit() {

    this.parametroBusqueda();
    this.getCoches();

    if (localStorage.getItem('logout')) {
      localStorage.removeItem('logout');
      location.reload();
    }
  }
  parametroBusqueda() {
    console.log('entra');
    this.busqueda = localStorage.getItem('valorBusqueda');
    console.log(this.busqueda);
    localStorage.removeItem('valorBusqueda');

  }
  newFormGroup() {
    return new FormGroup({
      carroceria: new FormControl('0', Validators.required),
      marca: new FormControl('', Validators.required),
      stock: new FormControl('', Validators.required),
      km: new FormControl('', Validators.required),
      motor: new FormControl('', Validators.required),
      anio: new FormControl('', Validators.required),
      precio: new FormControl('', Validators.required),
      CV: new FormControl('', Validators.required),
      plazas: new FormControl('', Validators.required),
      modelo: new FormControl('', Validators.required),
    });
  }


  //Funcion para borra un coche de la base de datos
  onDelete(coche: Coche) {
    const scope = this;
    scope._apiService.deleteCoche(coche.idCoche).subscribe();
    location.reload();
  }

  getCoches(): void {
    console.log('Entra en el metodo!')
    const scope = this;

    if (this.busqueda == null) {
      scope.subscription = scope._apiService.getCochesObserv().subscribe(

        {
          next(cochesObserv) { scope.coches = cochesObserv; }
        }
      )
    } else {
      scope.subscription = scope._apiService.getCochesObservByMarca(this.busqueda).subscribe(

        {
          next(cochesObserv) { console.log("entra en busqueda"), scope.coches = cochesObserv; }
        })
    }


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


    var tipoCarroceria = this.newForm.get('carroceria').value;


    var marca = this.newForm.get('marca').value;
    var stockModelo = +this.newForm.get('stock').value;
    var km = +this.newForm.get('km').value;
    var motor = this.newForm.get('motor').value;
    var anio = +this.newForm.get('anio').value;
    var precio = +this.newForm.get('precio').value;
    var cv = +this.newForm.get('CV').value;
    var plazas = +this.newForm.get('plazas').value;
    var modelo = this.newForm.get('modelo').value;;
    var imagen = (<HTMLInputElement>document.getElementById('imagen')).value;


    this._apiService.introducirCoche(tipoCarroceria, marca, stockModelo, km, motor, anio
      , precio, cv, plazas, modelo, imagen).subscribe();

  }

  onEdit(coche: Coche): void {
    this.selectedCoche = coche;
    this.editCoche = coche;
  }



}
interface Usuario {
  idUsuario: number,
  name: string,
  email: string,
  password: string,
  rol: string
}
interface Carr {
  value: string;
  viewValue: string;
}