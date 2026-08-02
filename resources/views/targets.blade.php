<x-sidebar-layout>
    <!-- Header -->
    <div class="mb-8">
        <h1 class="text-3xl font-extrabold text-gray-800 mb-2">Target Belajar Mingguan</h1>
        <p class="text-gray-500 font-medium">Tentukan apa yang ingin kamu capai minggu ini</p>
    </div>

    <!-- Tambah Target Button -->
    <div class="mb-8">
        <!-- In a real app, this would link to route('target.create') -->
        <a href="{{ route('target.create') }}" class="inline-flex items-center px-5 py-2.5 bg-[#6c5ce7] hover:bg-[#5b4bc4] text-white font-bold rounded-xl transition shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            Tambah Target
        </a>
    </div>

    <!-- State 1: Active Target (Target Aktif) -->
    <div class="mb-12">
        <h2 class="text-xl font-bold text-gray-800 mb-4">Target Aktif</h2>
        
        <div class="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 max-w-4xl shadow-sm">
            <div class="flex justify-between items-start mb-6">
                <div class="flex items-center space-x-4">
                    <div class="w-14 h-14 bg-[#6c5ce7] rounded-xl flex items-center justify-center text-white shadow-sm flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </div>
                    <div>
                        <h3 class="text-lg md:text-xl font-bold text-gray-800 mb-1">Menyelesaikan Materi 3 Materi</h3>
                        <div class="flex items-center text-sm font-medium text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            5 Mei - 11 Mei 2026
                        </div>
                    </div>
                </div>
                
                <!-- Actions (Edit & Delete) -->
                <div class="flex items-center space-x-3">
                    <button class="text-gray-400 hover:text-gray-600 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                    </button>
                    <button class="text-red-400 hover:text-red-600 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </button>
                </div>
            </div>

            <!-- Stats Grid -->
            <div class="grid grid-cols-3 gap-4 mb-8 text-center">
                <div class="bg-gray-100 rounded-xl p-4">
                    <div class="text-2xl font-bold text-[#3f317b] mb-1">3</div>
                    <div class="text-sm font-medium text-gray-500">Target</div>
                </div>
                <div class="bg-gray-100 rounded-xl p-4">
                    <div class="text-2xl font-bold text-[#6c5ce7] mb-1">2</div>
                    <div class="text-sm font-medium text-gray-500">Selesai</div>
                </div>
                <div class="bg-gray-100 rounded-xl p-4">
                    <div class="text-2xl font-bold text-green-500 mb-1">1</div>
                    <div class="text-sm font-medium text-gray-500">Tersisa</div>
                </div>
            </div>

            <!-- Progress Bar -->
            <div>
                <div class="flex justify-between items-center mb-2">
                    <span class="text-sm font-medium text-gray-400">Progress</span>
                    <span class="text-sm font-bold text-gray-500">67%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2.5">
                    <div class="bg-[#6c5ce7] h-2.5 rounded-full" style="width: 67%"></div>
                </div>
            </div>
        </div>
    </div>

    <!-- State 2: Empty State (Belum Ada Target) -->
    <!-- Note: I will include this below so you can see it, but usually this is an IF/ELSE based on data -->
    <div class="mt-16">
        <h2 class="text-xl font-bold text-gray-800 mb-4 opacity-50">Tampilan Jika Kosong (Empty State)</h2>
        <div class="bg-white border border-gray-200 rounded-2xl p-16 max-w-4xl shadow-sm flex flex-col items-center justify-center text-center">
            <div class="w-20 h-20 bg-[#f3f4fa] rounded-full flex items-center justify-center text-[#c4bbf0] mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-2">Belum Ada Target Minggu ini</h3>
            <p class="text-gray-500 max-w-md">Atur target pertamamu di atas untuk memulai perjalanan belajar minggu ini</p>
        </div>
    </div>
</x-sidebar-layout>
