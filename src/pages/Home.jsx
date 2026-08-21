import { Link } from 'react-router-dom'

function Home() {
  return (
    <div style={{ padding: '24px 16px' }}>
      {/* Hero */}
      <div style={{ textAlign: 'center', marginBottom: '28px' }}>
        <div style={{
          width: '72px',
          height: '72px',
          margin: '0 auto 14px',
          borderRadius: '16px',
          border: '2px solid #fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <svg width="36" height="36" viewBox="0 0 28 28" fill="none">
            <circle cx="14" cy="14" r="12" stroke="#fff" strokeWidth="2"/>
            <path d="M10 14h8M14 10v8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
        <h1 style={{ fontSize: '20px', fontWeight: 500, color: '#fff', margin: '0 0 6px' }}>
          FastBlink Web
        </h1>
        <p style={{ fontSize: '14px', color: '#888', margin: 0, lineHeight: 1.5 }}>
          Chat on web. Download the app for the full experience.
        </p>
      </div>

      {/* Cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <Link to="/add" style={{
          padding: '14px',
          border: '1px solid #2a2a2a',
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          transition: 'background 0.15s'
        }} onMouseEnter={e => e.currentTarget.style.background = '#1a1a1a'}
           onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: '8px',
            background: 'rgba(34,197,94,0.12)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <line x1="19" y1="8" x2="19" y2="14"/>
              <line x1="22" y1="11" x2="16" y2="11"/>
            </svg>
          </div>
          <div>
            <div style={{ fontSize: '15px', fontWeight: 500, color: '#fff' }}>Add friend</div>
            <div style={{ fontSize: '12px', color: '#666' }}>Via link, QR, or username</div>
          </div>
        </Link>

        <Link to="/download" style={{
          padding: '14px',
          border: '1px solid #2a2a2a',
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          transition: 'background 0.15s'
        }} onMouseEnter={e => e.currentTarget.style.background = '#1a1a1a'}
           onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: '8px',
            background: 'rgba(59,130,246,0.12)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
          </div>
          <div>
            <div style={{ fontSize: '15px', fontWeight: 500, color: '#fff' }}>Get the app</div>
            <div style={{ fontSize: '12px', color: '#666' }}>Download APK for Android</div>
          </div>
        </Link>

        <div style={{
          padding: '14px',
          border: '1px solid #2a2a2a',
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px'
        }}>
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: '8px',
            background: 'rgba(234,179,8,0.12)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#eab308" strokeWidth="2" strokeLinecap="round">
              <rect x="3" y="3" width="7" height="7"/>
              <rect x="14" y="3" width="7" height="7"/>
              <rect x="3" y="14" width="7" height="7"/>
              <line x1="14" y1="14" x2="14" y2="21"/>
              <line x1="17" y1="14" x2="17" y2="21"/>
              <line x1="14" y1="17" x2="21" y2="17"/>
            </svg>
          </div>
          <div>
            <div style={{ fontSize: '15px', fontWeight: 500, color: '#fff' }}>My QR code</div>
            <div style={{ fontSize: '12px', color: '#666' }}>Share your profile instantly</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
