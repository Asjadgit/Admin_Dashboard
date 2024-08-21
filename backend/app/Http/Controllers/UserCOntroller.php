<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserCOntroller extends Controller
{
    public function login(Request $request)
    {
         // Retrieve input data
         $email = $request->input('email');
         $password = $request->input('password');

         if(Auth::attempt(['email' => $email, 'password' => $password, 'role' => 1])){
            return response()->json(true);
         }else{
            return response()->json(false);
         }
    }
}
