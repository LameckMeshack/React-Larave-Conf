<?php

namespace App\Http\Controllers;

use Validator;
use Illuminate\Http\Request;
use App\Models\Frequency;

class FrequencyController extends Controller
{
    //
    public function index()
    {
        $frequencies = Frequency::all();

        return response()->json([
            'frequencies' => $frequencies
        ], 200);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|min:2|max:100',
        ]);

        if($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $frequency = Frequency::create([
            'name' => $request->name,
        ]);

        return response()->json([
            // 'frequency' => $frequency,
            'message' => 'Frequency created successfully'
        ], 201);
    }
}
