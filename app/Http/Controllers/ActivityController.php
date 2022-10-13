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
    //    get all activities that matches event id
        $activities = Activity::all();
        return response()->json( $activities, 200);
    }

    // public function getByEventId($id)
    // {
    //     $activities = Activity::with('event')->where('event_id', $id)->get();
    //     return response()->json( $activities, 200);
    // }
     //filter events by department_id
    public function getByEventId($event_id){
        
        dd( Activity::where('event_id', $event_id)->with('event')->get());
        return response()->json( $activities, 200);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|min:2|max:100',
            'incharge'=> 'required|integer',
            'status_id' => 'required|integer',
            'event_id' => 'required|integer',
            //boolean
            'received' => 'boolean',
            'start_date' => 'required|date',
        ]);

        if($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $activity = Activity::create(
            $request->all()
        );

        return response()->json([
            // 'activity' => $activity,
            'message' => 'Activity created successfully'
        ], 201);
    }
    

    //
}
