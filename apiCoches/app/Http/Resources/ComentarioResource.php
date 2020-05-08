<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ComentarioResource extends JsonResource
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
            'idComentario' => $this->idComentario,
            'fkCocheCm' => $this->fkCocheCm,
            'fkUsuarioCm' => $this->fkUsuarioCm,
            'contenido' => $this->contenido,
            'puntuacion' => $this->puntuacion,
            'pregunta' => $this->pregunta,
            ];
    }
}
