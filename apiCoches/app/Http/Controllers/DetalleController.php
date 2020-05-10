<?php

namespace App\Http\Controllers;

use App\Http\Resources\DetallepedResource;
use App\detallepedido;
use Illuminate\Http\Request;

class DetalleController extends Controller
{
    public function __construct()
    {
      $this->middleware('auth:api');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if ($request->input('fkPedido') != null) {
            $parametroValue = $request->input('fkPedido');
            $detallepedidosFiltrados = detallepedido::where('fkPedido', 'like', $parametroValue)->get();
            return $detallepedidosFiltrados;
        }
        if ($request->input('fkCoche') != null) {
            $parametroValue = $request->input('fkCoche');
            $detallepedidosFiltrados = detallepedido::where('fkCoche', 'like', $parametroValue)->get();
            return $detallepedidosFiltrados;
        }
        if ($request->input('fkReserva') != null) {
            $parametroValue = $request->input('fkReserva');
            $detallepedidosFiltrados = detallepedido::where('fkReserva', 'like', $parametroValue)->get();
            return $detallepedidosFiltrados;
        }
        if ($request->input('cantidad') != null) {
            $parametroValue = $request->input('cantidad');
            $detallepedidosFiltrados = detallepedido::where('cantidad', 'like', $parametroValue)->get();
            return $detallepedidosFiltrados;
        }
        if ($request->input('fechaIniRent') != null) {
            $parametroValue = $request->input('fechaIniRent');
            $detallepedidosFiltrados = detallepedido::where('fechaIniRent', 'like', $parametroValue)->get();
            return $detallepedidosFiltrados;
        }
        if ($request->input('fechaFinRent') != null) {
            $parametroValue = $request->input('fechaFinRent');
            $detallepedidosFiltrados = detallepedido::where('fechaFinRent', 'like', $parametroValue)->get();
            return $detallepedidosFiltrados;
        }
        if ($request->input('precioTotal') != null) {
            $parametroValue = $request->input('precioTotal');
            $detallepedidosFiltrados = detallepedido::where('precioTotal', 'like', $parametroValue)->get();
            return $detallepedidosFiltrados;
        }

        return DetallepedResource::collection(detallepedido::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $detalle = detallepedido::create([
            'fkPedido' =>  $request->fkPedido,
            'fkCoche' => $request->fkCoche,
            'fkReserva' => $request->fkReserva,
            'cantidad' => $request->cantidad,
            'precioTotal' => $request->precioTotal,
            'fechaIniRent' => $request->fechaIniRent,
            'fechaFinRent' => $request->fechaFinRent,
        ]);


        return new DetallepedResource($detalle);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\detallepedido  $detallepedido
     * @return \Illuminate\Http\Response
     */
    public function show(detallepedido $detallepedido)
    {
        return new DetallepedResource($detallepedido);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\detallepedido  $detallepedido
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, detallepedido $detallepedido)
    {
        $detallepedido->id_pedido = $request->id_pedido ?? $detallepedido->id_pedido;
        $detallepedido->id_producto = $request->id_producto ?? $detallepedido->id_producto;
        $detallepedido->cantidad = $request->cantidad ?? $detallepedido->cantidad;
        $detallepedido->precioProducto = $request->precioProducto ?? $detallepedido->precioProducto;
        $detallepedido->fechaIniRent = $request->fechaIniRent ?? $detallepedido->fechaIniRent;
        $detallepedido->fechaFinRent = $request->fechaFinRent ?? $detallepedido->fechaFinRent; 
        $detallepedido->save();
        return new DetallepedResource($detallepedido);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\detallepedido  $detallepedido
     * @return \Illuminate\Http\Response
     */
    public function destroy(detallepedido $detallepedido)
    {
        $detallepedido->delete();


        return response()->json(null, 204);
    }
}
