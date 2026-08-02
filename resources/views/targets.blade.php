<x-sidebar-layout>
    <div x-data="{ state: 'active' }">
        <!-- Header -->
        <div class="mb-8">
            <h1 class="text-[32px] font-extrabold text-gray-800 mb-2">Target Belajar Mingguan</h1>
            <p class="text-gray-400 font-medium text-[17px]">Tentukan apa yang ingin kamu capai minggu ini</p>
        </div>

        <!-- Tambah Target Button -->
        <div class="mb-8">
            <a href="{{ route('target.create') }}" class="inline-flex items-center px-6 py-2.5 bg-[#6c5ce7] hover:bg-[#5b4bc4] text-white font-bold rounded-[8px] transition shadow-sm text-[15px]">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
                </svg>
                Tambah Target
            </a>
        </div>

        <!-- State 1: Active Target (Target Aktif) -->
        <div x-show="state === 'active'" x-transition class="mb-12">
            <h2 class="text-lg font-bold text-gray-800 mb-4">Target Aktif</h2>
            
            <div class="bg-white border border-gray-200 rounded-[16px] p-6 max-w-4xl shadow-sm">
                <div class="flex justify-between items-start mb-6">
                    <div class="flex items-center space-x-4">
                        <div class="w-[60px] h-[60px] bg-[#6c5ce7] rounded-[12px] flex items-center justify-center text-white flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                                <circle cx="12" cy="12" r="9" />
                                <circle cx="12" cy="12" r="5" />
                                <circle cx="12" cy="12" r="2" />
                            </svg>
                        </div>
                        <div>
                            <h3 class="text-[19px] font-bold text-gray-800 mb-1">Menyelesaikan Materi 3 Materi</h3>
                            <div class="flex items-center text-[14px] font-medium text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                5 Mei - 11 Mei 2026
                            </div>
                        </div>
                    </div>
                    
                    <!-- Actions (Edit & Delete) -->
                    <div class="flex items-center space-x-4">
                        <button class="text-gray-500 hover:text-gray-700 transition">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                            </svg>
                        </button>
                        <button class="text-red-500 hover:text-red-600 transition">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                        </button>
                    </div>
                </div>

                <!-- Stats Grid -->
                <div class="grid grid-cols-3 gap-6 mb-6 text-center">
                    <div class="bg-[#f2f0f4] rounded-[8px] py-5">
                        <div class="text-[22px] font-black text-[#3f317b] mb-1">3</div>
                        <div class="text-[13px] font-medium text-gray-600">Target</div>
                    </div>
                    <div class="bg-[#f2f0f4] rounded-[8px] py-5">
                        <div class="text-[22px] font-black text-[#a67bfa] mb-1">2</div>
                        <div class="text-[13px] font-medium text-gray-600">Selesai</div>
                    </div>
                    <div class="bg-[#f2f0f4] rounded-[8px] py-5">
                        <div class="text-[22px] font-black text-[#10b981] mb-1">1</div>
                        <div class="text-[13px] font-medium text-gray-600">Tersisa</div>
                    </div>
                </div>

                <!-- Progress Bar -->
                <div>
                    <div class="flex justify-between items-center mb-2">
                        <span class="text-[13px] font-medium text-gray-400">Progress</span>
                        <span class="text-[13px] font-bold text-gray-500">67%</span>
                    </div>
                    <div class="w-full bg-[#f2f0f4] rounded-full h-[7px]">
                        <div class="bg-[#6c5ce7] h-[7px] rounded-full" style="width: 67%"></div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Toggle (Hidden from UI, just for demo) -->
        <div class="fixed bottom-4 right-4 bg-white p-2 rounded shadow flex space-x-2 border opacity-50 hover:opacity-100">
            <button @click="state = 'active'" class="text-xs px-2 py-1 bg-gray-200 rounded">Active</button>
            <button @click="state = 'empty'" class="text-xs px-2 py-1 bg-gray-200 rounded">Empty</button>
        </div>

        <!-- State 2: Empty State (Belum Ada Target) -->
        <div x-show="state === 'empty'" x-cloak x-transition class="mb-12">
            <div class="bg-white border border-gray-200 rounded-[12px] py-24 px-8 max-w-4xl shadow-sm flex flex-col items-center justify-center text-center">
                <div class="w-[84px] h-[84px] bg-[#f2f0f4] rounded-full flex items-center justify-center text-[#6c5ce7] mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.2">
                        <circle cx="12" cy="12" r="9" />
                        <circle cx="12" cy="12" r="5" />
                        <circle cx="12" cy="12" r="2" />
                    </svg>
                </div>
                <h3 class="text-[19px] font-bold text-gray-800 mb-3">Belum Ada Target Minggu ini</h3>
                <p class="text-gray-400 font-medium text-[15px] max-w-md leading-relaxed">
                    Atur target pertamamu di atas untuk memulai perjalanan belajar<br>minggu ini
                </p>
            </div>
        </div>
    </div>
</x-sidebar-layout>
