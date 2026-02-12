type AIImageVariant = "home" | "about" | "services" | "solutions" | "method" | "contact";

export function AIImage(props: { label: string; variant?: AIImageVariant }) {
  const { label, variant = "home" } = props;
  return (
    <div className={`aiImage aiImage--${variant}`}>
      <svg viewBox="0 0 520 300" className="aiImageSvg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="aiImgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--ai-accent)" />
            <stop offset="100%" stopColor="var(--ai-accent-2)" />
          </linearGradient>
          <radialGradient id="aiImgRadial" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="var(--ai-accent)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="var(--ai-accent-2)" stopOpacity="0.05" />
          </radialGradient>
          <filter id="aiImgGlow">
            <feGaussianBlur stdDeviation="6" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <rect x="0" y="0" width="520" height="300" fill="url(#aiImgRadial)" />

        <g className="aiImageGrid">
          <path d="M60 60H460" stroke="var(--ai-line)" strokeWidth="1" />
          <path d="M60 120H460" stroke="var(--ai-line)" strokeWidth="1" />
          <path d="M60 180H460" stroke="var(--ai-line)" strokeWidth="1" />
          <path d="M60 240H460" stroke="var(--ai-line)" strokeWidth="1" />
          <path d="M140 40V260" stroke="var(--ai-line)" strokeWidth="1" />
          <path d="M260 40V260" stroke="var(--ai-line)" strokeWidth="1" />
          <path d="M380 40V260" stroke="var(--ai-line)" strokeWidth="1" />
        </g>

        <g className="aiImagePaths">
          <path d="M140 120C190 80 210 80 260 180" stroke="url(#aiImgGrad)" strokeWidth="3" fill="none" />
          <path d="M260 180C310 220 330 220 380 120" stroke="url(#aiImgGrad)" strokeWidth="3" fill="none" />
          <circle cx="140" cy="120" r="5" fill="url(#aiImgGrad)" />
          <circle cx="260" cy="180" r="5" fill="url(#aiImgGrad)" />
          <circle cx="380" cy="120" r="5" fill="url(#aiImgGrad)" />
        </g>
      </svg>

      <div className="aiImageLabel">{label}</div>
    </div>
  );
}

