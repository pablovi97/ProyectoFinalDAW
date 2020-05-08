import { Pedido } from './pedido.model';
export class Detallepedido {
    public idDetalle: number
    public fkPedido: number
    public fkCoche: number
    public fkReserva: number
    public cantidad: number
    public precioTotal: number
    public fechaIniRent: string
    public fechaFinRent: string
    public pedio : Pedido
    public nombreVehiculo : string |null
    constructor(
  
     
    ) { }
    
}
