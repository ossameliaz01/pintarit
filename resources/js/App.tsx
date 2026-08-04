import { useState } from 'react'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Roadmap from './pages/Roadmap'
import Learning from './pages/Learning'
import Dictionary from './pages/Dictionary'
import Achievements from './pages/Achievements'
import TeacherDashboard from './pages/TeacherDashboard'
import Profile from './pages/Profile'
import Notifications from './pages/Notifications'
import Settings from './pages/Settings'
import PlacementTest from './pages/PlacementTest'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'

type Page =
  | 'landing' | 'login' | 'register'
  | 'dashboard' | 'roadmap' | 'learning' | 'dictionary'
  | 'achievements' | 'teacher' | 'profile' | 'notifications' | 'settings' | 'placement-test'

const pageTitles: Record<string, string> = {
  dashboard: 'Dashboard',
  roadmap: 'Learning Roadmap',
  learning: 'IP Address & Subnetting',
  dictionary: 'Kamus IT Interaktif',
  achievements: 'Pencapaian & Badge',
  teacher: 'Dashboard Guru',
  profile: 'Profil Saya',
  notifications: 'Notifikasi',
  settings: 'Pengaturan',
  'placement-test': 'Placement Test',
}

const appPages: Page[] = ['dashboard', 'roadmap', 'learning', 'dictionary', 'achievements', 'teacher', 'profile', 'notifications', 'settings', 'placement-test']

export default function App() {
  const [page, setPage] = useState<Page>('landing')
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigate = (p: string) => {
    setPage(p as Page)
    setMobileMenuOpen(false) // Close menu on navigation
  }
  const isAppPage = appPages.includes(page)

  return (
    <div style={{ fontFamily: 'Poppins, sans-serif', height: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Public pages */}
      {page === 'landing' && <Landing onNavigate={navigate} />}
      {page === 'login' && <Login onNavigate={navigate} />}
      {page === 'register' && <Register onNavigate={navigate} />}

      {/* App shell with sidebar */}
      {isAppPage && (
        <div style={{ display: 'flex', height: '100vh', overflow: 'hidden', position: 'relative' }}>
          <Sidebar
            currentPage={page}
            onNavigate={navigate}
            collapsed={sidebarCollapsed}
            onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
            mobileOpen={mobileMenuOpen}
            onMobileClose={() => setMobileMenuOpen(false)}
          />
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', minWidth: 0 }}>
            <Topbar 
              title={pageTitles[page] || ''} 
              onNavigate={navigate} 
              onMenuToggle={() => setMobileMenuOpen(true)}
            />
            <div style={{ flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              {page === 'dashboard' && <Dashboard onNavigate={navigate} />}
              {page === 'roadmap' && <Roadmap onNavigate={navigate} />}
              {page === 'learning' && <Learning />}
              {page === 'dictionary' && <Dictionary />}
              {page === 'achievements' && <Achievements />}
              {page === 'teacher' && <TeacherDashboard />}
              {page === 'profile' && <Profile />}
              {page === 'notifications' && <Notifications />}
              {page === 'settings' && <Settings />}
              {page === 'placement-test' && <PlacementTest onNavigate={navigate} />}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
