import { useState, useRef } from 'react'
import { Search, Star, X, BookOpen, ChevronRight } from 'lucide-react'

const categories = ['Semua', 'Networking', 'Hardware', 'Programming', 'OS', 'Cyber Security']

const terms = [
  {
    term: 'IP Address',
    category: 'Networking',
    short: 'Alamat unik perangkat di jaringan',
    definition: 'Internet Protocol Address adalah alamat numerik unik yang ditetapkan ke setiap perangkat yang terhubung ke jaringan komputer menggunakan Internet Protocol.',
    analogy: '🏠 Seperti alamat rumah — setiap perangkat punya alamat unik agar data bisa terkirim ke tujuan yang tepat.',
    example: '192.168.1.1 (IPv4) atau 2001:db8::1 (IPv6)',
    icon: '🌐',
    favorite: false,
  },
  {
    term: 'Router',
    category: 'Networking',
    short: 'Perangkat penerusan paket data',
    definition: 'Router adalah perangkat jaringan yang meneruskan paket data antara jaringan komputer. Router membuat keputusan berdasarkan routing table untuk menentukan jalur terbaik.',
    analogy: '🚦 Seperti petugas lalu lintas — mengarahkan data ke jalan yang benar.',
    example: 'Contoh: Router rumah yang menghubungkan perangkat ke internet melalui ISP.',
    icon: '🔀',
    favorite: true,
  },
  {
    term: 'Gateway',
    category: 'Networking',
    short: 'Pintu gerbang antar jaringan berbeda',
    definition: 'Gateway adalah node jaringan yang berfungsi sebagai titik masuk dari satu jaringan ke jaringan lainnya, terutama ketika jaringan menggunakan protokol yang berbeda.',
    analogy: '🚪 Seperti pintu antar negara — tempat peralihan dari satu wilayah (jaringan) ke wilayah lain.',
    example: 'Default gateway: 192.168.1.1 (biasanya IP router kamu)',
    icon: '🚪',
    favorite: false,
  },
  {
    term: 'Firewall',
    category: 'Cyber Security',
    short: 'Sistem keamanan jaringan',
    definition: 'Firewall adalah sistem keamanan jaringan yang memonitor dan mengontrol lalu lintas jaringan masuk dan keluar berdasarkan aturan keamanan yang telah ditentukan.',
    analogy: '🛡️ Seperti satpam gedung — memeriksa setiap orang (paket data) yang masuk dan keluar.',
    example: 'iptables -A INPUT -p tcp --dport 22 -j ACCEPT',
    icon: '🛡️',
    favorite: false,
  },
  {
    term: 'DNS',
    category: 'Networking',
    short: 'Sistem penerjemah nama domain',
    definition: 'Domain Name System adalah sistem penamaan hierarkis yang menerjemahkan nama domain yang dapat dibaca manusia (seperti google.com) menjadi alamat IP numerik.',
    analogy: '📖 Seperti buku telepon — kamu tahu nama orangnya (domain), DNS kasih tau nomornya (IP Address).',
    example: 'nslookup google.com → 142.250.185.46',
    icon: '📖',
    favorite: true,
  },
  {
    term: 'Subnet',
    category: 'Networking',
    short: 'Pembagian jaringan menjadi segmen lebih kecil',
    definition: 'Subnet (subnetwork) adalah pembagian logis dari jaringan IP. Subnetting memungkinkan penggunaan alamat IP yang lebih efisien dan meningkatkan keamanan jaringan.',
    analogy: '🏘️ Seperti membagi kota jadi kelurahan-kelurahan — setiap kelurahan punya wilayah sendiri.',
    example: '192.168.1.0/24 dibagi jadi /26: 4 subnet masing-masing 62 host.',
    icon: '✂️',
    favorite: false,
  },
  {
    term: 'CPU',
    category: 'Hardware',
    short: 'Unit pemroses pusat komputer',
    definition: 'Central Processing Unit adalah komponen elektronik utama komputer yang menjalankan instruksi program. Dikenal sebagai "otak" komputer.',
    analogy: '🧠 Seperti otak — memproses semua informasi dan perintah yang diterima komputer.',
    example: 'Intel Core i9-13900K, AMD Ryzen 9 7950X',
    icon: '💻',
    favorite: false,
  },
  {
    term: 'VLAN',
    category: 'Networking',
    short: 'Virtual Local Area Network',
    definition: 'VLAN adalah jaringan lokal virtual yang memungkinkan pemisahan logis perangkat dalam jaringan fisik yang sama, meningkatkan keamanan dan manajemen traffic.',
    analogy: '🏢 Seperti lantai-lantai terpisah di gedung yang sama — antar lantai perlu lift (router) untuk komunikasi.',
    example: 'VLAN 10: IT Dept | VLAN 20: HR | VLAN 30: Finance',
    icon: '🔗',
    favorite: false,
  },
]

