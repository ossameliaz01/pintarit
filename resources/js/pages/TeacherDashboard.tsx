import { Download, Users, TrendingUp, Award, BookOpen } from 'lucide-react'
import {
  AreaChart, Area, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell
} from 'recharts'

const students = [
  { name: 'Bagas Adi', xp: 4200, level: 12, progress: 85, streak: 14, modules: 24, badge: 'Cloud Architect' },
  { name: 'Siti Nurhaliza', xp: 3850, level: 11, progress: 78, streak: 9, modules: 22, badge: 'Linux Warrior' },
  { name: 'Rizki Pratama', xp: 2840, level: 8, progress: 57, streak: 7, modules: 16, badge: 'Network Buddy' },
  { name: 'Dika Kurniawan', xp: 2510, level: 7, progress: 50, streak: 5, modules: 14, badge: 'IT Explorer' },
  { name: 'Alya Putri', xp: 2200, level: 7, progress: 44, streak: 3, modules: 12, badge: 'IT Explorer' },
  { name: 'Fajar Rahman', xp: 1800, level: 6, progress: 36, streak: 2, modules: 10, badge: 'Network Buddy' },
]

const weeklyData = [
  { week: 'Mg 1', xp: 8400 },
  { week: 'Mg 2', xp: 12200 },
  { week: 'Mg 3', xp: 9800 },
  { week: 'Mg 4', xp: 15600 },
]

const topicData = [
  { topic: 'Networking', completion: 72, color: '#9568FF' },
  { topic: 'IP Address', completion: 58, color: '#4CAF50' },
  { topic: 'Hardware', completion: 85, color: '#FFC107' },
  { topic: 'Linux', completion: 42, color: '#FF7043' },
  { topic: 'Security', completion: 35, color: '#B794F6' },
  { topic: 'Cloud', completion: 20, color: '#00BCD4' },
]

const weakTopics = [
  { name: 'Subnetting', score: 48, students: 12 },
  { name: 'OSPF Routing', score: 52, students: 10 },
  { name: 'Linux CLI', score: 55, students: 9 },
  { name: 'Cloud Computing', score: 38, students: 14 },
]

const badgeDist = [
  { name: 'IT Beginner', value: 6, color: '#4CAF50' },
  { name: 'Network Buddy', value: 4, color: '#9568FF' },
  { name: 'IT Explorer', value: 3, color: '#2196F3' },
  { name: 'Linux Warrior', value: 2, color: '#FF7043' },
  { name: 'Lainnya', value: 1, color: '#B794F6' },
]

