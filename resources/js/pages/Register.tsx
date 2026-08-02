import { useState } from 'react'
import { Eye, EyeOff, Mail, Lock, User, School, BookOpen, Zap, ArrowRight, ChevronRight } from 'lucide-react'

interface RegisterProps {
  onNavigate: (page: string) => void
}

const majors = ['TKJ (Teknik Komputer Jaringan)', 'RPL (Rekayasa Perangkat Lunak)', 'MM (Multimedia)', 'Lainnya']

export default function Register({ onNavigate }: RegisterProps) {
  const [step, setStep] = useState(1)
  const [show, setShow] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [role, setRole] = useState<'student' | 'teacher'>('student')
  const [agreed, setAgreed] = useState(false)
  const [major, setMajor] = useState('')

  const inputStyle = {
    border: '1.5px solid #E8E6F0',
    background: '#F8F8FC',
    color: '#333333',
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12"
      style={{ background: '#F8F8FC', fontFamily: 'Poppins, sans-serif' }}>
      <div className="w-full max-w-lg">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="w-9 h-9 rounded-xl gradient-primary flex items-center justify-center cursor-pointer"
            onClick={() => onNavigate('landing')}>
            <Zap size={18} className="text-white" />
          </div>
          <span className="font-bold text-lg" style={{ color: '#372466' }}>PintarIT</span>
        </div>

        {/* Progress steps */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {[1, 2, 3].map(s => (
            <div key={s} className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300"
                style={{
                  background: s <= step ? 'linear-gradient(135deg, #372466, #9568FF)' : '#E8E6F0',
                  color: s <= step ? 'white' : '#969696'
                }}>
                {s < step ? '✓' : s}
              </div>
              {s < 3 && <div className="w-12 h-1 rounded-full transition-all duration-300"
                style={{ background: s < step ? '#9568FF' : '#E8E6F0' }} />}
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8" style={{ boxShadow: '0 8px 40px rgba(55,36,102,0.1)' }}>
          {step === 1 && (
            <>
              <h1 className="text-2xl font-bold mb-1" style={{ color: '#372466' }}>Buat Akun Baru</h1>
              <p className="text-sm mb-6" style={{ color: '#969696' }}>Langkah 1: Data diri kamu</p>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold mb-2" style={{ color: '#372466' }}>Nama Lengkap</label>
                  <div className="relative">
                    <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: '#969696' }} />
                    <input placeholder="Nama lengkap kamu" className="w-full pl-10 pr-4 py-3 rounded-xl text-sm outline-none"
                      style={inputStyle}
                      onFocus={e => { e.currentTarget.style.borderColor = '#9568FF'; e.currentTarget.style.background = 'white' }}
                      onBlur={e => { e.currentTarget.style.borderColor = '#E8E6F0'; e.currentTarget.style.background = '#F8F8FC' }} />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-2" style={{ color: '#372466' }}>Asal Sekolah</label>
                  <div className="relative">
                    <School size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: '#969696' }} />
                    <input placeholder="Nama SMK kamu" className="w-full pl-10 pr-4 py-3 rounded-xl text-sm outline-none"
                      style={inputStyle}
                      onFocus={e => { e.currentTarget.style.borderColor = '#9568FF'; e.currentTarget.style.background = 'white' }}
                      onBlur={e => { e.currentTarget.style.borderColor = '#E8E6F0'; e.currentTarget.style.background = '#F8F8FC' }} />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-2" style={{ color: '#372466' }}>Jurusan</label>
                  <div className="relative">
                    <BookOpen size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: '#969696' }} />
                    <select
                      value={major}
                      onChange={e => setMajor(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl text-sm outline-none appearance-none"
                      style={{ ...inputStyle, color: major ? '#333333' : '#969696' }}
                      onFocus={e => { e.currentTarget.style.borderColor = '#9568FF'; e.currentTarget.style.background = 'white' }}
                      onBlur={e => { e.currentTarget.style.borderColor = '#E8E6F0'; e.currentTarget.style.background = '#F8F8FC' }}
                    >
                      <option value="">Pilih jurusan</option>
                      {majors.map(m => <option key={m} value={m}>{m}</option>)}
                    </select>
                    <ChevronRight size={14} className="absolute right-3 top-1/2 -translate-y-1/2 rotate-90" style={{ color: '#969696' }} />
                  </div>
                </div>
              </div>

              <button onClick={() => setStep(2)}
                className="w-full mt-6 flex items-center justify-center gap-2 py-3 rounded-xl text-white font-semibold text-sm"
                style={{ background: 'linear-gradient(135deg, #372466 0%, #9568FF 100%)', boxShadow: '0 8px 24px rgba(149,104,255,0.3)' }}>
                Lanjut <ArrowRight size={16} />
              </button>
            </>
          )}

          {step === 2 && (
            <>
              <h1 className="text-2xl font-bold mb-1" style={{ color: '#372466' }}>Akun & Role</h1>
              <p className="text-sm mb-6" style={{ color: '#969696' }}>Langkah 2: Email, password, dan peranmu</p>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold mb-2" style={{ color: '#372466' }}>Email</label>
                  <div className="relative">
                    <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: '#969696' }} />
                    <input type="email" placeholder="nama@email.com" className="w-full pl-10 pr-4 py-3 rounded-xl text-sm outline-none"
                      style={inputStyle}
                      onFocus={e => { e.currentTarget.style.borderColor = '#9568FF'; e.currentTarget.style.background = 'white' }}
                      onBlur={e => { e.currentTarget.style.borderColor = '#E8E6F0'; e.currentTarget.style.background = '#F8F8FC' }} />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-2" style={{ color: '#372466' }}>Password</label>
                  <div className="relative">
                    <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: '#969696' }} />
                    <input type={show ? 'text' : 'password'} placeholder="Min. 8 karakter"
                      className="w-full pl-10 pr-10 py-3 rounded-xl text-sm outline-none"
                      style={inputStyle}
                      onFocus={e => { e.currentTarget.style.borderColor = '#9568FF'; e.currentTarget.style.background = 'white' }}
                      onBlur={e => { e.currentTarget.style.borderColor = '#E8E6F0'; e.currentTarget.style.background = '#F8F8FC' }} />
                    <button className="absolute right-3 top-1/2 -translate-y-1/2" onClick={() => setShow(!show)}>
                      {show ? <EyeOff size={16} style={{ color: '#969696' }} /> : <Eye size={16} style={{ color: '#969696' }} />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-2" style={{ color: '#372466' }}>Konfirmasi Password</label>
                  <div className="relative">
                    <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: '#969696' }} />
                    <input type={showConfirm ? 'text' : 'password'} placeholder="Ulangi password"
                      className="w-full pl-10 pr-10 py-3 rounded-xl text-sm outline-none"
                      style={inputStyle}
                      onFocus={e => { e.currentTarget.style.borderColor = '#9568FF'; e.currentTarget.style.background = 'white' }}
                      onBlur={e => { e.currentTarget.style.borderColor = '#E8E6F0'; e.currentTarget.style.background = '#F8F8FC' }} />
                    <button className="absolute right-3 top-1/2 -translate-y-1/2" onClick={() => setShowConfirm(!showConfirm)}>
                      {showConfirm ? <EyeOff size={16} style={{ color: '#969696' }} /> : <Eye size={16} style={{ color: '#969696' }} />}
                    </button>
                  </div>
                </div>

                {/* Role selection */}
                <div>
                  <label className="block text-xs font-semibold mb-3" style={{ color: '#372466' }}>Pilih Role</label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { value: 'student', label: 'Siswa', icon: '👨💻', desc: 'Belajar & kumpulkan XP' },
                      { value: 'teacher', label: 'Guru', icon: '👨🏫', desc: 'Pantau progress kelas' },
                    ].map(r => (
                      <button
                        key={r.value}
                        onClick={() => setRole(r.value as 'student' | 'teacher')}
                        className="p-4 rounded-xl text-left transition-all duration-200"
                        style={{
                          border: role === r.value ? '2px solid #9568FF' : '1.5px solid #E8E6F0',
                          background: role === r.value ? 'rgba(149,104,255,0.06)' : 'white',
                        }}
                      >
                        <div className="text-2xl mb-2">{r.icon}</div>
                        <p className="text-sm font-semibold" style={{ color: '#372466' }}>{r.label}</p>
                        <p className="text-xs" style={{ color: '#969696' }}>{r.desc}</p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <button onClick={() => setStep(1)}
                  className="flex-1 py-3 rounded-xl text-sm font-semibold transition-all duration-200"
                  style={{ border: '1.5px solid #E8E6F0', color: '#333333' }}>
                  Kembali
                </button>
                <button onClick={() => setStep(3)}
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-white font-semibold text-sm"
                  style={{ background: 'linear-gradient(135deg, #372466 0%, #9568FF 100%)' }}>
                  Lanjut <ArrowRight size={16} />
                </button>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <h1 className="text-2xl font-bold mb-1" style={{ color: '#372466' }}>Hampir Selesai!</h1>
              <p className="text-sm mb-6" style={{ color: '#969696' }}>Langkah 3: Setujui syarat & ketentuan</p>

              {/* Summary */}
              <div className="rounded-xl p-4 mb-5" style={{ background: 'rgba(149,104,255,0.06)', border: '1px solid rgba(149,104,255,0.15)' }}>
                <p className="text-xs font-semibold mb-3" style={{ color: '#372466' }}>Ringkasan Pendaftaran</p>
                <div className="space-y-2">
                  {[
                    { label: 'Role', value: role === 'student' ? '👨💻 Siswa' : '👨🏫 Guru' },
                    { label: 'Jurusan', value: major || 'TKJ (Teknik Komputer Jaringan)' },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between text-xs">
                      <span style={{ color: '#969696' }}>{item.label}</span>
                      <span style={{ color: '#333333' }} className="font-medium">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* T&C */}
              <div className="rounded-xl p-4 mb-5 max-h-32 overflow-y-auto text-xs leading-relaxed"
                style={{ background: '#F8F8FC', color: '#969696', border: '1px solid #E8E6F0' }}>
                <p className="font-semibold mb-2" style={{ color: '#333333' }}>Syarat dan Ketentuan PintarIT</p>
                <p>Dengan mendaftar, kamu menyetujui penggunaan data untuk keperluan pembelajaran dan analytics. PintarIT berkomitmen menjaga privasi dan keamanan data penggunanya sesuai regulasi yang berlaku. Data kamu tidak akan dibagikan kepada pihak ketiga tanpa persetujuan eksplisit.</p>
              </div>

              <div className="flex items-start gap-3 mb-6">
                <button
                  onClick={() => setAgreed(!agreed)}
                  className="w-5 h-5 rounded flex items-center justify-center mt-0.5 flex-shrink-0 transition-all duration-200"
                  style={{
                    border: agreed ? 'none' : '1.5px solid #E8E6F0',
                    background: agreed ? '#9568FF' : 'transparent'
                  }}
                >
                  {agreed && <span className="text-xs text-white font-bold">✓</span>}
                </button>
                <p className="text-xs" style={{ color: '#969696' }}>
                  Saya menyetujui{' '}
                  <span style={{ color: '#9568FF' }} className="font-medium cursor-pointer">Syarat & Ketentuan</span>
                  {' '}dan{' '}
                  <span style={{ color: '#9568FF' }} className="font-medium cursor-pointer">Kebijakan Privasi</span>
                  {' '}PintarIT
                </p>
              </div>

              <div className="flex gap-3">
                <button onClick={() => setStep(2)}
                  className="flex-1 py-3 rounded-xl text-sm font-semibold"
                  style={{ border: '1.5px solid #E8E6F0', color: '#333333' }}>
                  Kembali
                </button>
                <button
                  onClick={() => onNavigate('dashboard')}
                  disabled={!agreed}
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-white font-semibold text-sm transition-all duration-200"
                  style={{
                    background: agreed ? 'linear-gradient(135deg, #372466 0%, #9568FF 100%)' : '#E8E6F0',
                    color: agreed ? 'white' : '#969696',
                    cursor: agreed ? 'pointer' : 'not-allowed',
                    boxShadow: agreed ? '0 8px 24px rgba(149,104,255,0.3)' : 'none',
                  }}
                >
                  Buat Akun 🚀
                </button>
              </div>
            </>
          )}

          <p className="text-center text-xs mt-6" style={{ color: '#969696' }}>
            Sudah punya akun?{' '}
            <button className="font-semibold" style={{ color: '#9568FF' }} onClick={() => onNavigate('login')}>
              Masuk Sekarang
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}
