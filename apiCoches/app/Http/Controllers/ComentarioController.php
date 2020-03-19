<?php

namespace App\Http\Controllers;

use App\Http\Resources\ComentarioResource;
use App\Comentario;
use Exception;
use Illuminate\Http\Request;

class ComentarioController extends Controller
{


    public function __construct()
    {
        $this->middleware('auth:api')->except(['index', 'show']);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    //GET PARA TODOS
    public function index(Request $request)
    {

        if ($request->input('contenido') != null) {
            $parametroValue = $request->input('contenido');
            $ComentariosFiltrados = Comentario::where('contenido', 'like', $parametroValue)->get();
            return $ComentariosFiltrados;
        }
        if ($request->input('fkCocheCm') != null) {
            $parametroValue = $request->input('fkCocheCm');
            $ComentariosFiltrados = Comentario::where('fkCocheCm', 'like', $parametroValue)->get();
            return $ComentariosFiltrados;
        } 
        if ($request->input('fkUsuarioCm') != null) {
            $parametroValue = $request->input('fkUsuarioCm');
            $ComentariosFiltrados = Comentario::where('fkUsuarioCm', 'like', $parametroValue)->get();
            return $ComentariosFiltrados;
        }
        if ($request->input('puntuacion') != null) {
            $parametroValue = $request->input('puntuacion');
            $ComentariosFiltrados = Comentario::where('puntuacion', 'like', $parametroValue)->get();
            return $ComentariosFiltrados;
        }

        return ComentarioResource::collection(Comentario::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    //POST
    public function store(Request $request)
    {
       
        $Comentario = Comentario::create([
            'contenido' =>  $request->contenido,
            'fkUsuarioCm' => $request->fkUsuarioCm,
            'fkCocheCm' => $request->fkCocheCm,
            'puntuacion' => $request->puntuacion,
            ]);


            return new ComentarioResource($Comentario);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Comentario  $Comentario
     * @return \Illuminate\Http\Response
     */
    //GET PARA UN ID
    public function show(Comentario $Comentario)
    {
        return new ComentarioResource($Comentario);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Comentario  $Comentario
     * @return \Illuminate\Http\Response
     */
    //PUT
    public function update(Request $request, Comentario $Comentario)
    {/*
        $Comentario->update($request->only(['nombreComentario', 'precio']));

*/
        $Comentario->contenido = $request->contenido ?? $Comentario->contenido;
        $Comentario->fkCocheCm = $request->fkCocheCm ?? $Comentario->fkCocheCm;
        $Comentario->puntuacion = $request->puntuacion ?? $Comentario->puntuacion;
        $Comentario->fkUsuarioCm = $request->fkUsuarioCm ?? $Comentario->fkUsuarioCm;
        $Comentario->save();
        return new ComentarioResource($Comentario);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Comentario  $Comentario
     * @return \Illuminate\Http\Response
     */
    //DELETE
    public function destroy(Comentario $Comentario)
    {

        $Comentario->delete();


        return response()->json(null, 204);
    }
}
