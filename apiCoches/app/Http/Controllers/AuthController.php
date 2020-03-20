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
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
            'rol' => 'usuario',
        ]);
        $token = auth('api')->login($user);
        return $this->respondWithToken($token);
    }
    public function login(Request $request)
    {
        $nom = $request->name;
        $pass = $request->password;
        $user = Usuario::where('name', '=', $nom)->first();
        if (isset($user) && Hash::check($pass, $user->password)) {
            $token = JWTAuth::fromUser($user);
            return $this->respondWithToken($token);
        } else {

            return response()->json(['error' => 'Unauthorized', $nom => $pass], 401);
        }
    }
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => 120
        ]);
    }
}
