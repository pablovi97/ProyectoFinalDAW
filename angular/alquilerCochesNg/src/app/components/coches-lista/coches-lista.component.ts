import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../../shared/service/api.service';
import { Subscription } from 'rxjs';
import { Coche } from '../../shared/models/coche.model';
@Component({
  selector: 'app-coches-lista',
  templateUrl: './coches-lista.component.html',
  styleUrls: ['./coches-lista.component.scss']
})
export class CochesListaComponent implements OnInit {
  coches: Coche[];
  subscription: Subscription;
  constructor(private _apiService: ApiService) { }

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

  }
}
