const Logo = ({ size = 44, variant = 'dark', showText = true, className = '' }) => {
  return (
    <div className={`logo logo--${variant} ${className}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '12px' }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="50" cy="50" r="47" fill={variant === 'light' ? '#1C345F' : '#1C345F'} stroke="#F9B52E" strokeWidth="3" />
        <text x="50" y="36" textAnchor="middle" fill="#F9B52E" fontFamily="Anton, Arial, sans-serif" fontSize="22" fontWeight="bold">IQ</text>
        <text x="50" y="58" textAnchor="middle" fill="#FFFFFF" fontFamily="Anton, Arial, sans-serif" fontSize="18" fontWeight="bold">200</text>
        <line x1="28" y1="64" x2="72" y2="64" stroke="#F9B52E" strokeWidth="1.5" />
        <text x="50" y="77" textAnchor="middle" fill="#F9B52E" fontFamily="Arial, sans-serif" fontSize="7" fontWeight="bold" letterSpacing="1">SPORTS</text>
      </svg>
      {showText && (
        <span className="logo-text">
          <span className="logo-text__main">IQ200</span>
          <span className="logo-text__sub">SPORTS ACADEMY</span>
        </span>
      )}
    </div>
  )
}

export default Logo
