import SectionBlock from "./SectionBlock";
import SectionTitleBlock from "./SectionTitle";
import ScrollReveal from "@/components/ScrollReveal";

/** 首頁：系統導入流程 — 2×2 色彩卡片 */

const steps = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    num: "01",
    title: "顧問諮詢",
    subtitle: "Consultation",
    desc: "深入了解業務痛點與現行流程，盤點可導入場景，提供可落地的建議與初步方案",
    deliverables: ["痛點訪談", "場景盤點", "初步方案"],
    accent: "pf-card--teal",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    num: "02",
    title: "雛型演示",
    subtitle: "Prototyping",
    desc: "以系統雛型進行演示，與團隊共同探尋完整需求，確認功能範圍與優先順序",
    deliverables: ["原型展示", "需求確認", "範圍定義"],
    accent: "pf-card--indigo",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    num: "03",
    title: "測試部署",
    subtitle: "Deployment",
    desc: "進入開發階段，完成測試與正式環境的階段性部署，確保系統穩定上線",
    deliverables: ["迭代開發", "環境部署", "驗收測試"],
    accent: "pf-card--amber",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    num: "04",
    title: "調整優化",
    subtitle: "Optimization",
    desc: "持續維運監測，根據數據分析結果進行優化調整，讓系統效益逐步放大",
    deliverables: ["數據監測", "效能分析", "持續優化"],
    accent: "pf-card--emerald",
  },
];

export default function ProcessSection() {
  return (
    <SectionBlock>
      <SectionTitleBlock
        subtitleEn="Implementation"
        title="系統導入流程"
        desc="專案自顧問諮詢展開，透過系統演示釐清需求後，分階段完成開發、測試與正式部署"
      />
      <div className="pf-grid">
        {steps.map((step, i) => (
          <ScrollReveal key={step.num} delay={i * 120}>
            <div className={`pf-card ${step.accent}`}>
              <div className="pf-card__watermark" aria-hidden="true">{step.num}</div>
              <div className="pf-card__head">
                <div className="pf-card__icon">{step.icon}</div>
                <div className="pf-card__meta">
                  <span className="pf-card__num">STEP {step.num}</span>
                  <span className="pf-card__subtitle">{step.subtitle}</span>
                </div>
              </div>
              <h3 className="pf-card__title">{step.title}</h3>
              <p className="pf-card__desc">{step.desc}</p>
              <div className="pf-card__tags">
                {step.deliverables.map((d) => (
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
