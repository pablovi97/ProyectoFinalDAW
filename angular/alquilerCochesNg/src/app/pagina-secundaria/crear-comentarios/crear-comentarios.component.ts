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
  comentarios : Array<Comentario>;
  coches: Coche;
  subscription: Subscription;
  usuario: Usuario;
  constructor(private _apiService: ApiService, private _router: Router) { }

  ngOnInit(): void {
    this.getComentarios();
    this.introducirPreguntas();
  }
  getComentarios() {
    const scope = this;
    this.coches = JSON.parse(localStorage.getItem('coche'));



   //getComentarioIdCoche devuelve Observable<Comentario[]> 
   scope.subscription = scope._apiService.getComentarioIdCoche(this.coches.idCoche).subscribe(
    data => this.comentarios = data,
      error => console.log(error)
       /* {
          next(comentarioObserv) {
            scope.comentarios = comentarioObserv;
            error => console.log(error)
          }

        }*/
      );


  }

  introducirPreguntas() {

    console.log("entra en introducir")
    //NO ENTRA EN EL BUCLE!!!
    for (let coment of this.comentarios) {
      console.log(" entraaaa");
      console.log(coment);
      /* if (coment.pregunta !=null) {
         console.log("entraaaaa")
         //for(const com of this.co) usar bucle anidao
         this._apiService.getComentarioId(coment.pregunta)
           .subscribe(
             data => {
             coment.comentarioPregunta = data
               console.log("meto el obj")
               console.log(coment.comentarioPregunta)
             },
 
             error => console.log(error)
           );
       }*/
    }

  }

  subirComentario(pregunta: number | null) {

    var rate = 0;
    for (var i = 5; i > 0; i--) {
      console.log("star" + i);
      if ((<HTMLInputElement>document.getElementById('star' + i)).checked) {

        rate = + (<HTMLInputElement>document.getElementById('star' + i)).value;
      }
    }
    var contenido = (<HTMLInputElement>document.getElementById('contenido')).value
    if (sessionStorage.getItem('usuario')) {

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

    this.subirComentario(comentario.idComentario);


  }

}
interface Usuario {
  id: number,
  name: string,
  email: string,
  password: string,
  rol: string
}