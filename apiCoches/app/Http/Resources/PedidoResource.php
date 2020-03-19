<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PedidoResource extends JsonResource
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
            'idPedido' => $this->idPedido,
            'fkUsuario' => $this->fkUsuario,
            'fechaPed' => $this->fechaPed,
            
            ];
    }
}
