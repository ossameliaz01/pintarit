<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>PintarIT - Wujudkan Impianmu di Dunia IT</title>
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
    <!-- Tailwind CSS -->
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="font-sans antialiased text-gray-900 bg-white selection:bg-[#6c5ce7] selection:text-white">
    
    <!-- Navbar -->
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div class="flex justify-between items-center">
            <div class="flex items-center space-x-2">
                <div class="w-8 h-8 bg-[#6c5ce7] rounded-lg flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z"/>
                    </svg>
                </div>
                <span class="text-xl font-bold text-gray-800 tracking-tight">Mappy Path</span>
            </div>
            
            @if (Route::has('login'))
                <div class="flex items-center space-x-3">
                    @auth
                        <a href="{{ url('/dashboard') }}" class="text-gray-600 hover:text-gray-900 font-bold px-4 py-2">Dashboard</a>
                    @else
                        <a href="{{ route('login') }}" class="bg-[#f3f4fa] text-[#3f317b] hover:bg-[#e4e5f1] font-bold text-[14px] px-6 py-2.5 rounded-full transition">Masuk</a>
                        @if (Route::has('register'))
                            <a href="{{ route('register') }}" class="bg-[#6c5ce7] hover:bg-[#5b4bc4] text-white font-bold text-[14px] px-6 py-2.5 rounded-full shadow-sm transition">Daftar Gratis</a>
                        @endif
                    @endauth
                </div>
            @endif
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 text-center">
        <h1 class="text-5xl md:text-[56px] font-black text-gray-800 mb-6 tracking-tight leading-[1.1]">
            Wujudkan Impianmu di <span class="text-[#6c5ce7]">Dunia IT</span>
        </h1>
        <p class="text-[17px] text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
            Platform roadmap pembelajaran yang dirancang khusus untuk siswa SMK Teknik Komputer dan Jaringan. Rencanakan, pantau, dan capai target belajarmu dengan lebih terstruktur.
        </p>
        <div class="flex justify-center mb-12">
            <a href="{{ route('register') }}" class="inline-flex items-center bg-[#6c5ce7] hover:bg-[#5b4bc4] text-white font-bold text-[15px] px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl transition transform hover:-translate-y-0.5">
                Daftar Gratis
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
            </a>
        </div>

        <!-- Feature Pills -->
        <div class="flex justify-center space-x-6 mb-12">
            <div class="flex items-center text-gray-500 font-semibold text-[13px]">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Jam Belajar Fleksibel
            </div>
            <div class="flex items-center text-gray-500 font-semibold text-[13px]">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                100% Gratis
            </div>
            <div class="flex items-center text-gray-500 font-semibold text-[13px]">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                Bebas Akses
            </div>
        </div>
        
        <!-- Mock Widget Image -->
        <div class="max-w-4xl mx-auto bg-white border-[3px] border-[#6c5ce7] rounded-[16px] shadow-[0_20px_60px_rgba(108,92,231,0.15)] p-6 md:p-8">
            <div class="flex items-center mb-6">
                <div class="w-12 h-12 bg-[#3f317b] rounded-[12px] flex items-center justify-center text-white mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                </div>
                <div class="text-left">
                    <h3 class="font-extrabold text-gray-800 text-[17px] leading-tight">Natasha Stefanie</h3>
                    <p class="text-[13px] font-medium text-gray-400">Siswa SMKN 1 - TKJ (XII)</p>
                </div>
            </div>
            
            <div class="flex justify-between items-end mb-2">
                <span class="text-[12px] font-bold text-gray-400">Progress Minggu ini</span>
                <span class="text-[12px] font-bold text-gray-600">Sisa 3 materi</span>
            </div>
            <div class="w-full bg-[#f2f0f4] rounded-full h-2 mb-8">
                <div class="bg-[#6c5ce7] h-2 rounded-full" style="width: 75%"></div>
            </div>

            <div class="grid grid-cols-3 gap-4 md:gap-6 text-center">
                <div class="bg-[#f2f0f4] p-4 md:p-5 rounded-[12px]">
                    <div class="text-[20px] md:text-[24px] font-black text-gray-800 mb-0.5">54</div>
                    <div class="text-[11px] text-gray-500 font-bold">Modul</div>
                </div>
                <div class="bg-[#f2f0f4] p-4 md:p-5 rounded-[12px]">
                    <div class="text-[20px] md:text-[24px] font-black text-[#6c5ce7] mb-0.5">15h</div>
                    <div class="text-[11px] text-gray-500 font-bold">Minggu ini</div>
                </div>
                <div class="bg-[#f2f0f4] p-4 md:p-5 rounded-[12px]">
                    <div class="text-[20px] md:text-[24px] font-black text-[#10b981] mb-0.5">12</div>
                    <div class="text-[11px] text-gray-500 font-bold">Badge</div>
                </div>
            </div>
        </div>
    </section>

    <!-- Features Section -->
    <section class="py-24">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span class="text-xs font-bold text-gray-400 tracking-widest uppercase bg-gray-100 px-3 py-1.5 rounded-full mb-6 inline-block">Fitur Unggulan</span>
            <h2 class="text-[36px] font-extrabold text-gray-900 mb-6">Semua yang kamu butuhkan<br>ada disini</h2>
            <p class="text-gray-500 text-[17px] mb-16 font-medium max-w-2xl mx-auto">Belajar jadi lebih mudah, terarah, dan menyenangkan dengan fitur-fitur yang kami siapkan untukmu.</p>
            
            <!-- Grid Top 3 -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-8">
                <!-- Feature 1 -->
                <div class="bg-white p-8 rounded-[24px] border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] text-left hover:-translate-y-1 transition duration-300">
                    <div class="w-12 h-12 bg-indigo-50 rounded-[14px] flex items-center justify-center text-[#6c5ce7] mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                        </svg>
                    </div>
                    <h3 class="text-lg font-bold text-gray-900 mb-3">Roadmap Terstruktur</h3>
                    <p class="text-gray-500 text-sm font-medium leading-relaxed">Roadmap belajar yang sudah disusun oleh guru dan praktisi IT berpengalaman sesuai kurikulum TKJ.</p>
                    <a href="#" class="inline-block mt-4 text-[#3f317b] font-bold text-[10px] uppercase tracking-wider bg-[#f2f0f4] px-3 py-1.5 rounded-full">Gratis</a>
                </div>
                <!-- Feature 2 -->
                <div class="bg-white p-8 rounded-[24px] border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] text-left hover:-translate-y-1 transition duration-300">
                    <div class="w-10 h-10 bg-[#eef2fa] rounded-[10px] flex items-center justify-center text-[#4285f4] mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                        </svg>
                    </div>
                    <h3 class="text-lg font-bold text-gray-900 mb-3">Pantau Progress</h3>
                    <p class="text-gray-500 text-sm font-medium leading-relaxed">Lihat perkembangan belajarmu setiap hari, minggu, dan bulan dengan grafik yang mudah dipahami.</p>
                    <a href="#" class="inline-block mt-4 text-[#3f317b] font-bold text-[10px] uppercase tracking-wider bg-[#f2f0f4] px-3 py-1.5 rounded-full">Sesuai Kurikulum</a>
                </div>
                <!-- Feature 3 -->
                <div class="bg-white p-8 rounded-[24px] border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] text-left hover:-translate-y-1 transition duration-300">
                    <div class="w-10 h-10 bg-[#eef2fa] rounded-[10px] flex items-center justify-center text-[#4285f4] mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </div>
                    <h3 class="text-lg font-bold text-gray-900 mb-3">Target Belajar</h3>
                    <p class="text-gray-500 text-sm font-medium leading-relaxed">Atur target belajarmu sendiri dan dapatkan notifikasi untuk menjaga konsistensimu setiap minggu.</p>
                    <a href="#" class="inline-block mt-4 text-[#3f317b] font-bold text-[10px] uppercase tracking-wider bg-[#f2f0f4] px-3 py-1.5 rounded-full">Gratis</a>
                </div>
            </div>

            <!-- Grid Bottom 2 -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                <!-- Feature 4 -->
                <div class="bg-white p-8 rounded-[24px] border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] text-left hover:-translate-y-1 transition duration-300">
                    <div class="w-10 h-10 bg-[#eef2fa] rounded-[10px] flex items-center justify-center text-[#4285f4] mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h3 class="text-lg font-bold text-gray-900 mb-3">Evaluasi & Penilaian</h3>
                    <p class="text-gray-500 text-sm font-medium leading-relaxed">Uji pemahamanmu lewat kuis interaktif di setiap akhir sesi dan dapatkan nilai sertifikat.</p>
                    <a href="#" class="inline-block mt-4 text-[#3f317b] font-bold text-[10px] uppercase tracking-wider bg-[#f2f0f4] px-3 py-1.5 rounded-full">Lengkap</a>
                </div>
                <!-- Feature 5 -->
                <div class="bg-white p-8 rounded-[24px] border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] text-left hover:-translate-y-1 transition duration-300">
                    <div class="w-10 h-10 bg-[#eef2fa] rounded-[10px] flex items-center justify-center text-[#4285f4] mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                    </div>
                    <h3 class="text-lg font-bold text-gray-900 mb-3">UI Materi Lengkap</h3>
                    <p class="text-gray-500 text-sm font-medium leading-relaxed">Materi belajar yang lengkap dari teori hingga praktek, dilengkapi gambar dan animasi.</p>
                    <a href="#" class="inline-block mt-4 text-[#3f317b] font-bold text-[10px] uppercase tracking-wider bg-[#f2f0f4] px-3 py-1.5 rounded-full">Gratis</a>
                </div>
            </div>
        </div>
    </section>

    <!-- Stats Banner -->
    <section class="bg-gradient-to-r from-[#3f317b] via-[#5c4ac7] to-[#7f6cf5] py-16">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
                <div>
                    <div class="text-[36px] font-black mb-1">19+</div>
                    <div class="text-indigo-200 font-medium text-sm">Total materi</div>
                </div>
                <div>
                    <div class="text-[36px] font-black mb-1">4cp</div>
                    <div class="text-indigo-200 font-medium text-sm">Capaian Pembelajaran</div>
                </div>
                <div>
                    <div class="text-[36px] font-black mb-1">1K+</div>
                    <div class="text-indigo-200 font-medium text-sm">Siswa Aktif</div>
                </div>
                <div>
                    <div class="text-[36px] font-black mb-1">100%</div>
                    <div class="text-indigo-200 font-medium text-sm">Gratis selamanya</div>
                </div>
            </div>
        </div>
    </section>

    <!-- 3 Steps Section -->
    <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <span class="text-xs font-bold text-gray-400 tracking-widest uppercase bg-gray-100 px-3 py-1.5 rounded-full mb-6 inline-block">Langkah Awal</span>
                <h2 class="text-[32px] font-extrabold text-gray-900 mt-4 mb-4">Mulai belajar dalam 3 langkah</h2>
                <p class="text-gray-500 text-[17px] font-medium max-w-2xl mx-auto">Tidak perlu bingung harus mulai dari mana. Kami sudah siapkan semuanya untukmu.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
                <div class="relative text-center p-8 bg-gray-50 rounded-[24px] border border-gray-100">
                    <div class="w-12 h-12 mx-auto bg-white text-[#6c5ce7] rounded-xl flex items-center justify-center mb-6 border border-gray-200 shadow-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                        </svg>
                    </div>
                    <h3 class="text-[17px] font-bold text-gray-900 mb-3">Daftar Gratis</h3>
                    <p class="text-gray-500 text-sm font-medium">Buat akun dalam hitungan detik. Gratis dan tidak ada biaya tersembunyi.</p>
                </div>
                <div class="relative text-center p-8 bg-gray-50 rounded-[24px] border border-gray-100">
                    <div class="w-12 h-12 mx-auto bg-white text-[#6c5ce7] rounded-xl flex items-center justify-center mb-6 border border-gray-200 shadow-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                        </svg>
                    </div>
                    <h3 class="text-[17px] font-bold text-gray-900 mb-3">Pilih Roadmap</h3>
                    <p class="text-gray-500 text-sm font-medium">Pilih jalur belajar sesuai dengan jenjang kelasmu, mulai dari kelas paling dasar.</p>
                </div>
                <div class="relative text-center p-8 bg-gray-50 rounded-[24px] border border-gray-100">
                    <div class="w-12 h-12 mx-auto bg-white text-[#6c5ce7] rounded-xl flex items-center justify-center mb-6 border border-gray-200 shadow-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                    </div>
                    <h3 class="text-[17px] font-bold text-gray-900 mb-3">Belajar & Raih Badge</h3>
                    <p class="text-gray-500 text-sm font-medium">Selesaikan materi satu per satu, pantau progressmu, dan kumpulkan badge.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mb-24">
        <div class="bg-[#6c5ce7] rounded-[24px] p-12 md:p-16 text-center text-white shadow-xl relative overflow-hidden border border-[#5b4bc4]">
            <div class="relative z-10">
                <h2 class="text-[32px] md:text-[40px] font-black mb-6 leading-tight">Siap memulai perjalanan belajarmu?</h2>
                <p class="text-indigo-100 text-[16px] font-medium mb-10 max-w-2xl mx-auto">Bergabung bersama 1K+ siswa SMK TKJ yang sudah belajar lebih terstruktur bersama MappyPath. Gratis selamanya.</p>
                <a href="{{ route('register') }}" class="inline-block bg-white text-[#6c5ce7] font-bold text-sm px-8 py-3.5 rounded-full shadow-md hover:bg-gray-50 transition transform hover:-translate-y-0.5">
                    Daftar Sekarang - Gratis!
                </a>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-[#211b3d] text-gray-300 py-16 border-t border-[#302759]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
            <div class="flex items-center space-x-3 mb-6">
                <div class="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-[#211b3d]">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z"/>
                    </svg>
                </div>
                <span class="text-2xl font-bold text-white tracking-tight">Mappy Path</span>
            </div>
            
            <p class="max-w-md text-sm font-medium text-gray-400 mb-10 text-center leading-relaxed">
                Platform roadmap pembelajaran khusus untuk siswa SMK Teknik Komputer dan Jaringan. Belajar lebih terstruktur, gratis selamanya.
            </p>
            
            <div class="flex justify-center space-x-4 mb-12">
                <div class="w-10 h-10 rounded-full bg-white/10"></div>
                <div class="w-10 h-10 rounded-full bg-white/10"></div>
                <div class="w-10 h-10 rounded-full bg-white/10"></div>
                <div class="w-10 h-10 rounded-full bg-white/10"></div>
            </div>
            
            <div class="w-full flex flex-col md:flex-row justify-between items-center text-[13px] text-gray-500 pt-8 border-t border-white/10">
                <p class="font-medium">&copy; {{ date('Y') }} Mappy Path. All rights reserved.</p>
                <div class="flex space-x-8 mt-4 md:mt-0 font-medium">
                    <a href="#" class="hover:text-white transition">Privacy Policy</a>
                    <a href="#" class="hover:text-white transition">Terms of Service</a>
                </div>
            </div>
        </div>
    </footer>
</body>
</html>
