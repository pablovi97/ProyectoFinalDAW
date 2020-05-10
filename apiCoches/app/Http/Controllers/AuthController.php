<?php

namespace App\Http\Controllers;

use App\Usuario;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $user = Usuario::create([
            'name' => $request->nom,
            'email' => $request->em,
            'password' => bcrypt($request->pass),
            'rol' =>  $request->rol ?? 'usuario',
        ]);
        $token = auth('api')->login($user);
        return $this->respondWithToken($token ,$user);
    }
    public function login(Request $request)
    {
        $nom = $request->name;
        $pass = $request->pass;
        $user = Usuario::where('name', '=', $nom)->first();
        if (isset($user) && Hash::check($pass, $user->password)) {
            $token = JWTAuth::fromUser($user);
            return $this->respondWithToken($token ,$user);
        } else {

            return response()->json(['error' => 'Unauthorized', $nom => $pass], 401);
        }
    }
    protected function respondWithToken($token, $user)
    { //Meter datos del usuario
        return response()->json([
         
            'user' => $user,
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => 3600
        ]);
    }
}
