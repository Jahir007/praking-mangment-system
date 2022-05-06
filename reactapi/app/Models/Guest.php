<?php

namespace App\Models;

use App\Models\Slottrans;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;


class Guest extends Model
{
    use HasFactory;
    protected $table = 'tbl_guest_booking';
    protected $fillable = [
        'guest_name',
        'lc_number',
        'image',
        'duration',
        'slot_id',
        'start_date',
        'charge',
    ];


    protected $with = ['slottrans'];
    public function slottrans()
    {
        return $this->belongsTo(Slottrans::class, 'slot_id', 'id');
    }



}