interface TooltipState {
  term: typeof terms[0] | null
  x: number
  y: number
}

export default function Dictionary() {
  const [search, setSearch] = useState('')
  const [cat, setCat] = useState('Semua')
  const [tooltip, setTooltip] = useState<TooltipState>({ term: null, x: 0, y: 0 })
  const [favorites, setFavorites] = useState<string[]>(['Router', 'DNS'])
  const [selected, setSelected] = useState<typeof terms[0] | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const filtered = terms.filter(t => {
    const matchSearch = t.term.toLowerCase().includes(search.toLowerCase()) ||
      t.short.toLowerCase().includes(search.toLowerCase())
    const matchCat = cat === 'Semua' || t.category === cat
    return matchSearch && matchCat
  })

  const toggleFav = (term: string) => {
    setFavorites(prev => prev.includes(term) ? prev.filter(f => f !== term) : [...prev, term])
  }

  return (
    <div className="flex-1 overflow-y-auto p-6 space-y-5" style={{ background: '#F8F8FC' }}>
      {/* Header */}
      <div className="rounded-2xl p-5 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #372466 0%, #9568FF 100%)', boxShadow: '0 8px 32px rgba(149,104,255,0.35)' }}>
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: 'radial-gradient(circle at 80% 50%, rgba(255,255,255,0.3) 0%, transparent 50%)' }} />
        <div className="relative">
          <h2 className="text-xl font-bold text-white mb-1">📚 Kamus IT Interaktif</h2>
          <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Hover atau klik istilah teknis untuk definisi, ilustrasi, dan analogi
          </p>
          <div className="relative">
            <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: '#9568FF' }} />
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Cari istilah IT..."
              className="w-full pl-10 pr-4 py-3 rounded-xl text-base outline-none"
              style={{ background: 'white', color: '#333333', border: 'none', boxShadow: '0 4px 16px rgba(55,36,102,0.15)' }}
            />
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="flex gap-2 overflow-x-auto pb-1">
        {categories.map(c => (
          <button key={c} onClick={() => setCat(c)}
            className="px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap transition-all duration-200"
            style={{
              background: cat === c ? 'linear-gradient(135deg, #372466, #9568FF)' : 'white',
              color: cat === c ? 'white' : '#969696',
              boxShadow: cat === c ? '0 4px 16px rgba(149,104,255,0.3)' : '0 2px 8px rgba(55,36,102,0.06)',
            }}>
            {c}
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-5" ref={containerRef}>
        {/* Terms grid */}
        <div className="lg:col-span-2">
          <div className="grid sm:grid-cols-2 gap-4">
            {filtered.map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-4 cursor-pointer card-hover"
                style={{ boxShadow: '0 4px 16px rgba(55,36,102,0.07)', border: selected?.term === t.term ? '2px solid #9568FF' : '2px solid transparent' }}
                onClick={() => setSelected(selected?.term === t.term ? null : t)}
              >
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                    style={{ background: 'rgba(149,104,255,0.1)' }}>
                    {t.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-base" style={{ color: '#372466' }}>{t.term}</span>
                      <button onClick={e => { e.stopPropagation(); toggleFav(t.term) }} className="transition-all duration-200">
                        <Star size={16}
                          style={{ color: favorites.includes(t.term) ? '#FFC107' : '#E8E6F0', fill: favorites.includes(t.term) ? '#FFC107' : 'none' }} />
                      </button>
                    </div>
                    <span className="text-sm px-2 py-0.5 rounded-full" style={{ background: 'rgba(149,104,255,0.1)', color: '#9568FF' }}>
                      {t.category}
                    </span>
                    <p className="text-sm mt-2 leading-relaxed" style={{ color: '#969696' }}>{t.short}</p>
                  </div>
                </div>

                {selected?.term === t.term && (
                  <div className="mt-4 pt-4" style={{ borderTop: '1px solid #F0EFF8' }}>
                    <p className="text-sm leading-relaxed mb-3" style={{ color: '#333333' }}>{t.definition}</p>
                    <div className="p-3 rounded-xl mb-3" style={{ background: 'rgba(149,104,255,0.06)', border: '1px solid rgba(149,104,255,0.15)' }}>
                      <p className="text-sm" style={{ color: '#333333' }}>{t.analogy}</p>
                    </div>
                    <div className="p-3 rounded-xl" style={{ background: '#F8F8FC', border: '1px solid #E8E6F0' }}>
                      <p className="text-sm font-semibold mb-1" style={{ color: '#372466' }}>Contoh:</p>
                      <p className="text-sm font-mono" style={{ color: '#9568FF' }}>{t.example}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="bg-white rounded-2xl p-12 text-center" style={{ boxShadow: '0 4px 16px rgba(55,36,102,0.07)' }}>
              <div className="text-5xl mb-4">🔍</div>
              <p className="font-semibold text-base" style={{ color: '#372466' }}>Tidak ada hasil ditemukan</p>
              <p className="text-sm mt-1" style={{ color: '#969696' }}>Coba kata kunci yang berbeda</p>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          {/* Favorites */}
          <div className="bg-white rounded-2xl p-5" style={{ boxShadow: '0 4px 16px rgba(55,36,102,0.07)' }}>
            <h4 className="font-bold text-base mb-3 flex items-center gap-2" style={{ color: '#372466' }}>
              <Star size={16} style={{ color: '#FFC107', fill: '#FFC107' }} /> Favorit Saya
            </h4>
            {favorites.length === 0 ? (
              <p className="text-sm" style={{ color: '#969696' }}>Belum ada istilah favorit</p>
            ) : (
              <div className="space-y-2">
                {terms.filter(t => favorites.includes(t.term)).map((t, i) => (
                  <div key={i} className="flex items-center gap-2 p-2 rounded-lg cursor-pointer"
                    style={{ background: '#F8F8FC' }}
                    onClick={() => setSelected(t)}>
                    <span>{t.icon}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold truncate" style={{ color: '#333333' }}>{t.term}</p>
                    </div>
                    <ChevronRight size={14} style={{ color: '#969696' }} />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Recent terms */}
          <div className="bg-white rounded-2xl p-5" style={{ boxShadow: '0 4px 16px rgba(55,36,102,0.07)' }}>
            <h4 className="font-bold text-base mb-3" style={{ color: '#372466' }}>🕐 Terakhir Dilihat</h4>
            <div className="space-y-2">
              {['IP Address', 'DNS', 'VLAN', 'Firewall'].map((term, i) => (
                <div key={i} className="flex items-center gap-2 p-2 rounded-lg cursor-pointer"
                  style={{ background: '#F8F8FC' }}
                  onClick={() => setSelected(terms.find(t => t.term === term) || null)}>
                  <BookOpen size={14} style={{ color: '#9568FF' }} />
                  <span className="text-sm" style={{ color: '#333333' }}>{term}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="rounded-2xl p-5"
            style={{ background: 'linear-gradient(135deg, #372466 0%, #9568FF 100%)', boxShadow: '0 8px 24px rgba(149,104,255,0.3)' }}>
            <h4 className="font-bold text-base mb-3 text-white">📊 Statistik Kamus</h4>
            {[
              { label: 'Istilah dipelajari', value: '48' },
              { label: 'Favorit', value: favorites.length.toString() },
              { label: 'Kategori', value: '5' },
              { label: 'XP dari kamus', value: '240' },
            ].map((s, i) => (
              <div key={i} className="flex justify-between text-sm mb-2">
                <span style={{ color: 'rgba(255,255,255,0.65)' }}>{s.label}</span>
                <span className="font-bold text-white">{s.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating tooltip (simulated inline) */}
      {tooltip.term && (
        <div className="fixed z-50 pointer-events-none tooltip-enter"
          style={{ left: tooltip.x + 16, top: tooltip.y, maxWidth: '280px' }}>
          <div className="bg-white rounded-2xl p-4 shadow-2xl" style={{ boxShadow: '0 16px 48px rgba(55,36,102,0.25)', border: '1px solid rgba(149,104,255,0.2)' }}>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">{tooltip.term.icon}</span>
              <span className="font-bold text-base" style={{ color: '#372466' }}>{tooltip.term.term}</span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: '#969696' }}>{tooltip.term.definition}</p>
          </div>
        </div>
      )}
    </div>
  )
}
