<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function showOrders()
    {
        $orders = Order::with(['product','user'])->latest()->get();
        return response()->json(['data'=>$orders]);
    }

    public function pendingOrders()
    {
        $orders = Order::where('status','pending')->with(['product','user'])->latest()->get();
        return response()->json(['data'=>$orders]);
    }

    public function deliveredOrders()
    {
        $orders = Order::where('status','delieverd')->with(['product','user'])->latest()->get();
        return response()->json(['data'=>$orders]);
    }

    // Function to get total sales
    public function totalSales()
    {
        // Calculate total sales from the Order table
        $orders = Order::all();
        $totalSales = 0;
        foreach ($orders as $order) {
            $totalSales += $order->qty * $order->price;
        }
        return response()->json(['totalSales' => $totalSales], 200);
    }

    public function weeklySales()
    {
        // Get the current date and subtract 7 days to get the last 7 days' range
        $startDate = Carbon::now()->subDays(7);
        $endDate = Carbon::now();

        // Calculate sales from the last 7 days
        $orders = Order::whereBetween('created_at', [$startDate, $endDate])->get();
        $weeklySales = 0;
        foreach ($orders as $order) {
            $weeklySales += $order->qty * $order->price;
        }


        return response()->json(['weeklySales' => $weeklySales], 200);
    }

    // Function to get monthly sales
    public function monthlySales()
    {
        // Get the current date and subtract 1 month to get the last month's range
        $startDate = Carbon::now()->subMonth();
        $endDate = Carbon::now();

        // Calculate sales from the last month
        $orders = Order::whereBetween('created_at', [$startDate, $endDate])->get();
        $monthlySales = 0;
        foreach ($orders as $order) {
            $monthlySales += $order->qty * $order->price;
        }


        return response()->json(['monthlySales' => $monthlySales], 200);
    }

    public function totalCustomers()
    {
        $users = User::count();
        return response()->json(['customers' => $users], 200);
    }
}
