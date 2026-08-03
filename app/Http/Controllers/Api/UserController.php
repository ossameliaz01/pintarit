<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function me(Request $request)
    {
        return response()->json($request->user());
    }

    public function updatePreference(Request $request)
    {
        $request->validate([
            'tech_language_pref' => 'required|in:Beginner,Pro,Expert',
        ]);

        $user = $request->user();
        $user->tech_language_pref = $request->tech_language_pref;
        $user->save();

        return response()->json(['message' => 'Preference updated successfully', 'user' => $user]);
    }

    public function addXp(Request $request)
    {
        $request->validate([
            'xp' => 'required|integer|min:1',
        ]);

        $user = $request->user();
        $user->xp += $request->xp;
        
        // Simple leveling logic: Every 1000 XP = level up (just an example of logic)
        // Level Pemula, Menengah, Mahir, Ahli
        if ($user->xp >= 3000) {
            $user->level = 'Ahli';
        } elseif ($user->xp >= 1500) {
            $user->level = 'Mahir';
        } elseif ($user->xp >= 500) {
            $user->level = 'Menengah';
        }

        $user->save();

        return response()->json([
            'message' => 'XP added successfully', 
            'xp' => $user->xp,
            'level' => $user->level
        ]);
    }
}
