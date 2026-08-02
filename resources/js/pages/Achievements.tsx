import { Flame, Trophy, Target, Calendar } from 'lucide-react'
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts'

const badges = [
  { name: 'IT Beginner', icon: '🌱', xpReq: 100, desc: 'Menyelesaikan modul pertama', unlocked: true, color: '#4CAF50', rarity: 'Common' },
  { name: 'Network Buddy', icon: '🌐', xpReq: 500, desc: 'Memahami dasar jaringan komputer', unlocked: true, color: '#9568FF', rarity: 'Common' },
  { name: 'IT Explorer', icon: '🗺️', xpReq: 1000, desc: 'Menyelesaikan 5 modul belajar', unlocked: true, color: '#2196F3', rarity: 'Uncommon' },
  { name: 'Linux Warrior', icon: '🐧', xpReq: 1500, desc: 'Menguasai command line Linux', unlocked: true, color: '#FF7043', rarity: 'Uncommon' },
  { name: 'Subnet Master', icon: '✂️', xpReq: 2000, desc: 'Menguasai teknik subnetting', unlocked: false, color: '#FFC107', rarity: 'Rare', progress: 85 },
  { name: 'Cyber Guardian', icon: '🛡️', xpReq: 2500, desc: 'Memahami keamanan jaringan', unlocked: false, color: '#9568FF', rarity: 'Rare', progress: 45 },
  { name: 'Cloud Architect', icon: '☁️', xpReq: 3000, desc: 'Menguasai konsep cloud computing', unlocked: false, color: '#00BCD4', rarity: 'Epic', progress: 20 },
  { name: 'IT Champion', icon: '🏆', xpReq: 5000, desc: 'Menyelesaikan semua modul', unlocked: false, color: '#FFD700', rarity: 'Legendary', progress: 0 },
]

const recentRewards = [
  { name: 'Linux Warrior Badge', type: 'badge', xp: 200, time: '2 jam lalu', icon: '🐧' },
  { name: 'Kuis IP Address', type: 'quiz', xp: 50, time: '4 jam lalu', icon: '📝' },
  { name: 'Streak 7 Hari', type: 'streak', xp: 100, time: '1 hari lalu', icon: '🔥' },
  { name: 'Modul Networking', type: 'module', xp: 250, time: '2 hari lalu', icon: '🌐' },
]

const weeklyMissions = [
  { title: 'Selesaikan 3 modul', progress: 2, total: 3, xp: 300, done: false },
  { title: 'Jawab 20 soal kuis', progress: 15, total: 20, xp: 200, done: false },
  { title: 'Login 7 hari berturut-turut', progress: 7, total: 7, xp: 150, done: true },
  { title: 'Pelajari 10 istilah kamus', progress: 10, total: 10, xp: 100, done: true },
]

const rarityColors: Record<string, { bg: string; color: string; border: string }> = {
  Common: { bg: 'rgba(76,175,80,0.1)', color: '#4CAF50', border: 'rgba(76,175,80,0.3)' },
  Uncommon: { bg: 'rgba(33,150,243,0.1)', color: '#2196F3', border: 'rgba(33,150,243,0.3)' },
  Rare: { bg: 'rgba(149,104,255,0.1)', color: '#9568FF', border: 'rgba(149,104,255,0.3)' },
  Epic: { bg: 'rgba(0,188,212,0.1)', color: '#00BCD4', border: 'rgba(0,188,212,0.3)' },
  Legendary: { bg: 'rgba(255,193,7,0.15)', color: '#FFC107', border: 'rgba(255,193,7,0.4)' },
}

const xpData = [{ name: 'XP', value: 2840, fill: '#9568FF' }]

