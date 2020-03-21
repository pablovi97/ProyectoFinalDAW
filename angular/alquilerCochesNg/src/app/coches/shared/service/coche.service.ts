import { Injectable } from '@angular/core';
import { Coche } from '../models/coche.model';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})


export class CocheService {
    private _cocheApiUrl = 'http::/localhost:8000/api/';
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };
      
  constructor(private _http: HttpClient) { }


  
}
