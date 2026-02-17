function Ornament({ className = '' }) {
  return (
    <div className={`flex items-center justify-center py-6 ${className}`}>
      <svg
        className="w-full max-w-xs h-10 text-sky-blue dark:text-steppe-sand"
        viewBox="0 0 320 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Left line */}
        <line x1="0" y1="20" x2="95" y2="20" stroke="currentColor" strokeWidth="1" opacity="0.3" />

        {/* Left meander pattern */}
        <g stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.6">
          <polyline points="100,20 104,14 112,14 112,20 112,26 104,26 108,20" />
        </g>

        {/* Center ornament — Ulzy (endless knot) inspired */}
        <g transform="translate(160, 20)" stroke="currentColor" strokeWidth="1.5" fill="none">
          {/* Outer diamond */}
          <path d="M0,-14 L14,0 L0,14 L-14,0 Z" />
          {/* Inner diamond */}
          <path d="M0,-7 L7,0 L0,7 L-7,0 Z" fill="currentColor" opacity="0.15" />
          {/* Cross lines */}
          <line x1="-14" y1="0" x2="-20" y2="0" opacity="0.5" />
          <line x1="14" y1="0" x2="20" y2="0" opacity="0.5" />
          <line x1="0" y1="-14" x2="0" y2="-18" opacity="0.5" />
          <line x1="0" y1="14" x2="0" y2="18" opacity="0.5" />
          {/* Corner dots */}
          <circle cx="-10" cy="-10" r="1.5" fill="currentColor" opacity="0.4" />
          <circle cx="10" cy="-10" r="1.5" fill="currentColor" opacity="0.4" />
          <circle cx="-10" cy="10" r="1.5" fill="currentColor" opacity="0.4" />
          <circle cx="10" cy="10" r="1.5" fill="currentColor" opacity="0.4" />
        </g>

        {/* Right meander pattern */}
        <g stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.6">
          <polyline points="220,20 216,14 208,14 208,20 208,26 216,26 212,20" />
        </g>

        {/* Right line */}
        <line x1="225" y1="20" x2="320" y2="20" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      </svg>
    </div>
  )
}

export default Ornament
