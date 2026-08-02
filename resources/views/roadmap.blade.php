<x-sidebar-layout>
    <!-- Wrapper for Alpine -->
    <div x-data="{ tab: 'dasar' }" class="pb-20">
        <!-- Header Section -->
        <div class="mb-10">
            <h1 class="text-[32px] font-extrabold text-[#2a2a2a] mb-2 tracking-tight">Roadmap Pembelajaran</h1>
            <p class="text-gray-400 font-medium text-[17px]">Pilih roadmap yang ingin kamu pelajari dan mulai perjalananmu</p>
        </div>

        <!-- Tabs -->
        <div class="flex border-b border-gray-200 mb-12">
            <button @click="tab = 'dasar'" :class="tab === 'dasar' ? 'border-[#3f317b] text-[#3f317b] font-bold' : 'border-transparent text-gray-500 hover:text-gray-700 font-semibold'" class="flex-1 py-4 border-b-2 transition text-[15px]">
                Dasar
            </button>
            <button @click="tab = 'menengah'" :class="tab === 'menengah' ? 'border-[#3f317b] text-[#3f317b] font-bold' : 'border-transparent text-gray-500 hover:text-gray-700 font-semibold'" class="flex-1 py-4 border-b-2 transition text-[15px]">
                Menengah
            </button>
            <button @click="tab = 'lanjutan'" :class="tab === 'lanjutan' ? 'border-[#3f317b] text-[#3f317b] font-bold' : 'border-transparent text-gray-500 hover:text-gray-700 font-semibold'" class="flex-1 py-4 border-b-2 transition text-[15px]">
                Lanjutan
            </button>
        </div>

        <!-- Tab Content: Dasar -->
        <div x-show="tab === 'dasar'" x-transition class="relative max-w-4xl mx-auto pl-4">
            
            <!-- Vertical Line -->
            <!-- Line perfectly centered behind the circles (w-12 = 48px -> center is 24px) -->
            <div class="absolute left-[39.5px] top-[24px] bottom-[24px] w-[1.5px] bg-gray-300 z-0"></div>

            <!-- Step 1 (Done) -->
            <div class="relative z-10 flex items-center mb-10">
                <div class="w-12 h-12 bg-[#fcfaff] rounded-full border-[1.5px] border-[#3f317b] flex items-center justify-center text-[#3f317b] font-bold text-lg shadow-sm mr-12 flex-shrink-0">
                    1
                </div>
                <div class="flex-1">
                    <h3 class="text-[19px] font-bold text-gray-800 mb-1">Perkenalan komputer</h3>
                    <p class="text-sm text-gray-400 font-medium">Video - 30 menit</p>
                </div>
                <div class="flex-shrink-0">
                    <div class="w-8 h-8 bg-[#00a651] rounded-full flex items-center justify-center text-white shadow-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                    </div>
                </div>
            </div>

            <!-- Step 2 (Done) -->
            <div class="relative z-10 flex items-center mb-10">
                <div class="w-12 h-12 bg-[#fcfaff] rounded-full border-[1.5px] border-[#3f317b] flex items-center justify-center text-[#3f317b] font-bold text-lg shadow-sm mr-12 flex-shrink-0">
                    2
                </div>
                <div class="flex-1">
                    <h3 class="text-[19px] font-bold text-gray-800 mb-1">Pengenalan Sistem Operasi</h3>
                    <p class="text-sm text-gray-400 font-medium">Video - 30 menit</p>
                </div>
                <div class="flex-shrink-0">
                    <div class="w-8 h-8 bg-[#00a651] rounded-full flex items-center justify-center text-white shadow-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                    </div>
                </div>
            </div>

            <!-- Step 3 (Active) -->
            <div class="relative z-10 flex items-center mb-10">
                <div class="w-12 h-12 bg-white rounded-full border-[1.5px] border-[#3f317b] flex items-center justify-center text-[#3f317b] font-bold text-lg shadow-sm mr-12 flex-shrink-0">
                    3
                </div>
                <div class="flex-1">
                    <!-- Clickable area to materials/show -->
                    <a href="{{ route('materials.show') }}" class="block group">
                        <h3 class="text-[19px] font-bold text-gray-800 mb-1 group-hover:text-[#6c5ce7] transition">Dasar Jaringan Komputer</h3>
                        <p class="text-sm text-gray-400 font-medium">Video - 30 menit</p>
                    </a>
                </div>
                <div class="flex-shrink-0">
                    <a href="{{ route('materials.show') }}" class="text-[#3f317b] hover:text-[#6c5ce7] transition">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </a>
                </div>
            </div>

            <!-- Step 4 (Locked) -->
            <div class="relative z-10 flex items-center mb-10">
                <div class="w-12 h-12 bg-white rounded-full border-[1.5px] border-gray-400 flex items-center justify-center text-gray-600 font-bold text-lg mr-12 flex-shrink-0">
                    4
                </div>
                <div class="flex-1">
                    <h3 class="text-[19px] font-bold text-[#374151] mb-1">Perangkat Jaringan (Hardware)</h3>
                    <p class="text-sm text-gray-400 font-medium">Video - 30 menit</p>
                </div>
                <div class="flex-shrink-0">
                    <div class="text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                    </div>
                </div>
            </div>

            <!-- Step 5 (Locked) -->
            <div class="relative z-10 flex items-center mb-10">
                <div class="w-12 h-12 bg-white rounded-full border-[1.5px] border-gray-400 flex items-center justify-center text-gray-600 font-bold text-lg mr-12 flex-shrink-0">
                    5
                </div>
                <div class="flex-1">
                    <h3 class="text-[19px] font-bold text-[#374151] mb-1">IP Address & Subnetting Dasar</h3>
                    <p class="text-sm text-gray-400 font-medium">Video - 30 menit</p>
                </div>
                <div class="flex-shrink-0">
                    <div class="text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                    </div>
                </div>
            </div>

            <!-- Step 6 (Locked) -->
            <div class="relative z-10 flex items-center mb-10">
                <div class="w-12 h-12 bg-white rounded-full border-[1.5px] border-gray-400 flex items-center justify-center text-gray-600 font-bold text-lg mr-12 flex-shrink-0">
                    6
                </div>
                <div class="flex-1">
                    <h3 class="text-[19px] font-bold text-[#374151] mb-1">Topologi Jaringan</h3>
                    <p class="text-sm text-gray-400 font-medium">Video - 30 menit</p>
                </div>
                <div class="flex-shrink-0">
                    <div class="text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                    </div>
                </div>
            </div>

            <!-- Step 7 (Locked) -->
            <div class="relative z-10 flex items-center mb-4">
                <div class="w-12 h-12 bg-white rounded-full border-[1.5px] border-gray-400 flex items-center justify-center text-gray-600 font-bold text-lg mr-12 flex-shrink-0">
                    7
                </div>
                <div class="flex-1">
                    <h3 class="text-[19px] font-bold text-[#374151] mb-1">Konfigurasi Jaringan Sederhana</h3>
                    <p class="text-sm text-gray-400 font-medium">Video - 30 menit</p>
                </div>
                <div class="flex-shrink-0">
                    <div class="text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                    </div>
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
