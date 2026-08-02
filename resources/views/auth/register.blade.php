<x-auth-split-layout>
    <x-slot name="leftContent">
        <h1 class="text-4xl font-bold mb-4 tracking-tight leading-tight">Daftar untuk menggunakan PintarIT</h1>
        <p class="text-xl mb-10 text-indigo-100 font-medium">Belajar, nggak perlu bingung.</p>

        <ul class="space-y-6">
            <li class="flex items-center space-x-4">
                <div class="flex-shrink-0 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white backdrop-blur-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                </div>
                <span class="text-lg font-medium text-white">Gratis selamanya, tanpa biaya tersembunyi</span>
            </li>
            <li class="flex items-center space-x-4">
                <div class="flex-shrink-0 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white backdrop-blur-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                </div>
                <span class="text-lg font-medium text-white">19 materi video</span>
            </li>
            <li class="flex items-center space-x-4">
                <div class="flex-shrink-0 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white backdrop-blur-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                </div>
                <span class="text-lg font-medium text-white">Roadmap belajar terstruktur sesuai kurikulum TKJ</span>
            </li>
            <li class="flex items-center space-x-4">
                <div class="flex-shrink-0 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white backdrop-blur-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                </div>
                <span class="text-lg font-medium text-white">Badge penyelesaian materi</span>
            </li>
            <li class="flex items-center space-x-4">
                <div class="flex-shrink-0 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white backdrop-blur-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                </div>
                <span class="text-lg font-medium text-white">Pantau progress belajar</span>
            </li>
        </ul>
    </x-slot>

    <div class="mb-8">
        <div class="flex items-center space-x-2 mb-4 text-xs font-semibold text-gray-400">
            <div class="h-2 w-16 bg-[#6c5ce7] rounded-full"></div>
            <div class="h-2 w-4 bg-gray-200 rounded-full"></div>
            <div class="h-2 w-4 bg-gray-200 rounded-full"></div>
            <span class="ml-2">Langkah 1 dari 3</span>
        </div>
        <h2 class="text-4xl font-extrabold text-[#6c5ce7] mb-2 tracking-tight">Buat Akun Baru</h2>
        <p class="text-gray-500 font-medium">Daftar dan mulai perjalanan belajarmu</p>
    </div>

    <form method="POST" action="{{ route('register') }}">
        @csrf

        <!-- Name -->
        <div class="mb-5">
            <label for="name" class="block font-semibold text-gray-700 text-sm mb-2">Nama Lengkap</label>
            <input id="name" type="text" name="name" value="{{ old('name') }}" required autofocus autocomplete="name"
                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#6c5ce7] focus:ring focus:ring-[#6c5ce7] focus:ring-opacity-20 transition duration-200"
                placeholder="Masukkan nama lengkap">
            <x-input-error :messages="$errors->get('name')" class="mt-2" />
        </div>

        <!-- Email Address -->
        <div class="mb-5">
            <label for="email" class="block font-semibold text-gray-700 text-sm mb-2">Email</label>
            <input id="email" type="email" name="email" value="{{ old('email') }}" required autocomplete="username"
                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#6c5ce7] focus:ring focus:ring-[#6c5ce7] focus:ring-opacity-20 transition duration-200"
                placeholder="Masukkan email">
            <x-input-error :messages="$errors->get('email')" class="mt-2" />
        </div>

        <!-- Username (Visual Only per mock, maps to name for now or could be added later) -->
        <div class="mb-5">
            <label for="username" class="block font-semibold text-gray-700 text-sm mb-2">Username</label>
            <input id="username" type="text" name="username" value="{{ old('username') }}"
                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#6c5ce7] focus:ring focus:ring-[#6c5ce7] focus:ring-opacity-20 transition duration-200"
                placeholder="Contoh: putri_dewi">
            <p class="text-xs text-gray-400 mt-1">Huruf kecil, angka, dan underscore saja.</p>
        </div>

        <!-- Jurusan (Visual Only per mock) -->
        <div class="mb-5">
            <label for="jurusan" class="block font-semibold text-gray-700 text-sm mb-2">Jurusan</label>
            <input id="jurusan" type="text" name="jurusan" value="{{ old('jurusan') }}"
                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#6c5ce7] focus:ring focus:ring-[#6c5ce7] focus:ring-opacity-20 transition duration-200"
                placeholder="Masukkan jurusan">
        </div>

        <!-- Password -->
        <div class="mb-5 relative">
            <label for="password" class="block font-semibold text-gray-700 text-sm mb-2">Password</label>
            <input id="password" type="password" name="password" required autocomplete="new-password"
                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#6c5ce7] focus:ring focus:ring-[#6c5ce7] focus:ring-opacity-20 transition duration-200"
                placeholder="Masukkan password">
            <div class="absolute right-4 top-10 text-gray-400 cursor-pointer hover:text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                </svg>
            </div>
            <x-input-error :messages="$errors->get('password')" class="mt-2" />
        </div>

        <!-- Confirm Password -->
        <div class="mb-6 relative">
            <label for="password_confirmation" class="block font-semibold text-gray-700 text-sm mb-2">Konfirmasi Password</label>
            <input id="password_confirmation" type="password" name="password_confirmation" required autocomplete="new-password"
                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#6c5ce7] focus:ring focus:ring-[#6c5ce7] focus:ring-opacity-20 transition duration-200"
                placeholder="Ulangi password">
            <div class="absolute right-4 top-10 text-gray-400 cursor-pointer hover:text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                </svg>
            </div>
            <x-input-error :messages="$errors->get('password_confirmation')" class="mt-2" />
        </div>

        <div class="mb-6 flex items-start">
            <div class="flex items-center h-5">
                <input id="terms" type="checkbox" required class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-[#6c5ce7]">
            </div>
            <label for="terms" class="ml-2 text-sm font-medium text-gray-500">
                Saya menyetujui <a href="#" class="text-gray-700 font-bold hover:underline">syarat & ketentuan</a> yang berlaku
            </label>
        </div>

        <div>
            <button type="submit" class="w-full bg-[#6c5ce7] hover:bg-[#5b4bc4] text-white font-semibold py-3 px-4 rounded-lg transition duration-300 shadow-md hover:shadow-lg">
                Daftar Sekarang
            </button>
        </div>

        <div class="mt-8 text-center text-sm font-medium text-gray-600">
            Sudah Punya Akun? <a href="{{ route('login') }}" class="text-[#6c5ce7] hover:underline font-bold">Masuk</a>
        </div>
    </form>
</x-auth-split-layout>
