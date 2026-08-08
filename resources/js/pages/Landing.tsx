import { useState } from 'react'
import {
  Zap, Map, BookOpen, Award, Users, ChevronDown, ChevronRight,
  Star, ArrowRight, Shield, Cpu, Wifi, Terminal, Play,
  CheckCircle, TrendingUp, Globe, Menu, X
} from 'lucide-react'

interface LandingProps {
  onNavigate: (page: string) => void
}

const stats = [
  { label: 'Siswa Aktif', value: '12,450+', icon: Users, color: '#9568FF' },
  { label: 'Modul Belajar', value: '380+', icon: BookOpen, color: '#4CAF50' },
  { label: 'Badge Diraih', value: '98,200+', icon: Award, color: '#FFC107' },
  { label: 'Guru Terdaftar', value: '640+', icon: TrendingUp, color: '#B794F6' },
]

const features = [
  {
    icon: Map,
    title: 'Roadmap Interaktif',
    desc: 'Peta belajar RPG bergaya adventure map. Unlock modul secara bertahap seperti game.',
    color: '#9568FF',
    bg: 'rgba(149, 104, 255, 0.1)',
  },
  {
    icon: Zap,
    title: 'XP & Badge System',
    desc: 'Kumpulkan XP, naik level, dan raih badge eksklusif dari setiap pencapaian belajar.',
    color: '#FFC107',
    bg: 'rgba(255, 193, 7, 0.1)',
  },
  {
    icon: Globe,
    title: 'Level Bahasa Teknis',
    desc: 'Toggle antara mode Beginner, Pro, dan Expert. Konten menyesuaikan level kamu.',
    color: '#4CAF50',
    bg: 'rgba(76, 175, 80, 0.1)',
  },
  {
    icon: BookOpen,
    title: 'Kamus IT Interaktif',
    desc: 'Hover istilah teknis dan temukan definisi, ilustrasi, dan analogi sederhana.',
    color: '#B794F6',
    bg: 'rgba(183, 148, 246, 0.1)',
  },
]

const testimonials = [
  {
    name: 'Rizki Pratama',
    school: 'SMK TKJ Bandung',
    avatar: 'RP',
    text: 'PintarIT bikin belajar jaringan jadi seru banget! Roadmap-nya kayak main game, gak kerasa udah level 8.',
    rating: 5,
    badge: 'Network Buddy',
  },
  {
    name: 'Siti Nurhaliza',
    school: 'SMK RPL Jakarta',
    avatar: 'SN',
    text: 'Fitur toggle bahasa keren banget. Dari yang bingung subnet mask, sekarang udah bisa routing table!',
    rating: 5,
    badge: 'Linux Warrior',
  },
  {
    name: 'Bagas Adi',
    school: 'SMK TKJ Surabaya',
    avatar: 'BA',
    text: 'Kamus IT-nya ngebantu banget waktu baca materi. Tinggal hover langsung tau artinya.',
    rating: 5,
    badge: 'IT Explorer',
  },
]

const faqs = [
  {
    q: 'Apakah PintarIT gratis?',
    a: 'PintarIT menyediakan akses gratis untuk modul dasar. Fitur premium tersedia dengan langganan sekolah atau individu.',
  },
  {
    q: 'Apakah tersedia untuk SMK jurusan selain TKJ/RPL?',
    a: 'Saat ini fokus pada jurusan TKJ dan RPL, namun kami terus mengembangkan konten untuk jurusan IT lainnya.',
  },
  {
    q: 'Bagaimana sistem XP dan Badge bekerja?',
    a: 'Kamu mendapatkan XP setiap menyelesaikan modul, kuis, dan misi harian. XP yang terkumpul meningkatkan level dan membuka badge.',
  },
  {
    q: 'Bisakah guru memantau progress siswa?',
    a: 'Ya! Dashboard guru menampilkan progress, XP, dan analytics detail untuk setiap siswa di kelas.',
  },
  {
    q: 'Apakah bisa diakses offline?',
    a: 'Beberapa modul bisa diunduh untuk akses offline melalui fitur Download Offline di pengaturan.',
  },
]

const roadmapNodes = [
  { label: 'Computer Basics', status: 'completed', x: 80, y: 60 },
  { label: 'Hardware', status: 'completed', x: 200, y: 120 },
  { label: 'Networking', status: 'current', x: 320, y: 70 },
  { label: 'IP Address', status: 'locked', x: 440, y: 130 },
  { label: 'Subnetting', status: 'locked', x: 560, y: 70 },
  { label: 'Routing', status: 'locked', x: 680, y: 130 },
  { label: 'Server', status: 'locked', x: 780, y: 60 },
]

