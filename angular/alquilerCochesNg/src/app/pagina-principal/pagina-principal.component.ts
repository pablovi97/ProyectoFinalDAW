import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.scss']
})
export class PaginaPrincipalComponent implements OnInit {
  usuario: Usuario | null;
  rol: string | null;
  constructor() { }

  ngOnInit(): void {
    this.getlogeado();
  }
  getlogeado() {
    if (sessionStorage.getItem('usuario')) {
      this.usuario = JSON.parse(sessionStorage.getItem('usuario'));
      this.rol = this.usuario.rol;
    }
  
  }

}

interface Usuario {
  idUsuario: number,
  name: string,
  email: string,
  password: string,
  rol: string
}