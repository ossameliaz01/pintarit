<x-sidebar-layout>
    <!-- Header Section -->
    <div class="flex justify-between items-start mb-8">
        <div>
            <h1 class="text-[32px] font-extrabold text-[#6c5ce7] mb-1">Halo, {{ optional(Auth::user())->name ?? 'Gema' }}!</h1>
            <p class="text-gray-500 font-medium">Semangat belajar hari ini!</p>
        </div>
        <div class="flex items-center space-x-3">
            <img src="https://ui-avatars.com/api/?name={{ urlencode(Auth::user()->name ?? 'Gema') }}&background=6c5ce7&color=fff" alt="Profile" class="w-10 h-10 rounded-full border-2 border-white shadow-sm">
            <div class="hidden sm:block">
                <div class="font-bold text-gray-800 text-sm">{{ optional(Auth::user())->name ?? 'Gema' }}</div>
                <div class="text-xs font-semibold text-yellow-500 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1zm-5.165 9.403l.631 1.968c.045.14.238.167.331.045A1.989 1.989 0 007 13c.489 0 .937-.176 1.284-.467.094-.079.228-.01.246.11A5.006 5.006 0 018 16H6a1 1 0 01-1-1v-2.316a.49.49 0 01.165-.281z" clip-rule="evenodd" />
                    </svg>
                    Pelajar
                </div>
            </div>
        </div>
    </div>

    <!-- Alert / Banner -->
    <div class="mb-6">
        <p class="text-gray-500 font-medium leading-relaxed">
            Selamat datang di MappyPath! Kamu belum memilih roadmap belajar. Yuk mulai dengan memilih roadmap yang tersedia.
        </p>
    </div>

    <!-- Stats Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <!-- Card 1 -->
        <div class="bg-white border border-gray-200 p-5 rounded-[20px] shadow-sm">
            <div class="flex justify-between items-start mb-4">
                <span class="text-sm font-semibold text-gray-400">Total Progress</span>
                <div class="w-8 h-8 rounded-lg bg-[#c4bbf0] flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                </div>
            </div>
            <div class="text-[32px] font-extrabold text-gray-800 mb-3">75%</div>
            <div class="w-full bg-gray-100 rounded-full h-1.5">
                <div class="bg-[#6c5ce7] h-1.5 rounded-full" style="width: 75%"></div>
            </div>
        </div>

        <!-- Card 2 -->
        <div class="bg-white border border-gray-200 p-5 rounded-[20px] shadow-sm">
            <div class="flex justify-between items-start mb-4">
                <span class="text-sm font-semibold text-gray-400">Tahap saat ini</span>
                <div class="w-8 h-8 rounded-lg bg-yellow-400 flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                </div>
            </div>
            <div class="text-[17px] font-bold text-gray-800 mb-3 leading-tight h-[38px]">Jaringan Dasar TKJ</div>
            <div class="w-full bg-gray-100 rounded-full h-1.5">
                <div class="bg-[#6c5ce7] h-1.5 rounded-full" style="width: 40%"></div>
            </div>
        </div>

        <!-- Card 3 -->
        <div class="bg-white border border-gray-200 p-5 rounded-[20px] shadow-sm">
            <div class="flex justify-between items-start mb-4">
                <span class="text-sm font-semibold text-gray-400">Materi Selesai</span>
                <div class="w-8 h-8 rounded-lg bg-orange-400 flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                </div>
            </div>
            <div class="text-[32px] font-extrabold text-gray-800 mb-3 h-[38px] flex items-center">10/54</div>
            <div class="w-full bg-gray-100 rounded-full h-1.5">
                <div class="bg-[#6c5ce7] h-1.5 rounded-full" style="width: 18%"></div>
            </div>
        </div>

        <!-- Card 4 -->
        <div class="bg-white border border-gray-200 p-5 rounded-[20px] shadow-sm">
            <div class="flex justify-between items-start mb-4">
                <span class="text-sm font-semibold text-gray-400">Target Minggu</span>
                <div class="w-8 h-8 rounded-lg bg-[#a7dfba] flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                        <circle cx="12" cy="12" r="9" />
                        <circle cx="12" cy="12" r="5" />
                        <circle cx="12" cy="12" r="2" />
                    </svg>
                </div>
            </div>
            <div class="text-[32px] font-extrabold text-gray-800 mb-3 h-[38px] flex items-center">4/5</div>
            <div class="w-full bg-gray-100 rounded-full h-1.5">
                <div class="bg-[#6c5ce7] h-1.5 rounded-full" style="width: 80%"></div>
            </div>
        </div>
    </div>

    <!-- Main Content Area Wrapper -->
    <div class="border border-gray-200 rounded-2xl p-6 mb-8 bg-white shadow-sm">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <!-- Lanjutkan Belajar -->
            <div>
                <h3 class="text-[17px] font-bold text-gray-800 mb-4">Lanjutkan Belajar</h3>
                <div class="border border-gray-200 p-6 rounded-2xl flex flex-col justify-between h-[200px]">
                    <div class="flex items-start space-x-4">
                        <div class="w-16 h-16 bg-[#c4bbf0] rounded-xl flex items-center justify-center text-white flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                            </svg>
                        </div>
                        <div class="flex-1 w-full pt-1">
                            <h4 class="text-[19px] font-extrabold text-gray-800 mb-1">Dasar Jaringan</h4>
                            <p class="text-sm font-medium text-gray-400 mb-4">Tahap 2 dari 8</p>
                            <div class="w-full bg-gray-100 rounded-full h-1.5">
                                <div class="bg-[#6c5ce7] h-1.5 rounded-full" style="width: 25%"></div>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-end mt-4">
                        <button class="bg-[#6c5ce7] hover:bg-[#5b4bc4] text-white text-sm font-bold py-2.5 px-8 rounded-lg transition duration-200 shadow-sm">
                            Lanjutkan
                        </button>
                    </div>
                </div>
            </div>

            <!-- Rekomendasi Materi -->
            <div>
                <h3 class="text-[17px] font-bold text-gray-800 mb-4">Rekomendasi Materi Untukmu</h3>
                <div class="space-y-4">
                    <!-- Item 1 -->
                    <div class="border border-gray-200 p-4 rounded-2xl flex items-center justify-between hover:border-indigo-200 transition cursor-pointer">
                        <div class="flex items-center space-x-4">
                            <div class="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                </svg>
                            </div>
                            <div>
                                <h4 class="text-[15px] font-bold text-gray-800">Ip Address Dasar</h4>
                                <p class="text-[13px] font-medium text-gray-400 mt-0.5">Video - 30 menit</p>
                            </div>
                        </div>
                        <div class="text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg>
                        </div>
                    </div>

                    <!-- Item 2 -->
                    <div class="border border-gray-200 p-4 rounded-2xl flex items-center justify-between hover:border-indigo-200 transition cursor-pointer">
                        <div class="flex items-center space-x-4">
                            <div class="w-12 h-12 bg-orange-400 rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                </svg>
                            </div>
                            <div>
                                <h4 class="text-[15px] font-bold text-gray-800">OSI Model</h4>
                                <p class="text-[13px] font-medium text-gray-400 mt-0.5">Video - 30 menit</p>
                            </div>
                        </div>
                        <div class="text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Chart Section -->
    <div class="border border-gray-200 rounded-2xl p-6 mb-8 bg-white shadow-sm">
        <h3 class="text-[17px] font-bold text-gray-800 mb-6">Ringkasan Progress</h3>
        <div class="w-full">
            <canvas id="progressChart" class="w-full h-[250px]"></canvas>
        </div>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const ctx = document.getElementById('progressChart').getContext('2d');
            
            // Create gradient for the area chart
            const gradient = ctx.createLinearGradient(0, 0, 0, 300);
            gradient.addColorStop(0, 'rgba(108, 92, 231, 0.2)');
            gradient.addColorStop(1, 'rgba(108, 92, 231, 0)');

            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['Minggu 1', 'Minggu 2', 'Minggu 3', 'Minggu 4'],
                    datasets: [{
                        label: 'Progress',
                        data: [60, 50, 80, 90],
                        borderColor: '#6c5ce7',
                        backgroundColor: gradient,
                        borderWidth: 2,
                        pointBackgroundColor: '#6c5ce7',
                        pointBorderColor: '#ffffff',
                        pointBorderWidth: 2,
                        pointRadius: 4,
                        fill: true,
                        tension: 0.4
                    }]
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
                                borderDash: [5, 5],
                                drawBorder: false
                            }
                        },
                        x: {
                            grid: {
                                color: '#f3f4f6',
                                borderDash: [5, 5],
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
