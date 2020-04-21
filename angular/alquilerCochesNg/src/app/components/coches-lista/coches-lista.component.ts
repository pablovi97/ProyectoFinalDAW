
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

  // @Output() newCoche = new EventEmitter();
  //newCocheForm: FormGroup = this.newFormGroup();

  ngOnInit() {
    this.getCoches();
  }

  /*
  INTRODUCIMOS UN NUEVO VEHICULO
  */
  /*
  
    newFormGroup(): FormGroup {
      return new FormGroup({
        tipoCarroceria: new FormControl('', Validators.required),
        marca: new FormControl('', Validators.required),
        stockModelo: new FormControl('', Validators.required),
        km: new FormControl('', Validators.required),
        motor: new FormControl('', Validators.required),
        anio: new FormControl('', Validators.required),
        precio: new FormControl('', Validators.required),
        CV: new FormControl('', Validators.required),
        plazas: new FormControl('', Validators.required),
      });
    }
    onSubmit(): void {
      // Aquí puedo comprobar que todo es correcto
      this.newCoche.emit(this.newCocheForm.value);
      this.newCocheForm = this.newFormGroup();
    }
  */

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
  /* getlogeado() {
     if (sessionStorage.getItem('usuario') != null) {
       let usuario = sessionStorage.getItem('usuario');
       console.log(usuario);
 this.logged = usuario;
     }
     return null;
   }
  */
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

}
interface Usuario {
  idUsuario: number,
  name: string,
  email: string,
  password: string,
  rol: string
}