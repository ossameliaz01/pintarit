<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Masuk - Mappy Path</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="font-sans antialiased text-gray-900 bg-white">
    <div class="flex h-screen overflow-hidden">
        
        <!-- Left Panel -->
        <div class="hidden lg:flex lg:w-1/2 bg-[#6c5ce7] p-12 flex-col justify-between relative">
            <!-- Logo -->
            <div class="flex items-center space-x-3 z-10">
                <div class="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-[#6c5ce7]">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z"/>
                    </svg>
                </div>
                <span class="text-2xl font-bold text-white">Mappy Path</span>
            </div>

            <div class="z-10 mt-16">
                <h1 class="text-4xl font-extrabold text-white mb-4 leading-tight">Halo, sudah kembali!</h1>
                <p class="text-[19px] text-white/90 mb-12">Yuk, lanjut belajar dari mana kamu berhenti.</p>

                <div class="grid grid-cols-2 gap-4 max-w-lg">
                    <!-- Card 1 -->
                    <div class="border border-white/30 bg-white/10 p-5 rounded-[12px] backdrop-blur-sm">
                        <div class="text-[32px] font-extrabold text-white mb-1">19</div>
                        <div class="text-[13px] font-medium text-white/80">Materi tersedia</div>
                    </div>
                    <!-- Card 2 -->
                    <div class="border border-white/30 bg-white/10 p-5 rounded-[12px] backdrop-blur-sm">
                        <div class="text-[32px] font-extrabold text-white mb-1">4 CP</div>
                        <div class="text-[13px] font-medium text-white/80">Capaian Pembelajaran</div>
                    </div>
                    <!-- Card 3 -->
                    <div class="border border-white/30 bg-white/10 p-5 rounded-[12px] backdrop-blur-sm">
                        <div class="text-[32px] font-extrabold text-white mb-1">1K+</div>
                        <div class="text-[13px] font-medium text-white/80">Siswa aktif</div>
                    </div>
                    <!-- Card 4 -->
                    <div class="border border-white/30 bg-white/10 p-5 rounded-[12px] backdrop-blur-sm">
                        <div class="text-[32px] font-extrabold text-white mb-1">100%</div>
                        <div class="text-[13px] font-medium text-white/80">Gratis selamanya</div>
                    </div>
                </div>
            </div>

            <div class="z-10 text-white/70 text-sm font-medium">
                © 2026 Mappy Path. All rights reserved.
            </div>
        </div>

        <!-- Right Panel -->
        <div class="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white overflow-y-auto">
            <div class="w-full max-w-[400px]">
                <div class="mb-10">
                    <h2 class="text-4xl font-extrabold text-[#6c5ce7] mb-2">Masuk</h2>
                    <p class="text-gray-600 text-[17px] font-medium">Masuk ke akunmu</p>
                </div>

                <form method="POST" action="{{ route('login') }}" class="space-y-6">
                    @csrf
                    <div>
                        <label class="block text-[13px] font-bold text-gray-800 mb-2">Email</label>
                        <input type="email" name="email" value="{{ old('email') }}" class="w-full px-4 py-3 rounded-[8px] border border-gray-300 focus:border-[#6c5ce7] focus:ring focus:ring-indigo-100 transition shadow-sm placeholder:text-gray-400 text-[15px]" placeholder="gemaPutri@gmail.com" required autofocus>
                        <x-input-error :messages="$errors->get('email')" class="mt-2" />
                    </div>

                    <div>
                        <label class="block text-[13px] font-bold text-gray-800 mb-2">Password</label>
                        <div class="relative" x-data="{ show: false }">
                            <input :type="show ? 'text' : 'password'" name="password" class="w-full px-4 py-3 rounded-[8px] border border-gray-300 focus:border-[#6c5ce7] focus:ring focus:ring-indigo-100 transition shadow-sm placeholder:text-gray-400 text-[15px]" placeholder="gemaputri123" required>
                            <div class="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer" @click="show = !show">
                                <svg x-show="!show" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 hover:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                                <svg x-show="show" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 hover:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="display: none;">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                </svg>
                            </div>
                        </div>
                        <x-input-error :messages="$errors->get('password')" class="mt-2" />
                    </div>

                    <div class="pt-2">
                        <button type="submit" class="w-full bg-[#6c5ce7] hover:bg-[#5b4bc4] text-white font-bold py-3 px-4 rounded-[8px] transition duration-200 shadow-sm text-[15px]">
                            Masuk
                        </button>
                    </div>

                    <div class="text-center mt-6 text-[13px] text-gray-500 font-medium">
                        Tidak Punya Akun? <a href="{{ route('register') }}" class="text-[#2d3748] font-bold hover:underline">Daftar</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</body>
</html>
