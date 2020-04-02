<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $idDetalle
 * @property int $fkPedido
 * @property int $fkCoche
 * @property int $fkReserva
 * @property int $cantidad
 * @property int $precioTotal
 * @property Pedido $pedido
 * @property Coche $coche
 * @property Reserva $reserva
 */
class Detallepedido extends Model
{
    /**
     * The table associated with the model.
     * 
     * @var string
     */
    protected $table = 'detallepedido';

    /**
     * The primary key for the model.
     * 
     * @var string
     */
    protected $primaryKey = 'idDetalle';

    /**
     * @var array
     */
    protected $fillable = ['fkPedido', 'fkCoche', 'fkReserva', 'cantidad', 'precioTotal'];

    /**
     * Indicates if the model should be timestamped.
     * 
     * @var bool
     */
    public $timestamps = false;

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function pedido()
    {
        return $this->belongsTo('App\Pedido', 'fkPedido', 'idPedido');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function coche()
    {
        return $this->belongsTo('App\Coche', 'fkCoche', 'idCoche');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function reserva()
    {
        return $this->belongsTo('App\Reserva', 'fkReserva', 'idReserva');
    }
}
