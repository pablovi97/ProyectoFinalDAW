<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $pregunta
 * @property int $idComentario
 * @property int $fkCocheCm
 * @property int $fkUsuarioCm
 * @property string $contenido
 * @property int $puntuacion
 * @property Coche $coche
 * @property Usuario $usuario
 * @property Comentario $comentario
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
     * @var array
     */
    protected $fillable = ['pregunta', 'fkCocheCm', 'fkUsuarioCm', 'contenido', 'puntuacion'];

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

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function comentario()
    {
        return $this->belongsTo('App\Comentario', 'pregunta', 'idComentario');
    }
}
