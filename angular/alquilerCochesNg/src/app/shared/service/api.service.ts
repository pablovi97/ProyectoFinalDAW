import { Injectable } from '@angular/core';
import { Coche } from '../models/coche.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Comentario } from '../models/comentario.model';
import { element } from 'protractor';
@Injectable({
  providedIn: 'root'
})


export class ApiService {

//CREAMOS NUESTRO HEADER QUE SE ENVIARAN EN TODAS NUESTRAS PETICIONES
 headers = new HttpHeaders({
   'Authorization' : 'bearer ' +localStorage.getItem('token'),
   'Content-Type': 'application/json'
 });

  private _cocheApiUrl = '/api/';

  constructor(private _http: HttpClient) { }


  getCochesObserv(): Observable<Coche[]> {
    const CAR: Coche[] = [];
    const scope = this;
    const getUrl = this._cocheApiUrl + `coches`;
    scope._http.get(getUrl).subscribe((result: any) => {
      result['data'].forEach((element: any) => {
        CAR.push(new Coche(
          element.idCoche,
          element.tipoCarroceria,
          element.marca,
          element.stockModelo,
          element.km,
          element.motor,
          element.anio, element.precio,
          element.CV,
          element.plazas));
      });
    });
    //Devolvemos todos los coches de la base de datos
    return of(CAR);
  }

  getComentario(): Observable<Comentario[]> {
    const COMENT: Comentario[] = [];
    const scope = this;
    const getUrl = this._cocheApiUrl + `comentarios`;
    scope._http.get(getUrl).subscribe((result: any) => {
      result['data'].forEach((element: any) => {
        COMENT.push(new Comentario(
          element.idComentario,
          element.fkCocheCm,
          element.fkUsuarioCm,
          element.contenido,
          element.puntuacion
        ));
      });


    });
    return of(COMENT);
  }


  actualizarCoche(coche: Coche): Observable<void> {
    const url_api = this._cocheApiUrl + "coches/" + coche.idCoche;
    console.log("update");
    console.log(coche);
   /* let marca = coche.marca;
    let tipoCarroceria = coche.tipoCarroceria;
    let km = coche.km;
    let motor = coche.motor;
    let stockModelo = coche.stockModelo;
    let anio = coche.anio;
    let CV = coche.CV;
    let plazas = coche.plazas;
    let precio = coche.plazas;*/
    
    return this._http
      .put<void>(
        url_api,
         /*marca, tipoCarroceria, km, motor, stockModelo, anio, CV, plazas, precio*/ coche ,
       { headers: this.headers }
      ).pipe(map(data => data));
  }



  deleteCoche(id: number): Observable<any> {
    //Borramos el coche con su id
    console.log("entra en el delete")
    const scope = this;
    return scope._http.delete(this._cocheApiUrl + 'coches/' + id , { headers: this.headers });
  }

  introducirCoche(tipoCarroceria: string, marca: string, stockModelo: number
    , km: number, motor: string, anio: number
    , precio: number, CV: number, plazas: number): Observable<any> {
    const url_api = this._cocheApiUrl + "coches/";
    return this._http
      .post(
        url_api,
        { marca, tipoCarroceria, km, motor, stockModelo, anio, CV, plazas, precio },
        { headers: this.headers }
      ).pipe(map(data => data));
  }

  subirPedido(fkUsuario: number): Observable<any> {
    var fechaPed = new Date().toLocaleDateString('es-ES');
    const url_api = this._cocheApiUrl + "pedidos/";
    return this._http.post(
      url_api,
      { fkUsuario, fechaPed },
      { headers: this.headers }
    ).pipe(map(data => data));

  }

  subirDetalle(fkPedido: number, fkCoche: number, cantidad: number, precioTotal: number
    , fechaIniRent: string, fechaFinRent: string): Observable<any> {
    const url_api = this._cocheApiUrl + "detallepedidos/";
    return this._http.post(
      url_api,
      { fkPedido, fkCoche, cantidad, precioTotal, fechaIniRent, fechaFinRent },
      { headers: this.headers }
    ).pipe(map(data => data));
  }



}
