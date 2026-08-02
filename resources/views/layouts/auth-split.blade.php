<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'PintarIT') }}</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">

    <!-- Scripts -->
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="font-sans antialiased text-gray-900 bg-white">
    <div class="min-h-screen flex flex-col md:flex-row">
        <!-- Left Side (Purple Background) -->
        <div class="w-full md:w-1/2 bg-[#6c5ce7] text-white p-8 md:p-16 flex flex-col justify-between">
            <div>
                <!-- Header/Logo -->
                <div class="flex items-center space-x-3 mb-16">
                    <div class="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-[#6c5ce7]">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                    </div>
                    <span class="text-2xl font-bold tracking-tight">PintarIT</span>
                </div>

                <!-- Left Content Slot -->
                {{ $leftContent ?? '' }}
            </div>

            <div class="mt-16 text-sm text-indigo-200">
                &copy; {{ date('Y') }} PintarIT. All rights reserved.
            </div>
        </div>

        <!-- Right Side (Form) -->
        <div class="w-full md:w-1/2 flex items-center justify-center p-8 sm:p-16">
            <div class="w-full max-w-md">
                {{ $slot }}
            </div>
        </div>
    </div>
</body>
</html>
