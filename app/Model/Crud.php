<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Crud extends Model
{
    protected $table 	= "programmer";
    public $timestamps  = false; 

    protected $fillable = [
    	'name', 'email','status'
    ]; 
}
