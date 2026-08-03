import { Edit3, Download, School, Calendar, TrendingUp } from 'lucide-react'

const certs = [
  { name: 'Networking Fundamentals', date: '15 Jan 2024', issuer: 'PintarIT', icon: '📜' },
  { name: 'Linux Essentials', date: '28 Feb 2024', issuer: 'PintarIT', icon: '🐧' },
  { name: 'CompTIA Network+ Prep', date: '10 Mar 2024', issuer: 'PintarIT', icon: '🏆' },
]

const history = [
  { title: 'Networking Fundamentals', date: '15 Jan 2024', xp: 250, status: 'completed' },
  { title: 'Hardware Components', date: '20 Jan 2024', xp: 200, status: 'completed' },
  { title: 'Linux Command Line', date: '5 Feb 2024', xp: 150, status: 'completed' },
  { title: 'IP Address & Subnetting', date: 'Dalam progress', xp: 250, status: 'active' },
]

export default function Profile() {
  return (
    <div className="flex-1 overflow-y-auto p-6 space-y-6" style={{ background: '#F8F8FC' }}>
      {/* Profile hero */}
      <div className="bg-white rounded-2xl overflow-hidden" style={{ boxShadow: '0 4px 16px rgba(55,36,102,0.07)' }}>
        <div className="h-32 relative" style={{ background: 'linear-gradient(135deg, #372466 0%, #9568FF 100%)' }}>
          <div className="absolute inset-0 opacity-30"
            style={{ backgroundImage: 'radial-gradient(circle at 80% 50%, #B794F6 0%, transparent 60%)' }} />
        </div>
        <div className="px-6 pb-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4">
            <div className="w-24 h-24 rounded-2xl border-4 border-white flex items-center justify-center text-3xl font-bold text-white shrink-0 -mt-12 relative z-10"
              style={{ background: 'linear-gradient(135deg, #9568FF, #B794F6)', boxShadow: '0 8px 24px rgba(149,104,255,0.4)' }}>
              RP
            </div>
            <button className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold mt-4 sm:mt-0 hover:bg-purple-50 transition-colors duration-200"
              style={{ border: '1.5px solid #9568FF', color: '#9568FF' }}>
              <Edit3 size={14} /> Edit Profil
            </button>
          </div>

          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div className="flex-1">
              <h2 className="text-2xl font-bold" style={{ color: '#372466' }}>Rizki Pratama</h2>
              <p className="text-sm font-medium mt-1" style={{ color: '#9568FF' }}>Network Warrior · Level 8</p>
              
              <div className="flex flex-wrap items-center gap-4 mt-3">
                <div className="flex items-center gap-1.5 text-xs font-medium" style={{ color: '#7A7A9D' }}>
                  <School size={14} /> SMK TKJ Bandung
                </div>
                <div className="flex items-center gap-1.5 text-xs font-medium" style={{ color: '#7A7A9D' }}>
                  <Calendar size={14} /> Bergabung Jan 2024
                </div>
              </div>
              
              <p className="text-sm mt-4 leading-relaxed max-w-2xl" style={{ color: '#555570' }}>
                Siswa SMK TKJ yang passionate di bidang networking dan cloud computing. Senang eksplorasi teknologi baru dan berbagi ilmu dengan teman.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 w-full md:w-auto shrink-0 mt-2 md:mt-0">
              {[
                { label: 'XP Total', value: '2,840', color: '#9568FF' },
                { label: 'Badge', value: '4', color: '#FFC107' },
                { label: 'Streak', value: '7 hari', color: '#FF7043' },
              ].map((s, i) => (
                <div key={i} className="text-center px-4 py-3 rounded-xl min-w-[90px]" style={{ background: '#F8F8FC', border: '1px solid #F0EFF8' }}>
                  <p className="text-lg font-bold" style={{ color: s.color }}>{s.value}</p>
                  <p className="text-xs font-medium mt-1" style={{ color: '#7A7A9D' }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* XP progress */}
          <div className="mt-4">
            <div className="flex justify-between text-xs mb-1">
              <span style={{ color: '#969696' }}>Progress ke Level 9</span>
              <span className="font-semibold" style={{ color: '#9568FF' }}>2,840 / 3,000 XP</span>
            </div>
            <div className="h-2 rounded-full" style={{ background: '#F0EFF8' }}>
              <div className="h-2 rounded-full" style={{ width: '94.7%', background: 'linear-gradient(90deg, #9568FF, #B794F6)' }} />
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Badges */}
        <div className="bg-white rounded-2xl p-5" style={{ boxShadow: '0 4px 16px rgba(55,36,102,0.07)' }}>
          <h3 className="font-bold text-sm mb-4" style={{ color: '#372466' }}>🏆 Badge Diraih</h3>
          <div className="grid grid-cols-2 gap-3">
            {['🌱', '🌐', '🗺️', '🐧'].map((icon, i) => (
              <div key={i} className="text-center p-3 rounded-xl card-hover"
                style={{ background: 'rgba(149,104,255,0.06)', border: '1.5px solid rgba(149,104,255,0.15)' }}>
                <div className="text-3xl mb-1">{icon}</div>
                <p className="text-xs font-semibold" style={{ color: '#372466' }}>
                  {['IT Beginner', 'Network Buddy', 'IT Explorer', 'Linux Warrior'][i]}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Learning History */}
        <div className="bg-white rounded-2xl p-5" style={{ boxShadow: '0 4px 16px rgba(55,36,102,0.07)' }}>
          <h3 className="font-bold text-sm mb-4" style={{ color: '#372466' }}>📚 Riwayat Belajar</h3>
          <div className="space-y-3">
            {history.map((h, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm flex-shrink-0"
                  style={{ background: h.status === 'completed' ? 'rgba(76,175,80,0.1)' : 'rgba(149,104,255,0.1)' }}>
                  {h.status === 'completed' ? '✅' : '▶'}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium truncate" style={{ color: '#333333' }}>{h.title}</p>
                  <p className="text-xs" style={{ color: '#969696' }}>{h.date}</p>
                </div>
                <span className="text-xs font-bold" style={{ color: '#9568FF' }}>+{h.xp}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Certificates */}
        <div className="bg-white rounded-2xl p-5" style={{ boxShadow: '0 4px 16px rgba(55,36,102,0.07)' }}>
          <h3 className="font-bold text-sm mb-4" style={{ color: '#372466' }}>📜 Sertifikat</h3>
          <div className="space-y-3">
            {certs.map((c, i) => (
              <div key={i} className="p-3 rounded-xl"
                style={{ background: 'linear-gradient(135deg, rgba(55,36,102,0.04), rgba(149,104,255,0.06))', border: '1px solid rgba(149,104,255,0.12)' }}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-base">{c.icon}</span>
                  <button className="flex items-center gap-1 text-xs" style={{ color: '#9568FF' }}>
                    <Download size={10} /> PDF
                  </button>
                </div>
                <p className="text-xs font-semibold" style={{ color: '#372466' }}>{c.name}</p>
                <p className="text-xs" style={{ color: '#969696' }}>{c.issuer} · {c.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Settings quick access */}
      <div className="bg-white rounded-2xl p-5" style={{ boxShadow: '0 4px 16px rgba(55,36,102,0.07)' }}>
        <h3 className="font-bold text-sm mb-4" style={{ color: '#372466' }}>⚙️ Pengaturan Akun</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            { label: 'Dark Mode', value: 'Nonaktif', icon: '🌙' },
            { label: 'Bahasa', value: 'Indonesia', icon: '🌐' },
            { label: 'Notifikasi', value: 'Aktif', icon: '🔔' },
            { label: 'Unduhan Offline', value: '2.4 GB', icon: '📥' },
          ].map((s, i) => (
            <div key={i} className="flex items-center gap-3 p-3 rounded-xl" style={{ background: '#F8F8FC' }}>
              <span className="text-xl">{s.icon}</span>
              <div>
                <p className="text-xs font-semibold" style={{ color: '#333333' }}>{s.label}</p>
                <p className="text-xs" style={{ color: '#9568FF' }}>{s.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
