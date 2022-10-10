<?php

namespace App\Http\Controllers;


use Validator;
use App\Models\Activity;
use Illuminate\Http\Request;

class ActivityController extends Controller
{
    //
    public function index()
    {
        $activities = Activity::all();

        return response()->json( $activities, 200);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|min:2|max:100',
        ]);

        if($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $activity = Activity::create([
            'name' => $request->name,
        ]);

        return response()->json([
            // 'activity' => $activity,
            'message' => 'Activity created successfully'
        ], 201);
    }
}
