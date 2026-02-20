import SectionBlock from "./SectionBlock";
import SectionTitleBlock from "./SectionTitle";
import ScrollReveal from "@/components/ScrollReveal";

/** 首頁：導入後成果 — 2×2 色彩卡片 */

const outcomes = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    num: "01",
    title: "降低人力成本 30~60%",
    subtitle: "Cost Reduction",
    desc: "AI 自動化處理重複性工作，大幅減少人工作業時間，企業可將人力投入更高價值業務",
    deliverables: ["自動化流程", "人力重配", "成本可量化"],
    accent: "pf-card--teal",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    num: "02",
    title: "提升銷售轉換率",
    subtitle: "Sales Growth",
    desc: "AI 智能跟進與自動成交流程，確保每位潛在客戶都被即時回應，提高整體成交機率",
    deliverables: ["智能跟進", "自動報價", "成交加速"],
    accent: "pf-card--indigo",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
    num: "03",
    title: "即時決策分析",
    subtitle: "Real-time Insight",
    desc: "整合企業資料即時提供 KPI 洞察，讓管理層隨時掌握業績、流程與市場狀況",
    deliverables: ["即時報表", "KPI 追蹤", "預測分析"],
    accent: "pf-card--amber",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      </svg>
    ),
    num: "04",
    title: "全自動化營運系統",
    subtitle: "Autonomous Operations",
    desc: "打造可持續自動運作的企業智能中樞，讓企業穩定成長，不受人力限制與人員異動影響",
    deliverables: ["24h 自動運作", "穩定擴充", "持續成長"],
    accent: "pf-card--emerald",
  },
];

export default function ProcessSection() {
  return (
    <SectionBlock>
      <SectionTitleBlock
        subtitleEn="Results"
        title="導入後的成果"
        desc="企業導入 AI 智能營運系統後，可量化的成效立即反映在成本、效率與業績上"
      />
      <div className="pf-grid">
        {outcomes.map((outcome, i) => (
          <ScrollReveal key={outcome.num} delay={i * 120}>
            <div className={`pf-card ${outcome.accent}`}>
              <div className="pf-card__watermark" aria-hidden="true">{outcome.num}</div>
              <div className="pf-card__head">
                <div className="pf-card__icon">{outcome.icon}</div>
                <div className="pf-card__meta">
                  <span className="pf-card__num">成果 {outcome.num}</span>
                  <span className="pf-card__subtitle">{outcome.subtitle}</span>
                </div>
              </div>
              <h3 className="pf-card__title">{outcome.title}</h3>
              <p className="pf-card__desc">{outcome.desc}</p>
              <div className="pf-card__tags">
                {outcome.deliverables.map((d) => (
                  <span className="pf-card__tag" key={d}>{d}</span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </SectionBlock>
  );
}
