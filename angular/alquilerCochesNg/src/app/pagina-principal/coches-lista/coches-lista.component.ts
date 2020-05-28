
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

//Creamos un array para mostrarlo en el matselect y que se vea bien
  carroceria: Carr[] = [
    { value: 'coupe', viewValue: 'Coupe' },
    { value: 'berlina', viewValue: 'Berlina' },
    { value: 'cabrio', viewValue: 'Cabrio' },
    { value: 'familiar', viewValue: 'familiar' },
    { value: 'monovolumen', viewValue: 'monovolumen' },
    { value: '4x4suv', viewValue: '4x4 SUV' },
    { value: 'pick up', viewValue: 'Pick Up' },
  ];
  marcas: Carr[] = [
    { value: 'Abarth', viewValue: 'Abarth' },
    { value: 'Honda', viewValue: 'honda' },
    { value: 'Toyota', viewValue: 'Toyota' },
    { value: 'Nissan', viewValue: 'Nissan' },
    { value: 'Mazda', viewValue: 'Mazda' },
    { value: 'Audi', viewValue: 'Audi' },
    { value: 'Ford', viewValue: 'Ford' },
    { value: 'Subaru', viewValue: 'Subaru' },
    { value: 'BMW', viewValue: 'BMW' },
    { value: 'Seat', viewValue: 'Seat' },
    { value: 'Suzuki', viewValue: 'Suzuki' },
    { value: 'Lamborghini', viewValue: 'Lamborghini' },
    { value: 'Citroen ', viewValue: 'Citroen ' },
    { value: 'Alfa ', viewValue: 'Alfa ' },
    { value: 'Kia ', viewValue: 'Kia ' },
    { value: 'Mitsubishi ', viewValue: 'Mitsubishi ' },
    { value: 'Kia ', viewValue: 'Kia ' },
    { value: 'Renault ', viewValue: 'Renault ' },
    { value: 'Volkswagen ', viewValue: 'Volkswagen ' },
    { value: 'Mercedes ', viewValue: 'Mercedes ' },

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
  //Obtienes todos los coches , si la busqueda no es null quiere decir que has escrito algo en 'Search'
  //y se hará una consulta con lo que se ha escrito
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

  //Verifica si hay algun usuario logeado y nos quedamos con su rol
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

  //Creamos un nuevo coche
  onCreate() {
    try {
      var tipoCarroceria = this.newForm.get('carroceria').value;
      var marca = this.newForm.get('marca').value;
      var stockModelo: number = +this.newForm.get('stock').value;
      var km: number = +this.newForm.get('km').value;
      var motor = this.newForm.get('motor').value;
      var anio: number = +this.newForm.get('anio').value;
      var precio: number = +this.newForm.get('precio').value;
      var cv: number = +this.newForm.get('CV').value;
      var plazas: number = +this.newForm.get('plazas').value;
      var modelo = this.newForm.get('modelo').value;;
      var imagen = (<HTMLInputElement>document.getElementById('imagen')).value;


      this._apiService.introducirCoche(tipoCarroceria, marca, stockModelo, km, motor, anio
        , precio, cv, plazas, modelo, imagen).subscribe();

    } catch (error) {
      console.log(error)
    }



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
