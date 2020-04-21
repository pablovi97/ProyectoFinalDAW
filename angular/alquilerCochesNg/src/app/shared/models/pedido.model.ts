import { Detallepedido } from './detallepedido.model';


export class Pedido {
    public idPedido: number
    public fkUsuario: number
    public fechaPed: string
    public detallesPedidos : Array<Detallepedido>
    constructor() {

    }
}
