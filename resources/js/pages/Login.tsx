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
          <div className="relative mb-12">
            <div className="w-[320px] h-[320px] mx-auto rounded-[40px] flex items-center justify-center relative shadow-2xl"
              style={{ background: 'linear-gradient(135deg, #4c3080 0%, #351f65 100%)', border: '1px solid rgba(149,104,255,0.2)' }}>
              
              {/* Floating dots background */}
              <div className="absolute top-12 left-10 w-4 h-4 rounded-full" style={{ background: '#4CAF50', opacity: 0.6 }}></div>
              <div className="absolute top-16 right-16 w-8 h-8 rounded-full" style={{ background: '#FFC107', opacity: 0.5 }}></div>
              <div className="absolute bottom-24 left-12 w-6 h-6 rounded-full" style={{ background: '#FF5252', opacity: 0.5 }}></div>
              <div className="absolute bottom-16 right-12 w-10 h-10 rounded-full" style={{ background: '#9568FF', opacity: 0.4 }}></div>
              
              {/* Center Profile Icon */}
              <div className="w-24 h-24 rounded-full flex flex-col items-center justify-center shadow-lg relative z-10"
                style={{ background: 'linear-gradient(135deg, #9568FF, #B794F6)', border: '4px solid rgba(255,255,255,0.2)' }}>
                <span className="text-4xl">👨‍💻</span>
              </div>
              
              {/* Chat / Message Box below profile */}
              <div className="absolute top-[65%] left-1/2 -translate-x-1/2 w-48 h-20 rounded-2xl flex flex-col justify-center gap-2 px-5 z-20"
                style={{ background: 'rgba(149, 104, 255, 0.4)', backdropFilter: 'blur(8px)', border: '1px solid rgba(149,104,255,0.5)' }}>
                <div className="w-full h-2 rounded-full" style={{ background: 'rgba(255,255,255,0.6)' }}></div>
                <div className="w-2/3 h-2 rounded-full" style={{ background: 'rgba(255,255,255,0.4)' }}></div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 right-4 glass rounded-full px-4 py-2 flex items-center gap-2 shadow-lg"
              style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.15)' }}>
              <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                <span className="text-white text-xs font-bold">✓</span>
              </div>
              <span className="text-sm text-white font-bold tracking-wide">+150 XP</span>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-white mb-3">Selamat Datang Kembali!</h2>
          <p className="text-base" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Lanjutkan perjalanan belajar IT-mu.<br/>Roadmap menunggumu, petualang! 🗺️
          </p>

          {/* Stats row */}
          <div className="flex gap-4 mt-10 justify-center">
            {[
              { label: 'Hari Streak', value: '7 🔥' },
              { label: 'Level', value: '8 ⭐' },
              { label: 'XP Total', value: '2,840' },
            ].map((s, i) => (
              <div key={i} className="text-center px-6 py-3 rounded-[24px]"
                style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.05)' }}>
                <p className="text-xl font-bold text-white mb-0.5">{s.value}</p>
                <p className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.6)' }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right side — login form */}
      <div className="flex-1 flex flex-col px-8 py-10 relative" style={{ background: '#F8F8FC' }}>
        
        {/* Logo at Top Left */}
        <div className="flex items-center gap-3 mb-10 md:mb-auto cursor-pointer w-max"
          onClick={() => onNavigate('landing')}>
          <div className="w-12 h-12 rounded-full flex items-center justify-center shadow-md"
            style={{ background: 'linear-gradient(135deg, #4c3080 0%, #9568FF 100%)' }}>
            <Zap size={24} className="text-white" />
          </div>
          <span className="font-bold text-2xl" style={{ color: '#372466' }}>PintarIT</span>
        </div>

        <div className="w-full max-w-lg mx-auto flex-1 flex flex-col justify-center pb-20">
          <div className="bg-white rounded-3xl p-10" style={{ boxShadow: '0 12px 48px rgba(55,36,102,0.06)' }}>
            <h1 className="text-4xl font-bold mb-2 tracking-tight" style={{ color: '#372466' }}>Masuk ke Akun</h1>
            <p className="text-lg mb-8" style={{ color: '#969696' }}>Lanjutkan petualangan belajar IT-mu</p>

            <div className="space-y-4">
              {/* Email */}
              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: '#372466' }}>Email</label>
                <div className="relative">
                  <Mail size={22} className="absolute left-5 top-1/2 -translate-y-1/2" style={{ color: '#969696' }} />
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="nama@email.com"
                    className="w-full pl-14 pr-6 py-4 rounded-full text-base outline-none transition-all duration-200"
                    style={{
                      border: '1.5px solid #E8E6F0',
                      background: '#ffffff',
                      color: '#333333',
                    }}
                    onFocus={e => { e.currentTarget.style.borderColor = '#9568FF'; e.currentTarget.style.boxShadow = '0 0 0 4px rgba(149,104,255,0.1)' }}
                    onBlur={e => { e.currentTarget.style.borderColor = '#E8E6F0'; e.currentTarget.style.boxShadow = 'none' }}
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
                  <Lock size={22} className="absolute left-5 top-1/2 -translate-y-1/2" style={{ color: '#969696' }} />
                  <input
                    type={show ? 'text' : 'password'}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-14 pr-12 py-4 rounded-full text-base outline-none transition-all duration-200"
                    style={{ border: '1.5px solid #E8E6F0', background: '#ffffff', color: '#333333' }}
                    onFocus={e => { e.currentTarget.style.borderColor = '#9568FF'; e.currentTarget.style.boxShadow = '0 0 0 4px rgba(149,104,255,0.1)' }}
                    onBlur={e => { e.currentTarget.style.borderColor = '#E8E6F0'; e.currentTarget.style.boxShadow = 'none' }}
                  />
                  <button className="absolute right-5 top-1/2 -translate-y-1/2" onClick={() => setShow(!show)}>
                    {show ? <EyeOff size={22} style={{ color: '#969696' }} /> : <Eye size={22} style={{ color: '#969696' }} />}
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
                className="w-full flex items-center justify-center gap-2 mt-4 py-4 rounded-full text-white font-bold text-lg transition-all duration-200"
                style={{ background: 'linear-gradient(135deg, #4c3080 0%, #9568FF 100%)', boxShadow: '0 8px 24px rgba(149,104,255,0.3)', opacity: loading ? 0.7 : 1 }}
                onMouseEnter={e => { if(!loading) { (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 32px rgba(149,104,255,0.4)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)' } }}
                onMouseLeave={e => { if(!loading) { (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(149,104,255,0.3)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)' } }}
              >
                {loading ? 'Memproses...' : 'Masuk'} {!loading && <ArrowRight size={22} />}
              </button>

              {/* Divider */}
              <div className="flex items-center gap-3">
                <div className="flex-1 h-px" style={{ background: '#E8E6F0' }} />
                <span className="text-sm" style={{ color: '#969696' }}>atau masuk dengan</span>
                <div className="flex-1 h-px" style={{ background: '#E8E6F0' }} />
              </div>

              {/* Social login */}
              <div className="grid grid-cols-2 gap-4">
                <button
                  className="flex items-center justify-center gap-3 py-3.5 rounded-full text-base font-semibold transition-all duration-200"
                  style={{ border: '1.5px solid #E8E6F0', color: '#333333', background: 'white' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#F8F8FC' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'white' }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Google
                </button>
                <button
                  className="flex items-center justify-center gap-3 py-3.5 rounded-full text-base font-semibold transition-all duration-200"
                  style={{ border: '1.5px solid #E8E6F0', color: '#333333', background: 'white' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#F8F8FC' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'white' }}
                >
                  <svg width="20" height="20" viewBox="0 0 21 21">
                    <path fill="#f35325" d="M1 1h9v9H1z"/>
                    <path fill="#81bc06" d="M11 1h9v9h-9z"/>
                    <path fill="#05a6f0" d="M1 11h9v9H1z"/>
                    <path fill="#ffba08" d="M11 11h9v9h-9z"/>
                  </svg>
                  Microsoft
                </button>
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
