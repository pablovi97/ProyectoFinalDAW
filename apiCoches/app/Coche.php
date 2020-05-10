<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $idCoche
 * @property string $tipoCarroceria
 * @property string $marca
 * @property string $modelo
 * @property int $stockModelo
 * @property float $km
 * @property string $motor
 * @property int $anio
 * @property float $precio
 * @property int $CV
 * @property int $plazas
 * @property string $imagen
 * @property Comentario[] $comentarios
 * @property Detallepedido[] $detallepedidos
 */
class Coche extends Model
{
    /**
     * The table associated with the model.
     * 
     * @var string
     */
    protected $table = 'coche';

    /**
     * The primary key for the model.
     * 
     * @var string
     */
    protected $primaryKey = 'idCoche';

    /**
     * @var array
     */
    protected $fillable = ['tipoCarroceria', 'marca', 'modelo', 'stockModelo', 'km', 'motor', 'anio', 'precio', 'CV', 'plazas', 'imagen'];

    /**
     * Indicates if the model should be timestamped.
     * 
     * @var bool
     */
    public $timestamps = false;

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function comentarios()
    {
        return $this->hasMany('App\Comentario', 'fkCocheCm', 'idCoche');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function detallepedidos()
    {
        return $this->hasMany('App\Detallepedido', 'fkCoche', 'idCoche');
    }
}
