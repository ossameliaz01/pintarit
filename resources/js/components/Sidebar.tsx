import { LayoutDashboard, Map, Globe, BookOpen, Award, User, LogOut, Zap, ChevronLeft, ChevronRight } from 'lucide-react'

interface SidebarProps {
  currentPage: string
  onNavigate: (page: string) => void
  collapsed: boolean
  onToggle: () => void
  mobileOpen?: boolean
  onMobileClose?: () => void
}

const navItems = [
  { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { id: 'roadmap', icon: Map, label: 'Roadmap' },
  { id: 'learning', icon: Globe, label: 'Belajar' },
  { id: 'dictionary', icon: BookOpen, label: 'Kamus IT' },
  { id: 'achievements', icon: Award, label: 'Pencapaian' },
  { id: 'profile', icon: User, label: 'Profil' },
]

export default function Sidebar({ currentPage, onNavigate, collapsed, onToggle, mobileOpen, onMobileClose }: SidebarProps) {
  return (
    <>
      {/* Mobile Backdrop Overlay */}
      {mobileOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onMobileClose}
        />
      )}

      <aside
        className={`fixed md:relative flex flex-col h-full transition-all duration-300 z-50 ${mobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}
        style={{
          width: collapsed ? '72px' : '220px',
          background: 'linear-gradient(180deg, #372466 0%, #1a0f3d 100%)',
          flexShrink: 0,
        }}
      >
      {/* Logo */}
      <div className="flex items-center gap-3 px-4 py-5" style={{ height: '64px' }}>
        <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ background: 'rgba(149,104,255,0.3)', border: '1px solid rgba(183,148,246,0.4)' }}>
          <Zap size={18} className="text-white" />
        </div>
        {!collapsed && (
          <span className="font-bold text-white text-base whitespace-nowrap overflow-hidden">PintarIT</span>
        )}
      </div>

      {/* Toggle button */}
      <button
        onClick={onToggle}
        className="absolute -right-3 top-16 w-6 h-6 rounded-full flex items-center justify-center z-10 transition-all duration-200"
        style={{ background: '#9568FF', border: '2px solid white', boxShadow: '0 2px 8px rgba(149,104,255,0.4)' }}
      >
        {collapsed ? <ChevronRight size={12} className="text-white" /> : <ChevronLeft size={12} className="text-white" />}
      </button>

      {/* XP Bar */}
      {!collapsed && (
        <div className="mx-4 mb-4 p-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.06)' }}>
          <div className="flex justify-between text-xs mb-1">
            <span style={{ color: 'rgba(255,255,255,0.6)' }}>Level 8</span>
            <span style={{ color: '#B794F6' }} className="font-semibold">2,840 XP</span>
          </div>
          <div className="h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.15)' }}>
            <div className="h-1.5 rounded-full" style={{ width: '94.7%', background: 'linear-gradient(90deg, #9568FF, #B794F6)' }} />
          </div>
          <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.4)' }}>160 XP menuju Level 9</p>
        </div>
      )}

      {/* Nav items */}
      <nav className="flex-1 px-2 space-y-1">
        {navItems.map(item => {
          const active = currentPage === item.id
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className="w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 text-left"
              style={{
                background: active ? 'rgba(149,104,255,0.25)' : 'transparent',
                borderLeft: active ? '3px solid #9568FF' : '3px solid transparent',
              }}
              onMouseEnter={e => { if (!active) (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.07)' }}
              onMouseLeave={e => { if (!active) (e.currentTarget as HTMLElement).style.background = 'transparent' }}
            >
              <item.icon size={18} style={{ color: active ? '#B794F6' : 'rgba(255,255,255,0.55)', flexShrink: 0 }} />
              {!collapsed && (
                <span className="text-sm font-medium whitespace-nowrap"
                  style={{ color: active ? 'white' : 'rgba(255,255,255,0.55)' }}>
                  {item.label}
                </span>
              )}
            </button>
          )
        })}
      </nav>

      {/* Teacher Dashboard link */}
      {!collapsed && (
        <div className="mx-4 mb-3">
          <button
            onClick={() => onNavigate('teacher')}
            className="w-full text-xs py-2 rounded-lg transition-all duration-200"
            style={{ color: 'rgba(255,255,255,0.4)', border: '1px solid rgba(255,255,255,0.1)' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#B794F6'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(183,148,246,0.3)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.4)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)' }}
          >
            👨🏫 Mode Guru
          </button>
        </div>
      )}

      {/* User info + logout */}
      <div className="p-3 m-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
            style={{ background: 'linear-gradient(135deg, #9568FF, #B794F6)' }}>
            RP
          </div>
          {!collapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-white truncate">Rizki Pratama</p>
              <p className="text-xs truncate" style={{ color: 'rgba(255,255,255,0.4)' }}>Network Warrior</p>
            </div>
          )}
          <button className="flex-shrink-0 p-1 rounded-lg transition-colors duration-200"
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.1)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent' }}>
            <LogOut size={14} style={{ color: 'rgba(255,255,255,0.4)' }} />
          </button>
        </div>
      </div>
    </aside>
    </>
  )
}
