import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
  })
export class Auth {

    private token: any;
    private user: any;
    private _cocheApiUrl = '/api/';
    //Creamos el header
    constructor(private htttp: HttpClient) {}
    headers: HttpHeaders = new HttpHeaders({
      "Content-Type": "application/json"
    });
//Metodo de login
    login(name: string, pass: string): Observable<any> {
      //Introducimos el nombre y la contraseña y devuelve el usuario con su token
        const url_api = this._cocheApiUrl+"login";
        return this.htttp
          .post(
            url_api,
            { name, pass },
            { headers: this.headers }
          )
          .pipe(map(data => data));
      }
//Metodo para registrar el usuario 
  register(nom: string, em: string, pass: string) {
    //Introducimos el nombre ,email ,contraseña
    const url_api = this._cocheApiUrl+"register";
    return this.htttp
      .post(
        url_api,
        {
         nom,
         em,
        pass
        },
        { headers: this.headers }
      )
      .pipe(map(data => data));
  }

//Metodo para guardar en la sesion el usuario
  guardarSesion(user: Usuario) {

    sessionStorage.setItem('usuario', JSON.stringify({
      'id': user.idUsuario,
      'name': user.name,
      'password': user.password,
      'rol': user.rol
    }));
  }

}
interface Usuario {
  idUsuario: number,
  name: string,
  email: string,
  password: string,
  rol: string
}