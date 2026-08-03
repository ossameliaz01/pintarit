<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Dictionary;

class DictionaryController extends Controller
{
    public function index()
    {
        $terms = Dictionary::all();
        return response()->json($terms);
    }
}
