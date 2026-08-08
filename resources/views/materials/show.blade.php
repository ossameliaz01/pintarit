<x-sidebar-layout>

    <div class="flex items-center justify-between mb-8">
        <div class="flex items-center">
            <a href="{{ route('roadmap') }}" class="mr-6 text-gray-500 hover:text-gray-800 transition">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
            </a>
            <div>
                <h1 class="text-[22px] font-extrabold text-gray-800 mb-1">Dasar Jaringan Komputer</h1>
                <p class="text-[15px] font-medium text-gray-400">1 dari  3 materi selesai</p>
            </div>
        </div>
        
        <div class="flex items-center space-x-4 w-72 hidden md:flex">
            <div class="w-full bg-gray-200 rounded-full h-2.5">
                <div class="bg-[#6c5ce7] h-2.5 rounded-full" style="width: 36%"></div>
            </div>
            <span class="font-bold text-gray-800 text-[15px]">36%</span>
        </div>
    </div>


    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        

        <div class="lg:col-span-2 space-y-6">
            

            <div class="rounded-[20px] overflow-hidden shadow-md relative group aspect-[16/10] bg-indigo-900 cursor-pointer">
                <img src="{{ asset('images/thumbnail-jaringan.png') }}" alt="Apa Itu Jaringan Komputer?" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                <div class="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500"></div>
            </div>


            <div class="bg-white border border-gray-200 p-8 rounded-[16px] shadow-sm">
                <h3 class="text-[22px] font-bold text-gray-800 mb-3">Apa itu Jaringan Komputer?</h3>
                <p class="text-gray-600 mb-6 text-[15px] leading-relaxed">
                    Memahami konsep dasar jaringan komputer dan mengapa kita membutuhkannya dalam kehidupan sehari-hari.
                </p>
                <div class="flex items-center space-x-6 text-[13px] text-gray-400 font-medium">
                    <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Durasi: 07.00
                    </div>
                    <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        Video Pembelajaran
                    </div>
                </div>
            </div>


            <div class="bg-[#fcfaff] border border-[#f3ebff] p-8 rounded-[16px]">
                <div class="flex items-center mb-5">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#9b8afb] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    <h4 class="text-[17px] font-bold text-[#9b8afb]">Yang akan kamu pelajari</h4>
                </div>
                <ul class="space-y-2.5 pl-1">
                    <li class="flex items-start text-gray-700 text-[14px] font-medium">
                        <span class="w-1 h-1 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Definisi jaringan komputer</span>
                    </li>
                    <li class="flex items-start text-gray-700 text-[14px] font-medium">
                        <span class="w-1 h-1 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Manfaat jaringan dalam bisnis dan pendidikan</span>
                    </li>
                    <li class="flex items-start text-gray-700 text-[14px] font-medium">
                        <span class="w-1 h-1 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Komponen dasar jaringan komputer</span>
                    </li>
                    <li class="flex items-start text-gray-700 text-[14px] font-medium">
                        <span class="w-1 h-1 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Perbedaan LAN, WAN, dan MAN</span>
                    </li>
                </ul>
            </div>


            <button class="w-full bg-[#6c5ce7] hover:bg-[#5b4bc4] text-white font-bold py-3.5 px-6 rounded-[8px] transition flex justify-center items-center text-[15px]">
                Tandai Selesai & Lanjut
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
            </button>
        </div>
        

        <div class="lg:col-span-1" x-data="{ openAccordion: 1 }">
            <h3 class="text-lg font-bold text-gray-800 mb-4">Daftar Materi</h3>
            
            <div class="space-y-4">

                <div class="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden transition" :class="openAccordion === 1 ? 'border-[#6c5ce7]' : ''">
                    <div @click="openAccordion = openAccordion === 1 ? null : 1" class="p-4 flex justify-between items-center cursor-pointer border-b border-gray-100 bg-white hover:bg-gray-50 transition">
                        <h4 class="font-bold pr-4" :class="openAccordion === 1 ? 'text-[#6c5ce7]' : 'text-gray-800'">Pengenalan Jaringan Komputer</h4>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 transform transition-transform duration-300" :class="openAccordion === 1 ? 'rotate-180' : ''" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div x-show="openAccordion === 1" x-collapse>
                        <div class="p-2">

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
