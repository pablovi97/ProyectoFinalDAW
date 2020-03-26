import { Component, OnInit } from '@angular/core';
import { Auth } from '../../core/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _authService: Auth) { }


  ngOnInit(): void {
  }

  loginUserPass(user: string, pass: string): void {
    this._authService.login(user, pass)
      .subscribe(
        data => { console.log(data.user); this.guardarSesion(data.user) },
        error => console.log(error)
      );


  }

  guardarSesion(user: Usuario) {

    sessionStorage.setItem('usuario', JSON.stringify({
       'id': user.idUsuario,
       'name': user.name ,
       'password':user.password ,
        'rol': user.rol }));
  }

}
interface Usuario {
  idUsuario: number,
  name: string,
  email: string,
  password: string,
  rol: string
}