<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class DetallepedResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'idDetalle' => $this->idDetalle,
            'fkPedido' => $this->fkPedido,
            'fkCoche' => $this->fkCoche,
            'fkReserva' => $this->fkReserva,
            'cantidad' => $this->cantidad,
            'precioTotal' => $this->precioTotal,
            ];
    }
}
