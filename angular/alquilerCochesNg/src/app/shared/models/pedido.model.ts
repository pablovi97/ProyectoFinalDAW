import { Detallepedido } from './detallepedido.model';


export class Pedido {
    public idPedido: number
    public fkUsuario: number
    public fechaPed: string
    public detallesPedidos : Array<Detallepedido> 
    //Ponemos un array de detalle pedidos para que sea mas facil de guardar en la sesion y base de datos
    constructor() {

    }
}
