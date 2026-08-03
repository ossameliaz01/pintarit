import { useState } from 'react'
import { Eye, EyeOff, Mail, Lock, Zap, ArrowRight } from 'lucide-react'
import axios from 'axios'

interface LoginProps {
  onNavigate: (page: string) => void
}

export default function Login({ onNavigate }: LoginProps) {
  const [show, setShow] = useState(false)
  const [remember, setRemember] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = async () => {
    if (!email || !password) {
      setError('Email dan password wajib diisi.')
      return
    }
    try {
      setError('')
      setLoading(true)
      await axios.get('/sanctum/csrf-cookie') // Ensure CSRF cookie is set
      await axios.post('/login', { email, password, remember })
      onNavigate('dashboard')
    } catch (e: any) {
      setError(e.response?.data?.message || 'Email atau password salah.')
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex" style={{ fontFamily: 'Poppins, sans-serif' }}>
      {/* Left side — illustration */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden flex-col items-center justify-center p-12"
        style={{ background: 'linear-gradient(135deg, #372466 0%, #1a0f3d 100%)' }}>
        <div className="absolute inset-0 opacity-30"
          style={{ backgroundImage: 'radial-gradient(circle at 30% 30%, #9568FF 0%, transparent 60%), radial-gradient(circle at 80% 80%, #B794F6 0%, transparent 50%)' }} />

        <div className="relative z-10 text-center">
          {/* Illustration */}
          <div className="relative mb-8">
            <div className="w-64 h-64 mx-auto rounded-3xl flex items-center justify-center relative"
              style={{ background: 'rgba(149,104,255,0.2)', border: '1px solid rgba(183,148,246,0.3)' }}>
              {/* Student illustration SVG */}
              <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
                <circle cx="100" cy="70" r="35" fill="#B794F6" opacity="0.9"/>
                <circle cx="100" cy="70" r="28" fill="#9568FF"/>
                <text x="100" y="77" textAnchor="middle" fontSize="28" fill="white">👨💻</text>
                <rect x="40" y="115" width="120" height="70" rx="12" fill="rgba(149,104,255,0.4)"/>
                <rect x="50" y="125" width="100" height="8" rx="4" fill="rgba(255,255,255,0.5)"/>
                <rect x="50" y="140" width="80" height="6" rx="3" fill="rgba(255,255,255,0.3)"/>
                <rect x="50" y="152" width="60" height="6" rx="3" fill="rgba(255,255,255,0.3)"/>
                {/* Floating elements */}
                <circle cx="30" cy="50" r="15" fill="rgba(76,175,80,0.3)"/>
                <text x="30" y="55" textAnchor="middle" fontSize="14">✓</text>
                <circle cx="170" cy="40" r="15" fill="rgba(255,193,7,0.3)"/>
                <text x="170" y="45" textAnchor="middle" fontSize="14">⚡</text>
                <circle cx="165" cy="160" r="12" fill="rgba(183,148,246,0.3)"/>
                <text x="165" y="165" textAnchor="middle" fontSize="12">🏆</text>
                <circle cx="25" cy="145" r="12" fill="rgba(255,100,100,0.3)"/>
                <text x="25" y="150" textAnchor="middle" fontSize="12">📚</text>
              </svg>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-2 -right-2 glass rounded-xl px-3 py-2 flex items-center gap-2"
              style={{ background: 'rgba(76,175,80,0.2)', border: '1px solid rgba(76,175,80,0.4)' }}>
              <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-sm">✓</div>
              <span className="text-sm text-white font-semibold">+150 XP</span>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-white mb-3">Selamat Datang Kembali!</h2>
          <p className="text-base" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Lanjutkan perjalanan belajar IT-mu.<br/>Roadmap menunggumu, petualang! 🗺️
          </p>

          {/* Stats row */}
          <div className="flex gap-4 mt-8 justify-center">
            {[
              { label: 'Hari Streak', value: '7 🔥' },
              { label: 'Level', value: '8 ⭐' },
              { label: 'XP Total', value: '2,840' },
            ].map((s, i) => (
              <div key={i} className="text-center px-4 py-2 rounded-xl"
                style={{ background: 'rgba(255,255,255,0.08)' }}>
                <p className="text-lg font-bold text-white">{s.value}</p>
                <p className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right side — login form */}
      <div className="flex-1 flex items-center justify-center px-6 py-12" style={{ background: '#F8F8FC' }}>
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-8">
            <div className="w-11 h-11 rounded-xl gradient-primary flex items-center justify-center cursor-pointer"
              onClick={() => onNavigate('landing')}>
              <Zap size={22} className="text-white" />
            </div>
            <span className="font-bold text-xl" style={{ color: '#372466' }}>PintarIT</span>
          </div>

          <div className="bg-white rounded-2xl p-8" style={{ boxShadow: '0 8px 40px rgba(55,36,102,0.1)' }}>
            <h1 className="text-3xl font-bold mb-1" style={{ color: '#372466' }}>Masuk ke Akun</h1>
            <p className="text-base mb-6" style={{ color: '#969696' }}>Lanjutkan petualangan belajar IT-mu</p>

            <div className="space-y-4">
              {/* Email */}
              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: '#372466' }}>Email</label>
                <div className="relative">
                  <Mail size={20} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: '#969696' }} />
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="nama@email.com"
                    className="w-full pl-10 pr-4 py-3 rounded-xl text-base outline-none transition-all duration-200"
                    style={{
                      border: '1.5px solid #E8E6F0',
                      background: '#F8F8FC',
                      color: '#333333',
                    }}
                    onFocus={e => { e.currentTarget.style.borderColor = '#9568FF'; e.currentTarget.style.background = 'white' }}
                    onBlur={e => { e.currentTarget.style.borderColor = '#E8E6F0'; e.currentTarget.style.background = '#F8F8FC' }}
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-semibold" style={{ color: '#372466' }}>Password</label>
                  <button className="text-sm font-medium" style={{ color: '#9568FF' }}>Lupa Password?</button>
                </div>
                <div className="relative">
                  <Lock size={20} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: '#969696' }} />
                  <input
                    type={show ? 'text' : 'password'}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-10 py-3 rounded-xl text-base outline-none transition-all duration-200"
                    style={{ border: '1.5px solid #E8E6F0', background: '#F8F8FC', color: '#333333' }}
                    onFocus={e => { e.currentTarget.style.borderColor = '#9568FF'; e.currentTarget.style.background = 'white' }}
                    onBlur={e => { e.currentTarget.style.borderColor = '#E8E6F0'; e.currentTarget.style.background = '#F8F8FC' }}
                  />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2" onClick={() => setShow(!show)}>
                    {show ? <EyeOff size={20} style={{ color: '#969696' }} /> : <Eye size={20} style={{ color: '#969696' }} />}
                  </button>
                </div>
              </div>

              {/* Remember me */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setRemember(!remember)}
                  className="w-6 h-6 rounded flex items-center justify-center transition-all duration-200"
                  style={{
                    border: remember ? 'none' : '1.5px solid #E8E6F0',
                    background: remember ? '#9568FF' : 'transparent'
                  }}
                >
                  {remember && <span className="text-sm text-white font-bold">✓</span>}
                </button>
                <span className="text-sm" style={{ color: '#969696' }}>Ingat saya</span>
              </div>

              {error && (
                <div className="p-3 mb-4 text-base text-red-500 bg-red-50 rounded-xl border border-red-200">
                  {error}
                </div>
              )}

              {/* Login button */}
              <button
                onClick={handleLogin}
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-white font-semibold text-base transition-all duration-200"
                style={{ background: 'linear-gradient(135deg, #372466 0%, #9568FF 100%)', boxShadow: '0 8px 24px rgba(149,104,255,0.35)', opacity: loading ? 0.7 : 1 }}
                onMouseEnter={e => { if(!loading) { (e.currentTarget as HTMLElement).style.opacity = '0.9'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)' } }}
                onMouseLeave={e => { if(!loading) { (e.currentTarget as HTMLElement).style.opacity = '1'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)' } }}
              >
                {loading ? 'Memproses...' : 'Masuk'} {!loading && <ArrowRight size={20} />}
              </button>

              {/* Divider */}
              <div className="flex items-center gap-3">
                <div className="flex-1 h-px" style={{ background: '#E8E6F0' }} />
                <span className="text-sm" style={{ color: '#969696' }}>atau masuk dengan</span>
                <div className="flex-1 h-px" style={{ background: '#E8E6F0' }} />
              </div>

              {/* Social login */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: 'Google', icon: '🌐' },
                  { name: 'Microsoft', icon: '🪟' },
                ].map(s => (
                  <button
                    key={s.name}
                    className="flex items-center justify-center gap-2 py-3 rounded-xl text-base font-medium transition-all duration-200"
                    style={{ border: '1.5px solid #E8E6F0', color: '#333333', background: 'white' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#9568FF'; (e.currentTarget as HTMLElement).style.background = '#F8F8FC' }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = '#E8E6F0'; (e.currentTarget as HTMLElement).style.background = 'white' }}
                  >
                    <span>{s.icon}</span> {s.name}
                  </button>
                ))}
              </div>
            </div>

            <p className="text-center text-sm mt-6" style={{ color: '#969696' }}>
              Belum punya akun?{' '}
              <button className="font-semibold" style={{ color: '#9568FF' }} onClick={() => onNavigate('register')}>
                Daftar Sekarang
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
