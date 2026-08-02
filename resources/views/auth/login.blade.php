<x-auth-split-layout>
    <x-slot name="leftContent">
        <h1 class="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Halo, sudah kembali!</h1>
        <p class="text-xl mb-12 text-indigo-100 font-medium">Yuk, lanjut belajar dari mana kamu berhenti.</p>

        <div class="grid grid-cols-2 gap-4">
            <div class="border border-white/20 bg-white/10 rounded-xl p-5 backdrop-blur-sm hover:bg-white/20 transition duration-300">
                <div class="text-3xl font-extrabold mb-1">19</div>
                <div class="text-sm text-indigo-100 font-medium">Materi tersedia</div>
            </div>
            <div class="border border-white/20 bg-white/10 rounded-xl p-5 backdrop-blur-sm hover:bg-white/20 transition duration-300">
                <div class="text-3xl font-extrabold mb-1">4 CP</div>
                <div class="text-sm text-indigo-100 font-medium">Capaian Pembelajaran</div>
            </div>
            <div class="border border-white/20 bg-white/10 rounded-xl p-5 backdrop-blur-sm hover:bg-white/20 transition duration-300">
                <div class="text-3xl font-extrabold mb-1">1K+</div>
                <div class="text-sm text-indigo-100 font-medium">Siswa aktif</div>
            </div>
            <div class="border border-white/20 bg-white/10 rounded-xl p-5 backdrop-blur-sm hover:bg-white/20 transition duration-300">
                <div class="text-3xl font-extrabold mb-1">100%</div>
                <div class="text-sm text-indigo-100 font-medium">Gratis selamanya</div>
            </div>
        </div>
    </x-slot>

    <!-- Session Status -->
    <x-auth-session-status class="mb-4" :status="session('status')" />

    <div class="mb-8">
        <h2 class="text-4xl font-extrabold text-[#6c5ce7] mb-2 tracking-tight">Masuk</h2>
        <p class="text-gray-500 font-medium">Masuk ke akunmu</p>
    </div>

    <form method="POST" action="{{ route('login') }}">
        @csrf

        <!-- Email Address -->
        <div class="mb-5">
            <label for="email" class="block font-semibold text-gray-700 text-sm mb-2">Email</label>
            <input id="email" type="email" name="email" value="{{ old('email') }}" required autofocus autocomplete="username" 
                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#6c5ce7] focus:ring focus:ring-[#6c5ce7] focus:ring-opacity-20 transition duration-200"
                placeholder="Masukkan email">
            <x-input-error :messages="$errors->get('email')" class="mt-2" />
        </div>

        <!-- Password -->
        <div class="mb-6 relative">
            <label for="password" class="block font-semibold text-gray-700 text-sm mb-2">Password</label>
            <input id="password" type="password" name="password" required autocomplete="current-password"
                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#6c5ce7] focus:ring focus:ring-[#6c5ce7] focus:ring-opacity-20 transition duration-200"
                placeholder="Masukkan password">
            <div class="absolute right-4 top-10 text-gray-400 cursor-pointer hover:text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                </svg>
            </div>
            <x-input-error :messages="$errors->get('password')" class="mt-2" />
        </div>

        <div>
            <button type="submit" class="w-full bg-[#6c5ce7] hover:bg-[#5b4bc4] text-white font-semibold py-3 px-4 rounded-lg transition duration-300 shadow-md hover:shadow-lg">
                Masuk
            </button>
        </div>

        <div class="mt-8 text-center text-sm font-medium text-gray-600">
            Tidak Punya Akun? <a href="{{ route('register') }}" class="text-[#6c5ce7] hover:underline font-bold">Daftar</a>
        </div>
    </form>
</x-auth-split-layout>
