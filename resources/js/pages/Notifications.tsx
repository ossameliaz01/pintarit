import { Bell, Zap, Award, Map, MessageSquare, Target, CheckCheck } from 'lucide-react'

const notifications = [
  {
    type: 'xp', icon: Zap, color: '#FFC107', bg: 'rgba(255,193,7,0.1)',
    title: 'XP Diraih!', message: 'Kamu mendapat +150 XP dari menyelesaikan kuis IP Address.', time: '5 menit lalu', unread: true,
  },
  {
    type: 'badge', icon: Award, color: '#9568FF', bg: 'rgba(149,104,255,0.1)',
    title: 'Badge Baru Terbuka!', message: 'Selamat! Kamu mendapatkan badge "Linux Warrior" 🐧', time: '2 jam lalu', unread: true,
  },
  {
    type: 'roadmap', icon: Map, color: '#4CAF50', bg: 'rgba(76,175,80,0.1)',
    title: 'Modul Selesai!', message: 'Modul Networking Fundamentals berhasil kamu selesaikan.', time: '1 hari lalu', unread: true,
  },
  {
    type: 'feedback', icon: MessageSquare, color: '#B794F6', bg: 'rgba(183,148,246,0.1)',
    title: 'Feedback dari Guru', message: 'Pak Andi memberikan komentar pada tugas jaringanmu. Cek sekarang!', time: '2 hari lalu', unread: false,
  },
  {
    type: 'mission', icon: Target, color: '#FF7043', bg: 'rgba(255,112,67,0.1)',
    title: 'Misi Harian Tersedia!', message: 'Misi baru hari ini: Selesaikan 1 modul dan jawab 5 soal kuis.', time: '3 hari lalu', unread: false,
  },
  {
    type: 'xp', icon: Zap, color: '#FFC107', bg: 'rgba(255,193,7,0.1)',
    title: '+80 XP Streak Bonus', message: 'Kamu login 7 hari berturut-turut! Bonus XP dikreditkan.', time: '3 hari lalu', unread: false,
  },
  {
    type: 'badge', icon: Award, color: '#9568FF', bg: 'rgba(149,104,255,0.1)',
    title: 'Hampir Raih Badge!', message: '"Subnet Master" tinggal 15% lagi. Ayo semangat!', time: '4 hari lalu', unread: false,
  },
]

export default function Notifications() {
  const unreadCount = notifications.filter(n => n.unread).length

  return (
    <div className="flex-1 overflow-y-auto p-6 space-y-5" style={{ background: '#F8F8FC' }}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold" style={{ color: '#372466' }}>Notifikasi</h2>
          <p className="text-xs" style={{ color: '#969696' }}>{unreadCount} belum dibaca</p>
        </div>
        <button className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-medium"
          style={{ border: '1.5px solid #E8E6F0', color: '#969696' }}>
          <CheckCheck size={12} /> Tandai semua dibaca
        </button>
      </div>

      {/* Notifications list */}
      <div className="space-y-3">
        {notifications.map((n, i) => (
          <div key={i}
            className="bg-white rounded-2xl p-4 flex items-start gap-4 card-hover cursor-pointer"
            style={{
              boxShadow: '0 4px 16px rgba(55,36,102,0.06)',
              borderLeft: n.unread ? `4px solid ${n.color}` : '4px solid transparent',
            }}>
            <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: n.bg }}>
              <n.icon size={18} style={{ color: n.color }} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <p className="text-sm font-semibold" style={{ color: '#372466' }}>{n.title}</p>
                {n.unread && (
                  <div className="w-2 h-2 rounded-full flex-shrink-0 mt-1.5" style={{ background: n.color }} />
                )}
              </div>
              <p className="text-xs leading-relaxed mt-0.5" style={{ color: '#969696' }}>{n.message}</p>
              <p className="text-xs mt-2" style={{ color: n.color }}>{n.time}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Empty state (hidden when there are notifications) */}
      {notifications.length === 0 && (
        <div className="bg-white rounded-2xl p-16 text-center" style={{ boxShadow: '0 4px 16px rgba(55,36,102,0.07)' }}>
          <div className="text-6xl mb-4">🔔</div>
          <p className="font-bold text-sm" style={{ color: '#372466' }}>Belum Ada Notifikasi</p>
          <p className="text-xs mt-1" style={{ color: '#969696' }}>Notifikasi baru akan muncul di sini</p>
        </div>
      )}
    </div>
  )
}
