<x-sidebar-layout>
    <!-- Header Area with Back button & Progress -->
    <div class="flex items-center justify-between mb-8">
        <div class="flex items-center space-x-4">
            <a href="{{ route('roadmap') }}" class="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 hover:text-gray-800 transition shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
                </svg>
            </a>
            <div>
                <h1 class="text-2xl font-extrabold text-gray-800 leading-tight">Dasar Jaringan Komputer</h1>
                <p class="text-sm font-medium text-gray-400">1 dari 3 materi selesai</p>
            </div>
        </div>
        
        <div class="flex items-center space-x-4 w-64 hidden md:flex">
            <div class="w-full bg-gray-200 rounded-full h-2">
                <div class="bg-[#6c5ce7] h-2 rounded-full" style="width: 36%"></div>
            </div>
            <span class="font-bold text-gray-800 text-sm">36%</span>
        </div>
    </div>

    <!-- Main Content Layout -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <!-- Left Column: Video & Material Content -->
        <div class="lg:col-span-2 space-y-6">
            
            <!-- Video Placeholder -->
            <div class="bg-indigo-900 rounded-2xl overflow-hidden shadow-md relative group aspect-video">
                <!-- Fallback gradient background if image missing -->
                <div class="absolute inset-0 bg-gradient-to-br from-indigo-900 via-[#312560] to-[#1a113d]"></div>
                
                <div class="absolute inset-0 flex flex-col p-8">
                    <div class="mb-4 inline-block bg-indigo-500 bg-opacity-30 backdrop-blur-sm text-indigo-100 text-xs font-bold px-3 py-1 rounded-full w-max">
                        MATERI DASAR
                    </div>
                    <h2 class="text-white text-4xl md:text-5xl font-black leading-tight w-2/3 mb-4">Apa Itu Jaringan Komputer?</h2>
                    <p class="text-indigo-200 text-lg md:text-xl w-1/2">Pengertian, Komponen, dan Contohnya</p>
                    
                    <div class="mt-auto flex items-center space-x-3 bg-indigo-800 bg-opacity-50 backdrop-blur-sm w-max p-2 rounded-xl">
                        <div class="w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                        </div>
                        <span class="text-white font-medium text-sm pr-4">Teknik Komputer<br>dan Jaringan</span>
                    </div>
                </div>

                <!-- Play Button Overlay -->
                <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-10 group-hover:bg-opacity-30 transition cursor-pointer">
                    <div class="w-20 h-20 bg-black bg-opacity-60 backdrop-blur-sm rounded-full flex items-center justify-center text-white border border-white border-opacity-30 group-hover:scale-110 transition-transform">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 ml-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                        </svg>
                    </div>
                </div>
            </div>

            <!-- Material Details -->
            <div class="bg-white border border-gray-100 p-6 md:p-8 rounded-2xl shadow-sm">
                <h3 class="text-2xl font-bold text-gray-800 mb-4">Apa itu Jaringan Komputer?</h3>
                <p class="text-gray-600 mb-6 leading-relaxed">
                    Memahami konsep dasar jaringan komputer dan mengapa kita membutuhkannya dalam kehidupan sehari-hari.
                </p>
                <div class="flex items-center space-x-6 text-sm text-gray-400 font-medium border-t border-gray-100 pt-4">
                    <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Durasi: 07.00
                    </div>
                    <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        Video Pembelajaran
                    </div>
                </div>
            </div>

            <!-- Learning Objectives Box -->
            <div class="bg-[#f5f3ff] border border-[#eaddff] p-6 md:p-8 rounded-2xl">
                <div class="flex items-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#9b8afb] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    <h4 class="text-xl font-bold text-[#9b8afb]">Yang akan kamu pelajari</h4>
                </div>
                <ul class="space-y-3 pl-4">
                    <li class="flex items-start text-gray-700">
                        <span class="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                        <span>Definisi jaringan komputer</span>
                    </li>
                    <li class="flex items-start text-gray-700">
                        <span class="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                        <span>Manfaat jaringan dalam bisnis dan pendidikan</span>
                    </li>
                    <li class="flex items-start text-gray-700">
                        <span class="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                        <span>Komponen dasar jaringan komputer</span>
                    </li>
                    <li class="flex items-start text-gray-700">
                        <span class="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                        <span>Perbedaan LAN, WAN, dan MAN</span>
                    </li>
                </ul>
            </div>

            <!-- Complete Button -->
            <button class="w-full bg-[#6c5ce7] hover:bg-[#5b4bc4] text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition flex justify-center items-center">
                Tandai Selesai & Lanjut
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
            </button>
        </div>
        
        <!-- Right Column: Sidebar List -->
        <div class="lg:col-span-1" x-data="{ openAccordion: 1 }">
            <h3 class="text-lg font-bold text-gray-800 mb-4">Daftar Materi</h3>
            
            <div class="space-y-4">
                <!-- Accordion 1 -->
                <div class="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden transition" :class="openAccordion === 1 ? 'border-[#6c5ce7]' : ''">
                    <div @click="openAccordion = openAccordion === 1 ? null : 1" class="p-4 flex justify-between items-center cursor-pointer border-b border-gray-100 bg-white hover:bg-gray-50 transition">
                        <h4 class="font-bold pr-4" :class="openAccordion === 1 ? 'text-[#6c5ce7]' : 'text-gray-800'">Pengenalan Jaringan Komputer</h4>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 transform transition-transform duration-300" :class="openAccordion === 1 ? 'rotate-180' : ''" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div x-show="openAccordion === 1" x-collapse>
                        <div class="p-2">
                            <!-- Sub item (Completed/Active) -->
                            <div class="flex items-start p-3 rounded-lg hover:bg-gray-50 cursor-pointer group">
                                <div class="mt-0.5 mr-3 text-green-500 flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                                <div>
                                    <h5 class="text-sm font-semibold text-green-500 mb-1 group-hover:text-green-600 transition">Apa itu jaringan?</h5>
                                    <div class="flex items-center text-xs text-gray-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                                        </svg>
                                        07.00
                                    </div>
                                </div>
                            </div>

                            <!-- Sub item -->
                            <div class="flex items-start p-3 rounded-lg hover:bg-gray-50 cursor-pointer group">
                                <div class="mt-0.5 mr-3 text-gray-300 flex-shrink-0 border border-gray-300 rounded-full w-5 h-5"></div>
                                <div>
                                    <h5 class="text-sm font-semibold text-gray-600 mb-1 group-hover:text-gray-900 transition">Jenis-jenis jaringan</h5>
                                    <div class="flex items-center text-xs text-gray-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                                        </svg>
                                        07.45
                                    </div>
                                </div>
                            </div>

                            <!-- Sub item -->
                            <div class="flex items-start p-3 rounded-lg hover:bg-gray-50 cursor-pointer group">
                                <div class="mt-0.5 mr-3 text-gray-300 flex-shrink-0 border border-gray-300 rounded-full w-5 h-5"></div>
                                <div>
                                    <h5 class="text-sm font-semibold text-gray-600 mb-1 group-hover:text-gray-900 transition">Topologi jaringan</h5>
                                    <div class="flex items-center text-xs text-gray-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                                        </svg>
                                        12.30
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Accordion 2 -->
                <div class="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden transition" :class="openAccordion === 2 ? 'border-[#6c5ce7]' : 'hover:border-gray-300'">
                    <div @click="openAccordion = openAccordion === 2 ? null : 2" class="p-4 flex justify-between items-center cursor-pointer bg-white hover:bg-gray-50 transition">
                        <h4 class="font-bold pr-4" :class="openAccordion === 2 ? 'text-[#6c5ce7]' : 'text-gray-800'">OSI Model</h4>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 transform transition-transform duration-300" :class="openAccordion === 2 ? 'rotate-180' : ''" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div x-show="openAccordion === 2" x-collapse>
                        <div class="p-4 text-gray-500 text-sm">
                            Konten OSI Model akan ditampilkan di sini.
                        </div>
                    </div>
                </div>

                <!-- Accordion 3 -->
                <div class="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden transition" :class="openAccordion === 3 ? 'border-[#6c5ce7]' : 'hover:border-gray-300'">
                    <div @click="openAccordion = openAccordion === 3 ? null : 3" class="p-4 flex justify-between items-center cursor-pointer bg-white hover:bg-gray-50 transition">
                        <h4 class="font-bold pr-4" :class="openAccordion === 3 ? 'text-[#6c5ce7]' : 'text-gray-800'">IP Addressing</h4>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 transform transition-transform duration-300" :class="openAccordion === 3 ? 'rotate-180' : ''" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div x-show="openAccordion === 3" x-collapse>
                        <div class="p-4 text-gray-500 text-sm">
                            Konten IP Addressing akan ditampilkan di sini.
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</x-sidebar-layout>
