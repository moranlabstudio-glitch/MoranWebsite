import { ReactNode } from "react";
import Link from "next/link";
import SystemArchDiagram from "@/components/SystemArchDiagram";

export const metadata = { title: "產品方案" };

/* 六大 AI 產品模組圖示 */
const CRMIcon = () => (
  <svg width="120" height="120" viewBox="0 0 96 96" fill="none">
    <circle cx="48" cy="32" r="16" fill="white" fillOpacity="0.9" stroke="currentColor" strokeWidth="2.5" />
    <circle cx="48" cy="32" r="6" fill="currentColor" fillOpacity="0.3" />
    <path d="M20 76c0-15.464 12.536-28 28-28s28 12.536 28 28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="70" cy="28" r="8" fill="currentColor" fillOpacity="0.18" stroke="currentColor" strokeWidth="2" />
    <path d="M67 28L69.5 30.5L73 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const AIServiceIcon = () => (
  <svg width="120" height="120" viewBox="0 0 96 96" fill="none">
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
  <svg width="120" height="120" viewBox="0 0 96 96" fill="none">
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
  <svg width="120" height="120" viewBox="0 0 96 96" fill="none">
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
  <svg width="120" height="120" viewBox="0 0 96 96" fill="none">
    <rect x="14" y="38" width="20" height="40" rx="4" fill="white" fillOpacity="0.9" stroke="currentColor" strokeWidth="2.5" />
    <rect x="38" y="24" width="20" height="54" rx="4" fill="white" fillOpacity="0.9" stroke="currentColor" strokeWidth="2.5" />
    <rect x="62" y="32" width="20" height="46" rx="4" fill="white" fillOpacity="0.9" stroke="currentColor" strokeWidth="2.5" />
    <circle cx="24" cy="28" r="8" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2" />
    <path d="M21 28l2.5 2.5L27 25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="14" y1="78" x2="82" y2="78" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

const IntegrationIcon = () => (
  <svg width="120" height="120" viewBox="0 0 96 96" fill="none">
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

interface Product {
  id: string;
  icon: ReactNode;
  title: string;
  desc: string;
  accent: string;
}

const products: Product[] = [
  {
    id: "crm",
    icon: <CRMIcon />,
    title: "AI CRM + 自動成交系統",
    desc: "自動抓取潛在客戶名單，AI 分析客戶意圖與購買行為，自動執行跟進、報價與成交流程，讓業務不再依賴個人能力，而是建立可複製的自動化銷售機制，大幅提升成交率與業務效能",
    accent: "showcase-card__visual--blue",
  },
  {
    id: "ai-service",
    icon: <AIServiceIcon />,
    title: "AI 客服與知識助理",
    desc: "整合企業知識庫與 AI 語言模型，提供 24 小時智能客服、產品查詢、知識問答與工單管理，持續學習企業知識，回覆準確且符合品牌語氣，大幅降低人工客服成本，提升服務品質",
    accent: "showcase-card__visual--purple",
  },
  {
    id: "marketing",
    icon: <MarketingIcon />,
    title: "AI 行銷自動化",
    desc: "依據客戶行為數據自動分群，執行精準推播、再行銷與個人化內容投放，即時追蹤 ROAS 與轉換分析，讓每一筆行銷預算都能看到具體效益，持續優化投資報酬率",
    accent: "showcase-card__visual--cyan",
  },
  {
    id: "customer-ops",
    icon: <CustomerOpsIcon />,
    title: "客戶經營與營運自動化",
    desc: "自動執行續約提醒、客戶關懷、個人化推薦與流失預測，讓客戶關係持續產生價值，結合 AI 分析與自動化工作流，將客戶生命週期管理轉化為可預測的穩定收入來源",
    accent: "showcase-card__visual--indigo",
  },
  {
    id: "analytics",
    icon: <AnalyticsIcon />,
    title: "AI 決策與營運分析",
    desc: "整合各系統數據，提供即時 KPI 監控、銷售預測、ROI 分析與 AI 策略建議，讓管理層在關鍵決策時有數據支撐，從直覺決策轉向數據驅動，持續優化企業整體績效",
    accent: "showcase-card__visual--sky",
  },
  {
    id: "integration",
    icon: <IntegrationIcon />,
    title: "企業系統整合",
    desc: "無縫串接 ERP、財務系統、電商平台、行銷工具、IoT 設備與資料倉庫，打通企業資料孤島，建立統一的智能營運中樞，讓所有系統協同運作，資料即時同步，消除重複作業",
    accent: "showcase-card__visual--violet",
  },
];


export default function SolutionsPage() {
  return (
    <main className="page">
      <section className="showcase-section" style={{ marginTop: -1 }}>
        <div className="container">
          <div className="showcase-header">
            <span className="showcase-header__en">Product Modules</span>
            <h2 className="showcase-header__title">AI 智能營運產品方案</h2>
            <p className="showcase-header__desc">
              六大核心模組，完整覆蓋企業從客戶管理到系統整合的每一個營運環節
            </p>
          </div>

          {/* 系統架構圖 */}
          <div style={{
            margin: "48px 0 64px",
            padding: "32px 24px",
            background: "#040c22",
            borderRadius: 20,
            boxShadow: "0 12px 60px rgba(4, 12, 34, 0.60), 0 0 0 1px rgba(80, 125, 255, 0.12)",
          }}>
            <div style={{ textAlign: "center", marginBottom: 20 }}>
              <span style={{
                display: "inline-block",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#6b9fff",
                marginBottom: 8,
              }}>
                System Architecture
              </span>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: "#e8f2ff", margin: 0 }}>
                AI 驅動的企業智能營運架構
              </h3>
              <p style={{ fontSize: 13.5, color: "rgba(165, 205, 255, 0.65)", marginTop: 8, marginBottom: 0, lineHeight: 1.6 }}>
                從客戶資料整合到 AI 分析與營運自動化，建立完整企業智能營運中樞，實現資料驅動與持續優化
              </p>
            </div>
            <SystemArchDiagram />
          </div>

          <div className="showcase-grid">
            {products.map((p) => (
              <div className="showcase-card" key={p.title} id={p.id}>
                <div className={`showcase-card__visual ${p.accent}`}>
                  <div className="showcase-card__icon">{p.icon}</div>
                </div>
                <div className="showcase-card__body">
                  <h3 className="showcase-card__title">{p.title}</h3>
                  <p className="showcase-card__desc">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="showcase-actions" style={{ display: "flex", justifyContent: "center", gap: 20 }}>
            <Link className="btn primary showcase-btn" href="/contact">
              預約免費顧問諮詢
              <svg className="btnIcon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link className="btn showcase-btn" href="/services">
              了解 AI 解決方案
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
