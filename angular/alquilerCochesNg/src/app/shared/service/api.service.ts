import { Injectable } from '@angular/core';
import { Coche } from '../models/coche.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})


export class ApiService {
  private _cocheApiUrl = '/api/';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

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


  deleteCoche(id: number): Observable<any> {
    //Borramos el coche con su id
    console.log("entra en el delete")
    const scope = this;
    return scope._http.delete(this._cocheApiUrl + 'coches/' + id);
  }

  introducirCoche( tipoCarroceria: string, marca: string, stockModelo: number
    , km: number, motor: string, anio: number
    , precio: number, CV: number, plazas: number): Observable<any>{
    const url_api = this._cocheApiUrl+"coches/";
    return this._http
      .post(
        url_api,
        {  marca ,tipoCarroceria  , km ,motor , stockModelo, anio ,CV, plazas ,precio },
        { headers: this.httpOptions.headers}
      ).pipe(map(data => data));
  }

  subirPedido(fkUsuario :number): Observable<any>{
    var fechaPed = new Date().toLocaleDateString('es-ES');
    const url_api = this._cocheApiUrl+"pedidos/";
    return this._http.post(
       url_api ,
       {fkUsuario , fechaPed } ,
       {headers: this.httpOptions.headers}
       ).pipe(map(data=>data));

  }

  subirDetalle(fkPedido:number ,fkCoche:number ,cantidad:number ,precioTotal:number 
    ,fechaIniRent:string ,fechaFinRent:string): Observable<any>{
    const url_api = this._cocheApiUrl+"detallepedidos/";
    return this._http.post(
      url_api ,
      { fkPedido,fkCoche,cantidad,precioTotal ,fechaIniRent,fechaFinRent } ,
      {headers: this.httpOptions.headers}
      ).pipe(map(data=>data));
  }
}
