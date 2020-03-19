<?php

namespace App\Http\Controllers;

use App\Coche;
use Illuminate\Http\Request;
use App\Http\Resources\CocheResource;

class CocheController extends Controller
{
    public function __construct()
    {
    $this->middleware('auth:api')->except(['index','show']);
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
            'tipoCarroceria' => $request->tipoCarroceria,
            'km' => $request->km,
            'motor' => $request->motor,
            ]);


            return new CocheResource($coche);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Coche  $coche
     * @return \Illuminate\Http\Response
     */
    public function show(Coche $coche)
    {
        return new CocheResource($coche);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Coche  $coche
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Coche $coche)
    {
        $coche->marca = $request->marca ?? $coche->marca;
        $coche->stockModelo = $request->stock ?? $coche->stockModelo;
        $coche->km = $request->km ?? $coche->km;
        $coche->precio = $request->precio ?? $coche->precio;
        $coche->save();
        return new cocheResource($coche);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Coche  $coche
     * @return \Illuminate\Http\Response
     */
    public function destroy(Coche $coche)
    {
        $coche->delete();


        return response()->json(null, 204);
    }
}
