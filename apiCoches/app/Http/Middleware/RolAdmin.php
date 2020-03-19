<?php

namespace App\Http\Middleware;

use Tymon\JWTAuth\Facades\JWTAuth;
use Closure;

class RolAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $token = JWTAuth::parseToken();
        JWTAuth::getPayload();
        $resp = JWTAuth::getPayload()->get('rol');
        if ($resp == 'admin') {
            return $next($request);
        } else {
            return response()->json(['mensaje' => 'rol no autorizado'], 401);
        }
    }
}
