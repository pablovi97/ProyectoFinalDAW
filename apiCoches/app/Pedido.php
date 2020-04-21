<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $idPedido
 * @property int $fkUsuario
 * @property string $fechaPed
 * @property Usuario $usuario
 * @property Detallepedido[] $detallepedidos
 */
class Pedido extends Model
{
    /**
     * The table associated with the model.
     * 
     * @var string
     */
    protected $table = 'pedido';

    /**
     * The primary key for the model.
     * 
     * @var string
     */
    protected $primaryKey = 'idPedido';

    /**
     * @var array
     */
    protected $fillable = ['fkUsuario', 'fechaPed'];

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
        return $this->belongsTo('App\Usuario', 'fkUsuario', 'idUsuario');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function detallepedidos()
    {
        return $this->hasMany('App\Detallepedido', 'fkPedido', 'idPedido');
    }
}
