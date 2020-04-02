<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CocheResource extends JsonResource
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
            'idCoche' => $this->idCoche,
            'marca' => $this->marca,
            'tipoCarroceria' => $this->tipoCarroceria,
            'km' => $this->km,
            'motor' => $this->motor,
            'stockModelo' => $this->stockModelo,
            'anio' => $this->anio,
            'precio' => $this->precio,
            'CV' => $this->CV,
            'plazas' => $this->plazas,
        ];
    }
}
