import { Component, OnInit } from '@angular/core';
import { Comentario } from 'src/app/shared/models/comentario.model';
import { Coche } from 'src/app/shared/models/coche.model';
import { ApiService } from 'src/app/shared/service/api.service';
import { Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { map } from "rxjs/operators";
@Component({
  selector: 'app-crear-comentarios',
  templateUrl: './crear-comentarios.component.html',
  styleUrls: ['./crear-comentarios.component.scss']
})
export class CrearComentariosComponent implements OnInit {
  comentarios: Comentario[];
  coches: Coche;
  rol: string;
  usuario: Usuario;
  cincostarts: number;
  tresstarts: number;
  cuatrostarts: number;
  dostarts: number;
  unastarts: number;
  constructor(private _apiService: ApiService, private _router: Router) { }

  ngOnInit(): void {
    this.getComentarios();
    //miramos el rol del usuario
    if (sessionStorage.getItem('usuario')) {
      this.usuario = JSON.parse(sessionStorage.getItem('usuario'));
      this.rol = this.usuario.rol
    }
  }

  //Obtenemos los comentarios
  getComentarios() {
    const scope = this;
    this.coches = JSON.parse(localStorage.getItem('coche'));
    scope._apiService.getComentarioIdCoche(this.coches.idCoche).subscribe(
      data => this.comentarios = data,
      error => console.log(error)
    )
  }

  rating() {
    //No funciona 
    var arrayComentario: Comentario;
    arrayComentario = JSON.parse(localStorage.getItem('comentario'))
  }

  subirComentario(pregunta: number | null) {
//Contamos las estrellas del rating
    var rate = 0;
    for (var i = 5; i > 0; i--) {
      console.log("star" + i);
      if ((<HTMLInputElement>document.getElementById('star' + i)).checked) {
        rate = + (<HTMLInputElement>document.getElementById('star' + i)).value;
      }
    }
    var contenido = (<HTMLInputElement>document.getElementById('contenido')).value
    if (sessionStorage.getItem('usuario')) {
//Miramos si hay un usuario logeado si no lo está tendra que logearse para comentar
      this.usuario = JSON.parse(sessionStorage.getItem('usuario'));
      this._apiService.crearComentarios(contenido, this.usuario.id, this.coches.idCoche, rate, pregunta).subscribe(
        data => { console.log("resultado"), console.log(data) },
        error => console.log(error)
      )
      location.reload();
    } else {
      this._router.navigate(['login']);
    }
  }

  responderComentario(comentario: Comentario) {
//Subimos un comentario con la clave foranea de la pregunta
    this.subirComentario(comentario.idComentario);
  }

  //Eliminamos un comentario por su id
  eliminarComentario(comentario: Comentario) {
    this._apiService.deleteComentario(comentario.idComentario).subscribe();
    location.reload();
  }
}

interface Usuario {
  id: number,
  name: string,
  email: string,
  password: string,
  rol: string
}