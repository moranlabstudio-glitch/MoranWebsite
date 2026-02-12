import Link from "next/link";
import SectionTitleBlock from "./SectionTitle";
import ScrollReveal from "@/components/ScrollReveal";

/** 首頁：服務項目 — 顏色板塊，點擊跳轉至服務頁對應區塊 */

const services = [
  {
    num: "01",
    title: "平台導入與數位顧問服務",
    desc: "從現況盤點出發，協助釐清流程斷點與優先順序，設計可落地的導入路徑，讓營運更順、更穩",
    tags: ["現況盤點", "流程優化", "導入規劃"],
    accent: "svc-card--blue",
    href: "/services#svc-integration",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "智能客服與雛型演示",
    desc: "以可操作的雛型與情境演示，讓需求在早期就對齊，降低試錯成本，確保後續開發方向正確",
    tags: ["雛型演示", "需求對齊", "情境模擬"],
    accent: "svc-card--purple",
    href: "/services#svc-consulting",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "客製開發與測試部署",
    desc: "以分階段交付與可驗收里程碑推進，涵蓋開發、測試與上線準備，讓系統穩定可維運",
    tags: ["分階段交付", "測試驗收", "上線部署"],
    accent: "svc-card--cyan",
    href: "/services#svc-development",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "系統整合與維運優化",
    desc: "整合既有系統與資料流，上線後提供監測、維運與持續優化，確保長期穩定與可擴充",
    tags: ["系統整合", "數據監測", "持續優化"],
    accent: "svc-card--indigo",
    href: "/services#svc-automation",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  return (
    <section className="svc-section">
      <div className="container">
        <SectionTitleBlock
          subtitleEn="Services"
          title="服務項目"
          desc="以顧問式方法協助企業從流程、資料到系統整合，導入 AI 與自動化，打造可維運、可擴充的營運基礎"
        />
        <div className="svc-grid">
          {services.map((s, i) => (
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