export default function Landing({ onNavigate }: LandingProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [mobileMenu, setMobileMenu] = useState(false)

  return (
    <div className="min-h-screen" style={{ background: '#F8F8FC', fontFamily: 'Poppins, sans-serif' }}>
      {/* Navbar */}
      <nav className="sticky top-0 z-50 glass" style={{ borderBottom: '1px solid rgba(55,36,102,0.08)' }}>
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
              <Zap size={16} className="text-white" />
            </div>
            <span className="font-bold text-lg" style={{ color: '#372466' }}>PintarIT</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {['Home', 'Features', 'About'].map(item => (
              <a key={item} href="#" className="text-sm font-medium transition-colors duration-200"
                style={{ color: '#969696' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#372466')}
                onMouseLeave={e => (e.currentTarget.style.color = '#969696')}
              >{item}</a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => onNavigate('login')}
              className="px-5 py-2 text-sm font-medium rounded-xl transition-all duration-200"
              style={{ color: '#372466', border: '1.5px solid #9568FF' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(149,104,255,0.08)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent' }}
            >Login</button>
            <button
              onClick={() => onNavigate('register')}
              className="px-5 py-2 text-sm font-semibold rounded-xl text-white transition-all duration-200"
              style={{ background: 'linear-gradient(135deg, #372466 0%, #9568FF 100%)' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '0.9' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '1' }}
            >Register</button>
          </div>

          <button className="md:hidden" onClick={() => setMobileMenu(!mobileMenu)}>
            {mobileMenu ? <X size={22} color="#372466" /> : <Menu size={22} color="#372466" />}
          </button>
        </div>

        {mobileMenu && (
          <div className="md:hidden glass px-6 py-4 flex flex-col gap-3 absolute top-16 left-0 right-0 shadow-lg" style={{ background: '#fff' }}>
            {['Home', 'Features', 'About'].map(item => (
              <a key={item} href="#" className="text-sm font-medium" style={{ color: '#333333' }}>{item}</a>
            ))}
            <div className="flex flex-col gap-3 pt-2 mt-2" style={{ borderTop: '1px solid #E8E6F0' }}>
              <button onClick={() => onNavigate('login')} className="w-full py-2.5 text-sm font-medium rounded-xl" style={{ border: '1.5px solid #9568FF', color: '#372466' }}>Login</button>
              <button onClick={() => onNavigate('register')} className="w-full py-2.5 text-sm font-semibold rounded-xl text-white gradient-primary">Register</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 px-6 md:py-24">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-20"
            style={{ background: 'radial-gradient(circle, #9568FF, transparent)' }} />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full opacity-15"
            style={{ background: 'radial-gradient(circle, #B794F6, transparent)' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-5"
            style={{ background: 'radial-gradient(circle, #372466, transparent)' }} />
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-xs font-semibold"
                style={{ background: 'rgba(149,104,255,0.1)', color: '#9568FF', border: '1px solid rgba(149,104,255,0.2)' }}>
                <Zap size={14} />
                Platform Belajar IT Terbaik untuk SMK
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-4" style={{ color: '#372466', letterSpacing: '-1px' }}>
                Belajar IT Lebih{' '}
                <span className="gradient-text">Pintar,</span><br/>
                Lebih Seru
              </h1>

              <p className="text-base lg:text-lg font-medium mb-8 leading-relaxed" style={{ color: '#969696' }}>
                Making IT Learning Easy for Beginners, Accelerating Potential for Experts.
                Platform adaptif dengan roadmap RPG, gamifikasi, dan belajar inklusif untuk siswa SMK TKJ/RPL.
              </p>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => onNavigate('dashboard')}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-base transition-all duration-200"
                  style={{ background: 'linear-gradient(135deg, #372466 0%, #9568FF 100%)', boxShadow: '0 8px 24px rgba(149,104,255,0.4)' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)' }}
                >
                  Get Started <ArrowRight size={18} />
                </button>
                <button
                  onClick={() => onNavigate('roadmap')}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-base transition-all duration-200"
                  style={{ color: '#372466', border: '1.5px solid #9568FF', background: 'white' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(149,104,255,0.05)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'white' }}
                >
                  <Map size={18} /> Explore Roadmap
                </button>
              </div>

              <div className="flex items-center gap-6 mt-12">
                <div className="flex -space-x-3">
                  {['RP', 'SN', 'BA', 'DK'].map((a, i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-[3px] border-white flex items-center justify-center text-sm font-bold text-white shadow-sm"
                      style={{ background: ['#9568FF', '#4CAF50', '#FFC107', '#B794F6'][i] }}>
                      {a}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#FFC107" color="#FFC107" />)}
                    <span className="text-sm font-bold ml-2" style={{ color: '#333333' }}>4.9/5</span>
                  </div>
                  <span className="text-sm font-medium" style={{ color: '#969696' }}>dari 12,000+ siswa</span>
                </div>
              </div>
            </div>

            {/* Hero illustration */}
            <div className="relative flex items-center justify-center lg:justify-end">
              <div className="relative w-full max-w-[460px]">
                {/* Main card */}
                <div className="glass rounded-3xl p-6 shadow-2xl" style={{ boxShadow: '0 32px 64px rgba(55,36,102,0.15)', background: '#ffffff' }}>
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <p className="text-xs font-medium mb-1" style={{ color: '#969696' }}>Current Level</p>
                      <p className="text-xl font-bold" style={{ color: '#372466' }}>Network Warrior</p>
                    </div>
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow-sm"
                      style={{ background: 'linear-gradient(135deg, #9568FF, #B794F6)' }}>🛡️</div>
                  </div>
                  {/* XP bar */}
                  <div className="mb-6">
                    <div className="flex justify-between text-xs mb-2">
                      <span className="font-medium" style={{ color: '#969696' }}>XP Progress</span>
                      <span style={{ color: '#9568FF' }} className="font-bold">2,840 / 3,000</span>
                    </div>
                    <div className="h-3.5 rounded-full" style={{ background: '#F0EFF8' }}>
                      <div className="h-3.5 rounded-full" style={{ width: '94.7%', background: 'linear-gradient(90deg, #9568FF, #B794F6)' }} />
                    </div>
                  </div>
                  {/* Modules */}
                  <div className="space-y-4">
                    {[
                      { name: 'Networking Fundamentals', progress: 100, status: 'done' },
                      { name: 'IP Address & Subnetting', progress: 68, status: 'active' },
                      { name: 'Routing Protocols', progress: 0, status: 'locked' },
                    ].map((m, i) => (
                      <div key={i} className="flex items-center gap-4 p-3 rounded-xl"
                        style={{ background: m.status === 'active' ? 'rgba(149,104,255,0.06)' : 'transparent' }}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm`}
                          style={{
                            background: m.status === 'done' ? '#4CAF50' : m.status === 'active' ? '#9568FF' : '#E8E6F0',
                            color: m.status === 'locked' ? '#969696' : 'white'
                          }}>
                          {m.status === 'done' ? '✓' : m.status === 'active' ? '▶' : '🔒'}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium" style={{ color: m.status === 'locked' ? '#969696' : '#333333' }}>{m.name}</p>
                          {m.status !== 'locked' && (
                            <div className="h-1.5 rounded-full mt-2" style={{ background: '#F0EFF8' }}>
                              <div className="h-1.5 rounded-full" style={{ width: `${m.progress}%`, background: m.status === 'done' ? '#4CAF50' : '#9568FF' }} />
                            </div>
                          )}
                        </div>
                        {m.status !== 'locked' && <span className="text-sm font-bold" style={{ color: '#9568FF' }}>{m.progress}%</span>}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating badge card */}
                <div className="absolute -top-6 -right-6 glass rounded-xl p-3 shadow-xl flex items-center gap-2" style={{ background: 'rgba(255,255,255,0.95)' }}>
                  <span className="text-2xl">🏆</span>
                  <div>
                    <p className="text-xs font-bold" style={{ color: '#372466' }}>Badge Earned!</p>
                    <p className="text-xs" style={{ color: '#969696' }}>Linux Warrior</p>
                  </div>
                </div>

                {/* Floating XP card */}
                <div className="absolute -bottom-5 -left-6 glass rounded-xl p-3 shadow-xl flex items-center gap-2" style={{ background: 'rgba(255,255,255,0.95)' }}>
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #FFC107, #FF9800)' }}>
                    <Zap size={16} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold" style={{ color: '#333333' }}>+150 XP</p>
                    <p className="text-xs" style={{ color: '#969696' }}>Quiz Completed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 text-center card-hover"
                style={{ boxShadow: '0 4px 20px rgba(55,36,102,0.08)' }}>
                <div className="w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center"
                  style={{ background: `${stat.color}18` }}>
                  <stat.icon size={22} style={{ color: stat.color }} />
                </div>
                <div className="text-2xl font-bold mb-1" style={{ color: '#372466' }}>{stat.value}</div>
                <div className="text-xs font-medium" style={{ color: '#969696' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 text-xs font-semibold"
              style={{ background: 'rgba(149,104,255,0.1)', color: '#9568FF' }}>
              ✨ Fitur Unggulan
            </div>
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#372466' }}>
              Semua yang Kamu Butuhkan untuk Belajar IT
            </h2>
            <p className="text-sm max-w-lg mx-auto" style={{ color: '#969696' }}>
              Belajar dengan cara yang menyenangkan, terstruktur, dan adaptif sesuai kemampuanmu.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 card-hover"
                style={{ boxShadow: '0 4px 20px rgba(55,36,102,0.07)' }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: f.bg }}>
                  <f.icon size={22} style={{ color: f.color }} />
                </div>
                <h3 className="font-bold text-sm mb-2" style={{ color: '#372466' }}>{f.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: '#969696' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Preview */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl p-8 md:p-12 relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #372466 0%, #1a0f3d 100%)' }}>
            <div className="absolute inset-0 opacity-20"
              style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #9568FF 0%, transparent 60%), radial-gradient(circle at 80% 20%, #B794F6 0%, transparent 50%)' }} />

            <div className="relative">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 text-xs font-semibold"
                  style={{ background: 'rgba(183,148,246,0.2)', color: '#B794F6' }}>
                  🗺️ Adventure Roadmap
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Roadmap Belajar IT</h2>
                <p className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>Petualangan belajarmu dimulai dari sini</p>
              </div>

              {/* Roadmap SVG Preview */}
              <div className="relative bg-white/5 rounded-2xl p-6 overflow-x-auto">
                <svg width="860" height="200" viewBox="0 0 860 200" className="min-w-max mx-auto">
                  {/* Connection lines */}
                  {roadmapNodes.slice(0, -1).map((node, i) => {
                    const next = roadmapNodes[i + 1]
                    return (
                      <line key={i}
                        x1={node.x + 28} y1={node.y + 28}
                        x2={next.x + 28} y2={next.y + 28}
                        stroke={node.status === 'locked' ? 'rgba(255,255,255,0.15)' : 'rgba(149,104,255,0.6)'}
                        strokeWidth="2.5"
                        strokeDasharray={node.status === 'locked' ? '6,4' : 'none'}
                      />
                    )
                  })}
                  {/* Nodes */}
                  {roadmapNodes.map((node, i) => (
                    <g key={i} transform={`translate(${node.x}, ${node.y})`}>
                      <circle cx="28" cy="28" r="28"
                        fill={node.status === 'completed' ? '#4CAF50' : node.status === 'current' ? '#9568FF' : 'rgba(255,255,255,0.1)'}
                        stroke={node.status === 'current' ? '#B794F6' : 'transparent'}
                        strokeWidth="3"
                      />
                      {node.status === 'current' && (
                        <circle cx="28" cy="28" r="34" fill="none" stroke="rgba(149,104,255,0.4)" strokeWidth="2">
                          <animate attributeName="r" from="28" to="40" dur="2s" repeatCount="indefinite" />
                          <animate attributeName="opacity" from="0.8" to="0" dur="2s" repeatCount="indefinite" />
                        </circle>
                      )}
                      <text x="28" y="33" textAnchor="middle" fontSize="16" fill="white">
                        {node.status === 'completed' ? '✓' : node.status === 'current' ? '▶' : '🔒'}
                      </text>
                      <text x="28" y="75" textAnchor="middle" fontSize="10" fill={node.status === 'locked' ? 'rgba(255,255,255,0.4)' : 'white'} fontFamily="Poppins" fontWeight="600">
                        {node.label.split(' ')[0]}
                      </text>
                      <text x="28" y="87" textAnchor="middle" fontSize="10" fill={node.status === 'locked' ? 'rgba(255,255,255,0.4)' : 'rgba(255,255,255,0.8)'} fontFamily="Poppins">
                        {node.label.split(' ').slice(1).join(' ')}
                      </text>
                    </g>
                  ))}
                </svg>
              </div>

              <div className="flex justify-center mt-6 gap-4 flex-wrap">
                {[
                  { color: '#4CAF50', label: 'Selesai' },
                  { color: '#9568FF', label: 'Sedang dipelajari' },
                  { color: 'rgba(255,255,255,0.2)', label: 'Terkunci' },
                ].map((l, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-white/70">
                    <div className="w-3 h-3 rounded-full" style={{ background: l.color }} />
                    {l.label}
                  </div>
                ))}
              </div>

              <div className="flex justify-center mt-6">
                <button
                  onClick={() => onNavigate('roadmap')}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white transition-all duration-200"
                  style={{ border: '1.5px solid rgba(183,148,246,0.5)' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(149,104,255,0.2)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent' }}
                >
                  Lihat Roadmap Lengkap <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold mb-2" style={{ color: '#372466' }}>Kata Mereka tentang PintarIT</h2>
            <p className="text-sm" style={{ color: '#969696' }}>Ribuan siswa SMK sudah merasakan manfaatnya</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 card-hover"
                style={{ boxShadow: '0 4px 20px rgba(55,36,102,0.07)' }}>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(t.rating)].map((_, j) => <Star key={j} size={12} fill="#FFC107" color="#FFC107" />)}
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: '#333333' }}>"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white"
                    style={{ background: 'linear-gradient(135deg, #372466, #9568FF)' }}>
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: '#333333' }}>{t.name}</p>
                    <p className="text-xs" style={{ color: '#969696' }}>{t.school}</p>
                  </div>
                  <div className="ml-auto">
                    <span className="text-xs px-2 py-1 rounded-full font-medium"
                      style={{ background: 'rgba(149,104,255,0.1)', color: '#9568FF' }}>
                      {t.badge}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold mb-2" style={{ color: '#372466' }}>Pertanyaan Umum</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden transition-all duration-200"
                style={{ boxShadow: '0 2px 12px rgba(55,36,102,0.06)' }}>
                <button
                  className="w-full flex items-center justify-between px-6 py-4 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-semibold text-sm" style={{ color: '#372466' }}>{faq.q}</span>
                  <ChevronDown
                    size={16}
                    style={{ color: '#9568FF', transform: openFaq === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-4">
                    <p className="text-sm leading-relaxed" style={{ color: '#969696' }}>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="rounded-3xl p-10 relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #372466 0%, #9568FF 100%)', boxShadow: '0 24px 64px rgba(149,104,255,0.35)' }}>
            <div className="absolute inset-0 opacity-30"
              style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(255,255,255,0.2) 0%, transparent 60%)' }} />
            <div className="relative">
              <div className="text-4xl mb-4">🚀</div>
              <h2 className="text-2xl font-bold text-white mb-3">Mulai Petualangan IT-mu Sekarang</h2>
              <p className="text-sm mb-6" style={{ color: 'rgba(255,255,255,0.75)' }}>
                Bergabung dengan 12,000+ siswa SMK yang sudah belajar lebih pintar
              </p>
              <div className="flex justify-center gap-3 flex-wrap">
                <button
                  onClick={() => onNavigate('register')}
                  className="px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200"
                  style={{ background: 'white', color: '#372466' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)' }}
                >
                  Daftar Gratis
                </button>
                <button
                  onClick={() => onNavigate('login')}
                  className="px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200"
                  style={{ border: '1.5px solid rgba(255,255,255,0.4)', color: 'white' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.1)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent' }}
                >
                  Masuk ke Akun
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6" style={{ borderTop: '1px solid #E8E6F0' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-lg gradient-primary flex items-center justify-center">
                  <Zap size={14} className="text-white" />
                </div>
                <span className="font-bold" style={{ color: '#372466' }}>PintarIT</span>
              </div>
              <p className="text-xs leading-relaxed" style={{ color: '#969696' }}>
                Platform belajar IT adaptif untuk siswa SMK TKJ/RPL Indonesia.
              </p>
            </div>
            {[
              { title: 'Platform', links: ['Roadmap', 'Modul', 'Kamus IT', 'Gamifikasi'] },
              { title: 'Belajar', links: ['TKJ', 'RPL', 'Cisco', 'Linux'] },
              { title: 'Perusahaan', links: ['Tentang', 'Blog', 'Karir', 'Kontak'] },
            ].map((col, i) => (
              <div key={i}>
                <h4 className="font-semibold text-xs mb-3" style={{ color: '#372466' }}>{col.title}</h4>
                <ul className="space-y-2">
                  {col.links.map(link => (
                    <li key={link}>
                      <a href="#" className="text-xs transition-colors duration-200"
                        style={{ color: '#969696' }}
                        onMouseEnter={e => (e.currentTarget.style.color = '#9568FF')}
                        onMouseLeave={e => (e.currentTarget.style.color = '#969696')}
                      >{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-2"
            style={{ borderTop: '1px solid #E8E6F0' }}>
            <p className="text-xs" style={{ color: '#969696' }}>© 2024 PintarIT. All rights reserved.</p>
            <div className="flex gap-4">
              {['Privacy', 'Terms', 'Cookies'].map(item => (
                <a key={item} href="#" className="text-xs" style={{ color: '#969696' }}>{item}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
