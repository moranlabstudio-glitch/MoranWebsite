// Dark space-themed AI system architecture diagram for MORAN website
// Usage: import SystemArchDiagram from "@/components/SystemArchDiagram";
//        <SystemArchDiagram />

interface LayerDef {
  num: string;
  title: string;
  sub: string;
  tags: string[];
  x: number;
  w: number;
  y: number;
  h: number;
  glow?: true;
}

// Diamond/lens shape: widest at center (AI core), tapering toward top and bottom
const LAYERS: LayerDef[] = [
  {
    num: "01", title: "客戶與市場", sub: "Customers & Market",
    tags: ["官網", "門市", "社群", "電商"],
    x: 120, w: 480, y: 44, h: 72,
  },
  {
    num: "02", title: "CRM 資料中樞", sub: "CRM Data Hub",
    tags: ["客戶資料", "行為紀錄", "分群標籤"],
    x: 60, w: 600, y: 136, h: 72,
  },
  {
    num: "03", title: "AI 智能營運核心", sub: "AI Intelligence Engine",
    tags: ["LLM", "預測分析", "智能推薦", "自動決策"],
    x: 8, w: 704, y: 228, h: 90, glow: true,
  },
  {
    num: "04", title: "營運自動化", sub: "Operations Automation",
    tags: ["工作流", "自動通知", "任務排程"],
    x: 60, w: 600, y: 338, h: 72,
  },
  {
    num: "05", title: "企業系統整合", sub: "Enterprise System Integration",
    tags: ["ERP", "HR", "財務", "倉管"],
    x: 90, w: 540, y: 430, h: 72,
  },
  {
    num: "06", title: "管理決策與分析", sub: "Management Decision & Analytics",
    tags: ["Dashboard", "報表", "KPI"],
    x: 120, w: 480, y: 522, h: 72,
  },
];

// Star particles: [x, y, radius, opacity]
const STARS: [number, number, number, number][] = [
  [25, 18, 1.0, 0.80], [80, 12, 0.7, 0.50], [150, 8, 1.1, 0.60],
  [280, 15, 0.8, 0.45], [420, 8, 0.9, 0.65], [560, 18, 0.7, 0.40],
  [640, 10, 1.1, 0.60], [700, 22, 0.8, 0.50],
  [18, 80, 0.9, 0.55], [35, 165, 0.7, 0.45], [12, 248, 1.0, 0.65],
  [44, 335, 0.8, 0.40], [20, 425, 0.9, 0.55], [40, 510, 0.7, 0.45],
  [16, 595, 1.1, 0.60], [48, 630, 0.8, 0.40],
  [690, 70, 0.9, 0.65], [708, 155, 0.7, 0.50], [698, 245, 1.0, 0.55],
  [712, 325, 0.8, 0.40], [695, 415, 0.9, 0.65], [706, 502, 0.7, 0.50],
  [688, 595, 1.1, 0.60], [710, 630, 0.8, 0.40],
  [110, 624, 0.9, 0.55], [220, 635, 0.7, 0.40], [360, 628, 0.8, 0.50],
  [498, 620, 0.9, 0.55], [618, 632, 0.7, 0.40],
];

