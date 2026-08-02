<x-sidebar-layout>
    <!-- Wrapper for Alpine -->
    <div x-data="{ tab: 'dasar' }">
        <!-- Header Section -->
        <div class="mb-10">
            <h1 class="text-[32px] font-extrabold text-[#374151] mb-2">Roadmap Pembelajaran</h1>
            <p class="text-gray-400 font-medium text-[17px]">Pilih roadmap yang ingin kamu pelajari dan mulai perjalananmu</p>
        </div>

        <!-- Tabs -->
            </div>
            <div class="flex-1 pt-1">
                <h3 class="text-xl font-bold text-gray-700 mb-1">IP Address & Subnetting Dasar</h3>
                <p class="text-sm text-gray-400 font-medium">Video - 30 menit</p>
            </div>
            <div class="pt-2">
                <div class="text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                </div>
            </div>
        </div>

        <!-- Step 6 (Locked) -->
        <div class="relative z-10 flex items-start mb-12 opacity-60">
            <div class="w-12 h-12 bg-white rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-500 font-bold text-lg shadow-sm mr-8 flex-shrink-0">
                6
            </div>
            <div class="flex-1 pt-1">
                <h3 class="text-xl font-bold text-gray-700 mb-1">Topologi Jaringan</h3>
                <p class="text-sm text-gray-400 font-medium">Video - 30 menit</p>
            </div>
            <div class="pt-2">
                <div class="text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                </div>
            </div>
        </div>

        <!-- Step 7 (Locked) -->
        <div class="relative z-10 flex items-start mb-4 opacity-60">
            <div class="w-12 h-12 bg-white rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-500 font-bold text-lg shadow-sm mr-8 flex-shrink-0">
                7
            </div>
            <div class="flex-1 pt-1">
                <h3 class="text-xl font-bold text-gray-700 mb-1">Konfigurasi Jaringan Sederhana</h3>
                <p class="text-sm text-gray-400 font-medium">Video - 30 menit</p>
            </div>
            <div class="pt-2">
                <div class="text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                </div>
            </div>
        </div>
        
        <!-- Menengah (Placeholder) -->
        <div x-show="tab === 'menengah'" x-cloak class="text-center py-12 text-gray-500">
            <h3 class="text-lg font-bold mb-2">Roadmap Menengah</h3>
            <p>Materi menengah akan segera hadir.</p>
        </div>

        <!-- Lanjutan (Placeholder) -->
        <div x-show="tab === 'lanjutan'" x-cloak class="text-center py-12 text-gray-500">
            <h3 class="text-lg font-bold mb-2">Roadmap Lanjutan</h3>
            <p>Materi lanjutan akan segera hadir.</p>
        </div>
    </div>
</x-sidebar-layout>
