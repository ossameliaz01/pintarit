<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>PintarIT - Wujudkan Impianmu di Dunia IT</title>
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <!-- Tailwind CSS -->
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="font-sans antialiased text-gray-900 bg-white">
    
    <!-- Navbar -->
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div class="flex justify-between items-center">
            <div class="flex items-center space-x-2">
                <div class="w-8 h-8 bg-[#6c5ce7] rounded-lg flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z"/>
                    </svg>
                </div>
                <span class="text-xl font-bold text-gray-800 tracking-tight">PintarIT</span>
            </div>
            
            @if (Route::has('login'))
                <div class="flex items-center space-x-4">
                    @auth
                        <a href="{{ url('/dashboard') }}" class="text-gray-600 hover:text-gray-900 font-medium px-4 py-2">Dashboard</a>
                    @else
                        <a href="{{ route('login') }}" class="text-gray-600 hover:text-gray-900 font-semibold px-4 py-2 rounded-lg hover:bg-gray-50 transition">Masuk</a>
                        @if (Route::has('register'))
                            <a href="{{ route('register') }}" class="bg-[#6c5ce7] hover:bg-[#5b4bc4] text-white font-semibold px-5 py-2.5 rounded-lg shadow-sm transition">Daftar Gratis</a>
                        @endif
                    @endauth
                </div>
            @endif
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
        <h1 class="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
            Wujudkan Impianmu di <span class="text-[#6c5ce7]">Dunia IT</span>
        </h1>
        <p class="text-xl text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">
            Platform roadmap pembelajaran yang dirancang khusus untuk siswa SMK Teknik Komputer dan Jaringan. Rencanakan, pantau, dan capai target belajarmu dengan lebih terstruktur.
        </p>
        <div class="flex justify-center mb-16">
            <a href="{{ route('register') }}" class="inline-flex items-center bg-[#6c5ce7] hover:bg-[#5b4bc4] text-white font-semibold px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl transition transform hover:-translate-y-0.5">
                Mulai Gratis
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
            </a>
        </div>
        
        <!-- Mock Widget Image -->
        <div class="max-w-3xl mx-auto bg-white border border-gray-100 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-6 md:p-8 transform rotate-1 hover:rotate-0 transition duration-500">
            <div class="flex items-center space-x-4 mb-6 border-b border-gray-100 pb-4">
                <div class="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-[#6c5ce7]">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                </div>
                <div class="text-left">
                    <h3 class="font-bold text-gray-800 text-lg">Roadmap Terstruktur</h3>
                    <p class="text-sm text-gray-500">Progress Belajar - 75% selesai</p>
                </div>
            </div>
            <div class="grid grid-cols-3 gap-4 text-center">
                <div class="bg-gray-50 p-4 rounded-xl">
                    <div class="text-2xl font-bold text-gray-800 mb-1">54</div>
                    <div class="text-xs text-gray-500 uppercase tracking-wide font-semibold">Materi</div>
                </div>
                <div class="bg-indigo-50 p-4 rounded-xl border border-indigo-100">
                    <div class="text-2xl font-bold text-[#6c5ce7] mb-1">15h</div>
                    <div class="text-xs text-[#6c5ce7] uppercase tracking-wide font-semibold">Minggu Ini</div>
                </div>
                <div class="bg-gray-50 p-4 rounded-xl">
                    <div class="text-2xl font-bold text-gray-800 mb-1">12</div>
                    <div class="text-xs text-gray-500 uppercase tracking-wide font-semibold">Badge</div>
                </div>
            </div>
        </div>
    </section>

    <!-- Features Section -->
    <section class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <span class="text-[#6c5ce7] font-semibold tracking-wider uppercase text-sm bg-indigo-100 px-3 py-1 rounded-full">Fitur Unggulan</span>
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">Semua yang kamu butuhkan ada disini</h2>
                <p class="text-gray-500 max-w-2xl mx-auto text-lg">Belajar jadi lebih mudah, terarah, dan menyenangkan dengan fitur-fitur yang kami siapkan untukmu.</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <!-- Feature 1 -->
                <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
                    <div class="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-[#6c5ce7] mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-3">Roadmap Terstruktur</h3>
                    <p class="text-gray-500 leading-relaxed">Roadmap belajar yang sudah disusun oleh guru dan praktisi IT berpengalaman sesuai kurikulum TKJ.</p>
                </div>
                <!-- Feature 2 -->
                <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
                    <div class="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-500 mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-3">Pantau Progress</h3>
                    <p class="text-gray-500 leading-relaxed">Lihat perkembangan belajarmu setiap hari, minggu, dan bulan dengan grafik yang mudah dipahami.</p>
                </div>
                <!-- Feature 3 -->
                <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
                    <div class="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-500 mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-3">Target Belajar</h3>
                    <p class="text-gray-500 leading-relaxed">Atur target belajarmu sendiri dan dapatkan notifikasi untuk menjaga konsistensimu setiap minggu.</p>
                </div>
                <!-- Feature 4 -->
                <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
                    <div class="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-500 mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-3">Materi Lengkap</h3>
                    <p class="text-gray-500 leading-relaxed">Materi belajar yang lengkap dari teori hingga praktek, dilengkapi gambar, video, dan animasi interaktif.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Stats Banner -->
    <section class="bg-gradient-to-r from-[#5f4ed0] to-[#7f71e6] py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
                <div>
                    <div class="text-4xl font-extrabold mb-2">19+</div>
                    <div class="text-indigo-100 font-medium">Video Materi</div>
                </div>
                <div>
                    <div class="text-4xl font-extrabold mb-2">4 CP</div>
                    <div class="text-indigo-100 font-medium">Capaian Pembelajaran</div>
                </div>
                <div>
                    <div class="text-4xl font-extrabold mb-2">1K+</div>
                    <div class="text-indigo-100 font-medium">Siswa Aktif</div>
                </div>
                <div>
                    <div class="text-4xl font-extrabold mb-2">100%</div>
                    <div class="text-indigo-100 font-medium">Gratis Selamanya</div>
                </div>
            </div>
        </div>
    </section>

    <!-- 3 Steps Section -->
    <section class="py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <span class="text-[#6c5ce7] font-semibold tracking-wider uppercase text-sm bg-indigo-100 px-3 py-1 rounded-full">Langkah Mudah</span>
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">Mulai belajar dalam 3 langkah</h2>
                <p class="text-gray-500 max-w-2xl mx-auto text-lg">Tidak perlu bingung harus mulai dari mana. Kami sudah siapkan semuanya untukmu.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div class="relative text-center">
                    <div class="w-16 h-16 mx-auto bg-indigo-50 text-[#6c5ce7] rounded-full flex items-center justify-center text-2xl font-bold mb-6 relative z-10 border-4 border-white shadow-sm">1</div>
                    <h3 class="text-xl font-bold text-gray-900 mb-3">Daftar Akun</h3>
                    <p class="text-gray-500">Buat akun dalam hitungan detik. Gratis dan tidak perlu kartu kredit atau bayaran sama sekali.</p>
                </div>
                <div class="relative text-center">
                    <div class="w-16 h-16 mx-auto bg-indigo-50 text-[#6c5ce7] rounded-full flex items-center justify-center text-2xl font-bold mb-6 relative z-10 border-4 border-white shadow-sm">2</div>
                    <h3 class="text-xl font-bold text-gray-900 mb-3">Pilih Roadmap</h3>
                    <p class="text-gray-500">Pilih jalur belajar sesuai tingkat kemampuanmu, mulai dari yang paling dasar hingga ahli.</p>
                </div>
                <div class="relative text-center">
                    <div class="w-16 h-16 mx-auto bg-indigo-50 text-[#6c5ce7] rounded-full flex items-center justify-center text-2xl font-bold mb-6 relative z-10 border-4 border-white shadow-sm">3</div>
                    <h3 class="text-xl font-bold text-gray-900 mb-3">Belajar & Raih Badge</h3>
                    <p class="text-gray-500">Selesaikan materi satu per satu, pantau progressmu, dan kumpulkan badge sebagai bukti keahlianmu.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="py-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mb-20">
        <div class="bg-gradient-to-br from-[#6c5ce7] to-[#8c7df0] rounded-3xl p-10 md:p-16 text-center text-white shadow-xl relative overflow-hidden">
            <!-- Decorative circles -->
            <div class="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white opacity-10"></div>
            <div class="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-white opacity-10"></div>
            
            <div class="relative z-10">
                <h2 class="text-3xl md:text-5xl font-bold mb-6">Siap memulai perjalanan belajarmu?</h2>
                <p class="text-indigo-100 text-lg md:text-xl mb-10 max-w-3xl mx-auto">Bergabung bersama 1K+ siswa SMK TKJ yang sudah belajar lebih terstruktur bersama PintarIT. Gratis selamanya.</p>
                <a href="{{ route('register') }}" class="inline-block bg-white text-[#6c5ce7] font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:bg-gray-50 transition transform hover:-translate-y-1">
                    Daftar Sekarang - Gratis!
                </a>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-[#2d2459] text-gray-300 py-12 border-t border-[#3f3473]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
            <div class="flex items-center justify-center space-x-2 mb-6">
                <div class="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z"/>
                    </svg>
                </div>
                <span class="text-2xl font-bold text-white tracking-tight">PintarIT</span>
            </div>
            
            <p class="max-w-md text-sm text-gray-400 mb-8 leading-relaxed">
                Platform roadmap pembelajaran khusus untuk siswa SMK Teknik Komputer dan Jaringan. Belajar lebih terstruktur, gratis selamanya.
            </p>
            
            <div class="flex justify-center space-x-6 mb-8">
                <!-- Social links placeholders -->
                <a href="#" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/20 transition text-white">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                </a>
                <a href="#" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/20 transition text-white">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" /></svg>
                </a>
            </div>
            
            <div class="w-full flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 pt-8 border-t border-white/5">
                <p>&copy; {{ date('Y') }} PintarIT. All rights reserved.</p>
                <div class="flex space-x-6 mt-4 md:mt-0">
                    <a href="#" class="hover:text-white transition">Privacy Policy</a>
                    <a href="#" class="hover:text-white transition">Terms of Service</a>
                </div>
            </div>
        </div>
    </footer>
</body>
</html>
