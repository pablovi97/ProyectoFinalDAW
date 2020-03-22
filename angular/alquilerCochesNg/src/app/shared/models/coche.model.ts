export class Coche {

    constructor(
        public idCoche: number,
        public tipoCarroceria: string,
        public marca: string,
        public stockModelo: number,
        public km: number,
        public motor: string,
        public anio: number,
        public precio: number,
        public CV: number,
        public plazas: number,
    ) { }
}
