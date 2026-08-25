import { useState } from 'react'

function DownloadApp() {
  const [downloading, setDownloading] = useState(false)
  const [progress, setProgress] = useState(0)
  const [done, setDone] = useState(false)

  const handleDownload = () => {
    setDownloading(true)
    setProgress(0)
    setDone(false)

    // Simulate download progress
    let p = 0
    const interval = setInterval(() => {
      p += Math.random() * 15 + 5
      if (p > 100) p = 100
      setProgress(Math.floor(p))
      if (p >= 100) {
        clearInterval(interval)
        setDownloading(false)
        setDone(true)
        // Trigger actual file download
        const link = document.createElement('a')
        link.href = '/FastBlink_1.0.apk'
        link.download = 'FastBlink_1.0.apk'
        link.click()
      }
    }, 200)
  }

  return (
    <div style={{ padding: '24px 16px' }}>
      <h2 style={{ fontSize: '17px', fontWeight: 500, color: '#fff', margin: '0 0 16px' }}>
        Get FastBlink
      </h2>

      {/* APK Card */}
      <div style={{
        padding: '20px',
        border: '1px solid #2a2a2a',
        borderRadius: '10px',
        textAlign: 'center',
        marginBottom: '16px'
      }}>
        <div style={{
          width: '56px',
          height: '56px',
          margin: '0 auto 12px',
          borderRadius: '14px',
          border: '2px solid #fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <circle cx="14" cy="14" r="12" stroke="#fff" strokeWidth="2"/>
            <path d="M10 14h8M14 10v8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
        <div style={{ fontSize: '16px', fontWeight: 500, color: '#fff', marginBottom: '4px' }}>
          FastBlink v2.4.1
        </div>
        <div style={{ fontSize: '12px', color: '#666', marginBottom: '16px' }}>
          Android 8.0+ | 13 MB
        </div>

        {!downloading && !done && (
          <button
            onClick={handleDownload}
            style={{
              width: '100%',
              padding: '12px',
              background: '#22c55e',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: 500,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px'
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download APK
          </button>
        )}

        {downloading && (
          <div>
            <div style={{
              width: '100%',
              height: '4px',
              background: '#2a2a2a',
              borderRadius: '2px',
              overflow: 'hidden'
            }}>
              <div style={{
                width: progress + '%',
                height: '100%',
                background: '#22c55e',
                borderRadius: '2px',
                transition: 'width 0.3s'
              }}/>
            </div>
            <div style={{ fontSize: '11px', color: '#666', marginTop: '6px' }}>
              Downloading... {progress}%
            </div>
          </div>
        )}

        {done && (
          <div style={{ fontSize: '13px', color: '#22c55e' }}>
            Download complete! Tap to install.
          </div>
        )}
      </div>

      {/* Install Steps */}
      <div style={{
        padding: '14px',
        border: '1px solid #2a2a2a',
        borderRadius: '10px',
        marginBottom: '12px'
      }}>
        <div style={{ fontSize: '13px', fontWeight: 500, color: '#fff', marginBottom: '8px' }}>
          How to install
        </div>
        {[
          'Download the APK file above',
          'Open file manager → Downloads',
          'Tap APK → Allow "Install unknown apps"',
          'Install and open FastBlink!'
        ].map((step, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '8px' }}>
            <div style={{
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              background: '#2a2a2a',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '11px',
              fontWeight: 500,
              color: '#888',
              flexShrink: 0
            }}>
              {i + 1}
            </div>
            <div style={{ fontSize: '12px', color: '#888', lineHeight: 1.5 }}>{step}</div>
          </div>
        ))}
      </div>

      {/* Warning */}
      <div style={{
        padding: '12px',
        borderRadius: '8px',
        background: 'rgba(234,179,8,0.08)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#eab308" strokeWidth="2" strokeLinecap="round">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="8" x2="12" y2="12"/>
            <line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
          <span style={{ fontSize: '12px', color: '#888' }}>
            Chrome may warn about unknown apps. Tap "Install anyway".
          </span>
        </div>
      </div>
    </div>
  )
}

export default DownloadApp
