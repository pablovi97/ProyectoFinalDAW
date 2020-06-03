import { Component, OnInit, Input } from '@angular/core';
import { Coche } from 'src/app/shared/models/coche.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ApiService } from 'src/app/shared/service/api.service';
@Component({
  selector: 'app-coche-actualizar',
  templateUrl: './coche-actualizar.component.html',
  styleUrls: ['./coche-actualizar.component.scss']
})
export class CocheActualizarComponent implements OnInit {
@Input() cocheEdit: Coche;
  constructor(private _apiService: ApiService,) { }
  ngOnInit(): void {
  }
//Recogemos el objeto modificado y lo subimos para actualizarlo
  subirActualizacion():void{
    this._apiService.actualizarCoche(this.cocheEdit)
    .subscribe(error => console.log(error));

  }

}
