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
    sessionStorage.removeItem('usuario');
  
    if( sessionStorage.getItem('pedido')){
      sessionStorage.removeItem('pedido');
    }
    if(localStorage.getItem('coche')){
      localStorage.removeItem('coche')
    }
    if(localStorage.getItem('token')){
      localStorage.removeItem('token')
    }
 
    this._router.navigate(["/lista"]);
  }

}
