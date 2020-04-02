<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $idComentario
 * @property int $fkCocheCm
 * @property int $fkUsuarioCm
 * @property string $contenido
 * @property int $puntuacion
 * @property Coche $coche
 * @property Usuario $usuario
 */
class Comentario extends Model
{
    /**
     * The table associated with the model.
     * 
     * @var string
     */
    protected $table = 'comentario';

    /**
     * The primary key for the model.
     * 
     * @var string
     */
    protected $primaryKey = 'idComentario';

    /**
     * Indicates if the IDs are auto-incrementing.
     * 
     * @var bool
     */
    public $incrementing = false;

    /**
     * @var array
     */
    protected $fillable = ['fkCocheCm', 'fkUsuarioCm', 'contenido', 'puntuacion'];

    /**
     * Indicates if the model should be timestamped.
     * 
     * @var bool
     */
    public $timestamps = false;

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function coche()
    {
        return $this->belongsTo('App\Coche', 'fkCocheCm', 'idCoche');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function usuario()
    {
        return $this->belongsTo('App\Usuario', 'fkUsuarioCm', 'idUsuario');
    }
}
