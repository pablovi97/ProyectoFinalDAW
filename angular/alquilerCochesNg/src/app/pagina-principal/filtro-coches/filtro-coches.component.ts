import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filtro-coches',
  templateUrl: './filtro-coches.component.html',
  styleUrls: ['./filtro-coches.component.scss']
})
export class FiltroCochesComponent implements OnInit {

  //COMPONENTE QUE NO SE ESTA USANDO
  marcas: marca[] = [
    { value: 'Abarth', viewValue: 'Abarth' },
    { value: 'Honda', viewValue: 'honda' },
    { value: 'Toyota', viewValue: 'Toyota' },
    { value: 'Nissan', viewValue: 'Nissan' },
    { value: 'Mazda', viewValue: 'Mazda' },
    { value: 'Audi', viewValue: 'Audi' },
    { value: 'Ford', viewValue: 'Ford' },
    { value: 'Subaru', viewValue: 'Subaru' },
    { value: 'BMW', viewValue: 'BMW' },
    { value: 'Seat', viewValue: 'Seat' },
    { value: 'Suzuki', viewValue: 'Suzuki' },
    { value: 'Lamborghini', viewValue: 'Lamborghini' },
    { value: 'Citroen ', viewValue: 'Citroen ' },
    { value: 'Alfa ', viewValue: 'Alfa ' },
    { value: 'Kia ', viewValue: 'Kia ' },
    { value: 'Mitsubishi ', viewValue: 'Mitsubishi ' },
    { value: 'Kia ', viewValue: 'Kia ' },
    { value: 'Renault ', viewValue: 'Renault ' },
    { value: 'Volkswagen ', viewValue: 'Volkswagen ' },
    { value: 'Mercedes ', viewValue: 'Mercedes ' },

  ];
  constructor() { }

  ngOnInit(): void {
  }
  filtrar() {
    (<HTMLInputElement>document.getElementById('precio')).value;
    (<HTMLInputElement>document.getElementById('potencia')).value;
    (<HTMLInputElement>document.getElementById('marca')).value;
   
  }
}
interface marca {
  value: string;
  viewValue: string;
}