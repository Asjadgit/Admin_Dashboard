<?php

use App\Http\Controllers\Controller;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\UserCOntroller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');

Route::post('login',[UserCOntroller::class,'login']);
Route::get('/Customers',[ProductController::class,'showCustomers']);
Route::post('/product',[ProductController::class,'addProduct']);
Route::get('/AllProducts',[ProductController::class,'showProduct']);

Route::get('/AllOrders',[OrderController::class,'showOrders']);
Route::get('/pending',[OrderController::class,'pendingOrders']);
Route::get('/delivered',[OrderController::class,'deliveredOrders']);


Route::get('/total-customer',[OrderController::class,'totalCustomers']);
Route::get('/total-sales',[OrderController::class,'totalSales']);
Route::get('/weekly-sales',[OrderController::class,'weeklySales']);
Route::get('/monthly-sales',[OrderController::class,'monthlySales']);
