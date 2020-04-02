import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../../shared/service/api.service';
import { Subscription } from 'rxjs';
import { Coche } from '../../shared/models/coche.model';
import { LoginComponent } from '../login/login.component';
@Component({
  selector: 'app-coches-lista',
  templateUrl: './coches-lista.component.html',
  styleUrls: ['./coches-lista.component.scss']
})
export class CochesListaComponent implements OnInit {
  coches: Coche[];
  subscription: Subscription;
  constructor(private _apiService: ApiService) { }
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

}
