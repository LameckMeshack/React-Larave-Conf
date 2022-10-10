<?php

namespace App\Http\Controllers;

use Validator;
use App\Models\Department;
use Illuminate\Http\Request;

class DepartmentController extends Controller
{
    //

    // get all departments
    public function index()
    {
        $departments = Department::all();
        
        return response()->json( $departments, 200);
    }


    // store department
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|min:2|max:100',
        ]);

        if($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $department = Department::create([
            'name' => $request->name,
        ]);

        return response()->json([
            // 'department' => $department,
            'message' => 'Department created successfully'
        ], 201);
    }


    // update department
    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|min:2|max:100',
        ]);

        if($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $department = Department::find($id);

        if(!$department) {
            return response()->json([
                'message' => 'Department not found'
            ], 404);
        }

        $department->update([
            'name' => $request->name,
        ]);

        return response()->json([
            // 'department' => $department,
            'message' => 'Department updated successfully'
        ], 200);
    }


    // delete department
    public function destroy($id)
    {
        $department = Department::find($id);

        if(!$department) {
            return response()->json([
                'message' => 'Department not found'
            ], 404);
        }

        $department->delete();

        return response()->json([
            'message' => 'Department deleted successfully'
        ], 200);
    }

}
