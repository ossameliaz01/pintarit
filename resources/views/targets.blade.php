<x-sidebar-layout>
    <!-- Header Area with Back button -->
    <div class="mb-8">
        <h1 class="text-3xl font-extrabold text-gray-800 mb-2">Target Belajar Mingguan</h1>
        <p class="text-gray-500 font-medium">Tentukan apa yang ingin kamu capai minggu ini</p>
    </div>

    <!-- Back Button -->
    <div class="mb-8">
        <a href="{{ route('dashboard') }}" class="inline-flex items-center px-4 py-2 bg-[#f3f4fa] hover:bg-[#e4e5f1] text-[#3f317b] text-sm font-bold rounded-lg transition">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Kembali
        </a>
    </div>

    <!-- Form Card -->
    <div class="bg-white border border-gray-200 rounded-2xl p-8 max-w-3xl shadow-sm">
        <form>
            <!-- Field 1 -->
            <div class="mb-6">
                <label class="block text-gray-800 font-bold mb-2">Apa yang ingin kamu capai?</label>
                <input type="text" class="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:border-[#6c5ce7] focus:ring-1 focus:ring-[#6c5ce7] transition" value="Menyelesaikan Materi Video">
                <p class="text-xs text-gray-500 mt-2 font-medium">Pilih jenis target yang ingin kamu capai</p>
            </div>

            <!-- Field 2 -->
            <div class="mb-6">
                <label class="block text-gray-800 font-bold mb-2">Roadmap Terkait</label>
                <select class="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:border-[#6c5ce7] focus:ring-1 focus:ring-[#6c5ce7] transition appearance-none bg-white">
                    <option>-- Tidak terkait roadmap --</option>
                    <option>Dasar Jaringan Komputer</option>
                    <option>Pengenalan Sistem Operasi</option>
                </select>
                <p class="text-xs text-gray-500 mt-2 font-medium">Hubungkan target ini dengan roadmap yang sedang kamu pelajari</p>
            </div>

            <!-- Field 3 -->
            <div class="mb-6">
                <label class="block text-gray-800 font-bold mb-2">Berapa Banyak?</label>
                <input type="text" class="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:border-[#6c5ce7] focus:ring-1 focus:ring-[#6c5ce7] transition" placeholder="Contoh : 3">
                <p class="text-xs text-gray-500 mt-2 font-medium">Jumlah materi yang ingin diselesaikan</p>
            </div>

            <!-- Field 4 -->
            <div class="mb-8">
                <label class="block text-gray-800 font-bold mb-2">Durasi Target</label>
                <div class="relative">
                    <select class="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:border-[#6c5ce7] focus:ring-1 focus:ring-[#6c5ce7] transition appearance-none bg-white">
                        <option>Minggu Ini (5 mei - 11 mei 2026)</option>
                        <option>Minggu Depan (12 mei - 18 mei 2026)</option>
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </div>
                </div>
                <p class="text-xs text-gray-500 mt-2 font-medium">Target akan berlaku untuk minggu berjalan</p>
            </div>

            <!-- Submit Button -->
            <div>
                <button type="button" class="w-full bg-white border border-gray-300 text-gray-400 font-bold py-3.5 px-4 rounded-xl hover:bg-gray-50 transition cursor-not-allowed">
                    Simpan Target
                </button>
            </div>
        </form>
    </div>
</x-sidebar-layout>
