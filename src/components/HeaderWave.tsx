export function HeaderWave() {
  return (
    <div
      className="absolute left-0 right-0 top-full -mt-1 h-14 md:h-16 lg:h-20 z-10 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute top-0 left-0 right-0 h-3 bg-sup-blue-light/90 z-20" />

      <svg
        viewBox="-360 0 2160 80"
        preserveAspectRatio="none"
        className="absolute top-0 left-1/2 h-full w-[130%] max-w-none -translate-x-1/2 block"
      >
        <defs>
          <clipPath id="waveClip">
            <rect x="-360" y="2" width="2160" height="78" />
          </clipPath>
          <filter id="waveShadow" x="-10%" y="0%" width="120%" height="130%">
            <feDropShadow dx="0" dy="4" stdDeviation="3" floodColor="#000" floodOpacity="0.08" />
          </filter>
        </defs>

        <g clipPath="url(#waveClip)" className="animate-wave-deep">
          <path
            d="M-360,0 L1800,0 L1800,48
               C1680,72 1560,24 1440,48
               C1320,72 1200,24 1080,48
               C960,72 840,24 720,48
               C600,72 480,24 360,48
               C240,72 120,24 0,48
               C-120,72 -240,24 -360,48 Z"
            fill="rgba(1, 126, 206, 0.28)"
          />
        </g>

        <g clipPath="url(#waveClip)" className="animate-wave-back">
          <path
            d="M-360,0 L1800,0 L1800,40
               C1680,62 1560,18 1440,40
               C1320,62 1200,18 1080,40
               C960,62 840,18 720,40
               C600,62 480,18 360,40
               C240,62 120,18 0,40
               C-120,62 -240,18 -360,40 Z"
            fill="rgba(1, 126, 206, 0.45)"
          />
        </g>

        <g clipPath="url(#waveClip)" className="animate-wave-front">
          <path
            d="M-360,0 L1800,0 L1800,30
               C1680,54 1560,6 1440,30
               C1320,54 1200,6 1080,30
               C960,54 840,6 720,30
               C600,54 480,6 360,30
               C240,54 120,6 0,30
               C-120,54 -240,6 -360,30 Z"
            fill="rgba(181, 223, 245, 0.97)"
            filter="url(#waveShadow)"
          />
        </g>
      </svg>
    </div>
  )
}
