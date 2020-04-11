import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../../shared/service/api.service';
import { Subscription } from 'rxjs';
import { Coche } from '../../shared/models/coche.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-coches-lista',
  templateUrl: './coches-lista.component.html',
  styleUrls: ['./coches-lista.component.scss']
})
export class CochesListaComponent implements OnInit {
  coches: Coche[];
  subscription: Subscription;
  selectedCoche: Coche | null = null;
  constructor(private _apiService: ApiService, private _router: Router) { }
  logged: string;
  ngOnInit() {
    this.getCoches();
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
    if (sessionStorage.getItem('usuario') != null) {
      let usuario = sessionStorage.getItem('usuario');
      console.log(usuario);
this.logged = usuario;
    }
    return null;
  }
  onSelect(coch: Coche){
    this.selectedCoche = coch;
    let cocheJSON = JSON.stringify(coch);
    localStorage.setItem('coche', cocheJSON);
    this._router.navigate(['detalles']);
  
  }

}
