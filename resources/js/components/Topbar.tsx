import { Search, Bell, Zap, Menu } from 'lucide-react'

interface TopbarProps {
  title: string
  onNavigate: (page: string) => void
  onMenuToggle?: () => void
}

export default function Topbar({ title, onNavigate, onMenuToggle }: TopbarProps) {
  return (
    <header className="h-16 flex items-center justify-between px-4 sm:px-6 flex-shrink-0"
      style={{ background: 'white', borderBottom: '1px solid #E8E6F0', boxShadow: '0 2px 8px rgba(55,36,102,0.04)' }}>
      <div className="flex items-center gap-3">
        <button 
          onClick={onMenuToggle}
          className="md:hidden p-1.5 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
        >
          <Menu size={20} />
        </button>
        <h1 className="text-base sm:text-lg font-bold" style={{ color: '#372466' }}>{title}</h1>
      </div>
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Search */}
        <div className="relative hidden sm:block">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: '#969696' }} />
          <input
            placeholder="Cari modul, materi..."
            className="pl-9 pr-4 py-2 rounded-xl text-xs outline-none transition-all duration-200"
            style={{ background: '#F8F8FC', border: '1.5px solid #E8E6F0', color: '#333333', width: '200px' }}
            onFocus={e => { e.currentTarget.style.borderColor = '#9568FF'; e.currentTarget.style.width = '240px' }}
            onBlur={e => { e.currentTarget.style.borderColor = '#E8E6F0'; e.currentTarget.style.width = '200px' }}
          />
        </div>

        {/* Daily XP */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl"
          style={{ background: 'rgba(255,193,7,0.1)', border: '1px solid rgba(255,193,7,0.2)' }}>
          <Zap size={13} style={{ color: '#FFC107' }} />
          <span className="text-xs font-bold" style={{ color: '#333333' }}>+340</span>
          <span className="text-xs" style={{ color: '#969696' }}>XP hari ini</span>
        </div>

        {/* Notification */}
        <button
          onClick={() => onNavigate('notifications')}
          className="relative w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200"
          style={{ border: '1.5px solid #E8E6F0', background: 'white' }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#9568FF'; (e.currentTarget as HTMLElement).style.background = 'rgba(149,104,255,0.05)' }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = '#E8E6F0'; (e.currentTarget as HTMLElement).style.background = 'white' }}
        >
          <Bell size={16} style={{ color: '#333333' }} />
          <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center text-xs text-white font-bold"
            style={{ background: '#EF4444', fontSize: '9px' }}>3</div>
        </button>

        {/* Avatar */}
        <button
          onClick={() => onNavigate('profile')}
          className="w-9 h-9 rounded-xl flex items-center justify-center text-xs font-bold text-white transition-all duration-200"
          style={{ background: 'linear-gradient(135deg, #372466, #9568FF)' }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '0.85' }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '1' }}
        >
          RP
        </button>
      </div>
    </header>
  )
}
