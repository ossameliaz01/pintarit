import { useState, useEffect } from 'react'
import { Play, Bookmark, Download, ChevronRight, Check } from 'lucide-react'
import axios from 'axios'
import HoverTooltip from '../components/HoverTooltip'

const levels = ['Beginner', 'Pro', 'Expert'] as const
type Level = typeof levels[number]

const content: Record<Level, {
  explanation: string
  analogy?: string
  code?: string
  example: string
  caseStudy?: string
}> = {
  Beginner: {
    explanation: 'IP Address (Internet Protocol Address) adalah alamat unik yang dimiliki setiap perangkat yang terhubung ke jaringan. Bayangkan seperti alamat rumahmu — setiap rumah punya alamat yang berbeda supaya surat bisa terkirim ke tempat yang tepat.',
    analogy: '🏠 Analogi: Kalau internet itu kota, maka IP Address adalah alamat rumahmu. Ketika kamu kirim pesan, paket data perlu tahu "mau dikirim ke mana?" — jawabannya: ke IP Address tujuan!',
    example: 'Contoh IP Address: 192.168.1.1 (IPv4) atau 2001:db8::1 (IPv6)\n• Perangkatmu di rumah: 192.168.1.100\n• Router: 192.168.1.1\n• Server Google: 8.8.8.8',
  },
  Pro: {
    explanation: 'IP Address adalah identifier numerik yang ditetapkan ke setiap perangkat dalam jaringan IP. IPv4 menggunakan format 32-bit (4 oktet), sedangkan IPv6 menggunakan 128-bit. IP Address terbagi menjadi dua bagian: Network ID dan Host ID, dipisahkan oleh Subnet Mask.',
    code: `# Cek IP Address di Linux
ip addr show
ifconfig

# Contoh output:
eth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>
    inet 192.168.1.100 netmask 255.255.255.0 broadcast 192.168.1.255
    inet6 fe80::1 prefixlen 64 scopeid 0x20<link>`,
    example: 'Kelas IP Address:\n• Kelas A: 1.0.0.0 – 126.255.255.255 (untuk jaringan besar)\n• Kelas B: 128.0.0.0 – 191.255.255.255 (jaringan menengah)\n• Kelas C: 192.0.0.0 – 223.255.255.255 (jaringan kecil)',
  },
  Expert: {
    explanation: 'IP addressing operates at Layer 3 (Network Layer) of the OSI model. IPv4 addresses are 32-bit binary values represented in dotted-decimal notation. CIDR (Classless Inter-Domain Routing) replaced classful addressing to improve scalability. The exhaustion of IPv4 (4.3 billion addresses) has driven adoption of IPv6 (3.4×10³⁸ addresses).',
    code: `# Advanced: Calculate subnet using Python
import ipaddress

network = ipaddress.IPv4Network('192.168.10.0/24')
print(f"Network: {network.network_address}")
print(f"Broadcast: {network.broadcast_address}")
print(f"Hosts: {list(network.hosts())[:5]}...")
print(f"Subnet mask: {network.netmask}")

# VLSM Example
subnets = list(network.subnets(prefixlen_diff=2))
for subnet in subnets:
    print(f"  Subnet: {subnet} | Hosts: {subnet.num_addresses - 2}")`,
    caseStudy: '⚡ Case Study: Sebuah perusahaan dengan 200 karyawan perlu membagi jaringan 192.168.0.0/24 menggunakan VLSM. Departemen IT (50 host) membutuhkan /26, HR (25 host) membutuhkan /27, Finance (10 host) membutuhkan /28. Hitung alokasi yang optimal!',
    example: 'Troubleshooting:\n• ping 127.0.0.1 → test loopback\n• ping gateway → test konektivitas local\n• traceroute → trace path ke destination\n• netstat -rn → lihat routing table',
  },
}

const quizQuestions = [
  { q: 'Berapa panjang bit IPv4?', options: ['16-bit', '32-bit', '64-bit', '128-bit'], answer: 1 },
  { q: 'IP Address 127.0.0.1 adalah?', options: ['Gateway', 'DNS Server', 'Loopback', 'Broadcast'], answer: 2 },
  { q: 'Kelas C mencakup range?', options: ['1-126', '128-191', '192-223', '224-255'], answer: 2 },
]

