<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/roadmap', function () {
    return view('roadmap');
})->middleware(['auth', 'verified'])->name('roadmap');

Route::middleware('auth')->group(function () {
    Route::get('/progress', function () {
        return view('progress');
    })->name('progress');
    
    Route::get('/target', function () {
        return view('targets');
    })->name('target');
    
    Route::get('/target/create', function () {
        return view('targets.create');
    })->name('target.create');
    
    Route::get('/materials/show', function () {
        return view('materials.show');
    })->name('materials.show');
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
