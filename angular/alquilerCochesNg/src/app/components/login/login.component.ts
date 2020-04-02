import { Component, OnInit } from '@angular/core';
import { Auth } from '../../core/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _authService: Auth, private _router: Router) { }
  myIndex: string = '/lista';

  ngOnInit(): void {
  }

  loginUserPass(user: string, pass: string): void {
    this._authService.login(user, pass)
      .subscribe(
        data => {
          console.log(data.user); this.guardarSesion(data.user)
          this._router.navigate([this.myIndex]);
        },
        error => console.log(error)
      );


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