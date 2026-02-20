import { ReactNode } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

/** 首頁：AI 產品模組 — 6 大模組，3 欄網格 */

/* SVG 圖示 */
const CRMIcon = () => (
  <svg width="96" height="96" viewBox="0 0 96 96" fill="none">
    <circle cx="48" cy="32" r="16" fill="white" fillOpacity="0.9" stroke="currentColor" strokeWidth="2.5" />
    <circle cx="48" cy="32" r="6" fill="currentColor" fillOpacity="0.3" />
    <path d="M20 76c0-15.464 12.536-28 28-28s28 12.536 28 28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="70" cy="28" r="8" fill="currentColor" fillOpacity="0.18" stroke="currentColor" strokeWidth="2" />
    <path d="M67 28L69.5 30.5L73 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const AIServiceIcon = () => (
  <svg width="96" height="96" viewBox="0 0 96 96" fill="none">
    <rect x="16" y="20" width="64" height="48" rx="12" fill="white" fillOpacity="0.9" />
    <rect x="16" y="20" width="64" height="48" rx="12" stroke="currentColor" strokeWidth="2.5" />
    <circle cx="36" cy="44" r="4" fill="currentColor" />
    <circle cx="48" cy="44" r="4" fill="currentColor" />
    <circle cx="60" cy="44" r="4" fill="currentColor" />
    <path d="M40 68L32 80V68" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
    <circle cx="70" cy="26" r="8" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" />
    <path d="M67 26L69.5 28.5L73 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const MarketingIcon = () => (
  <svg width="96" height="96" viewBox="0 0 96 96" fill="none">
    <path d="M20 56L40 36L56 52L76 28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="20" cy="56" r="5" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" />
    <circle cx="40" cy="36" r="5" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" />
    <circle cx="56" cy="52" r="5" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" />
    <circle cx="76" cy="28" r="5" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" />
    <path d="M76 28L76 40M76 28L64 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <rect x="12" y="68" width="72" height="8" rx="4" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const CustomerOpsIcon = () => (
  <svg width="96" height="96" viewBox="0 0 96 96" fill="none">
    <rect x="20" y="18" width="56" height="60" rx="8" fill="white" fillOpacity="0.9" stroke="currentColor" strokeWidth="2.5" />
    <line x1="20" y1="36" x2="76" y2="36" stroke="currentColor" strokeWidth="2" />
    <line x1="32" y1="50" x2="52" y2="50" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="32" y1="60" x2="48" y2="60" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="62" cy="56" r="12" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="2" />
    <path d="M58 56a4 4 0 0 1 4-4 4 4 0 0 1 4 4 4 4 0 0 1-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M62 64v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <rect x="28" y="24" width="20" height="6" rx="3" fill="currentColor" fillOpacity="0.2" />
  </svg>
);

