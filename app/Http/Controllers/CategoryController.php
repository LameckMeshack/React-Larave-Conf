<?php

namespace App\Http\Controllers;

use Validator;
use Illuminate\Http\Request;
use App\Models\Category;

class CategoryController extends Controller
{
    //

    public function index()
    {
        $categories = Category::all();

        return response()->json( $categories, 200);
    
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|min:2|max:100',
        ]);

        if($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $category = Category::create([
            'name' => $request->name,
        ]);

        return response()->json([
            // 'category' => $category,
            'message' => 'Category created successfully'
        ], 201);
    }
}
