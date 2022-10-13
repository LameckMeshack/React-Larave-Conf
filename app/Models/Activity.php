<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Activity extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'incharge',
        'start_date',
        'received',
        'status',
        'event_id',
    ];

    // public function events()
    // {
    //     return $this->hasMany(Event::class);
    // }

    //one activity has one event
    public function event()
    {
        return $this->belongsTo(Event::class);
    }
    //one activity has one user
    public function user()
    {
        return $this->belongsTo(User::class,'incharge','id');
    }

    
}