const AnalyticsIcon = () => (
  <svg width="96" height="96" viewBox="0 0 96 96" fill="none">
    <rect x="14" y="38" width="20" height="40" rx="4" fill="white" fillOpacity="0.9" stroke="currentColor" strokeWidth="2.5" />
    <rect x="38" y="24" width="20" height="54" rx="4" fill="white" fillOpacity="0.9" stroke="currentColor" strokeWidth="2.5" />
    <rect x="62" y="32" width="20" height="46" rx="4" fill="white" fillOpacity="0.9" stroke="currentColor" strokeWidth="2.5" />
    <circle cx="24" cy="28" r="8" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2" />
    <path d="M21 28l2.5 2.5L27 25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="14" y1="78" x2="82" y2="78" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

const IntegrationIcon = () => (
  <svg width="96" height="96" viewBox="0 0 96 96" fill="none">
    <circle cx="48" cy="48" r="14" fill="white" fillOpacity="0.9" stroke="currentColor" strokeWidth="2.5" />
    <circle cx="48" cy="48" r="5" fill="currentColor" fillOpacity="0.3" />
    <circle cx="20" cy="20" r="10" fill="white" fillOpacity="0.9" stroke="currentColor" strokeWidth="2" />
    <circle cx="76" cy="20" r="10" fill="white" fillOpacity="0.9" stroke="currentColor" strokeWidth="2" />
    <circle cx="20" cy="76" r="10" fill="white" fillOpacity="0.9" stroke="currentColor" strokeWidth="2" />
    <circle cx="76" cy="76" r="10" fill="white" fillOpacity="0.9" stroke="currentColor" strokeWidth="2" />
    <line x1="29" y1="27" x2="37" y2="37" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3" />
    <line x1="67" y1="27" x2="59" y2="37" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3" />
    <line x1="29" y1="69" x2="37" y2="59" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3" />
    <line x1="67" y1="69" x2="59" y2="59" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3" />
    <rect x="16" y="16" width="8" height="8" rx="2" fill="currentColor" fillOpacity="0.5" />
    <rect x="72" y="16" width="8" height="8" rx="2" fill="currentColor" fillOpacity="0.5" />
    <rect x="16" y="72" width="8" height="8" rx="2" fill="currentColor" fillOpacity="0.5" />
    <rect x="72" y="72" width="8" height="8" rx="2" fill="currentColor" fillOpacity="0.5" />
  </svg>
);

interface Module {
  icon: ReactNode;
  title: string;
  desc: string;
  accent: string;
}

const modules: Module[] = [
  {
    icon: <CRMIcon />,
    title: "AI CRM + 自動成交系統",
    desc: "串接官網表單、廣告名單、電商/活動資料，自動匯入 CRM；AI 分析客戶意圖、智能跟進、報價與成交流程自動化",
    accent: "showcase-card__visual--blue",
  },
  {
    icon: <AIServiceIcon />,
    title: "AI 客服與知識助理",
    desc: "提供 24 小時智能客服、知識查詢、客戶分析與工單管理，大幅降低人工客服成本",
    accent: "showcase-card__visual--purple",
  },
  {
    icon: <MarketingIcon />,
    title: "AI 行銷自動化",
    desc: "客戶分群、精準推播、再行銷、ROAS 與轉換分析，讓每一筆行銷預算發揮最大效益",
    accent: "showcase-card__visual--cyan",
  },
  {
    icon: <CustomerOpsIcon />,
    title: "客戶經營與營運自動化",
    desc: "續約提醒、客戶關懷、自動推薦、流失預測與營運優化，讓客戶關係持續產生價值",
    accent: "showcase-card__visual--indigo",
  },
  {
    icon: <AnalyticsIcon />,
    title: "AI 決策與營運分析",
    desc: "KPI 監控、銷售預測、營運分析、ROI 計算與 AI 策略建議，讓決策有據可依",
    accent: "showcase-card__visual--sky",
  },
  {
    icon: <IntegrationIcon />,
    title: "企業系統整合",
    desc: "ERP、財務、電商、行銷平台、IoT 與資料平台整合，打通企業資料孤島，建立統一營運中樞",
    accent: "showcase-card__visual--violet",
  },
];

export default function ModuleSection() {
  return (
    <section className="showcase-section">
      <div className="container">
        <div className="showcase-header">
          <span className="showcase-header__en">Product Modules</span>
          <h2 className="showcase-header__title">六大 AI 產品模組</h2>
          <p className="showcase-header__desc">
            從 CRM 到系統整合，完整覆蓋企業 AI 智能營運所需的每一個環節
          </p>
        </div>
        <div className="showcase-grid">
          {modules.map((m, i) => (
            <ScrollReveal key={m.title} delay={i * 120}>
              <div className="showcase-card">
                <div className={`showcase-card__visual ${m.accent}`}>
                  <div className="showcase-card__icon">{m.icon}</div>
                </div>
                <div className="showcase-card__body">
                  <h3 className="showcase-card__title">{m.title}</h3>
                  <p className="showcase-card__desc">{m.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <div className="showcase-actions">
          <Link className="btn showcase-btn" href="/solutions">
            查看完整產品方案
            <svg className="btnIcon" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