export default function TeacherDashboard() {
  return (
    <div className="flex-1 overflow-y-auto p-6 space-y-6" style={{ background: '#F8F8FC' }}>
      {/* Overview cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Total Siswa', value: '32', icon: Users, color: '#9568FF', bg: 'rgba(149,104,255,0.1)', trend: '+3 bulan ini' },
          { label: 'XP Total Kelas', value: '87,400', icon: TrendingUp, color: '#4CAF50', bg: 'rgba(76,175,80,0.1)', trend: '+18% minggu ini' },
          { label: 'Badge Diraih', value: '156', icon: Award, color: '#FFC107', bg: 'rgba(255,193,7,0.1)', trend: '+24 bulan ini' },
          { label: 'Modul Selesai', value: '284', icon: BookOpen, color: '#B794F6', bg: 'rgba(183,148,246,0.1)', trend: 'Rata-rata 8.9/siswa' },
        ].map((stat, i) => (
          <div key={i} className="bg-white rounded-2xl p-5 card-hover" style={{ boxShadow: '0 4px 16px rgba(55,36,102,0.07)' }}>
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: stat.bg }}>
                <stat.icon size={22} style={{ color: stat.color }} />
              </div>
            </div>
            <p className="text-2xl font-bold" style={{ color: '#372466' }}>{stat.value}</p>
            <p className="text-sm font-semibold" style={{ color: '#333333' }}>{stat.label}</p>
            <p className="text-sm mt-0.5" style={{ color: stat.color }}>{stat.trend}</p>
          </div>
        ))}
      </div>

      {/* Charts row */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* XP Trend */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6" style={{ boxShadow: '0 4px 16px rgba(55,36,102,0.07)' }}>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-bold text-base" style={{ color: '#372466' }}>XP Kelas per Minggu</h3>
              <p className="text-sm" style={{ color: '#969696' }}>Total aktivitas belajar seluruh siswa</p>
            </div>
            <button className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-medium"
              style={{ border: '1.5px solid #E8E6F0', color: '#333333' }}>
              <Download size={14} /> Export
            </button>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={weeklyData}>
              <defs>
                <linearGradient id="classXp" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#9568FF" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="#9568FF" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="week" tick={{ fontSize: 11, fill: '#969696', fontFamily: 'Poppins' }} axisLine={false} tickLine={false} />
              <YAxis hide />
              <Tooltip contentStyle={{ borderRadius: '12px', border: '1px solid #E8E6F0', fontSize: '12px', fontFamily: 'Poppins' }} />
              <Area type="monotone" dataKey="xp" stroke="#9568FF" strokeWidth={2.5} fill="url(#classXp)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Badge distribution */}
        <div className="bg-white rounded-2xl p-6" style={{ boxShadow: '0 4px 16px rgba(55,36,102,0.07)' }}>
          <h3 className="font-bold text-base mb-4" style={{ color: '#372466' }}>Distribusi Badge</h3>
          <ResponsiveContainer width="100%" height={160}>
            <PieChart>
              <Pie data={badgeDist} cx="50%" cy="50%" innerRadius={40} outerRadius={70} dataKey="value">
                {badgeDist.map((entry, i) => (
                  <Cell key={i} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ borderRadius: '12px', border: '1px solid #E8E6F0', fontSize: '12px', fontFamily: 'Poppins' }} />
            </PieChart>
          </ResponsiveContainer>
          <div className="space-y-2 mt-2">
            {badgeDist.map((b, i) => (
              <div key={i} className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: b.color }} />
                <span className="flex-1" style={{ color: '#969696' }}>{b.name}</span>
                <span className="font-semibold" style={{ color: '#333333' }}>{b.value} siswa</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Topic completion + weak topics */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Topic Completion */}
        <div className="bg-white rounded-2xl p-6" style={{ boxShadow: '0 4px 16px rgba(55,36,102,0.07)' }}>
          <h3 className="font-bold text-base mb-4" style={{ color: '#372466' }}>📊 Penyelesaian per Topik</h3>
          <div className="space-y-3">
            {topicData.map((t, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1">
                  <span style={{ color: '#333333' }} className="font-medium">{t.topic}</span>
                  <span style={{ color: t.color }} className="font-bold">{t.completion}%</span>
                </div>
                <div className="h-2 rounded-full" style={{ background: '#F0EFF8' }}>
                  <div className="h-2 rounded-full transition-all duration-700"
                    style={{ width: `${t.completion}%`, background: t.color }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Weak Topics */}
        <div className="bg-white rounded-2xl p-6" style={{ boxShadow: '0 4px 16px rgba(55,36,102,0.07)' }}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-base" style={{ color: '#372466' }}>⚠️ Topik Lemah Siswa</h3>
            <span className="text-sm px-2 py-1 rounded-full font-medium"
              style={{ background: 'rgba(239,68,68,0.1)', color: '#EF4444' }}>Perlu Perhatian</span>
          </div>
          <div className="space-y-3">
            {weakTopics.map((t, i) => (
              <div key={i} className="flex items-center gap-4 p-3 rounded-xl"
                style={{ background: 'rgba(239,68,68,0.04)', border: '1px solid rgba(239,68,68,0.1)' }}>
                <div className="flex-1">
                  <p className="text-sm font-semibold" style={{ color: '#333333' }}>{t.name}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex-1 h-1.5 rounded-full" style={{ background: '#E8E6F0' }}>
                      <div className="h-1.5 rounded-full" style={{ width: `${t.score}%`, background: '#EF4444' }} />
                    </div>
                    <span className="text-sm font-bold" style={{ color: '#EF4444' }}>{t.score}%</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold" style={{ color: '#333333' }}>{t.students}</p>
                  <p className="text-sm" style={{ color: '#969696' }}>siswa</p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 py-2.5 rounded-xl text-sm font-semibold text-white"
            style={{ background: 'linear-gradient(135deg, #372466, #9568FF)' }}>
            📋 Buat Remedial Assignment
          </button>
        </div>
      </div>

      {/* Student Progress Table */}
      <div className="bg-white rounded-2xl p-6" style={{ boxShadow: '0 4px 16px rgba(55,36,102,0.07)' }}>
        <div className="flex items-center justify-between mb-5">
          <div>
            <h3 className="font-bold text-base" style={{ color: '#372466' }}>👥 Progress Siswa</h3>
            <p className="text-sm" style={{ color: '#969696' }}>32 siswa aktif · Kelas XII TKJ-A</p>
          </div>
          <button className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold text-white"
            style={{ background: 'linear-gradient(135deg, #372466, #9568FF)' }}>
            <Download size={14} /> Download Laporan
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr style={{ borderBottom: '2px solid #F0EFF8' }}>
                {['Siswa', 'Level', 'XP Total', 'Progress', 'Streak', 'Modul', 'Badge'].map(h => (
                  <th key={h} className="pb-3 text-left text-sm font-semibold pr-4" style={{ color: '#969696' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {students.map((s, i) => (
                <tr key={i} style={{ borderBottom: '1px solid #F8F8FC' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#F8F8FC' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent' }}>
                  <td className="py-3 pr-4">
                    <div className="flex items-center gap-2">
                      <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white"
                        style={{ background: 'linear-gradient(135deg, #372466, #9568FF)' }}>
                        {s.name[0]}
                      </div>
                      <span className="text-sm font-medium" style={{ color: '#333333' }}>{s.name}</span>
                    </div>
                  </td>
                  <td className="py-3 pr-4">
                    <span className="text-sm font-bold px-2 py-0.5 rounded-full"
                      style={{ background: 'rgba(149,104,255,0.1)', color: '#9568FF' }}>
                      Lv.{s.level}
                    </span>
                  </td>
                  <td className="py-3 pr-4 text-sm font-semibold" style={{ color: '#333333' }}>{s.xp.toLocaleString()}</td>
                  <td className="py-3 pr-4">
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1.5 rounded-full" style={{ background: '#F0EFF8' }}>
                        <div className="h-1.5 rounded-full" style={{ width: `${s.progress}%`, background: s.progress >= 70 ? '#4CAF50' : s.progress >= 40 ? '#FFC107' : '#EF4444' }} />
                      </div>
                      <span className="text-sm" style={{ color: '#969696' }}>{s.progress}%</span>
                    </div>
                  </td>
                  <td className="py-3 pr-4 text-sm" style={{ color: '#FF7043' }}>🔥 {s.streak}d</td>
                  <td className="py-3 pr-4 text-sm font-medium" style={{ color: '#333333' }}>{s.modules}</td>
                  <td className="py-3">
                    <span className="text-sm px-2 py-0.5 rounded-full" style={{ background: 'rgba(149,104,255,0.08)', color: '#9568FF' }}>
                      {s.badge}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
