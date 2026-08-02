<x-sidebar-layout>
    <!-- Header -->
    <div class="mb-8">
        <h1 class="text-3xl font-extrabold text-gray-800 mb-2">Pengaturan</h1>
        <p class="text-gray-500 font-medium">Kelola preferensi dan akun Anda</p>
    </div>

    <!-- Main Card -->
    <div class="bg-white border border-gray-200 rounded-2xl max-w-4xl shadow-sm overflow-hidden">
        
        <!-- Section Header -->
        <div class="border-b border-gray-100 p-6 flex items-center space-x-4">
            <div class="w-10 h-10 bg-[#c4bbf0] rounded-lg flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                </svg>
            </div>
            <div>
                <h2 class="text-lg font-bold text-gray-800">Profil</h2>
                <p class="text-sm text-gray-500">Informasi akun Anda</p>
            </div>
        </div>

        <!-- Form Area -->
        <div class="p-8">
            <div class="flex flex-col md:flex-row gap-10">
                
                <!-- Profile Image -->
                <div class="flex-shrink-0 flex justify-center md:justify-start">
                    <div class="w-48 h-48 rounded-full border-4 border-white shadow-lg overflow-hidden bg-gray-100">
                        <!-- We use ui-avatars as a placeholder, but mockup shows a real person. We'll use a placeholder image or ui-avatar -->
                        <img src="https://ui-avatars.com/api/?name=Gema+Putri&background=6c5ce7&color=fff&size=200" alt="Profile" class="w-full h-full object-cover">
                    </div>
                </div>

                <!-- Form Fields -->
                <div class="flex-1 w-full">
                    <form method="post" action="{{ route('profile.update') }}">
                        @csrf
                        @method('patch')

                        <!-- Field 1 -->
                        <div class="mb-5">
                            <label class="block text-gray-800 font-bold mb-2 text-sm">Nama Lengkap</label>
                            <input type="text" name="name" class="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-gray-700 focus:outline-none focus:border-[#6c5ce7] focus:ring-1 focus:ring-[#6c5ce7] transition" value="{{ old('name', $user->name ?? 'Gema Putri') }}">
                        </div>

                        <!-- Field 2 -->
                        <div class="mb-5">
                            <label class="block text-gray-800 font-bold mb-2 text-sm">Email</label>
                            <input type="email" name="email" class="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-gray-700 focus:outline-none focus:border-[#6c5ce7] focus:ring-1 focus:ring-[#6c5ce7] transition" value="{{ old('email', $user->email ?? 'gemaputri@gmail.com') }}">
                        </div>

                        <!-- Field 3 (Mock only, not in DB yet) -->
                        <div class="mb-8">
                            <label class="block text-gray-800 font-bold mb-2 text-sm">Jurusan</label>
                            <input type="text" class="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-gray-700 focus:outline-none focus:border-[#6c5ce7] focus:ring-1 focus:ring-[#6c5ce7] transition" value="Teknik Komputer dan Jaringan" readonly>
                        </div>

                        <!-- Buttons -->
                        <div class="flex items-center space-x-4">
                            <button type="submit" class="bg-[#6c5ce7] hover:bg-[#5b4bc4] text-white font-semibold py-3 px-6 rounded-xl transition shadow-sm">
                                Simpan Perubahan
                            </button>
                            <button type="button" class="bg-[#f3f4fa] hover:bg-[#e4e5f1] text-[#3f317b] font-semibold py-3 px-6 rounded-xl transition">
                                Batalkan
                            </button>
                        </div>
                    </form>
                </div>
                
            </div>
        </div>
    </div>
</x-sidebar-layout>
