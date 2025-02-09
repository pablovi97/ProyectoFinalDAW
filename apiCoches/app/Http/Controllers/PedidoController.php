<?php

namespace App\Http\Controllers;
use App\Http\Resources\PedidoResource;
use App\Pedido;
use Illuminate\Http\Request;

class PedidoController extends Controller
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
        if ($request->input('fkUsuario') != null) {
            $parametroValue = $request->input('fkUsuario');
            $PedidosFiltrados = Pedido::where('fkUsuario', 'like', $parametroValue)->get();
            return $PedidosFiltrados;
        }
        if ($request->input('fechaPed') != null) {
            $parametroValue = $request->input('fechaPed');
            $PedidosFiltrados = Pedido::where('fechaPed', 'like', $parametroValue)->get();
            return $PedidosFiltrados;
        }
        
        return PedidoResource::collection(Pedido::all()); 
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $pedido = Pedido::create([
            'fkUsuario' =>  $request->fkUsuario,
            'fechaPed' => $request->fechaPed,
            ]);
            return new PedidoResource($pedido);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Pedido  $pedido
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {

        $pedido = Pedido::find($id);
        //return new pedidoResource($pedido);

        if (!$pedido) {
            // Se devuelve un array errors con los errores encontrados y cabecera HTTP 404.
            // En code podríamos indicar un código de error personalizado de nuestra aplicación si lo deseamos.
            return response()->json(['errors' => array(['code' => 404, 'message' => 'No se encuentra un pedido con ese código.'])], 404);
        }
        return response()->json(['status' => 'ok', 'data' => $pedido], 200);
 
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Pedido  $pedido
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Pedido $pedido)
    {
        if ($request->user()->idUsuario == $pedido->fkUsuario) {
            $pedido->fkUsuario = $request->fkUsuario ?? $pedido->fkUsuario;
            $pedido->fechaPed = $request->fechaPed ?? $pedido->fechaPed;
            $pedido->save();
            return new PedidoResource($pedido);
        } else {
            return response()->json(['error' => 'You can only edit your own orders.'], 403);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Pedido  $pedido
     * @return \Illuminate\Http\Response
     */
    public function destroy(Pedido $pedido)
    {
        $pedido->delete();


        return response()->json(null, 204);
    }
}