export default function Achievements() {
  return (
    <div className="flex-1 overflow-y-auto p-6 space-y-6" style={{ background: '#F8F8FC' }}>
      {/* XP Overview */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* XP ring */}
        <div className="sm:col-span-2 lg:col-span-1 bg-white rounded-2xl p-5 flex flex-col items-center"
          style={{ boxShadow: '0 4px 16px rgba(55,36,102,0.07)' }}>
          <p className="text-xs font-semibold mb-2" style={{ color: '#969696' }}>Total XP</p>
          <div className="relative w-32 h-32">
            <ResponsiveContainer width="100%" height="100%">
              <RadialBarChart cx="50%" cy="50%" innerRadius="60%" outerRadius="90%" startAngle={90} endAngle={-270} data={xpData}>
                <RadialBar dataKey="value" cornerRadius={8} background={{ fill: '#F0EFF8' }} />
              </RadialBarChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-xl font-bold" style={{ color: '#372466' }}>2,840</span>
              <span className="text-xs" style={{ color: '#969696' }}>XP</span>
            </div>
          </div>
          <p className="text-xs mt-2" style={{ color: '#969696' }}>Level 8 · Network Warrior</p>
          <div className="w-full mt-3">
            <div className="h-1.5 rounded-full" style={{ background: '#F0EFF8' }}>
              <div className="h-1.5 rounded-full" style={{ width: '94.7%', background: 'linear-gradient(90deg, #9568FF, #B794F6)' }} />
            </div>
            <p className="text-xs mt-1 text-center" style={{ color: '#969696' }}>160 XP ke Level 9</p>
          </div>
        </div>

        {[
          { label: 'Badge Diraih', value: '4 / 8', icon: '🏆', color: '#FFC107', sub: 'Kumpulkan semua badge' },
          { label: 'Streak Hari Ini', value: '7 hari', icon: '🔥', color: '#FF7043', sub: 'Rekor terpanjang: 14 hari' },
          { label: 'Modul Selesai', value: '8 / 28', icon: '📚', color: '#4CAF50', sub: '28.5% roadmap selesai' },
        ].map((s, i) => (
          <div key={i} className="bg-white rounded-2xl p-5" style={{ boxShadow: '0 4px 16px rgba(55,36,102,0.07)' }}>
            <div className="text-3xl mb-2">{s.icon}</div>
            <p className="text-2xl font-bold" style={{ color: '#372466' }}>{s.value}</p>
            <p className="text-xs font-semibold" style={{ color: '#333333' }}>{s.label}</p>
            <p className="text-xs mt-1" style={{ color: '#969696' }}>{s.sub}</p>
          </div>
        ))}
      </div>

      {/* Badge Collection */}
      <div className="bg-white rounded-2xl p-6" style={{ boxShadow: '0 4px 16px rgba(55,36,102,0.07)' }}>
        <div className="flex items-center justify-between mb-5">
          <div>
            <h3 className="font-bold text-sm" style={{ color: '#372466' }}>Koleksi Badge</h3>
            <p className="text-xs" style={{ color: '#969696' }}>4 unlocked · 4 terkunci</p>
          </div>
          <Trophy size={18} style={{ color: '#FFC107' }} />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {badges.map((badge, i) => {
            const rc = rarityColors[badge.rarity]
            return (
              <div key={i} className={`rounded-2xl p-4 text-center card-hover transition-all duration-200`}
                style={{
                  background: badge.unlocked ? `linear-gradient(135deg, ${rc.bg}, rgba(255,255,255,0.8))` : '#F8F8FC',
                  border: `1.5px solid ${badge.unlocked ? rc.border : '#E8E6F0'}`,
                  opacity: badge.unlocked ? 1 : 0.7,
                }}>
                <div className={`text-4xl mb-2 transition-all duration-300 ${badge.unlocked ? '' : 'grayscale opacity-40'}`}
                  style={{ filter: badge.unlocked ? 'none' : 'grayscale(1)' }}>
                  {badge.icon}
                </div>
                <p className="text-xs font-bold mb-1" style={{ color: badge.unlocked ? '#372466' : '#969696' }}>{badge.name}</p>
                <span className="text-xs px-2 py-0.5 rounded-full font-medium"
                  style={{ background: rc.bg, color: rc.color }}>
                  {badge.rarity}
                </span>
                <p className="text-xs mt-2 leading-tight" style={{ color: '#969696' }}>{badge.desc}</p>
                <p className="text-xs font-bold mt-2" style={{ color: badge.unlocked ? badge.color : '#969696' }}>
                  ⚡ {badge.xpReq} XP
                </p>

                {!badge.unlocked && badge.progress !== undefined && badge.progress > 0 && (
                  <div className="mt-2">
                    <div className="h-1 rounded-full" style={{ background: '#E8E6F0' }}>
                      <div className="h-1 rounded-full" style={{ width: `${badge.progress}%`, background: badge.color }} />
                    </div>
                    <p className="text-xs mt-0.5" style={{ color: '#969696' }}>{badge.progress}%</p>
                  </div>
                )}

                {!badge.unlocked && (!badge.progress || badge.progress === 0) && (
                  <p className="text-xs mt-2">🔒 Terkunci</p>
                )}

                {badge.unlocked && (
                  <div className="mt-2 text-xs font-semibold" style={{ color: '#4CAF50' }}>✅ Diraih!</div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Recent Rewards + Missions */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Rewards */}
        <div className="bg-white rounded-2xl p-6" style={{ boxShadow: '0 4px 16px rgba(55,36,102,0.07)' }}>
          <h3 className="font-bold text-sm mb-4" style={{ color: '#372466' }}>🎁 Reward Terbaru</h3>
          <div className="space-y-3">
            {recentRewards.map((r, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-xl"
                style={{ background: '#F8F8FC', border: '1px solid #F0EFF8' }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                  style={{ background: 'rgba(149,104,255,0.1)' }}>
                  {r.icon}
                </div>
                <div className="flex-1">
                  <p className="text-xs font-semibold" style={{ color: '#333333' }}>{r.name}</p>
                  <p className="text-xs" style={{ color: '#969696' }}>{r.time}</p>
                </div>
                <span className="text-xs font-bold px-2 py-1 rounded-lg"
                  style={{ background: 'rgba(149,104,255,0.1)', color: '#9568FF' }}>
                  +{r.xp} XP
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Weekly Missions */}
        <div className="bg-white rounded-2xl p-6" style={{ boxShadow: '0 4px 16px rgba(55,36,102,0.07)' }}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-sm" style={{ color: '#372466' }}>📅 Misi Mingguan</h3>
            <div className="flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full"
              style={{ background: 'rgba(255,193,7,0.1)', color: '#FFC107' }}>
              <Calendar size={11} /> Sisa 3 hari
            </div>
          </div>

          <div className="space-y-3">
            {weeklyMissions.map((m, i) => (
              <div key={i} className="p-3 rounded-xl" style={{ background: '#F8F8FC', border: '1px solid #F0EFF8' }}>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs font-medium" style={{ color: m.done ? '#969696' : '#333333', textDecoration: m.done ? 'line-through' : 'none' }}>
                    {m.done ? '✅ ' : ''}{m.title}
                  </p>
                  <span className="text-xs font-bold" style={{ color: m.done ? '#4CAF50' : '#9568FF' }}>+{m.xp} XP</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-1.5 rounded-full" style={{ background: '#E8E6F0' }}>
                    <div className="h-1.5 rounded-full transition-all duration-500"
                      style={{ width: `${(m.progress / m.total) * 100}%`, background: m.done ? '#4CAF50' : '#9568FF' }} />
                  </div>
                  <span className="text-xs" style={{ color: '#969696' }}>{m.progress}/{m.total}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 p-3 rounded-xl"
            style={{ background: 'linear-gradient(135deg, rgba(55,36,102,0.05), rgba(149,104,255,0.08))', border: '1px solid rgba(149,104,255,0.15)' }}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-bold" style={{ color: '#372466' }}>Total Misi Mingguan</p>
                <p className="text-xs" style={{ color: '#969696' }}>2 dari 4 selesai</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold" style={{ color: '#9568FF' }}>550 XP</p>
                <p className="text-xs" style={{ color: '#969696' }}>total reward</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Daily Streak Calendar */}
      <div className="bg-white rounded-2xl p-6" style={{ boxShadow: '0 4px 16px rgba(55,36,102,0.07)' }}>
        <div className="flex items-center justify-between mb-5">
          <div>
            <h3 className="font-bold text-sm" style={{ color: '#372466' }}>🔥 Daily Streak</h3>
            <p className="text-xs" style={{ color: '#969696' }}>Konsistensi adalah kunci sukses belajar</p>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 rounded-xl"
            style={{ background: 'rgba(255,112,67,0.1)', border: '1px solid rgba(255,112,67,0.2)' }}>
            <Flame size={14} style={{ color: '#FF7043' }} />
            <span className="font-bold text-sm" style={{ color: '#FF7043' }}>7 hari</span>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-2">
          {['Sen', 'Sel', 'Rab', 'Kam', "Jum'", 'Sab', 'Min'].map((day, i) => (
            <div key={i} className="text-center">
              <p className="text-xs mb-1" style={{ color: '#969696' }}>{day}</p>
              <div className="w-full aspect-square rounded-lg flex items-center justify-center text-base"
                style={{
                  background: i < 7 ? 'linear-gradient(135deg, #FF7043, #FF9800)' : '#F0EFF8',
                  boxShadow: i < 7 ? '0 4px 12px rgba(255,112,67,0.3)' : 'none',
                }}>
                {i < 7 ? '🔥' : ''}
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-4 mt-4 justify-center">
          {[
            { label: 'Streak saat ini', value: '7 hari' },
            { label: 'Streak terpanjang', value: '14 hari' },
            { label: 'Total hari aktif', value: '32 hari' },
          ].map((s, i) => (
            <div key={i} className="text-center px-4 py-2 rounded-xl" style={{ background: '#F8F8FC' }}>
              <p className="text-sm font-bold" style={{ color: '#372466' }}>{s.value}</p>
              <p className="text-xs" style={{ color: '#969696' }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
