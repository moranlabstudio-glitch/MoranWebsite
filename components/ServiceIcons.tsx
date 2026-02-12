// 服务图标组件 - 科技感品牌色渐变 SVG
export function IntegrationIcon({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="integrationGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#0ea5e9" />
        </linearGradient>
      </defs>
      {/* 齿轮中心 */}
      <circle cx="24" cy="24" r="8" fill="url(#integrationGrad)" />
      {/* 齿轮外环 */}
      <path d="M24 8v4M24 36v4M36 24h4M8 24h4M33.94 14.06l-2.83 2.83M16.89 31.11l-2.83 2.83M33.94 33.94l-2.83-2.83M16.89 16.89l-2.83-2.83"
            stroke="url(#integrationGrad)" strokeWidth="3" strokeLinecap="round" />
      {/* 连接节点 */}
      <circle cx="24" cy="8" r="2" fill="url(#integrationGrad)" />
      <circle cx="24" cy="40" r="2" fill="url(#integrationGrad)" />
      <circle cx="8" cy="24" r="2" fill="url(#integrationGrad)" />
      <circle cx="40" cy="24" r="2" fill="url(#integrationGrad)" />
    </svg>
  );
}

export function GrowthIcon({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="growthGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#0ea5e9" />
        </linearGradient>
      </defs>
      {/* 上升趋势线 */}
      <path d="M8 32L16 24L24 28L32 16L40 12" stroke="url(#growthGrad)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      {/* 箭头 */}
      <path d="M40 12L40 20M40 12L32 12" stroke="url(#growthGrad)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      {/* 数据点 */}
      <circle cx="8" cy="32" r="3" fill="url(#growthGrad)" />
      <circle cx="16" cy="24" r="3" fill="url(#growthGrad)" />
      <circle cx="24" cy="28" r="3" fill="url(#growthGrad)" />
      <circle cx="32" cy="16" r="3" fill="url(#growthGrad)" />
      <circle cx="40" cy="12" r="3" fill="url(#growthGrad)" />
    </svg>
  );
}

export function DevicesIcon({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="devicesGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#0ea5e9" />
        </linearGradient>
      </defs>
      {/* 电脑屏幕 */}
      <rect x="6" y="8" width="28" height="20" rx="2" stroke="url(#devicesGrad)" strokeWidth="2.5" fill="none" />
      <line x1="20" y1="28" x2="20" y2="34" stroke="url(#devicesGrad)" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="14" y1="34" x2="26" y2="34" stroke="url(#devicesGrad)" strokeWidth="2.5" strokeLinecap="round" />
      {/* 手机 */}
      <rect x="30" y="16" width="12" height="20" rx="2" stroke="url(#devicesGrad)" strokeWidth="2.5" fill="none" />
      <circle cx="36" cy="33" r="1.5" fill="url(#devicesGrad)" />
    </svg>
  );
}

export function AnalyticsIcon({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="analyticsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#0ea5e9" />
        </linearGradient>
      </defs>
      {/* 柱状图 */}
      <rect x="8" y="26" width="6" height="14" rx="1" fill="url(#analyticsGrad)" opacity="0.7" />
      <rect x="18" y="18" width="6" height="22" rx="1" fill="url(#analyticsGrad)" opacity="0.9" />
      <rect x="28" y="22" width="6" height="18" rx="1" fill="url(#analyticsGrad)" opacity="0.8" />
      <rect x="38" y="12" width="6" height="28" rx="1" fill="url(#analyticsGrad)" />
      {/* 坐标轴 */}
      <line x1="6" y1="40" x2="46" y2="40" stroke="url(#analyticsGrad)" strokeWidth="2" strokeLinecap="round" />
      <line x1="6" y1="8" x2="6" y2="40" stroke="url(#analyticsGrad)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function AutomationIcon({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="automationGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#0ea5e9" />
        </linearGradient>
      </defs>
      {/* 循环箭头 */}
      <path d="M24 8C15.16 8 8 15.16 8 24C8 32.84 15.16 40 24 40C30.63 40 36.35 35.84 38.5 30"
            stroke="url(#automationGrad)" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M38.5 30L42 36L36 38.5" stroke="url(#automationGrad)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* 中心齿轮 */}
      <circle cx="24" cy="24" r="6" stroke="url(#automationGrad)" strokeWidth="2.5" fill="none" />
      <circle cx="24" cy="24" r="2" fill="url(#automationGrad)" />
    </svg>
  );
}
