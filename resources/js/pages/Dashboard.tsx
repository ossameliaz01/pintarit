import { Zap, BookOpen, Target, TrendingUp, ChevronRight, Flame, Trophy, Clock, Play, Lock } from 'lucide-react'
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

interface DashboardProps {
  onNavigate: (page: string) => void
}

const xpData = [
  { day: 'Sen', xp: 180 },
  { day: 'Sel', xp: 340 },
  { day: 'Rab', xp: 220 },
  { day: 'Kam', xp: 490 },
  { day: "Jum'", xp: 320 },
  { day: 'Sab', xp: 580 },
  { day: 'Min', xp: 340 },
]

const recentModules = [
  { name: 'IP Address & Subnetting', progress: 68, xp: 200, time: '45 mnt', icon: '🌐' },
  { name: 'Routing Protocols (OSPF)', progress: 30, xp: 250, time: '60 mnt', icon: '🔀' },
  { name: 'Linux Command Line', progress: 100, xp: 150, time: '30 mnt', icon: '🐧' },
  { name: 'Firewall & Security', progress: 0, xp: 300, time: '90 mnt', icon: '🛡️', locked: true },
]

const missions = [
  { title: 'Selesaikan 1 kuis hari ini', reward: '50 XP', done: true, icon: '📝' },
  { title: 'Belajar 30 menit non-stop', reward: '80 XP', done: true, icon: '⏱️' },
  { title: 'Buka modul baru', reward: '100 XP', done: false, icon: '🗝️' },
  { title: 'Jawab 5 soal kamus IT', reward: '60 XP', done: false, icon: '📚' },
]

const leaderboard = [
  { name: 'Bagas Adi', xp: 4200, badge: '🏆', level: 12, school: 'SMK TKJ Sby' },
  { name: 'Siti Nurhaliza', xp: 3850, badge: '🥈', level: 11, school: 'SMK RPL Jkt' },
  { name: 'Rizki Pratama', xp: 2840, badge: '🥉', level: 8, school: 'SMK TKJ Bdg', isMe: true },
  { name: 'Dika Kurniawan', xp: 2510, badge: '4️⃣', level: 7, school: 'SMK TKJ Mdn' },
  { name: 'Alya Putri', xp: 2200, badge: '5️⃣', level: 7, school: 'SMK RPL Sby' },
]

const quickActions = [
  { label: 'Lanjut Belajar', icon: Play, color: '#9568FF', bg: 'rgba(149,104,255,0.1)', page: 'learning' },
  { label: 'Lihat Roadmap', icon: Target, color: '#4CAF50', bg: 'rgba(76,175,80,0.1)', page: 'roadmap' },
  { label: 'Kamus IT', icon: BookOpen, color: '#FFC107', bg: 'rgba(255,193,7,0.1)', page: 'dictionary' },
  { label: 'Pencapaian', icon: Trophy, color: '#B794F6', bg: 'rgba(183,148,246,0.1)', page: 'achievements' },
]

