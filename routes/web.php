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

require __DIR__.'/auth.php';

use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\DictionaryController;

Route::middleware('auth')->prefix('api')->group(function () {
    Route::get('/user/me', [UserController::class, 'me']);
    Route::post('/user/preference', [UserController::class, 'updatePreference']);
    Route::post('/user/xp', [UserController::class, 'addXp']);
});

Route::get('/api/dictionary', [DictionaryController::class, 'index']);
