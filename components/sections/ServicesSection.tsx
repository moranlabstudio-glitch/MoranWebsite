import Link from "next/link";
import SectionTitleBlock from "./SectionTitle";
import ScrollReveal from "@/components/ScrollReveal";

/** 首頁：四大商業價值 */

const values = [
  {
    num: "01",
    title: "降低營運成本",
    desc: "以流程自動化取代重複人工作業，降低人力依賴，讓團隊專注在成交與成長",
    tags: ["流程自動化", "人力優化", "系統整合"],
    accent: "svc-card--blue",
    href: "/solutions",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "提升營運效率",
    desc: "將銷售、客服、行銷串成一條自動化流程，縮短回覆與成交週期",
    tags: ["銷售自動化", "回應提速", "轉換率提升"],
    accent: "svc-card--purple",
    href: "/solutions",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "數據驅動決策",
    desc: "把關鍵數據集中並即時可視化，讓管理層用 KPI 做判斷、用預測做規劃",
    tags: ["即時分析", "KPI 監控", "決策支援"],
    accent: "svc-card--cyan",
    href: "/solutions",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "建立自動化營運系統",
    desc: "建立可持續運作的智能中樞，降低對個人經驗與人員異動的依賴",
    tags: ["智能中樞", "持續成長", "穩定擴充"],
    accent: "svc-card--indigo",
    href: "/solutions",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  return (
    <section className="svc-section">
      <div className="container">
        <SectionTitleBlock
          subtitleEn="Business Value"
          title="四大商業價值"
          desc="我們協助企業以 AI 智能營運系統取代人工流程，從降低成本到數據決策，創造可量化的企業成長動能"
        />
        <div className="svc-grid">
          {values.map((s, i) => (
            <ScrollReveal key={s.num} delay={i * 120}>
              <Link href={s.href} className={`svc-card ${s.accent}`}>
                <div className="svc-card__header">
                  <div className="svc-card__icon">{s.icon}</div>
                  <span className="svc-card__num">{s.num}</span>
                </div>
                <h3 className="svc-card__title">{s.title}</h3>
                <p className="svc-card__desc">{s.desc}</p>
                <div className="svc-card__tags">
                  {s.tags.map((t) => (
                    <span className="svc-card__tag" key={t}>{t}</span>
                  ))}
                </div>
                <span className="svc-card__link">
                  了解更多
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
