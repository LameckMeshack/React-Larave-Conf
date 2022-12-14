<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Status extends Model
{
    use HasFactory;

     protected $fillable = [
        'name',
    ];

    public function activities()
    {
        return $this->hasMany(Activity::class);
    }
    
  //status have many events
    public function events()
    {
        return $this->hasMany(Event::class);
    }

}