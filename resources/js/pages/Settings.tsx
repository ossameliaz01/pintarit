import { useState } from 'react'
import { User, Lock, Bell, Globe, Eye, Shield, Download, ChevronRight } from 'lucide-react'

const sections = [
  { id: 'profile', label: 'Profil', icon: User },
  { id: 'password', label: 'Password', icon: Lock },
  { id: 'notifications', label: 'Notifikasi', icon: Bell },
  { id: 'accessibility', label: 'Aksesibilitas', icon: Eye },
  { id: 'language', label: 'Bahasa', icon: Globe },
  { id: 'appearance', label: 'Tampilan', icon: Eye },
  { id: 'privacy', label: 'Privasi', icon: Shield },
  { id: 'offline', label: 'Unduhan Offline', icon: Download },
]

export default function Settings() {
  const [activeSection, setActiveSection] = useState('profile')
  const [darkMode, setDarkMode] = useState(false)
  const [notifXP, setNotifXP] = useState(true)
  const [notifBadge, setNotifBadge] = useState(true)
  const [notifMission, setNotifMission] = useState(true)
  const [notifFeedback, setNotifFeedback] = useState(false)
  const [fontSize, setFontSize] = useState('medium')
  const [language, setLanguage] = useState('id')

  const Toggle = ({ value, onChange }: { value: boolean; onChange: () => void }) => (
    <button
      onClick={onChange}
      className="w-12 h-6 rounded-full relative transition-all duration-300"
      style={{ background: value ? 'linear-gradient(135deg, #372466, #9568FF)' : '#E8E6F0' }}>
      <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 transition-all duration-300"
        style={{ left: value ? '26px' : '2px', boxShadow: '0 2px 4px rgba(0,0,0,0.15)' }} />
    </button>
  )

  return (
    <div className="flex-1 overflow-y-auto" style={{ background: '#F8F8FC' }}>
      <div className="flex flex-col md:flex-row h-full">
        {/* Settings sidebar */}
        <div className="w-full md:w-56 flex-shrink-0 p-4 md:border-r md:border-b-0 border-b border-[#E8E6F0]" style={{ background: 'white' }}>
          <p className="text-xs font-bold mb-3 px-2 hidden md:block" style={{ color: '#969696' }}>PENGATURAN</p>
          <div className="flex md:block flex-row md:flex-col gap-2 overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
            {sections.map(s => (
              <button key={s.id} onClick={() => setActiveSection(s.id)}
                className="flex items-center gap-2 md:gap-3 px-3 py-2.5 rounded-xl text-left transition-all duration-200 whitespace-nowrap md:w-full"
                style={{
                  background: activeSection === s.id ? 'rgba(149,104,255,0.08)' : 'transparent',
                  color: activeSection === s.id ? '#372466' : '#969696',
                  fontWeight: activeSection === s.id ? 600 : 400,
                }}>
                <s.icon size={15} className="flex-shrink-0" />
                <span className="text-sm">{s.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Settings content */}
        <div className="flex-1 p-6 overflow-y-auto">
          {activeSection === 'profile' && (
            <div className="max-w-lg space-y-5">
              <h3 className="font-bold text-base" style={{ color: '#372466' }}>Pengaturan Profil</h3>
              {[
                { label: 'Nama Lengkap', value: 'Rizki Pratama', type: 'text' },
                { label: 'Email', value: 'rizki@smktjkbdg.sch.id', type: 'email' },
                { label: 'Asal Sekolah', value: 'SMK TKJ Bandung', type: 'text' },
                { label: 'Bio', value: 'Siswa SMK TKJ yang passionate di networking', type: 'textarea' },
              ].map((f, i) => (
                <div key={i}>
                  <label className="block text-xs font-semibold mb-2" style={{ color: '#372466' }}>{f.label}</label>
                  {f.type === 'textarea' ? (
                    <textarea rows={3} defaultValue={f.value}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none"
                      style={{ border: '1.5px solid #E8E6F0', background: '#F8F8FC', color: '#333333', fontFamily: 'Poppins, sans-serif' }}
                      onFocus={e => { e.currentTarget.style.borderColor = '#9568FF'; e.currentTarget.style.background = 'white' }}
                      onBlur={e => { e.currentTarget.style.borderColor = '#E8E6F0'; e.currentTarget.style.background = '#F8F8FC' }} />
                  ) : (
                    <input type={f.type} defaultValue={f.value}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                      style={{ border: '1.5px solid #E8E6F0', background: '#F8F8FC', color: '#333333' }}
                      onFocus={e => { e.currentTarget.style.borderColor = '#9568FF'; e.currentTarget.style.background = 'white' }}
                      onBlur={e => { e.currentTarget.style.borderColor = '#E8E6F0'; e.currentTarget.style.background = '#F8F8FC' }} />
                  )}
                </div>
              ))}
              <button className="px-6 py-3 rounded-xl text-sm font-semibold text-white"
                style={{ background: 'linear-gradient(135deg, #372466, #9568FF)', boxShadow: '0 8px 24px rgba(149,104,255,0.3)' }}>
                Simpan Perubahan
              </button>
            </div>
          )}

          {activeSection === 'notifications' && (
            <div className="max-w-lg space-y-5">
              <h3 className="font-bold text-base" style={{ color: '#372466' }}>Pengaturan Notifikasi</h3>
              {[
                { label: 'XP Diraih', desc: 'Notifikasi saat kamu mendapat XP', value: notifXP, set: () => setNotifXP(!notifXP) },
                { label: 'Badge Baru', desc: 'Notifikasi saat badge terbuka', value: notifBadge, set: () => setNotifBadge(!notifBadge) },
                { label: 'Misi Harian', desc: 'Pengingat misi harian', value: notifMission, set: () => setNotifMission(!notifMission) },
                { label: 'Feedback Guru', desc: 'Notifikasi komentar guru', value: notifFeedback, set: () => setNotifFeedback(!notifFeedback) },
              ].map((n, i) => (
                <div key={i} className="bg-white rounded-xl p-4 flex items-center justify-between"
                  style={{ boxShadow: '0 2px 8px rgba(55,36,102,0.05)' }}>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: '#333333' }}>{n.label}</p>
                    <p className="text-xs" style={{ color: '#969696' }}>{n.desc}</p>
                  </div>
                  <Toggle value={n.value} onChange={n.set} />
                </div>
              ))}
            </div>
          )}

          {activeSection === 'appearance' && (
            <div className="max-w-lg space-y-5">
              <h3 className="font-bold text-base" style={{ color: '#372466' }}>Pengaturan Tampilan</h3>
              <div className="bg-white rounded-xl p-4 flex items-center justify-between"
                style={{ boxShadow: '0 2px 8px rgba(55,36,102,0.05)' }}>
                <div>
                  <p className="text-sm font-semibold" style={{ color: '#333333' }}>Dark Mode</p>
                  <p className="text-xs" style={{ color: '#969696' }}>Ganti ke tema gelap</p>
                </div>
                <Toggle value={darkMode} onChange={() => setDarkMode(!darkMode)} />
              </div>
              <div className="bg-white rounded-xl p-4" style={{ boxShadow: '0 2px 8px rgba(55,36,102,0.05)' }}>
                <p className="text-sm font-semibold mb-3" style={{ color: '#333333' }}>Ukuran Font</p>
                <div className="flex gap-2">
                  {['small', 'medium', 'large'].map(s => (
                    <button key={s} onClick={() => setFontSize(s)}
                      className="flex-1 py-2 rounded-lg text-xs font-medium capitalize transition-all duration-200"
                      style={{
                        background: fontSize === s ? 'linear-gradient(135deg, #372466, #9568FF)' : '#F8F8FC',
                        color: fontSize === s ? 'white' : '#969696',
                      }}>
                      {s === 'small' ? 'Kecil' : s === 'medium' ? 'Sedang' : 'Besar'}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeSection === 'language' && (
            <div className="max-w-lg space-y-5">
              <h3 className="font-bold text-base" style={{ color: '#372466' }}>Pengaturan Bahasa</h3>
              {[
                { code: 'id', label: 'Bahasa Indonesia', flag: '🇮🇩' },
                { code: 'en', label: 'English', flag: '🇺🇸' },
              ].map(l => (
                <button key={l.code} onClick={() => setLanguage(l.code)}
                  className="w-full bg-white rounded-xl p-4 flex items-center gap-3 transition-all duration-200"
                  style={{
                    boxShadow: '0 2px 8px rgba(55,36,102,0.05)',
                    border: language === l.code ? '2px solid #9568FF' : '2px solid transparent',
                  }}>
                  <span className="text-2xl">{l.flag}</span>
                  <span className="text-sm font-medium" style={{ color: '#333333' }}>{l.label}</span>
                  {language === l.code && <span className="ml-auto text-xs font-semibold" style={{ color: '#9568FF' }}>Aktif</span>}
                </button>
              ))}
            </div>
          )}

          {activeSection === 'offline' && (
            <div className="max-w-lg space-y-5">
              <h3 className="font-bold text-base" style={{ color: '#372466' }}>Unduhan Offline</h3>
              <div className="bg-white rounded-xl p-4" style={{ boxShadow: '0 2px 8px rgba(55,36,102,0.05)' }}>
                <div className="flex justify-between text-xs mb-2">
                  <span style={{ color: '#969696' }}>Penyimpanan digunakan</span>
                  <span style={{ color: '#9568FF' }} className="font-semibold">2.4 GB / 5 GB</span>
                </div>
                <div className="h-2.5 rounded-full" style={{ background: '#F0EFF8' }}>
                  <div className="h-2.5 rounded-full" style={{ width: '48%', background: 'linear-gradient(90deg, #9568FF, #B794F6)' }} />
                </div>
              </div>
              {['Networking Fundamentals (124 MB)', 'Linux Essentials (256 MB)', 'IP Address Guide (89 MB)'].map((m, i) => (
                <div key={i} className="bg-white rounded-xl p-4 flex items-center justify-between"
                  style={{ boxShadow: '0 2px 8px rgba(55,36,102,0.05)' }}>
                  <div className="flex items-center gap-2">
                    <Download size={14} style={{ color: '#4CAF50' }} />
                    <span className="text-xs font-medium" style={{ color: '#333333' }}>{m}</span>
                  </div>
                  <button className="text-xs text-red-500">Hapus</button>
                </div>
              ))}
            </div>
          )}

          {!['profile', 'notifications', 'appearance', 'language', 'offline'].includes(activeSection) && (
            <div className="max-w-lg">
              <h3 className="font-bold text-base mb-5" style={{ color: '#372466' }}>
                {sections.find(s => s.id === activeSection)?.label}
              </h3>
              <div className="space-y-3">
                {[1, 2, 3].map(i => (
                  <div key={i} className="bg-white rounded-xl p-4 flex items-center justify-between cursor-pointer"
                    style={{ boxShadow: '0 2px 8px rgba(55,36,102,0.05)' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#F8F8FC' }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'white' }}>
                    <div>
                      <p className="text-sm font-medium" style={{ color: '#333333' }}>Opsi Pengaturan {i}</p>
                      <p className="text-xs" style={{ color: '#969696' }}>Deskripsi opsi pengaturan</p>
                    </div>
                    <ChevronRight size={14} style={{ color: '#969696' }} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
