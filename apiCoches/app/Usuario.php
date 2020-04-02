<?php

namespace App;
use Tymon\JWTAuth\Contracts\JWTSubject;
 use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Model;

/**
 * @property int $idUsuario
 * @property string $name
 * @property string $email
 * @property string $password
 * @property string $rol
 * @property Comentario[] $comentarios
 * @property Pedido[] $pedidos
 * @property Reserva[] $reservas
 */
class Usuario extends Authenticatable implements JWTSubject
{
    /**
     * The table associated with the model.
     * 
     * @var string
     */
    protected $table = 'usuario';

    /**
     * The primary key for the model.
     * 
     * @var string
     */
    protected $primaryKey = 'idUsuario';

    /**
     * @var array
     */
    protected $fillable = ['name', 'email', 'password', 'rol'];

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
        return $this->hasMany('App\Comentario', 'fkUsuarioCm', 'idUsuario');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function pedidos()
    {
        return $this->hasMany('App\Pedido', 'fkUsuario', 'idUsuario');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function reservas()
    {
        return $this->hasMany('App\Reserva', 'fkUsuarioRes', 'idUsuario');
    }

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }
    public function getJWTCustomClaims()
    {
        $rol = $this->rol;
  
        return [
            'rol' => $rol,
        ];
    }
}
