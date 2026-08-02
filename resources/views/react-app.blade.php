<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{{ config('app.name', 'Pintarit React App') }}</title>
    
    <!-- CSRF Token for Laravel API calls -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    
    <!-- Vite: React Refresh and Asset Loading -->
    @viteReactRefresh
    @vite(['resources/css/app.css', 'resources/js/main.tsx'])
</head>
<body>
    <!-- The React application will be mounted here -->
    <div id="root"></div>
</body>
</html>