export default function Learning() {
  const [level, setLevel] = useState<Level>('Beginner')
  const [dictionary, setDictionary] = useState<any[]>([])

  useEffect(() => {
    axios.get('/api/user/me').then(res => {
      if (res.data && res.data.tech_language_pref) {
        setLevel(res.data.tech_language_pref)
      }
    }).catch(e => console.log('User not logged in or error:', e))

    axios.get('/api/dictionary').then(res => {
      setDictionary(res.data)
    }).catch(e => console.log('Error fetching dictionary:', e))
  }, [])

  const handleLevelChange = (l: Level) => {
    setLevel(l)
    axios.post('/api/user/preference', { tech_language_pref: l }).catch(e => console.error(e))
  }
  const [bookmarked, setBookmarked] = useState(false)
  const [quizStarted, setQuizStarted] = useState(false)
  const [quizIndex, setQuizIndex] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [quizDone, setQuizDone] = useState(false)
  const [score, setScore] = useState(0)

  const handleAnswer = (idx: number) => {
    setSelected(idx)
    let newScore = score;
    if (idx === quizQuestions[quizIndex].answer) {
      setScore(s => s + 1)
      newScore += 1;
    }
    setTimeout(() => {
      if (quizIndex < quizQuestions.length - 1) {
        setQuizIndex(i => i + 1)
        setSelected(null)
      } else {
        setQuizDone(true)
        const earnedXp = newScore * 20 + 50; // Bonus penyelesaian + jawaban benar
        if (earnedXp > 0) {
          axios.post('/api/user/xp', { xp: earnedXp }).catch(e => console.error('Failed to save XP:', e))
        }
      }
    }, 800)
  }

  const renderWithTooltips = (text: string) => {
    if (!dictionary.length) return text;
    const sortedTerms = [...dictionary].sort((a, b) => b.term.length - a.term.length);
    let parts = [{ text, isTerm: false, def: '' }];
    
    sortedTerms.forEach(d => {
      const newParts: any[] = [];
      const regex = new RegExp(`\\b(${d.term})\\b`, 'gi');
      
      parts.forEach(part => {
        if (part.isTerm) {
          newParts.push(part);
          return;
        }
        
        let lastIndex = 0;
        let match;
        while ((match = regex.exec(part.text)) !== null) {
          if (match.index > lastIndex) {
            newParts.push({ text: part.text.substring(lastIndex, match.index), isTerm: false, def: '' });
          }
          newParts.push({ text: match[0], isTerm: true, def: d.definition });
          lastIndex = match.index + match[0].length;
        }
        if (lastIndex < part.text.length) {
          newParts.push({ text: part.text.substring(lastIndex), isTerm: false, def: '' });
        }
      });
      parts = newParts;
    });

    return parts.map((p, i) => 
      p.isTerm ? <HoverTooltip key={i} definition={p.def}>{p.text}</HoverTooltip> : p.text
    );
  }

  const c = content[level]

  return (
    <div className="flex-1 overflow-y-auto" style={{ background: '#F8F8FC' }}>
      <div className="flex flex-col xl:flex-row h-full">
        {/* Main content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5">
          {/* Module header */}
          <div className="bg-white rounded-2xl p-4 sm:p-5" style={{ boxShadow: '0 4px 16px rgba(55,36,102,0.07)' }}>
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs px-2 py-0.5 rounded-full font-medium"
                    style={{ background: 'rgba(149,104,255,0.1)', color: '#9568FF' }}>Networking</span>
                  <span className="text-xs" style={{ color: '#969696' }}>Modul 3 / 10</span>
                </div>
                <h2 className="text-lg sm:text-xl font-bold" style={{ color: '#372466' }}>IP Address & Subnetting</h2>
                <div className="flex flex-wrap items-center gap-2 sm:gap-4 mt-1">
                  <span className="text-xs" style={{ color: '#969696' }}>⚡ 250 XP</span>
                  <span className="text-xs" style={{ color: '#969696' }}>⏱ 45 menit</span>
                  <span className="text-xs" style={{ color: '#969696' }}>68% selesai</span>
                </div>
              </div>
              <div className="flex gap-2 w-full sm:w-auto mt-2 sm:mt-0 justify-end">
                <button
                  onClick={() => setBookmarked(!bookmarked)}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200"
                  style={{
                    border: `1.5px solid ${bookmarked ? '#9568FF' : '#E8E6F0'}`,
                    background: bookmarked ? 'rgba(149,104,255,0.1)' : 'white',
                  }}>
                  <Bookmark size={15} style={{ color: bookmarked ? '#9568FF' : '#969696', fill: bookmarked ? '#9568FF' : 'none' }} />
                </button>
                <button className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ border: '1.5px solid #E8E6F0', background: 'white' }}>
                  <Download size={15} style={{ color: '#969696' }} />
                </button>
              </div>
            </div>

            {/* Progress bar */}
            <div className="mt-4">
              <div className="h-1.5 rounded-full" style={{ background: '#F0EFF8' }}>
                <div className="h-1.5 rounded-full" style={{ width: '68%', background: 'linear-gradient(90deg, #9568FF, #B794F6)' }} />
              </div>
            </div>
          </div>

          {/* Level toggle */}
          <div className="bg-white rounded-2xl p-4" style={{ boxShadow: '0 4px 16px rgba(55,36,102,0.07)' }}>
            <p className="text-xs font-semibold mb-3" style={{ color: '#969696' }}>Level Bahasa Teknis</p>
            <div className="flex flex-wrap sm:flex-nowrap gap-2 p-1 rounded-xl" style={{ background: '#F0EFF8' }}>
              {levels.map(l => (
                <button key={l} onClick={() => handleLevelChange(l)}
                  className="flex-1 min-w-[100px] py-2 rounded-lg text-sm font-semibold transition-all duration-200"
                  style={{
                    background: level === l ? 'white' : 'transparent',
                    color: level === l ? '#372466' : '#969696',
                    boxShadow: level === l ? '0 2px 8px rgba(55,36,102,0.1)' : 'none',
                  }}>
                  {l === 'Beginner' ? '🌱' : l === 'Pro' ? '⚡' : '🚀'} {l}
                </button>
              ))}
            </div>
          </div>

          {/* Video placeholder */}
          <div className="rounded-2xl overflow-hidden relative w-full" style={{ background: '#1a0f3d', aspectRatio: '16/9', maxHeight: '400px' }}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <button className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-2 sm:mb-3 transition-all duration-200 mx-auto"
                  style={{ background: 'rgba(149,104,255,0.8)', boxShadow: '0 0 32px rgba(149,104,255,0.5)' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1.1)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1)' }}>
                  <Play size={24} className="text-white ml-1" />
                </button>
                <p className="text-white font-semibold text-xs sm:text-sm">Tonton Video Penjelasan</p>
                <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.5)' }}>12:34 menit · HD</p>
              </div>
            </div>
            <div className="absolute inset-0 opacity-20"
              style={{ backgroundImage: 'radial-gradient(circle at 30% 30%, #9568FF 0%, transparent 60%)' }} />
          </div>

          {/* Article content */}
          <div className="bg-white rounded-2xl p-4 sm:p-6" style={{ boxShadow: '0 4px 16px rgba(55,36,102,0.07)' }}>
            <h3 className="font-bold text-sm mb-4" style={{ color: '#372466' }}>
              📖 Penjelasan {level === 'Expert' ? 'Teknis' : level === 'Pro' ? 'Standar' : 'Ramah Pemula'}
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: '#333333' }}>{renderWithTooltips(c.explanation)}</p>

            {level === 'Beginner' && c.analogy && (
              <div className="mt-4 p-4 rounded-xl" style={{ background: 'rgba(149,104,255,0.06)', border: '1px solid rgba(149,104,255,0.15)' }}>
                <p className="text-sm leading-relaxed" style={{ color: '#333333' }}>{renderWithTooltips(c.analogy)}</p>
              </div>
            )}

            {level === 'Expert' && c.caseStudy && (
              <div className="mt-4 p-4 rounded-xl" style={{ background: 'rgba(255,193,7,0.06)', border: '1px solid rgba(255,193,7,0.2)' }}>
                <p className="text-sm leading-relaxed" style={{ color: '#333333' }}>{renderWithTooltips(c.caseStudy)}</p>
              </div>
            )}
          </div>

          {/* Code block (Pro/Expert) */}
          {c.code && (
            <div className="rounded-2xl overflow-hidden" style={{ background: '#1a1130' }}>
              <div className="flex items-center justify-between px-4 py-2" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full" style={{ background: '#EF4444' }} />
                  <div className="w-3 h-3 rounded-full" style={{ background: '#FFC107' }} />
                  <div className="w-3 h-3 rounded-full" style={{ background: '#4CAF50' }} />
                </div>
                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'monospace' }}>
                  {level === 'Expert' ? 'python' : 'bash'}
                </span>
              </div>
              <pre className="p-4 sm:p-5 text-xs leading-6 overflow-x-auto" style={{ color: '#B794F6', fontFamily: 'JetBrains Mono, Fira Code, monospace' }}>
                <code>{c.code}</code>
              </pre>
            </div>
          )}

          {/* Example */}
          <div className="bg-white rounded-2xl p-4 sm:p-6" style={{ boxShadow: '0 4px 16px rgba(55,36,102,0.07)' }}>
            <h3 className="font-bold text-sm mb-3" style={{ color: '#372466' }}>💡 Contoh</h3>
            <pre className="text-xs leading-6 whitespace-pre-wrap" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>{c.example}</pre>
          </div>

          {/* Interactive Notes */}
          <div className="bg-white rounded-2xl p-4 sm:p-6" style={{ boxShadow: '0 4px 16px rgba(55,36,102,0.07)' }}>
            <h3 className="font-bold text-sm mb-3" style={{ color: '#372466' }}>📝 Catatan Interaktif</h3>
            <textarea
              placeholder="Tulis catatan pelajaranmu di sini..."
              rows={4}
              className="w-full text-sm resize-none rounded-xl p-3 outline-none transition-all duration-200"
              style={{ border: '1.5px solid #E8E6F0', background: '#F8F8FC', color: '#333333', fontFamily: 'Poppins, sans-serif' }}
              onFocus={e => { e.currentTarget.style.borderColor = '#9568FF'; e.currentTarget.style.background = 'white' }}
              onBlur={e => { e.currentTarget.style.borderColor = '#E8E6F0'; e.currentTarget.style.background = '#F8F8FC' }}
            />
          </div>

          {/* Quiz */}
          <div className="bg-white rounded-2xl p-4 sm:p-6" style={{ boxShadow: '0 4px 16px rgba(55,36,102,0.07)' }}>
            <h3 className="font-bold text-sm mb-4" style={{ color: '#372466' }}>🧠 Kuis Pemahaman</h3>

            {!quizStarted ? (
              <div className="text-center py-4">
                <div className="text-4xl mb-3">🎯</div>
                <p className="text-sm mb-4" style={{ color: '#969696' }}>3 pertanyaan · ~5 menit · Dapatkan +50 XP bonus</p>
                <button onClick={() => setQuizStarted(true)}
                  className="px-6 py-3 rounded-xl text-white font-semibold text-sm"
                  style={{ background: 'linear-gradient(135deg, #372466, #9568FF)', boxShadow: '0 8px 24px rgba(149,104,255,0.3)' }}>
                  Mulai Kuis ⚡
                </button>
              </div>
            ) : quizDone ? (
              <div className="text-center py-4">
                <div className="text-4xl mb-3">🏆</div>
                <p className="text-lg font-bold mb-1" style={{ color: '#372466' }}>{score}/{quizQuestions.length} Benar!</p>
                <p className="text-sm mb-3" style={{ color: '#969696' }}>Kamu mendapat +{score * 20} XP bonus</p>
                <button onClick={() => { setQuizStarted(false); setQuizDone(false); setQuizIndex(0); setScore(0); setSelected(null) }}
                  className="px-5 py-2 rounded-xl text-sm font-semibold"
                  style={{ border: '1.5px solid #9568FF', color: '#9568FF' }}>
                  Ulangi Kuis
                </button>
              </div>
            ) : (
              <div>
                <div className="flex justify-between text-xs mb-3">
                  <span style={{ color: '#969696' }}>Soal {quizIndex + 1}/{quizQuestions.length}</span>
                  <span style={{ color: '#9568FF' }}>+20 XP per soal benar</span>
                </div>
                <p className="font-semibold text-sm mb-4" style={{ color: '#333333' }}>{quizQuestions[quizIndex].q}</p>
                <div className="space-y-2">
                  {quizQuestions[quizIndex].options.map((opt, i) => {
                    const isCorrect = i === quizQuestions[quizIndex].answer
                    const isSelected = selected === i
                    return (
                      <button key={i} onClick={() => selected === null && handleAnswer(i)}
                        className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200"
                        style={{
                          border: selected !== null
                            ? isCorrect ? '2px solid #4CAF50' : isSelected ? '2px solid #EF4444' : '1.5px solid #E8E6F0'
                            : '1.5px solid #E8E6F0',
                          background: selected !== null
                            ? isCorrect ? 'rgba(76,175,80,0.1)' : isSelected ? 'rgba(239,68,68,0.1)' : 'white'
                            : 'white',
                          color: '#333333',
                          cursor: selected !== null ? 'default' : 'pointer',
                        }}>
                        {selected !== null && isCorrect && <Check size={14} style={{ color: '#4CAF50', display: 'inline', marginRight: 6 }} />}
                        {opt}
                      </button>
                    )
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Sticky sidebar */}
        <div className="w-full xl:w-64 p-4 flex-shrink-0 border-t xl:border-t-0 xl:border-l border-[#E8E6F0] bg-white xl:overflow-y-auto">
          <h4 className="font-bold text-xs mb-4" style={{ color: '#372466' }}>📋 Daftar Materi</h4>
          <div className="space-y-2">
            {[
              { title: 'Pengantar IP Address', done: true },
              { title: 'IPv4 vs IPv6', done: true },
              { title: 'Kelas IP Address', done: false, active: true },
              { title: 'Subnet Mask', done: false },
              { title: 'CIDR Notation', done: false },
              { title: 'Private vs Public IP', done: false },
              { title: 'Kuis & Latihan', done: false },
            ].map((item, i) => (
              <div key={i} className={`flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer transition-all duration-200`}
                style={{
                  background: item.active ? 'rgba(149,104,255,0.08)' : 'transparent',
                  border: item.active ? '1px solid rgba(149,104,255,0.2)' : '1px solid transparent',
                }}
                onMouseEnter={e => { if (!item.active) (e.currentTarget as HTMLElement).style.background = '#F8F8FC' }}
                onMouseLeave={e => { if (!item.active) (e.currentTarget as HTMLElement).style.background = 'transparent' }}>
                <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: item.done ? '#4CAF50' : item.active ? '#9568FF' : '#E8E6F0' }}>
                  {item.done && <Check size={9} className="text-white" />}
                  {item.active && !item.done && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                </div>
                <span className="text-xs" style={{ color: item.active ? '#372466' : item.done ? '#969696' : '#333333', fontWeight: item.active ? 600 : 400 }}>
                  {item.title}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 p-3 rounded-xl" style={{ background: 'rgba(149,104,255,0.06)', border: '1px solid rgba(149,104,255,0.15)' }}>
            <p className="text-xs font-bold mb-2" style={{ color: '#372466' }}>📚 Referensi</p>
            {['RFC 791 - IP', 'Cisco Networking Academy', 'CompTIA Network+'].map((r, i) => (
              <div key={i} className="flex items-center gap-1.5 text-xs mb-1" style={{ color: '#9568FF' }}>
                <ChevronRight size={10} /> {r}
              </div>
            ))}
          </div>

          <button className="w-full mt-4 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold text-white"
            style={{ background: 'linear-gradient(135deg, #372466, #9568FF)' }}>
            Lanjut Modul Berikutnya <ChevronRight size={12} />
          </button>
        </div>
      </div>
    </div>
  )
}
