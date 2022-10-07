<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Crypto;

class CryptoController extends Controller
{
    public function index()
    {
        $Cryptos = Crypto::all();
        return $Cryptos;
    }
    public function store(Request $request)
    {
        $Crypto = new Crypto();
        $Crypto->name = $request->name;
        $Crypto->price = $request->price;
        $Crypto->open_day = $request->openday;
        $Crypto->low_day = $request->lowday;
        $Crypto->save();
        return $Crypto;


    }
}
