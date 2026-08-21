import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div style={{ padding: '60px 16px', textAlign: 'center' }}>
      <div style={{ fontSize: '48px', marginBottom: '12px' }}>404</div>
      <div style={{ fontSize: '16px', color: '#888', marginBottom: '20px' }}>
        Page not found
      </div>
      <Link to="/" style={{
        padding: '10px 20px',
        background: '#fff',
        color: '#000',
        borderRadius: '8px',
        fontSize: '14px',
        fontWeight: 500
      }}>
        Go home
      </Link>
    </div>
  )
}

export default NotFound
