import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {

    //Borramos todas las sesiones guardadas del usuario y su token y volvemos a /lista
    sessionStorage.removeItem('usuario');

    if (sessionStorage.getItem('pedido')) {
      sessionStorage.removeItem('pedido');
    }
    if (localStorage.getItem('coche')) {
      localStorage.removeItem('coche')
    }
    if (localStorage.getItem('token')) {
      localStorage.removeItem('token')
    }
    localStorage.setItem('logout', 'logout');
    this._router.navigate(["/lista"]);//Pagina principal
  }

}