export default function Dashboard({ onNavigate }: DashboardProps) {
  return (
    <div className="flex-1 overflow-y-auto p-6 space-y-6" style={{ background: '#F8F8FC' }}>
      {/* Welcome card */}
      <div className="rounded-2xl p-6 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #372466 0%, #9568FF 100%)', boxShadow: '0 8px 32px rgba(149,104,255,0.35)' }}>
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, #B794F6 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(255,255,255,0.3) 0%, transparent 40%)' }} />
        <div className="relative flex flex-wrap gap-6 items-start justify-between">
          <div>
            <p className="text-base mb-1" style={{ color: 'rgba(255,255,255,0.7)' }}>Selamat datang kembali 👋</p>
            <h2 className="text-2xl font-bold text-white mb-1">Rizki Pratama</h2>
            <p className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>SMK TKJ Bandung · Network Warrior</p>
          </div>
          <div className="flex gap-4 flex-wrap">
            {[
              { label: 'XP Hari Ini', value: '340', icon: '⚡', color: '#FFC107' },
              { label: 'Badge', value: 'Warrior', icon: '🛡️', color: '#B794F6' },
              { label: 'Level', value: '8', icon: '⭐', color: '#4CAF50' },
              { label: 'Streak', value: '7 hari', icon: '🔥', color: '#FF7043' },
            ].map((stat, i) => (
              <div key={i} className="text-center px-4 py-3 rounded-xl"
                style={{ background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)' }}>
                <div className="text-xl mb-0.5">{stat.icon}</div>
                <p className="text-base font-bold text-white">{stat.value}</p>
                <p className="text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* XP Progress */}
        <div className="relative mt-5">
          <div className="flex justify-between text-sm mb-1.5">
            <span style={{ color: 'rgba(255,255,255,0.65)' }}>Progress ke Level 9</span>
            <span className="font-semibold text-white">2,840 / 3,000 XP</span>
          </div>
          <div className="h-2.5 rounded-full" style={{ background: 'rgba(255,255,255,0.2)' }}>
            <div className="h-2.5 rounded-full relative overflow-hidden" style={{ width: '94.7%', background: 'linear-gradient(90deg, #FFC107, #FF9800)' }}>
              <div className="absolute inset-0 opacity-40"
                style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.6) 50%, transparent 100%)', animation: 'shimmer 2s infinite' }} />
            </div>
          </div>
          <p className="text-sm mt-1" style={{ color: 'rgba(255,255,255,0.5)' }}>160 XP lagi untuk naik level!</p>
        </div>
      </div>

      {/* Quick actions */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {quickActions.map((qa, i) => (
          <button key={i} onClick={() => onNavigate(qa.page)}
            className="bg-white rounded-2xl p-4 flex flex-col items-center gap-3 card-hover transition-all duration-200"
            style={{ boxShadow: '0 4px 16px rgba(55,36,102,0.07)' }}>
            <div className="w-14 h-14 rounded-xl flex items-center justify-center"
              style={{ background: qa.bg }}>
              <qa.icon size={24} style={{ color: qa.color }} />
            </div>
            <span className="text-sm font-semibold" style={{ color: '#372466' }}>{qa.label}</span>
          </button>
        ))}
      </div>

      {/* XP Chart + Leaderboard row */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* XP Chart */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6" style={{ boxShadow: '0 4px 16px rgba(55,36,102,0.07)' }}>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-bold text-base" style={{ color: '#372466' }}>XP Mingguan</h3>
              <p className="text-sm" style={{ color: '#969696' }}>Total: 2,470 XP pekan ini</p>
            </div>
            <div className="flex items-center gap-1 px-3 py-1.5 rounded-xl text-sm font-semibold"
              style={{ background: 'rgba(76,175,80,0.1)', color: '#4CAF50' }}>
              <TrendingUp size={14} /> +18%
            </div>
          </div>
          <ResponsiveContainer width="100%" height={180}>
            <AreaChart data={xpData}>
              <defs>
                <linearGradient id="xpGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#9568FF" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="#9568FF" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="day" tick={{ fontSize: 11, fill: '#969696', fontFamily: 'Poppins' }} axisLine={false} tickLine={false} />
              <YAxis hide />
              <Tooltip
                contentStyle={{ borderRadius: '12px', border: '1px solid #E8E6F0', fontSize: '12px', fontFamily: 'Poppins' }}
                formatter={(v) => [`${v} XP`, 'XP']}
              />
              <Area type="monotone" dataKey="xp" stroke="#9568FF" strokeWidth={2.5} fill="url(#xpGrad)" dot={{ fill: '#9568FF', r: 3 }} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Leaderboard */}
        <div className="bg-white rounded-2xl p-6" style={{ boxShadow: '0 4px 16px rgba(55,36,102,0.07)' }}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-base" style={{ color: '#372466' }}>Leaderboard</h3>
            <span className="text-sm" style={{ color: '#9568FF' }}>Minggu ini</span>
          </div>
          <div className="space-y-3">
            {leaderboard.map((user, i) => (
              <div key={i} className={`flex items-center gap-3 p-2 rounded-xl ${user.isMe ? 'border' : ''}`}
                style={user.isMe ? { background: 'rgba(149,104,255,0.07)', borderColor: 'rgba(149,104,255,0.2)' } : {}}>
                <span className="text-lg w-5 text-center">{user.badge}</span>
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white"
                  style={{ background: 'linear-gradient(135deg, #372466, #9568FF)', flexShrink: 0 }}>
                  {user.name[0]}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold truncate" style={{ color: user.isMe ? '#372466' : '#333333' }}>
                    {user.name} {user.isMe && <span style={{ color: '#9568FF' }}>•Kamu</span>}
                  </p>
                  <p className="text-sm truncate" style={{ color: '#969696' }}>Lv.{user.level}</p>
                </div>
                <span className="text-sm font-bold" style={{ color: '#9568FF' }}>{user.xp.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Modules + Daily Missions */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Modules */}
        <div className="bg-white rounded-2xl p-6" style={{ boxShadow: '0 4px 16px rgba(55,36,102,0.07)' }}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-base" style={{ color: '#372466' }}>Modul Terkini</h3>
            <button onClick={() => onNavigate('roadmap')} className="flex items-center gap-1 text-sm font-medium" style={{ color: '#9568FF' }}>
              Lihat semua <ChevronRight size={14} />
            </button>
          </div>
          <div className="space-y-3">
            {recentModules.map((m, i) => (
              <div key={i} className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-200 cursor-pointer ${!m.locked ? 'hover:bg-purple-50' : ''}`}
                style={{ background: m.locked ? '#F8F8FC' : 'white', border: '1px solid #F0EFF8', opacity: m.locked ? 0.6 : 1 }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: m.locked ? '#F0EFF8' : 'rgba(149,104,255,0.1)' }}>
                  {m.locked ? <Lock size={20} style={{ color: '#969696' }} /> : m.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold truncate" style={{ color: m.locked ? '#969696' : '#333333' }}>{m.name}</p>
                  <div className="flex items-center gap-2 mt-1">
                    {m.progress > 0 && !m.locked && (
                      <>
                        <div className="flex-1 h-1 rounded-full" style={{ background: '#F0EFF8' }}>
                          <div className="h-1 rounded-full" style={{ width: `${m.progress}%`, background: m.progress === 100 ? '#4CAF50' : '#9568FF' }} />
                        </div>
                        <span className="text-sm" style={{ color: '#969696' }}>{m.progress}%</span>
                      </>
                    )}
                  </div>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-sm" style={{ color: '#9568FF' }}>⚡ {m.xp} XP</span>
                    <span className="text-sm" style={{ color: '#969696' }}>⏱ {m.time}</span>
                  </div>
                </div>
                {!m.locked && (
                  <button className="w-9 h-9 rounded-lg flex items-center justify-center"
                    style={{ background: 'rgba(149,104,255,0.1)' }}
                    onClick={() => onNavigate('learning')}>
                    <Play size={14} style={{ color: '#9568FF' }} />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Daily Missions */}
        <div className="bg-white rounded-2xl p-6" style={{ boxShadow: '0 4px 16px rgba(55,36,102,0.07)' }}>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-bold text-base" style={{ color: '#372466' }}>Misi Harian</h3>
              <p className="text-sm" style={{ color: '#969696' }}>2 / 4 selesai</p>
            </div>
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-sm font-bold"
              style={{ background: 'rgba(255,193,7,0.1)', color: '#FFC107' }}>
              <Flame size={14} /> 7 hari
            </div>
          </div>

          <div className="mb-4">
            <div className="h-1.5 rounded-full" style={{ background: '#F0EFF8' }}>
              <div className="h-1.5 rounded-full" style={{ width: '50%', background: 'linear-gradient(90deg, #9568FF, #B794F6)' }} />
            </div>
            <p className="text-sm mt-1" style={{ color: '#969696' }}>290 / 580 XP bonus hari ini</p>
          </div>

          <div className="space-y-3">
            {missions.map((m, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-xl mission-stripe"
                style={{ border: '1px solid #F0EFF8' }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                  style={{ background: m.done ? 'rgba(76,175,80,0.1)' : 'rgba(149,104,255,0.1)' }}>
                  {m.done ? '✅' : m.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium" style={{ color: m.done ? '#969696' : '#333333', textDecoration: m.done ? 'line-through' : 'none' }}>
                    {m.title}
                  </p>
                  <p className="text-sm font-semibold mt-0.5" style={{ color: m.done ? '#4CAF50' : '#9568FF' }}>{m.reward}</p>
                </div>
                <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: m.done ? '#4CAF50' : '#F0EFF8' }}>
                  <span className="text-sm" style={{ color: m.done ? 'white' : 'transparent' }}>✓</span>
                </div>
              </div>
            ))}
          </div>

          {/* Upcoming challenges */}
          <div className="mt-5 p-3 rounded-xl" style={{ background: 'rgba(149,104,255,0.06)', border: '1px dashed rgba(149,104,255,0.3)' }}>
            <p className="text-sm font-semibold mb-1" style={{ color: '#9568FF' }}>🎯 Challenge Minggu Ini</p>
            <p className="text-sm" style={{ color: '#969696' }}>Selesaikan Modul Subnetting dalam 5 hari</p>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex-1 h-1.5 rounded-full" style={{ background: '#E8E6F0' }}>
                <div className="h-1.5 rounded-full" style={{ width: '35%', background: '#9568FF' }} />
              </div>
              <span className="text-sm font-semibold" style={{ color: '#9568FF' }}>35%</span>
            </div>
            <p className="text-sm mt-1" style={{ color: '#969696' }}>Reward: 500 XP + Badge "Subnet Master"</p>
          </div>
        </div>
      </div>
    </div>
  )
}
