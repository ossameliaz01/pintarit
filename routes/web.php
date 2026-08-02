<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

// Serve the React SPA for the root URL
Route::get('/', function () {
    return view('react-app');
});

// If you want any other URL to also load the React SPA (so users can refresh the page without 404)
Route::get('/{any}', function () {
    return view('react-app');
})->where('any', '.*');

// You can keep API routes or specific backend logic below if needed.
require __DIR__.'/auth.php';
