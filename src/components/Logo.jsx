
const Logo = ({
  size = 44,
  variant = 'dark',
  showText = true,
  className = '',
  imageOnly = false,
}) => {
  return (
    <div
      className={`logo logo--${variant} ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '12px',
      }}
    >
      <img
        src="/1q200.png"
        alt="IQ200 Sports Academy"
        style={{
          width: size,
          height: size,
          objectFit: 'contain',
          display: 'block',
          flexShrink: 0,
        }}
      />

      {showText && !imageOnly && (
        <span className="logo-text">
          <span className="logo-text__main">IQ200</span>
          <span className="logo-text__sub">SPORTS ACADEMY</span>
        </span>
      )}
    </div>
  )
}

export default Logo
