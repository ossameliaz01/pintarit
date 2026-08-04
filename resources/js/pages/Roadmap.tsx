import { useState } from 'react'
import { X, Play, Clock, Zap, Star, CheckCircle, Lock } from 'lucide-react'

interface RoadmapProps {
  onNavigate: (page: string) => void
}

const nodes = [
  {
    id: 1, label: 'Computer\nBasics', icon: '💻', status: 'completed',
    desc: 'Dasar-dasar komputer: hardware, software, dan sistem operasi.',
    time: '2 jam', xp: 150, difficulty: 'Beginner', progress: 100,
  },
  {
    id: 2, label: 'Hardware', icon: '🔧', status: 'completed',
    desc: 'Komponen hardware komputer: CPU, RAM, Storage, Motherboard.',
    time: '3 jam', xp: 200, difficulty: 'Beginner', progress: 100,
  },
  {
    id: 3, label: 'Networking', icon: '🌐', status: 'current',
    desc: 'Konsep jaringan komputer: topologi, protokol, dan model OSI/TCP-IP.',
    time: '4 jam', xp: 250, difficulty: 'Intermediate', progress: 68,
  },
  {
    id: 4, label: 'IP Address', icon: '🔢', status: 'locked',
    desc: 'Sistem pengalamatan IP: IPv4, IPv6, kelas IP, dan perhitungan.',
    time: '3 jam', xp: 200, difficulty: 'Intermediate', progress: 0,
  },
  {
    id: 5, label: 'Subnetting', icon: '✂️', status: 'locked',
    desc: 'Teknik subnetting: CIDR, VLSM, dan perhitungan subnet mask.',
    time: '5 jam', xp: 350, difficulty: 'Advanced', progress: 0,
  },
  {
    id: 6, label: 'Routing', icon: '🔀', status: 'locked',
    desc: 'Protokol routing: Static, OSPF, EIGRP, dan BGP.',
    time: '6 jam', xp: 400, difficulty: 'Advanced', progress: 0,
  },
  {
    id: 7, label: 'Server', icon: '🖥️', status: 'locked',
    desc: 'Administrasi server: DNS, DHCP, Web Server, FTP.',
    time: '8 jam', xp: 500, difficulty: 'Expert', progress: 0,
  },
  {
    id: 8, label: 'Security', icon: '🛡️', status: 'locked',
    desc: 'Keamanan jaringan: Firewall, VPN, IDS/IPS, dan enkripsi.',
    time: '8 jam', xp: 550, difficulty: 'Expert', progress: 0,
  },
  {
    id: 9, label: 'Linux', icon: '🐧', status: 'locked',
    desc: 'Sistem operasi Linux: command line, shell scripting, dan administrasi.',
    time: '10 jam', xp: 600, difficulty: 'Expert', progress: 0,
  },
  {
    id: 10, label: 'Cloud', icon: '☁️', status: 'locked',
    desc: 'Cloud computing: AWS, GCP, Azure, dan konsep IaaS/PaaS/SaaS.',
    time: '12 jam', xp: 700, difficulty: 'Expert', progress: 0,
  },
]

const diffColors: Record<string, { bg: string; color: string }> = {
  Beginner: { bg: 'rgba(76,175,80,0.1)', color: '#4CAF50' },
  Intermediate: { bg: 'rgba(149,104,255,0.1)', color: '#9568FF' },
  Advanced: { bg: 'rgba(255,193,7,0.1)', color: '#FFC107' },
  Expert: { bg: 'rgba(239,68,68,0.1)', color: '#EF4444' },
}

