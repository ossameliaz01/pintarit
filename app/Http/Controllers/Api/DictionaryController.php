<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Dictionary;

class DictionaryController extends Controller
{
    public function index()
    {
        // Hardcoded data for fast/free deployment without DB
        $terms = [
            ['id' => 1, 'term' => 'HTML', 'definition' => 'HyperText Markup Language, the standard markup language for documents designed to be displayed in a web browser.'],
            ['id' => 2, 'term' => 'CSS', 'definition' => 'Cascading Style Sheets, used for describing the presentation of a document written in HTML.'],
            ['id' => 3, 'term' => 'JavaScript', 'definition' => 'A programming language that conforms to the ECMAScript specification, often used for web development.'],
            ['id' => 4, 'term' => 'API', 'definition' => 'Application Programming Interface, a way for two or more computer programs to communicate with each other.'],
            ['id' => 5, 'term' => 'Database', 'definition' => 'An organized collection of data, generally stored and accessed electronically from a computer system.'],
        ];

        return response()->json($terms);
    }
}
