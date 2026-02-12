import { ReactNode } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

/** 首頁：產品介紹 — 品牌色底 + 白卡視覺風格 */

/* 專業 SVG 圖示 */
const ChatBotIcon = () => (
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

const KnowledgeIcon = () => (
  <svg width="96" height="96" viewBox="0 0 96 96" fill="none">
    <rect x="22" y="16" width="40" height="56" rx="4" fill="white" fillOpacity="0.9" stroke="currentColor" strokeWidth="2.5" />
    <rect x="34" y="24" width="40" height="56" rx="4" fill="white" fillOpacity="0.85" stroke="currentColor" strokeWidth="2.5" />
    <line x1="42" y1="38" x2="66" y2="38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="42" y1="48" x2="62" y2="48" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="42" y1="58" x2="58" y2="58" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="66" cy="68" r="10" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2" />
    <path d="M63 68L66 64V72" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M66 64L69 68" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const ChannelIcon = () => (
  <svg width="96" height="96" viewBox="0 0 96 96" fill="none">
    <circle cx="48" cy="48" r="28" fill="white" fillOpacity="0.9" stroke="currentColor" strokeWidth="2.5" />
    <circle cx="48" cy="48" r="10" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2" />
    <circle cx="48" cy="48" r="3" fill="currentColor" />
    <circle cx="28" cy="28" r="8" fill="white" stroke="currentColor" strokeWidth="2" />
    <rect x="25" y="25" width="6" height="6" rx="1" fill="currentColor" fillOpacity="0.6" />
    <circle cx="68" cy="28" r="8" fill="white" stroke="currentColor" strokeWidth="2" />
    <rect x="65" y="25" width="6" height="6" rx="1" fill="currentColor" fillOpacity="0.6" />
    <circle cx="28" cy="68" r="8" fill="white" stroke="currentColor" strokeWidth="2" />
    <rect x="25" y="65" width="6" height="6" rx="1" fill="currentColor" fillOpacity="0.6" />
    <circle cx="68" cy="68" r="8" fill="white" stroke="currentColor" strokeWidth="2" />
    <rect x="65" y="65" width="6" height="6" rx="1" fill="currentColor" fillOpacity="0.6" />
    <line x1="38" y1="38" x2="33" y2="33" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
    <line x1="58" y1="38" x2="63" y2="33" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
    <line x1="38" y1="58" x2="33" y2="63" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
    <line x1="58" y1="58" x2="63" y2="63" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
  </svg>
);

const PayrollIcon = () => (
  <svg width="96" height="96" viewBox="0 0 96 96" fill="none">
    <rect x="20" y="18" width="56" height="60" rx="8" fill="white" fillOpacity="0.9" stroke="currentColor" strokeWidth="2.5" />
    <line x1="20" y1="36" x2="76" y2="36" stroke="currentColor" strokeWidth="2" />
    <line x1="32" y1="48" x2="52" y2="48" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="32" y1="56" x2="48" y2="56" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="32" y1="64" x2="44" y2="64" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="62" cy="58" r="12" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="2" />
    <text x="62" y="63" textAnchor="middle" fill="currentColor" fontSize="14" fontWeight="700" fontFamily="system-ui">$</text>
    <rect x="28" y="24" width="20" height="6" rx="3" fill="currentColor" fillOpacity="0.2" />
  </svg>
);

const ERPIcon = () => (
  <svg width="96" height="96" viewBox="0 0 96 96" fill="none">
    <rect x="14" y="38" width="24" height="40" rx="4" fill="white" fillOpacity="0.9" stroke="currentColor" strokeWidth="2.5" />
    <rect x="36" y="24" width="24" height="54" rx="4" fill="white" fillOpacity="0.9" stroke="currentColor" strokeWidth="2.5" />
    <rect x="58" y="32" width="24" height="46" rx="4" fill="white" fillOpacity="0.9" stroke="currentColor" strokeWidth="2.5" />
    <rect x="20" y="50" width="12" height="4" rx="2" fill="currentColor" fillOpacity="0.3" />
    <rect x="20" y="58" width="8" height="4" rx="2" fill="currentColor" fillOpacity="0.3" />
    <rect x="42" y="36" width="12" height="4" rx="2" fill="currentColor" fillOpacity="0.3" />
    <rect x="42" y="44" width="8" height="4" rx="2" fill="currentColor" fillOpacity="0.3" />
    <rect x="42" y="52" width="12" height="4" rx="2" fill="currentColor" fillOpacity="0.3" />
    <rect x="64" y="44" width="12" height="4" rx="2" fill="currentColor" fillOpacity="0.3" />
    <rect x="64" y="52" width="8" height="4" rx="2" fill="currentColor" fillOpacity="0.3" />
    <line x1="14" y1="78" x2="82" y2="78" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M44 18L48 12L52 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
    icon: <ChatBotIcon />,
    title: "智能客服系統",
    desc: "整合 AI 技術與企業知識資料，打造 24 小時智能客服，降低人工負擔，提升回覆速度與服務一致性。",
    accent: "showcase-card__visual--blue",
  },
  {
    icon: <KnowledgeIcon />,
    title: "知識助理系統",
    desc: "將企業內部文件與流程整合為可搜尋、可對話的知識平台，減少重複詢問與培訓成本。",
    accent: "showcase-card__visual--purple",
  },
  {
    icon: <ChannelIcon />,
    title: "各渠道整合平台系統",
    desc: "整合網站、門市、電商、社群等多渠道資料，建立統一管理平台，消除資訊斷層。",
    accent: "showcase-card__visual--cyan",
  },
  {
    icon: <PayrollIcon />,
    title: "薪資平台系統",
    desc: "完整薪資計算與人事管理平台，支援出勤、獎金與各項薪資規則，提升人資作業效率。",
    accent: "showcase-card__visual--indigo",
  },
  {
    icon: <ERPIcon />,
    title: "ERP 系統",
    desc: "整合採購、庫存、銷售、生產與財務管理，建立完整的資源規劃與營運管理平台。",
    accent: "showcase-card__visual--sky",
  },
];

export default function ModuleSection() {
  return (
    <section className="showcase-section">
      <div className="container">
        <div className="showcase-header">
          <span className="showcase-header__en">Products</span>
          <h2 className="showcase-header__title">產品介紹</h2>
          <p className="showcase-header__desc">
            為企業提供完整的數位解決方案，從智能客服到企業資源管理，全方位支援企業數位化需求。
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
            查看完整產品介紹
            <svg className="btnIcon" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
