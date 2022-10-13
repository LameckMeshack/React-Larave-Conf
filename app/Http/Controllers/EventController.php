<?php

namespace App\Http\Controllers;

use Validator;
use Illuminate\Http\Request;
use App\Models\Event;

class EventController extends Controller
{
    //

    public function index()
    {
        // $events = Event::with('frequency','category','department','createdBy')->all();
        // event with all the relationships between the tables
        $events = Event::with('frequency','category','department','users')->get();
        return response()->json($events, 200);
    }

    //filter events by department_id
    public function filterByDepartment($department_id)
    {
        $events = Event::with('frequency','category','department','users')->where('department_id', $department_id)->get();
        return response()->json($events, 200);
    }

    public function store(Request $request)
    {
        // dd(request()->all());
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|min:2|max:100',
            'description' => 'required|string|min:2|max:1000',
            'start_date' => 'required|date',
            'lead_date' => 'required|date',
            'venue' => 'required|string|min:2|max:100',
            'department_id' => 'required|integer',
            'category_id' => 'required|integer',
            'frequency_id' => 'required|integer',
            'created_by' => 'required|integer',
            'activity_id' => 'required|integer',
            'poster' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        if($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        // handle image upload
        if($request->hasFile('poster')) {
            $image = $request->file('poster');
            $name = time().'.'.$image->getClientOriginalExtension();
            $destinationPath = public_path('/uploads/posters');
            $image->move($destinationPath, $name);
        }


        $event = Event::create([
            'name' => $request->name,
            'description' => $request->description,
            'start_date' => $request->start_date,
            'lead_date' => $request->lead_date,
            'venue' => $request->venue,
            'department_id' => $request->department_id,
            'category_id' => $request->category_id,
            'frequency_id' => $request->frequency_id,
            'created_by' => $request->created_by,
            'activity_id' => $request->activity_id,
            'poster' => $name,

        ]);

        return response()->json([
         'id'=> $event->id,
            'message' => 'Event created successfully'
        ], 201);
    }

    public function show($id)
    {
        $event = Event::with('frequency','category','department','users')->find($id);
        if(is_null($event)) {
            return response()->json(['message' => 'Event not found'], 404);
        }
        return response()->json($event, 200);
    }
}
