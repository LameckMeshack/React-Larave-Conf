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

    protected $appends = [
        'created_by'
    ];


//    event is related to one frequency, category, department and user
    public function frequency()
    {
        return $this->belongsTo(Frequency::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function users()
    {
        return $this->belongsToMany(User::class, 'event_user', 'event_id', 'user_id');
    }

    public function getCreatedByAttribute()
    {
        return $this->users()->wherePivotNotNull('user_id')->first();
    }

    public function department()
    {
        return $this->belongsTo(Department::class);
    }
}
