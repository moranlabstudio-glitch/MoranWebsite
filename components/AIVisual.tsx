export function AIVisualElement() {
  return (
    <div className="aiVisual">
      <svg viewBox="0 0 400 300" className="aiVisualSvg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="aiGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(87,166,255,0.8)" />
            <stop offset="100%" stopColor="rgba(86,240,199,0.6)" />
          </linearGradient>
          <linearGradient id="aiGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(86,240,199,0.6)" />
            <stop offset="100%" stopColor="rgba(87,166,255,0.4)" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* 背景圓圈 */}
        <circle cx="200" cy="150" r="120" fill="url(#aiGrad1)" opacity="0.2" />
        <circle cx="200" cy="150" r="80" fill="url(#aiGrad2)" opacity="0.15" />
        
        {/* 連接線 */}
        <g className="aiNetwork">
          <line x1="200" y1="150" x2="120" y2="80" stroke="var(--brand)" strokeWidth="2" opacity="0.4" />
          <line x1="200" y1="150" x2="280" y2="80" stroke="var(--brand)" strokeWidth="2" opacity="0.4" />
          <line x1="200" y1="150" x2="120" y2="220" stroke="var(--accent)" strokeWidth="2" opacity="0.4" />
          <line x1="200" y1="150" x2="280" y2="220" stroke="var(--accent)" strokeWidth="2" opacity="0.4" />
          <line x1="200" y1="150" x2="80" y2="150" stroke="var(--brand)" strokeWidth="2" opacity="0.4" />
          <line x1="200" y1="150" x2="320" y2="150" stroke="var(--accent)" strokeWidth="2" opacity="0.4" />
        </g>
        
        {/* 數據流動畫效果 */}
        <g className="aiDataFlow">
          <circle cx="200" cy="150" r="100" fill="none" stroke="var(--brand)" strokeWidth="1" strokeDasharray="5,5" opacity="0.3" />
          <circle cx="200" cy="150" r="60" fill="none" stroke="var(--accent)" strokeWidth="1" strokeDasharray="3,3" opacity="0.3" />
        </g>
      </svg>
    </div>
  );
}

export function AIIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="iconGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--brand)" />
          <stop offset="100%" stopColor="var(--accent)" />
        </linearGradient>
      </defs>
      <path
        d="M12 2L2 7L12 12L22 7L12 2Z"
        fill="url(#iconGrad)"
        opacity="0.8"
      />
      <path
        d="M2 17L12 22L22 17"
        stroke="url(#iconGrad)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M2 12L12 17L22 12"
        stroke="url(#iconGrad)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

