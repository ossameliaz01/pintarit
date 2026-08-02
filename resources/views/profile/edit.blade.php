<x-sidebar-layout>
    <!-- Header -->
    <div class="mb-8">
        <h1 class="text-[32px] font-extrabold text-gray-800 mb-2">Pengaturan</h1>
        <p class="text-gray-400 font-medium text-[17px]">Kelola preferensi dan akun Anda</p>
    </div>

    <!-- Main Card -->
    <div class="bg-white border border-gray-200 rounded-[16px] max-w-4xl shadow-sm overflow-hidden">
        
        <!-- Section Header -->
        <div class="border-b border-gray-200 p-6 flex items-center space-x-4">
            <div class="w-10 h-10 bg-[#c4bbf0] rounded-xl flex items-center justify-center text-white shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                </svg>
            </div>
            <div>
                <h2 class="text-[17px] font-bold text-gray-800">Profil</h2>
                <p class="text-[13px] text-gray-400 font-medium">Informasi akun Anda</p>
            </div>
        </div>

        <!-- Form Area -->
        <div class="p-8">
            <div class="flex flex-col md:flex-row gap-12">
                
                <!-- Profile Image -->
                <div class="flex-shrink-0 flex justify-center md:justify-start pt-2">
                    <div class="w-48 h-48 rounded-full border-4 border-white shadow-lg overflow-hidden bg-gray-100">
                        <img src="https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" alt="Profile" class="w-full h-full object-cover">
                    </div>
                </div>

                <!-- Form Fields -->
                <div class="flex-1 w-full max-w-[450px]">
                    <form method="post" action="{{ route('profile.update') }}">
                        @csrf
                        @method('patch')

                        <!-- Field 1 -->
                        <div class="mb-5">
                            <label class="block text-gray-800 font-bold mb-2 text-[13px]">Nama Lengkap</label>
                            <input type="text" name="name" class="w-full border border-gray-300 rounded-[8px] px-4 py-2.5 text-[14px] text-gray-700 focus:outline-none focus:border-[#6c5ce7] focus:ring-1 focus:ring-[#6c5ce7] transition shadow-sm placeholder:text-gray-400" value="{{ old('name', $user->name ?? 'Gema Putri') }}">
                        </div>

                        <!-- Field 2 -->
                        <div class="mb-5">
                            <label class="block text-gray-800 font-bold mb-2 text-[13px]">Email</label>
                            <input type="email" name="email" class="w-full border border-gray-300 rounded-[8px] px-4 py-2.5 text-[14px] text-gray-700 focus:outline-none focus:border-[#6c5ce7] focus:ring-1 focus:ring-[#6c5ce7] transition shadow-sm placeholder:text-gray-400" value="{{ old('email', $user->email ?? 'gemaputri@gmail.com') }}">
                        </div>

                        <!-- Field 3 (Mock only, not in DB yet) -->
                        <div class="mb-8">
                            <label class="block text-gray-800 font-bold mb-2 text-[13px]">Jurusan</label>
                            <input type="text" class="w-full border border-gray-300 rounded-[8px] px-4 py-2.5 text-[14px] text-gray-700 focus:outline-none focus:border-[#6c5ce7] focus:ring-1 focus:ring-[#6c5ce7] transition shadow-sm placeholder:text-gray-400 bg-gray-50 cursor-not-allowed" value="Teknik Komputer dan Jaringan" readonly>
                        </div>

                        <!-- Buttons -->
                        <div class="flex items-center space-x-3">
                            <button type="submit" class="bg-[#6c5ce7] hover:bg-[#5b4bc4] text-white font-bold py-2.5 px-6 rounded-[8px] transition shadow-sm text-[13px]">
                                Simpan Perubahan
                            </button>
                            <button type="button" class="bg-[#f3f4fa] hover:bg-[#e4e5f1] text-[#3f317b] font-bold py-2.5 px-6 rounded-[8px] transition text-[13px]">
                                Batalkan
                            </button>
                        </div>
                    </form>
                </div>
                
            </div>
        </div>
    </div>
</x-sidebar-layout>
