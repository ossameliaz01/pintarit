<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

// Serve the React SPA for the root URL
Route::get('/', function () {
    return view('react-app');
});

// Moved catch-all to the bottom

require __DIR__.'/auth.php';

use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\DictionaryController;

Route::middleware('auth')->prefix('api')->group(function () {
    Route::get('/user/me', [UserController::class, 'me']);
    Route::post('/user/preference', [UserController::class, 'updatePreference']);
    Route::post('/user/xp', [UserController::class, 'addXp']);
});

Route::get('/api/dictionary', [DictionaryController::class, 'index']);

// SPA Catch-all Route must be at the very bottom
Route::get('/{any}', function () {
    return view('react-app');
})->where('any', '.*');
