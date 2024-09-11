<?php

namespace Database\Seeders;

use App\Models\Order;
use App\Models\User;
use Illuminate\Container\Attributes\Auth;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for($i = 0; $i < 5; $i++){
            Order::create([
                'product_id' => 4,
                'user_id' => 1,
                'price' => mt_rand(1, 1000) / 10,
                'qty' => rand(1,10),
                'status' => ['delieverd','pending'][array_rand(['delivered', 'pending'])],
            ]);
        }
    }
}
