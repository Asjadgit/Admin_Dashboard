<?php

use App\Http\Controllers\Controller;
use App\Http\Controllers\UserCOntroller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');

Route::post('login',[UserCOntroller::class,'login']);
