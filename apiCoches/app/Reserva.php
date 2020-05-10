<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $idReserva
 * @property int $fkUsuarioRes
 * @property Usuario $usuario
 * @property Detallepedido[] $detallepedidos
 */
class Reserva extends Model
{
    /**
     * The table associated with the model.
     * 
     * @var string
     */
    protected $table = 'reserva';

    /**
     * The primary key for the model.
     * 
     * @var string
     */
    protected $primaryKey = 'idReserva';

    /**
     * @var array
     */
    protected $fillable = ['fkUsuarioRes'];

    /**
     * Indicates if the model should be timestamped.
     * 
     * @var bool
     */
    public $timestamps = false;

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function usuario()
    {
        return $this->belongsTo('App\Usuario', 'fkUsuarioRes', 'idUsuario');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function detallepedidos()
    {
        return $this->hasMany('App\Detallepedido', 'fkReserva', 'idReserva');
    }
}
