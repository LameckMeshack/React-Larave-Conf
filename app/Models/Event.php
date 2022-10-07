<?php

namespace App\Models;

use Validator;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'frequency_id',
        'description',
        'created_by',
        'category_id',
        'department_id',
        'start_date',
        'lead_date',
        'venue',
        'poster',

    ];


    public function frequencies()
    {
        return $this->belongsTo(Frequency::class);
    }

    public function categories()
    {
        return $this->belongsTo(Category::class);
    }

    public function users()
    {
        return $this->belongsToMany(User::class);
    }


}
