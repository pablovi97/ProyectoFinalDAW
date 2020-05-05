import { Component, OnInit } from '@angular/core';
import { Comentario } from 'src/app/shared/models/comentario.model';
import { Coche } from 'src/app/shared/models/coche.model';
import { ApiService } from 'src/app/shared/service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-comentarios',
  templateUrl: './crear-comentarios.component.html',
  styleUrls: ['./crear-comentarios.component.scss']
})
export class CrearComentariosComponent implements OnInit {
  comentarios: Comentario[];
  coches: Coche;
  usuario: Usuario;
  constructor(private _apiService: ApiService, private _router: Router) { }

  ngOnInit(): void {
    this.getComentarios();
  }
  getComentarios() {
    const scope = this;
    this.coches = JSON.parse(localStorage.getItem('coche'));
    scope._apiService.getComentarioIdCoche(this.coches.idCoche)
      .subscribe(
        data => this.comentarios = data,
        error => console.log(error)
      );


  }

  subirComentario() {
    var rate = 0;
    for (var i = 5; i > 0; i--) {
      console.log("star"+i);
      if ((<HTMLInputElement>document.getElementById('star' + i)).checked) {
   
        rate = + (<HTMLInputElement>document.getElementById('star' + i)).value;
      }
    }
    var contenido = (<HTMLInputElement>document.getElementById('contenido')).value
    if (sessionStorage.getItem('usuario')) {

      this.usuario = JSON.parse(sessionStorage.getItem('usuario'));
      this._apiService.crearComentarios(contenido, this.usuario.id, this.coches.idCoche, rate).subscribe(
        error => console.log(error)
      )
      //location.reload();
    } else {
      this._router.navigate(['login']);
    }

  }

}
interface Usuario {
  id: number,
  name: string,
  email: string,
  password: string,
  rol: string
}