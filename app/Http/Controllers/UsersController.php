<?php 

namespace App\Http\Controllers;
use Validator;
use App\Models\User;


use Illuminate\Http\Request;

class UsersController extends Controller
{
    // get all the users
    public function index()
    {
        $users = User::all();
        
        return response()->json( $users, 200);
    }

   
    }

    