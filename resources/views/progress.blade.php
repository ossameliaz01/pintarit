<x-sidebar-layout>
    <!-- Header -->
    <div class="mb-10">
        <h1 class="text-[32px] font-extrabold text-gray-800 mb-2">Progress Tracking</h1>
        <p class="text-gray-400 font-medium text-[17px]">Pantau perkembangan belajarmu dari waktu ke waktu</p>
    </div>

    <!-- Stats Row -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <!-- Stat 1 -->
        <div class="bg-white border border-gray-200 p-6 rounded-[16px] shadow-sm">
            <div class="flex items-center space-x-3 mb-4">
                <div class="w-10 h-10 rounded-xl bg-[#cdc7eb] flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M4 22V8h4v14H4zM10 22V2h4v20h-4zM16 22v-8h4v8h-4z" />
                    </svg>
                </div>
                <span class="text-sm font-semibold text-gray-400">Total Hari Belajar</span>
            </div>
            <div class="text-[32px] font-extrabold text-gray-800 mb-1 leading-none">89</div>
            <div class="text-[13px] text-gray-400 font-medium">Sejak Jan 2026</div>
        </div>

        <!-- Stat 2 -->
        <div class="bg-white border border-gray-200 p-6 rounded-[16px] shadow-sm">
            <div class="flex items-center space-x-3 mb-4">
                <div class="w-10 h-10 rounded-xl bg-[#cdc7eb] flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M4 22V8h4v14H4zM10 22V2h4v20h-4zM16 22v-8h4v8h-4z" />
                    </svg>
                </div>
                <span class="text-sm font-semibold text-gray-400">Materi Selesai</span>
            </div>
            <div class="text-[32px] font-extrabold text-gray-800 mb-1 leading-none">239</div>
            <div class="text-[13px] text-gray-400 font-medium">
                ↑ 18% dari bulan lalu
            </div>
        </div>

        <!-- Stat 3 -->
        <div class="bg-white border border-gray-200 p-6 rounded-[16px] shadow-sm">
            <div class="flex items-center space-x-3 mb-4">
                <div class="w-10 h-10 rounded-xl bg-[#cdc7eb] flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M4 22V8h4v14H4zM10 22V2h4v20h-4zM16 22v-8h4v8h-4z" />
                    </svg>
                </div>
                <span class="text-sm font-semibold text-gray-400">Total Jam</span>
            </div>
            <div class="text-[32px] font-extrabold text-gray-800 mb-1 leading-none">265</div>
            <div class="text-[13px] text-gray-400 font-medium">
                ↑ 12% dari bulan lalu
            </div>
        </div>

        <!-- Stat 4 -->
        <div class="bg-white border border-gray-200 p-6 rounded-[16px] shadow-sm">
            <div class="flex items-center space-x-3 mb-4">
                <div class="w-10 h-10 rounded-xl bg-[#cdc7eb] flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M4 22V8h4v14H4zM10 22V2h4v20h-4zM16 22v-8h4v8h-4z" />
                    </svg>
                </div>
                <span class="text-sm font-semibold text-gray-400">Badge Earned</span>
            </div>
            <div class="text-[32px] font-extrabold text-gray-800 mb-1 leading-none">3</div>
            <div class="text-[13px] text-gray-400 font-medium flex items-center">
                dari 20 badge
            </div>
        </div>
    </div>

    <!-- Chart Section -->
    <div class="bg-white border border-gray-200 p-8 rounded-[16px] shadow-sm mb-8">
        <h3 class="text-lg font-bold text-gray-800 mb-1">Tren Belajar Bulanan</h3>
        <p class="text-sm text-gray-500 font-medium mb-8">Materi selesai dan jam belajar per bulan</p>
        <div class="w-full h-80 relative">
            <canvas id="progressChart" class="w-full h-full"></canvas>
        </div>
    </div>

    <!-- Achievements Section -->
    <div class="bg-white border border-gray-200 p-8 rounded-[16px] shadow-sm">
        <h3 class="text-lg font-bold text-gray-800 mb-1">Pencapaian</h3>
        <p class="text-sm text-gray-500 font-medium mb-8">Badge dan achievements yang sudah diraih</p>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
            
            <!-- Badge 1 (Earned) -->
            <div class="border border-gray-200 rounded-[16px] p-6 hover:shadow-md transition bg-white">
                <div class="w-[52px] h-[52px] mx-auto bg-[#3f317b] rounded-xl flex items-center justify-center text-white mb-4 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                </div>
                <h4 class="font-bold text-gray-800 mb-1 text-[17px]">First Step</h4>
                <p class="text-[13px] text-gray-400 font-medium mb-3">Selesaikan materi pertama</p>
                <div class="text-[11px] font-bold text-gray-800">Jan 2026</div>
            </div>

            <!-- Badge 2 (Earned) -->
            <div class="border border-gray-200 rounded-[16px] p-6 hover:shadow-md transition bg-white">
                <div class="w-[52px] h-[52px] mx-auto bg-[#a67bfa] rounded-xl flex items-center justify-center text-white mb-4 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                </div>
                <h4 class="font-bold text-gray-800 mb-1 text-[17px]">Consistent</h4>
                <p class="text-[13px] text-gray-400 font-medium mb-3">Selesaikan 1 modul</p>
                <div class="text-[11px] font-bold text-gray-800">Jan 2026</div>
            </div>

            <!-- Badge 3 (Earned) -->
            <div class="border border-gray-200 rounded-[16px] p-6 hover:shadow-md transition bg-white">
                <div class="w-[52px] h-[52px] mx-auto bg-[#991b1b] rounded-xl flex items-center justify-center text-white mb-4 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                </div>
                <h4 class="font-bold text-gray-800 mb-1 text-[17px]">Bronze Medal</h4>
                <p class="text-[13px] text-gray-400 font-medium mb-3">Selesaikan 5 modul</p>
                <div class="text-[11px] font-bold text-gray-800">Jan 2026</div>
            </div>

            <!-- Badge 4 (Locked) -->
            <div class="border border-gray-100 rounded-[16px] p-6 bg-white shadow-sm opacity-50">
                <div class="w-[52px] h-[52px] mx-auto bg-gray-300 rounded-xl flex items-center justify-center text-white mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                </div>
                <h4 class="font-bold text-gray-400 mb-1 text-[17px]">Silver Medal</h4>
                <p class="text-[13px] text-gray-300 font-medium mb-3">Selesaikan 10 modul</p>
            </div>

            <!-- Badge 5 (Locked) -->
            <div class="border border-gray-100 rounded-[16px] p-6 bg-white shadow-sm opacity-50">
                <div class="w-[52px] h-[52px] mx-auto bg-[#fbbf24] rounded-xl flex items-center justify-center text-white mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                </div>
                <h4 class="font-bold text-gray-400 mb-1 text-[17px]">Gold Medal</h4>
                <p class="text-[13px] text-gray-300 font-medium mb-3">Selesaikan 20 modul</p>
            </div>

            <!-- Badge 6 (Locked) -->
            <div class="border border-gray-100 rounded-[16px] p-6 bg-white shadow-sm opacity-50">
                <div class="w-[52px] h-[52px] mx-auto bg-[#c0b5f5] rounded-xl flex items-center justify-center text-white mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                </div>
                <h4 class="font-bold text-gray-400 mb-1 text-[17px]">Winner</h4>
                <p class="text-[13px] text-gray-300 font-medium mb-3">Menyelesaikan semua modul</p>
            </div>
            
        </div>
    </div>

    <!-- Chart Script -->
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const ctx = document.getElementById('progressChart').getContext('2d');
            
            // Gradients
            const gradientMateri = ctx.createLinearGradient(0, 0, 0, 300);
            gradientMateri.addColorStop(0, 'rgba(108, 92, 231, 0.4)');
            gradientMateri.addColorStop(1, 'rgba(108, 92, 231, 0.05)');

            const gradientJam = ctx.createLinearGradient(0, 0, 0, 300);
            gradientJam.addColorStop(0, 'rgba(255, 159, 67, 0.4)');
            gradientJam.addColorStop(1, 'rgba(255, 159, 67, 0.05)');

            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr'],
                    datasets: [
                        {
                            label: 'Materi selesai',
                            data: [50, 60, 80, 65],
                            borderColor: '#6c5ce7',
                            backgroundColor: gradientMateri,
                            borderWidth: 2,
                            pointBackgroundColor: '#ffffff',
                            pointBorderColor: '#6c5ce7',
                            pointBorderWidth: 2,
                            pointRadius: 4,
                            fill: true,
                            tension: 0.4
                        },
                        {
                            label: 'Jam belajar',
                            data: [55, 68, 70, 90],
                            borderColor: '#ff9f43',
                            backgroundColor: gradientJam,
                            borderWidth: 2,
                            pointBackgroundColor: '#ffffff',
                            pointBorderColor: '#ff9f43',
                            pointBorderWidth: 2,
                            pointRadius: 4,
                            fill: true,
                            tension: 0.4
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: true,
                            position: 'bottom',
                            labels: {
                                usePointStyle: true,
                                boxWidth: 6,
                                padding: 20,
                                font: {
                                    family: "'Inter', sans-serif",
                                    size: 12
                                }
                            }
                        }
                    },
                    scales: {
                        y: {
                            min: 0,
                            max: 100,
                            ticks: {
                                stepSize: 20,
                                font: {
                                    family: "'Inter', sans-serif",
                                    size: 11
                                },
                                color: '#9ca3af'
                            },
                            grid: {
                                color: '#f3f4f6',
                                borderDash: [3, 3],
                                drawBorder: false
                            }
                        },
                        x: {
                            grid: {
                                display: false,
                                drawBorder: false
                            },
                            ticks: {
                                font: {
                                    family: "'Inter', sans-serif",
                                    size: 11
                                },
                                color: '#9ca3af'
                            }
                        }
                    }
                }
            });
        });
    </script>
</x-sidebar-layout>
