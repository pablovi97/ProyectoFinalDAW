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

  register(name: string, email: string, password: string) {
    const url_api = this._cocheApiUrl+"register";
    return this.htttp
      .post(
        url_api,
        {
          name: name,
          email: email,
          password: password
        },
        { headers: this.headers }
      )
      .pipe(map(data => data));
  }
}