export default function SystemArchDiagram() {
  const W = 720;
  const H = 644;
  const CX = 360;
  const AI_CY = 273; // center Y of AI core layer (228 + 90/2)

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "auto", display: "block" }}
      aria-label="MORAN AI 智能營運系統架構圖"
    >
      <defs>
        {/* Dark navy radial background */}
        <radialGradient id="archBg" cx="50%" cy="44%" r="65%">
          <stop offset="0%" stopColor="#0d1f52" />
          <stop offset="60%" stopColor="#060e2a" />
          <stop offset="100%" stopColor="#030919" />
        </radialGradient>

        {/* Normal layer fill */}
        <linearGradient id="gLayer" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(20, 38, 95, 0.85)" />
          <stop offset="100%" stopColor="rgba(12, 22, 60, 0.85)" />
        </linearGradient>

        {/* AI core layer fill */}
        <linearGradient id="gAI" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(28, 60, 155, 0.96)" />
          <stop offset="100%" stopColor="rgba(14, 35, 105, 0.96)" />
        </linearGradient>

        {/* Radial glow behind AI layer */}
        <radialGradient id="aiGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(55, 120, 255, 0.22)" />
          <stop offset="100%" stopColor="rgba(55, 120, 255, 0)" />
        </radialGradient>
      </defs>

      {/* ── Background ── */}
      <rect x="0" y="0" width={W} height={H} fill="url(#archBg)" />

      {/* ── Star particles ── */}
      {STARS.map(([sx, sy, sr, so], i) => (
        <circle key={`s${i}`} cx={sx} cy={sy} r={sr} fill="white" opacity={so} />
      ))}

      {/* ── Central glow behind AI layer ── */}
      <ellipse cx={CX} cy={AI_CY} rx={360} ry={155} fill="url(#aiGlow)" />

      {/* ── Orbital ellipses ── */}
      <ellipse
        cx={CX} cy={AI_CY} rx={292} ry={110}
        fill="none" stroke="rgba(74, 144, 226, 0.22)" strokeWidth="1" strokeDasharray="7 5"
      />
      <ellipse
        cx={CX} cy={AI_CY} rx={232} ry={84}
        fill="none" stroke="rgba(74, 144, 226, 0.14)" strokeWidth="1" strokeDasharray="5 7"
      />

      {/* ── Orbit endpoint glow dots ── */}
      <circle cx={CX - 292} cy={AI_CY} r={7} fill="rgba(74, 144, 226, 0.18)" />
      <circle cx={CX - 292} cy={AI_CY} r={4} fill="rgba(80, 160, 255, 0.82)" />
      <circle cx={CX + 292} cy={AI_CY} r={7} fill="rgba(74, 144, 226, 0.18)" />
      <circle cx={CX + 292} cy={AI_CY} r={4} fill="rgba(80, 160, 255, 0.82)" />

      {/* ── Connecting arrows between layers ── */}
      {LAYERS.slice(0, -1).map((l, i) => {
        const y1 = l.y + l.h + 2;
        const y2 = LAYERS[i + 1].y - 3;
        return (
          <g key={`conn${i}`}>
            <line
              x1={CX} y1={y1} x2={CX} y2={y2 - 9}
              stroke="rgba(74, 144, 226, 0.40)" strokeWidth="1.5" strokeDasharray="4 3"
            />
            <polygon
              points={`${CX},${y2} ${CX - 5},${y2 - 9} ${CX + 5},${y2 - 9}`}
              fill="rgba(74, 144, 226, 0.65)"
            />
          </g>
        );
      })}

      {/* ── Layer cards ── */}
      {LAYERS.map((l, i) => {
        const { x, w, y, h, glow } = l;
        const cy = y + h / 2;
        const badgeCX = x + 46;
        const textX = x + 90;
        const tagY = cy + (glow ? 18 : 15);

        // Compute tag pill x positions
        const tagXs: number[] = [];
        let tx = textX;
        for (const tag of l.tags) {
          tagXs.push(tx);
          tx += tag.length * 7.5 + 16 + 6;
        }

        return (
          <g key={`layer${i}`}>
            {/* AI layer outer glow halos */}
            {glow && (
              <>
                <rect
                  x={x - 10} y={y - 10} width={w + 20} height={h + 20} rx={18}
                  fill="rgba(50, 125, 255, 0.07)"
                />
                <rect
                  x={x - 5} y={y - 5} width={w + 10} height={h + 10} rx={16}
                  fill="rgba(50, 125, 255, 0.10)"
                />
              </>
            )}

            {/* Layer background */}
            <rect
              x={x} y={y} width={w} height={h} rx={13}
              fill={glow ? "url(#gAI)" : "url(#gLayer)"}
              stroke={glow ? "rgba(80, 165, 255, 0.88)" : "rgba(80, 125, 220, 0.28)"}
              strokeWidth={glow ? 1.5 : 1}
            />

            {/* Top edge highlight on AI layer */}
            {glow && (
              <line
                x1={x + 28} y1={y + 1.5} x2={x + w - 28} y2={y + 1.5}
                stroke="rgba(160, 215, 255, 0.38)" strokeWidth="1"
              />
            )}

            {/* Left accent bar */}
            <rect
              x={x} y={y + 8} width={3.5} height={h - 16} rx={2}
              fill={glow ? "rgba(120, 190, 255, 0.90)" : "rgba(80, 145, 255, 0.50)"}
            />

            {/* Number badge */}
            <circle
              cx={badgeCX} cy={cy} r={21}
              fill={glow ? "rgba(80, 165, 255, 0.22)" : "rgba(60, 125, 220, 0.18)"}
              stroke={glow ? "rgba(120, 190, 255, 0.55)" : "rgba(80, 145, 255, 0.30)"}
              strokeWidth="1"
            />
            <text
              x={badgeCX} y={cy}
              textAnchor="middle" dominantBaseline="central"
              fill={glow ? "#bcdaff" : "#80b4ee"}
              fontSize="12" fontWeight="700"
              fontFamily="'SF Mono', monospace"
            >
              {l.num}
            </text>

            {/* Vertical divider */}
            <line
              x1={x + 78} y1={y + 14} x2={x + 78} y2={y + h - 14}
              stroke={glow ? "rgba(120, 190, 255, 0.28)" : "rgba(80, 145, 255, 0.18)"}
              strokeWidth="1"
            />

            {/* Title */}
            <text
              x={textX} y={glow ? cy - 22 : cy - 16}
              fill={glow ? "#e8f2ff" : "#bfd4ff"}
              fontSize={glow ? 16 : 14.5} fontWeight="700"
              fontFamily="'Noto Sans TC', system-ui, sans-serif"
              dominantBaseline="middle"
            >
              {l.title}
            </text>

            {/* English subtitle */}
            <text
              x={textX} y={glow ? cy - 5 : cy - 1}
              fill={glow ? "rgba(165, 208, 255, 0.78)" : "rgba(140, 185, 255, 0.60)"}
              fontSize="10.5"
              fontFamily="system-ui, sans-serif"
              dominantBaseline="middle"
            >
              {l.sub}
            </text>

            {/* Tag pills */}
            {l.tags.map((tag, ti) => {
              const pw = tag.length * 7.5 + 16;
              const px = tagXs[ti];
              return (
                <g key={`tag${ti}`}>
                  <rect
                    x={px} y={tagY - 9} width={pw} height={18} rx={9}
                    fill={glow ? "rgba(80, 165, 255, 0.20)" : "rgba(60, 125, 220, 0.17)"}
                    stroke={glow ? "rgba(120, 190, 255, 0.38)" : "rgba(80, 145, 255, 0.23)"}
                    strokeWidth="0.8"
                  />
                  <text
                    x={px + pw / 2} y={tagY}
                    textAnchor="middle" dominantBaseline="central"
                    fill={glow ? "#a0c8ff" : "#8aafee"}
                    fontSize="10" fontWeight="600"
                    fontFamily="'Noto Sans TC', system-ui, sans-serif"
                  >
                    {tag}
                  </text>
                </g>
              );
            })}
          </g>
        );
      })}
    </svg>
  );
}
