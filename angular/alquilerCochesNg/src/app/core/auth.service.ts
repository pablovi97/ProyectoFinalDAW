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
    constructor(private htttp: HttpClient) {}
    headers: HttpHeaders = new HttpHeaders({
      "Content-Type": "application/json"
    });

    login(name: string, pass: string): Observable<any> {
        const url_api = this._cocheApiUrl+"login";
        return this.htttp
          .post(
            url_api,
            { name, pass },
            { headers: this.headers }
          )
          .pipe(map(data => data));
      }

  register(nom: string, em: string, pass: string) {
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
//Nuevo

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