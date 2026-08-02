<x-sidebar-layout>
    <!-- Wrapper for Alpine -->
    <div x-data="{ tab: 'dasar' }">
        <!-- Header -->
        <div class="mb-10">
            <h1 class="text-3xl font-extrabold text-gray-800 mb-2">Roadmap Pembelajaran</h1>
            <p class="text-gray-500 font-medium">Pilih roadmap yang ingin kamu pelajari dan mulai perjalananmu</p>
        </div>

        <!-- Tabs -->
        <div class="flex border-b border-gray-200 mb-10 text-center">
            <a href="#" @click.prevent="tab = 'dasar'" :class="tab === 'dasar' ? 'text-[#6c5ce7] border-[#6c5ce7]' : 'text-gray-500 border-transparent hover:text-gray-700'" class="flex-1 py-4 text-sm font-bold border-b-2 transition">
                Dasar
            </a>
            <a href="#" @click.prevent="tab = 'menengah'" :class="tab === 'menengah' ? 'text-[#6c5ce7] border-[#6c5ce7]' : 'text-gray-500 border-transparent hover:text-gray-700'" class="flex-1 py-4 text-sm font-bold border-b-2 transition">
                Menengah
            </a>
            <a href="#" @click.prevent="tab = 'lanjutan'" :class="tab === 'lanjutan' ? 'text-[#6c5ce7] border-[#6c5ce7]' : 'text-gray-500 border-transparent hover:text-gray-700'" class="flex-1 py-4 text-sm font-bold border-b-2 transition">
                Lanjutan
            </a>
        </div>

        <!-- Roadmap Timeline: Dasar -->
        <div x-show="tab === 'dasar'" class="relative max-w-3xl mx-auto pl-4">
        <!-- Vertical Line -->
        <div class="absolute left-[39px] top-4 bottom-10 w-0.5 bg-gray-200 z-0"></div>

        <!-- Step 1 (Completed) -->
        <div class="relative z-10 flex items-start mb-12 group cursor-pointer">
            <div class="w-12 h-12 bg-white rounded-full border-2 border-[#6c5ce7] flex items-center justify-center text-[#6c5ce7] font-bold text-lg shadow-sm group-hover:bg-indigo-50 transition mr-8 flex-shrink-0">
                1
            </div>
            <div class="flex-1 pt-1">
                <h3 class="text-xl font-bold text-gray-800 mb-1">Perkenalan komputer</h3>
                <p class="text-sm text-gray-400 font-medium">Video - 30 menit</p>
            </div>
            <div class="pt-2">
                <div class="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                </div>
            </div>
        </div>

        <!-- Step 2 (Completed) -->
        <div class="relative z-10 flex items-start mb-12 group cursor-pointer">
            <div class="w-12 h-12 bg-white rounded-full border-2 border-[#6c5ce7] flex items-center justify-center text-[#6c5ce7] font-bold text-lg shadow-sm group-hover:bg-indigo-50 transition mr-8 flex-shrink-0">
                2
            </div>
            <div class="flex-1 pt-1">
                <h3 class="text-xl font-bold text-gray-800 mb-1">Pengenalan Sistem Operasi</h3>
                <p class="text-sm text-gray-400 font-medium">Video - 30 menit</p>
            </div>
            <div class="pt-2">
                <div class="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                </div>
            </div>
        </div>

        <!-- Step 3 (Current/Active) -->
        <div class="relative z-10 flex items-start mb-12 group cursor-pointer">
            <div class="w-12 h-12 bg-white rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-600 font-bold text-lg shadow-sm group-hover:border-[#6c5ce7] group-hover:text-[#6c5ce7] transition mr-8 flex-shrink-0">
                3
            </div>
            <div class="flex-1 pt-1">
                <h3 class="text-xl font-bold text-gray-800 mb-1">Dasar Jaringan Komputer</h3>
                <p class="text-sm text-gray-400 font-medium">Video - 30 menit</p>
            </div>
            <div class="pt-2">
                <div class="text-[#5b4bc4]">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            </div>
        </div>

        <!-- Step 4 (Locked) -->
        <div class="relative z-10 flex items-start mb-12 opacity-60">
            <div class="w-12 h-12 bg-white rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-500 font-bold text-lg shadow-sm mr-8 flex-shrink-0">
                4
            </div>
            <div class="flex-1 pt-1">
                <h3 class="text-xl font-bold text-gray-700 mb-1">Perangkat Jaringan (Hardware)</h3>
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

        <!-- Step 5 (Locked) -->
        <div class="relative z-10 flex items-start mb-12 opacity-60">
            <div class="w-12 h-12 bg-white rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-500 font-bold text-lg shadow-sm mr-8 flex-shrink-0">
                5
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
