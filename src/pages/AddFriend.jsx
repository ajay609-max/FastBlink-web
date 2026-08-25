import { useSearchParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

const mockUsers = {
  alice: { name: 'Alice Sharma', handle: '@alice', avatar: 'A' },
  bob: { name: 'Bob Verma', handle: '@bob', avatar: 'B' },
  demo: { name: 'Demo User', handle: '@demo', avatar: 'D' }
}

function AddFriend() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const [input, setInput] = useState('')
  const [user, setUser] = useState(null)
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [showAppFallback, setShowAppFallback] = useState(false)
  const [triedApp, setTriedApp] = useState(false)

  // Auto-parse from URL ?user=xxx
  const urlUser = searchParams.get('user')
  const source = searchParams.get('source') || 'web'

  // Try to open the app via the custom scheme (no App Links verification needed —
  // works even when Digital Asset Links verification fails on the device/OEM).
  const openInApp = (username) => {
    if (!username) return
    setTriedApp(true)

    const appUrl = `fastblink://add?user=${encodeURIComponent(username)}`
    const startTime = Date.now()

    // If the page is still visible after ~1.5s, the app likely didn't open
    // (either not installed, or the OS blocked the redirect) — show fallback.
    const fallbackTimer = setTimeout(() => {
      if (document.visibilityState === 'visible' && Date.now() - startTime < 3000) {
        setShowAppFallback(true)
      }
    }, 1500)

    // If the tab loses visibility, assume the app opened and cancel fallback.
    const onVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        clearTimeout(fallbackTimer)
      }
    }
    document.addEventListener('visibilitychange', onVisibilityChange, { once: true })

    window.location.href = appUrl
  }

  useEffect(() => {
    if (urlUser) {
      setInput(urlUser)
      lookupUser(urlUser)
      openInApp(urlUser)
    }
  }, [urlUser])

  const lookupUser = (username) => {
    setLoading(true)
    setSent(false)
    // Simulate API call
    setTimeout(() => {
      const key = username.toLowerCase().replace('@', '')
      const found = mockUsers[key] || {
        name: key.charAt(0).toUpperCase() + key.slice(1),
        handle: '@' + key,
        avatar: key.charAt(0).toUpperCase()
      }
      setUser(found)
      setLoading(false)
    }, 400)
  }

  const handleSearch = () => {
    if (!input.trim()) return
    let username = input.trim()
    if (username.includes('fastblink://add?user=')) {
      username = username.split('user=')[1].split('&')[0]
    } else if (username.startsWith('@')) {
      username = username.slice(1)
    }
    lookupUser(username)
  }

  const handleAdd = () => {
    setSent(true)
    // In real app: POST /api/friends/request
    console.log('Friend request sent to', user.handle, 'from source:', source)
  }

  return (
    <div style={{ padding: '24px 16px' }}>
      <h2 style={{ fontSize: '17px', fontWeight: 500, color: '#fff', margin: '0 0 16px' }}>
        Add friend
      </h2>

      {triedApp && showAppFallback && (
        <div style={{
          marginBottom: '16px',
          padding: '14px',
          borderRadius: '10px',
          background: '#1a1a1a',
          border: '1px solid #2a2a2a'
        }}>
          <div style={{ fontSize: '13px', color: '#ccc', marginBottom: '10px' }}>
            Didn't open the app automatically?
          </div>
          <button
            onClick={() => openInApp(urlUser || input)}
            style={{
              width: '100%',
              padding: '10px',
              background: '#22c55e',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: 500,
              cursor: 'pointer',
              marginBottom: '8px'
            }}
          >
            Open in FastBlink app
          </button>
          <a
            href="/download"
            style={{
              display: 'block',
              textAlign: 'center',
              fontSize: '12px',
              color: '#888',
              textDecoration: 'underline'
            }}
          >
            Don't have the app? Download it
          </a>
        </div>
      )}

      <div style={{ marginBottom: '16px' }}>
        <label style={{ display: 'block', fontSize: '12px', color: '#666', marginBottom: '6px' }}>
          Username or deep link
        </label>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSearch()}
          placeholder="@username or fastblink://add?user=..."
          style={{
            width: '100%',
            padding: '10px 12px',
            fontSize: '14px',
            border: '1px solid #2a2a2a',
            borderRadius: '8px',
            background: '#1a1a1a',
            color: '#fff',
            outline: 'none'
          }}
        />
        <button
          onClick={handleSearch}
          style={{
            marginTop: '8px',
            width: '100%',
            padding: '10px',
            background: '#fff',
            color: '#000',
            border: 'none',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: 500,
            cursor: 'pointer'
          }}
        >
          {loading ? 'Searching...' : 'Find user'}
        </button>
      </div>

      {user && (
        <div style={{
          padding: '16px',
          border: '1px solid #2a2a2a',
          borderRadius: '10px',
          textAlign: 'center'
        }}>
          <div style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            background: '#2a2a2a',
            margin: '0 auto 10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '20px',
            fontWeight: 500,
            color: '#fff'
          }}>
            {user.avatar}
          </div>
          <div style={{ fontSize: '16px', fontWeight: 500, color: '#fff', marginBottom: '2px' }}>
            {user.name}
          </div>
          <div style={{ fontSize: '12px', color: '#666', marginBottom: '12px' }}>
            {user.handle}
          </div>
          {!sent ? (
            <button
              onClick={handleAdd}
              style={{
                padding: '8px 20px',
                background: '#22c55e',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                fontSize: '13px',
                fontWeight: 500,
                cursor: 'pointer'
              }}
            >
              Add friend
            </button>
          ) : (
            <div style={{ fontSize: '13px', color: '#22c55e' }}>
              Friend request sent!
            </div>
          )}
        </div>
      )}

      <div style={{
        marginTop: '20px',
        padding: '12px',
        borderRadius: '8px',
        background: '#1a1a1a'
      }}>
        <div style={{ fontSize: '12px', fontWeight: 500, color: '#888', marginBottom: '6px' }}>
          Deep link format
        </div>
        <div style={{ fontSize: '11px', color: '#666', lineHeight: 1.6, fontFamily: 'monospace' }}>
          App: &nbsp;fastblink://add?user=alice<br/>
          Web: &nbsp;fastblink.com/add?user=alice
        </div>
      </div>
    </div>
  )
}

export default AddFriend