export default function Roadmap({ onNavigate }: RoadmapProps) {
  const [selected, setSelected] = useState<typeof nodes[0] | null>(null)

  const getNodeStyle = (status: string) => {
    if (status === 'completed') return { bg: '#4CAF50', border: '#2E7D32', glow: 'rgba(76,175,80,0.5)' }
    if (status === 'current') return { bg: '#9568FF', border: '#B794F6', glow: 'rgba(149,104,255,0.7)' }
    return { bg: 'rgba(255,255,255,0.08)', border: 'rgba(255,255,255,0.15)', glow: 'transparent' }
  }

  return (
    <div className="flex-1 overflow-y-auto" style={{ background: '#F8F8FC' }}>
      {/* Header */}
      <div className="p-6 pb-0">
        <div className="rounded-2xl p-5 mb-4 relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #372466 0%, #1a0f3d 100%)' }}>
          <div className="absolute inset-0 opacity-25"
            style={{ backgroundImage: 'radial-gradient(circle at 80% 50%, #9568FF 0%, transparent 60%)' }} />
          <div className="relative flex flex-wrap items-center gap-4 justify-between">
            <div>
              <h2 className="text-xl font-bold text-white mb-1">🗺️ Learning Roadmap</h2>
              <p className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
                Selesaikan modul secara berurutan · Klik node untuk mulai belajar
              </p>
            </div>
            <div className="flex gap-3 flex-wrap">
              {[
                { label: 'Selesai', count: '2', color: '#4CAF50' },
                { label: 'Aktif', count: '1', color: '#9568FF' },
                { label: 'Terkunci', count: '7', color: 'rgba(255,255,255,0.3)' },
              ].map((s, i) => (
                <div key={i} className="text-center px-3 py-2 rounded-xl"
                  style={{ background: 'rgba(255,255,255,0.1)' }}>
                  <p className="text-base font-bold" style={{ color: s.color }}>{s.count}</p>
                  <p className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>{s.label}</p>
                </div>
              ))}
              <button
                onClick={() => onNavigate('placement-test')}
                className="px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer"
                style={{ background: 'rgba(149,104,255,0.3)', color: '#B794F6', border: '1px solid rgba(183,148,246,0.3)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(149,104,255,0.5)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(149,104,255,0.3)' }}
              >
                📋 Placement Test
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic Roadmap Container */}
      <div className="px-6 pb-6 w-full">
        <div className="rounded-2xl relative p-8 md:p-12"
          style={{ background: 'linear-gradient(180deg, #0f0726 0%, #1a0f3d 50%, #0f0726 100%)', minHeight: '600px' }}>
          
          {/* Stars background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(40)].map((_, i) => (
              <div key={i} className="absolute rounded-full"
                style={{
                  width: Math.random() * 2 + 1 + 'px',
                  height: Math.random() * 2 + 1 + 'px',
                  background: 'white',
                  left: Math.random() * 100 + '%',
                  top: Math.random() * 100 + '%',
                  opacity: Math.random() * 0.6 + 0.2,
                }} />
            ))}
          </div>

          <div className="relative max-w-4xl mx-auto flex flex-col items-center py-10">
            {/* Dynamic Timeline Path */}
            <div className="absolute top-0 bottom-0 w-1" style={{ background: 'rgba(255,255,255,0.1)', left: '50%', transform: 'translateX(-50%)' }} />
            
            {nodes.map((node, index) => {
              const style = getNodeStyle(node.status)
              const isEven = index % 2 === 0
              const isActive = node.status === 'completed' || node.status === 'current'
              
              return (
                <div key={node.id} className={`w-full flex justify-between items-center mb-16 relative ${isEven ? 'flex-row-reverse' : 'flex-row'}`}>
                  
                  {/* Node Connection Line (Active state) */}
                  {isActive && index > 0 && (
                    <div className="absolute w-1" style={{ background: 'rgba(149,104,255,0.7)', left: '50%', transform: 'translateX(-50%)', top: '-64px', height: '64px' }} />
                  )}

                  <div className={`w-5/12 flex ${isEven ? 'justify-start' : 'justify-end'}`}>
                    {/* Node Info Label */}
                    <div className={`hidden md:block ${isEven ? 'ml-8 text-left' : 'mr-8 text-right'}`}>
                      <h3 className="text-lg font-bold mb-1" style={{ color: node.status === 'locked' ? 'rgba(255,255,255,0.3)' : 'white' }}>
                        {node.label.replace('\n', ' ')}
                      </h3>
                      {node.status !== 'locked' && (
                        <p className="text-sm font-medium" style={{ color: '#FFC107' }}>⚡ {node.xp} XP</p>
                      )}
                    </div>
                  </div>
                  
                  {/* Node Circle */}
                  <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer group z-10" onClick={() => setSelected(node)}>
                    {node.status === 'current' && (
                      <div className="absolute inset-0 rounded-full node-glow animate-pulse"
                        style={{ width: 80, height: 80, top: -8, left: -8, background: 'transparent', border: `3px solid ${style.border}` }} />
                    )}

                    <div className="w-16 h-16 rounded-full flex items-center justify-center text-3xl transition-transform duration-300 group-hover:scale-110 shadow-lg"
                      style={{
                        background: style.bg,
                        border: `3px solid ${style.border}`,
                        boxShadow: node.status !== 'locked' ? `0 0 24px ${style.glow}` : 'none',
                      }}>
                      {node.status === 'locked' ? <Lock size={24} style={{ color: 'rgba(255,255,255,0.3)' }} /> : node.icon}
                    </div>

                    {node.status === 'current' && (
                      <svg className="absolute" width="64" height="64" style={{ top: 0, left: 0 }}>
                        <circle cx="32" cy="32" r="29" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="3" />
                        <circle cx="32" cy="32" r="29" fill="none" stroke="#FFC107" strokeWidth="3"
                          strokeDasharray={`${2 * Math.PI * 29 * node.progress / 100} ${2 * Math.PI * 29 * (1 - node.progress / 100)}`}
                          strokeLinecap="round"
                          transform="rotate(-90 32 32)" />
                      </svg>
                    )}
                    
                    {/* Mobile Label */}
                    <div className="md:hidden mt-3 text-center absolute top-full w-32 left-1/2 -translate-x-1/2">
                       <p className="text-sm font-semibold leading-tight"
                        style={{ color: node.status === 'locked' ? 'rgba(255,255,255,0.3)' : 'white' }}>
                        {node.label.replace('\n', ' ')}
                      </p>
                    </div>
                  </div>
                  
                  <div className="w-5/12"></div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Legend */}
        <div className="flex gap-4 mt-6 flex-wrap justify-center">
          {[
            { color: '#4CAF50', label: 'Selesai', icon: '✓' },
            { color: '#9568FF', label: 'Sedang dipelajari', icon: '▶' },
            { color: 'rgba(255,255,255,0.2)', label: 'Terkunci', icon: '🔒', border: 'rgba(255,255,255,0.1)' },
          ].map((l, i) => (
            <div key={i} className="flex items-center gap-2 text-sm" style={{ color: '#969696' }}>
              <div className="w-5 h-5 rounded-full flex items-center justify-center text-sm"
                style={{ background: l.color, border: l.border ? `1px solid ${l.border}` : 'none' }}>
                <span style={{ fontSize: '8px' }}>{l.icon}</span>
              </div>
              {l.label}
            </div>
          ))}
        </div>
      </div>

      {/* Node detail modal */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}
          onClick={() => setSelected(null)}>
          <div className="w-full max-w-md rounded-2xl p-6 relative animate-in zoom-in-95 duration-200"
            style={{ background: 'white', boxShadow: '0 32px 64px rgba(55,36,102,0.3)' }}
            onClick={e => e.stopPropagation()}>
            <button onClick={() => setSelected(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:bg-gray-200"
              style={{ background: '#F0EFF8' }}>
              <X size={16} style={{ color: '#969696' }} />
            </button>

            <div className="flex items-center gap-4 mb-5 mt-2">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-4xl shadow-sm"
                style={{ background: selected.status === 'locked' ? '#F0EFF8' : 'rgba(149,104,255,0.1)' }}>
                {selected.status === 'locked' ? '🔒' : selected.icon}
              </div>
              <div>
                <h3 className="font-bold text-xl" style={{ color: '#372466' }}>{selected.label.replace('\n', ' ')}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-sm px-2 py-0.5 rounded-full font-medium"
                    style={{ background: diffColors[selected.difficulty].bg, color: diffColors[selected.difficulty].color }}>
                    {selected.difficulty}
                  </span>
                  <span className="text-sm" style={{ color: '#969696' }}>{selected.status === 'completed' ? '✅ Selesai' : selected.status === 'current' ? '▶ Sedang dipelajari' : '🔒 Terkunci'}</span>
                </div>
              </div>
            </div>

            <p className="text-base leading-relaxed mb-5" style={{ color: '#555555' }}>{selected.desc}</p>

            <div className="grid grid-cols-3 gap-3 mb-5">
              {[
                { label: 'Durasi', value: selected.time, icon: <Clock size={16} style={{ color: '#9568FF' }} /> },
                { label: 'Reward XP', value: `${selected.xp} XP`, icon: <Zap size={16} style={{ color: '#FFC107' }} /> },
                { label: 'Level', value: selected.difficulty, icon: <Star size={16} style={{ color: '#4CAF50' }} /> },
              ].map((info, i) => (
                <div key={i} className="rounded-xl p-3 text-center" style={{ background: '#F8F8FC' }}>
                  <div className="flex justify-center mb-1">{info.icon}</div>
                  <p className="text-sm font-bold" style={{ color: '#333333' }}>{info.value}</p>
                  <p className="text-sm" style={{ color: '#969696' }}>{info.label}</p>
                </div>
              ))}
            </div>

            {selected.status === 'current' && (
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span style={{ color: '#969696' }}>Progress</span>
                  <span style={{ color: '#9568FF' }} className="font-semibold">{selected.progress}%</span>
                </div>
                <div className="h-2 rounded-full" style={{ background: '#F0EFF8' }}>
                  <div className="h-2 rounded-full transition-all duration-1000" style={{ width: `${selected.progress}%`, background: 'linear-gradient(90deg, #9568FF, #B794F6)' }} />
                </div>
              </div>
            )}

            <div className="flex gap-3 mt-6">
              {selected.status === 'locked' ? (
                <button className="flex-1 py-3 rounded-xl text-base font-semibold text-white cursor-not-allowed"
                  style={{ background: 'linear-gradient(135deg, #372466, #9568FF)', opacity: 0.5 }}>
                  🔒 Selesaikan modul sebelumnya
                </button>
              ) : selected.status === 'completed' ? (
                <button onClick={() => { setSelected(null); onNavigate('learning') }}
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-base font-semibold transition-colors hover:bg-purple-50"
                  style={{ border: '1.5px solid #9568FF', color: '#9568FF' }}>
                  <CheckCircle size={16} /> Ulang Materi
                </button>
              ) : (
                <>
                  <button
                    onClick={() => { setSelected(null); onNavigate('placement-test') }}
                    className="flex-1 py-3 rounded-xl text-base font-semibold transition-all duration-200"
                    style={{ border: '1.5px solid rgba(149,104,255,0.3)', color: '#9568FF' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(149,104,255,0.05)' }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent' }}>
                    📋 Placement Test
                  </button>
                  <button onClick={() => { setSelected(null); onNavigate('learning') }}
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-base font-semibold text-white transition-transform hover:scale-105 active:scale-95"
                    style={{ background: 'linear-gradient(135deg, #372466, #9568FF)', boxShadow: '0 8px 24px rgba(149,104,255,0.3)' }}>
                    <Play size={16} /> Mulai Belajar
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
