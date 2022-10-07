<?php

namespace App\Http\Controllers;
use Validator;
use App\Models\Role;


use Illuminate\Http\Request;

class RoleController extends Controller
{
    // get all the roles
    public function index()
    {
        $roles = Role::all();
        
        return response()->json([
            'roles' => $roles
        ], 200);
    }

    // store role
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|min:2|max:100',
        ]);

        if($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $role = Role::create([
            'name' => $request->name,
        ]);

        return response()->json([
            // 'role' => $role,
            'message' => 'Role created successfully'
        ], 201);
    }

    // update role
    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|min:2|max:100',
        ]);

        if($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $role = Role::find($id);

        if(!$role) {
            return response()->json([
                'message' => 'Role not found'
            ], 404);
        }

        $role->update([
            'name' => $request->name,
        ]);

        return response()->json([
            // 'role' => $role,
            'message' => 'Role updated successfully'
        ], 200);
    }

    // delete role
    public function destroy($id)
    {
        $role = Role::find($id);

        if(!$role) {
            return response()->json([
                'message' => 'Role not found'
            ], 404);
        }

        $role->delete();

        return response()->json([
            'message' => 'Role deleted successfully'
        ], 200);
    }
}

