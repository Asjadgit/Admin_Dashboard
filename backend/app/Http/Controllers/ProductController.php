<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function showProduct()
    {
        $products = Product::all();
        return response()->json(['data'=>$products]);
    }
    public function addProduct(Request $request)
    {
        try {
            // Validate the incoming request data
        

        // Handle the image upload
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imagePath = $image->store('products', 'public'); // Store image in the 'public/products' directory
        }

        // Create a new product
        $product = new Product();
        $product->Product_name = $request->input('name');
        $product->Image = $imagePath; // Save the image path in the database
        $product->save();

        // Return a response
        return response()->json([
            'message' => 'Product added successfully!',
            'product' => $product,
        ]);
        } catch (\Exception $e) {
            //throw $th;
            return response()->json($e->getMessage());
        }
    }
}
