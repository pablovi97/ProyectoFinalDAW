<?php

namespace App\Http\Controllers;

use App\Coche;
use App\Detallepedido;
use App\Http\Middleware\RolAdmin;
use Illuminate\Http\Request;
use App\Http\Resources\CocheResource;
use App\Pedido;

class CocheController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api')->except(['index', 'show']);
        $this->middleware('roladmin')->except(['index', 'show', 'update']);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if ($request->input('marca') != null) {
            $parametroValue = $request->input('marca');
            $cochesFiltrados = Coche::where('marca', 'like', $parametroValue)->get();
            return $cochesFiltrados;
        }
        if ($request->input('precio') != null) {
            $parametroValue = $request->input('precio');
            $cochesFiltrados = Coche::where('precio', 'like', $parametroValue)->get();
            return $cochesFiltrados;
        }
        if ($request->input('tipoCarroceria') != null) {
            $parametroValue = $request->input('tipoCarroceria');
            $cochesFiltrados = Coche::where('tipoCarroceria', 'like', $parametroValue)->get();
            return $cochesFiltrados;
        }
        if ($request->input('km') != null) {
            $parametroValue = $request->input('km');
            $cochesFiltrados = Coche::where('km', 'like', $parametroValue)->get();
            return $cochesFiltrados;
        }
        if ($request->input('stockModelo') != null) {
            $parametroValue = $request->input('stockModelo');
            $cochesFiltrados = Coche::where('stockModelo', 'like', $parametroValue)->get();
            return $cochesFiltrados;
        }
        if ($request->input('anio') != null) {
            $parametroValue = $request->input('anio');
            $cochesFiltrados = Coche::where('anio', 'like', $parametroValue)->get();
            return $cochesFiltrados;
        }
        if ($request->input('CV') != null) {
            $parametroValue = $request->input('CV');
            $cochesFiltrados = Coche::where('CV', 'like', $parametroValue)->get();
            return $cochesFiltrados;
        }
        if ($request->input('plazas') != null) {
            $parametroValue = $request->input('plazas');
            $cochesFiltrados = Coche::where('plazas', 'like', $parametroValue)->get();
            return $cochesFiltrados;
        }
        if ($request->input('modelo') != null) {
            $parametroValue = $request->input('modelo');
            $cochesFiltrados = Coche::where('modelo', 'like', $parametroValue)->get();
            return $cochesFiltrados;
        }
        if ($request->input('imagen') != null) {
            $parametroValue = $request->input('imagen');
            $cochesFiltrados = Coche::where('imagen', 'like', $parametroValue)->get();
            return $cochesFiltrados;
        }


       return CocheResource::collection(Coche::all());

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $coche = Coche::create([
            'marca' =>  $request->marca,
            'modelo' =>  $request->modelo,
            'tipoCarroceria' => $request->tipoCarroceria,
            'km' => $request->km,
            'motor' => $request->motor,
            'stockModelo' => $request->stockModelo,
            'anio' => $request->anio,
            'CV' => $request->CV,
            'plazas' => $request->plazas,
            'precio' => $request->precio,
            'imagen' => $request->imagen

        ]);


        return new CocheResource($coche);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Coche  $coche
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $coche = Coche::find($id);
        //return new CocheResource($coche);

        if (!$coche) {
            // Se devuelve un array errors con los errores encontrados y cabecera HTTP 404.
            // En code podríamos indicar un código de error personalizado de nuestra aplicación si lo deseamos.
            return response()->json(['errors' => array(['code' => 404, 'message' => 'No se encuentra un coche con ese código.'])], 404);
        }
        return response()->json(['status' => 'ok', 'data' => $coche], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Coche  $coche
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $coche = Coche::find($id);
        $coche->marca = $request->marca ?? $coche->marca;
        $coche->modelo = $request->modelo ?? $coche->modelo;
        $coche->motor = $request->motor ?? $coche->motor;
        $coche->anio = $request->anio ?? $coche->anio;
        $coche->stockModelo = $request->stockModelo ?? $coche->stockModelo;
        $coche->km = $request->km ?? $coche->km;
        $coche->CV = $request->CV ?? $coche->CV;
        $coche->precio = $request->precio ?? $coche->precio;
        $coche->plazas = $request->plazas ?? $coche->plazas;
        $coche->tipoCarroceria = $request->tipoCarroceria ?? $coche->tipoCarroceria;
        $coche->imagen = $request->imagen ?? $coche->imagen;
        $coche->save();

        return new cocheResource($coche);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Coche  $coche
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $coche = Coche::find($id);
        $coche->delete('cascade');
        return response()->json(null, 204);
    }
}
