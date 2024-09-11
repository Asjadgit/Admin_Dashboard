<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $fillable = ['Product_name','Image'];

    public function order()
    {
        return $this->hasMany(Order::class);
    }
}
