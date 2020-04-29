<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
/*
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
*/
Route::apiResource('coches', 'CocheController');
Route::apiResource('detallepedidos', 'DetalleController');
Route::apiResource('comentarios', 'ComentarioController');
Route::apiResource('pedidos', 'PedidoController');
Route::apiResource('reservas', 'ReservaController');
Route::post('register', 'AuthController@register');
Route::post('login', 'AuthController@login');

