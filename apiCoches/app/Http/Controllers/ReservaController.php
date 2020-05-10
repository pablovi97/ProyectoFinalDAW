<?php

namespace App\Http\Controllers;

use App\Http\Resources\ReservaResource;
use App\Reserva;
use Illuminate\Http\Request;

class ReservaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if ($request->input('fkUsuarioRes') != null) {
            $parametroValue = $request->input('fkUsuarioRes');
            $Filtrados = Reserva::where('fkUsuarioRes', 'like', $parametroValue)->get();
            return $Filtrados;
        }
        return ReservaResource::collection(Reserva::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $reserva = Reserva::create([
            'fkUsuarioRes' =>  $request->fkUsuarioRes,
        ]);
        return new ReservaResource($reserva);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Reserva  $reserva
     * @return \Illuminate\Http\Response
     */
    public function show(Reserva $reserva)
    {
        return new ReservaResource($reserva);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Reserva  $reserva
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Reserva $reserva)
    {
        if ($request->user()->id_usuario == $reserva->fkUsuarioRes) {
            $reserva->fkUsuarioRes = $request->fkUsuarioRes ?? $reserva->fkUsuarioRes;

            $reserva->save();
        } else {
            return response()->json(['error' => 'You can only edit your own orders.'], 403);
        }
        return new ReservaResource($reserva);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Reserva  $reserva
     * @return \Illuminate\Http\Response
     */
    public function destroy(Reserva $reserva)
    {
        $reserva->delete();


        return response()->json(null, 204);
    }
}
