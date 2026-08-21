import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Layout({ children }) {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  const isActive = (path) => location.pathname === path

  return (
    <div style={{ maxWidth: '480px', margin: '0 auto', minHeight: '100vh' }}>
      {/* Navbar */}
      <nav style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '12px 16px',
        borderBottom: '1px solid #2a2a2a',
        position: 'sticky',
        top: 0,
        background: '#0f0f0f',
        zIndex: 100
      }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <circle cx="14" cy="14" r="12" stroke="#fff" strokeWidth="2"/>
            <path d="M10 14h8M14 10v8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <span style={{ fontSize: '17px', fontWeight: 500, color: '#fff' }}>FastBlink</span>
        </Link>

        <div style={{ display: 'flex', gap: '10px' }}>
          <Link to="/" style={{
            fontSize: '14px',
            color: isActive('/') ? '#fff' : '#888',
            fontWeight: isActive('/') ? 500 : 400,
            padding: '4px 8px',
            borderRadius: '6px'
          }}>Home</Link>
          <Link to="/add" style={{
            fontSize: '14px',
            color: isActive('/add') ? '#fff' : '#888',
            fontWeight: isActive('/add') ? 500 : 400,
            padding: '4px 8px',
            borderRadius: '6px'
          }}>Add</Link>
          <Link to="/download" style={{
            fontSize: '14px',
            color: isActive('/download') ? '#fff' : '#888',
            fontWeight: isActive('/download') ? 500 : 400,
            padding: '4px 8px',
            borderRadius: '6px'
          }}>Get App</Link>
        </div>
      </nav>

      {/* Page Content */}
      <main>{children}</main>
    </div>
  )
}

export default Layout
