import { Component, OnInit } from '@angular/core';
import { Auth } from '../../core/auth.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _authService: Auth, private _router: Router, private _location: Location) { }
  myIndex: string = '/lista';

  ngOnInit(): void {
  }

  loginUserPass(user: string, pass: string): void {
    this._authService.login(user, pass)
      .subscribe(
        data => {
          console.log(data.access_token); this.guardarSesion(data.user)
          this.guardatToken(data.access_token);
          this._location.back();
        },
        error => console.log(error)
      );


  }

  guardatToken(token: string) {
    localStorage.setItem('token', token);

  }

  guardarSesion(user: Usuario) {

    sessionStorage.setItem('usuario', JSON.stringify({
      'id': user.idUsuario,
      'name': user.name,
      'password': user.password,
      'rol': user.rol
    }));
  }
  recogerSesion() {
    return sessionStorage.getItem('usuario');
  }
}
interface Usuario {
  idUsuario: number,
  name: string,
  email: string,
  password: string,
  rol: string
}