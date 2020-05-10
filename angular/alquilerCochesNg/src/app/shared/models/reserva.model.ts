import { Detallepedido } from './detallepedido.model';
export class Reserva {
    public idReserva: number
    public fkUsuarioRes: number
    public detallesPedidos : Array<Detallepedido>
    constructor(){

    }
}
