import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import styles from "./MethodPage.module.css";

export const metadata = { title: "導入流程" };

const steps = [
  {
    num: "01",
    title: "現況盤點與目標設定",
    subtitle: "Discovery & Goals",
    desc: "深入了解企業現行流程與痛點，釐清業務目標與成功指標，將成長需求轉化為可執行的 AI 導入策略",
    bullets: ["業務目標與 KPI 定義", "流程痛點盤點", "AI 導入優先排序"],
    color: "#4f5db8",
    colorBg: "rgba(79,93,184,0.10)",
  },
  {
    num: "02",
    title: "AI 架構規劃",
    subtitle: "Architecture Design",
    desc: "規劃 AI 智能營運架構，設計資料流、系統整合方案與自動化邏輯，確保系統上線後能真正融入企業日常營運",
    bullets: ["系統架構與資料流設計", "自動化流程規劃", "整合方案與邊界定義"],
    color: "#7c3aed",
    colorBg: "rgba(124,58,237,0.10)",
  },
  {
    num: "03",
    title: "系統建置與整合",
    subtitle: "Build & Integrate",
    desc: "落地 AI 系統開發，串接 CRM、行銷平台、ERP 與既有系統，建立完整的自動化工作流與監控機制",
    bullets: ["AI 系統開發與測試", "多系統 API 整合", "自動化流程建置"],
    color: "#0891b2",
    colorBg: "rgba(8,145,178,0.10)",
  },
  {
    num: "04",
    title: "分階上線與驗收",
    subtitle: "Launch & Validate",
    desc: "以分階段上線控制導入風險，依實際業務數據驗收成效，確保系統達到預期的降本增效目標",
    bullets: ["分階段上線策略", "業務成效驗收", "問題修正與調校"],
    color: "#d97706",
    colorBg: "rgba(217,119,6,0.10)",
  },
  {
    num: "05",
    title: "持續優化與成長",
    subtitle: "Optimize & Grow",
    desc: "依業務成長持續優化 AI 系統，擴展應用場景，讓智能營運中樞越用越精準，為企業創造持續成長動能",
    bullets: ["成效數據分析", "AI 模型持續優化", "功能擴展與規模化"],
    color: "#059669",
    colorBg: "rgba(5,150,105,0.10)",
  },
];


export default function MethodPage() {
  return (
    <main className={`${styles.methodPage} page`}>
      <div className="container">
        <SectionTitle
          subtitleEn="Methodology"
          title="導入流程"
          desc="以成果為導向，從企業目標出發，五個步驟完成 AI 智能營運系統建置，確保每個環節都能看到實際業務成效"
        />

        {/* Hero / Overview */}
        <section className={styles.hero} aria-label="導入流程概覽">
          <div className={styles.heroGrid}>
            <div className={styles.visual} aria-hidden="true" style={{ padding: 0, display: 'block', overflow: 'hidden' }}>
              <img src="/images/7.jpg" alt="AI 智能營運導入流程" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>

            <div className={styles.content}>
              <div className={styles.badge}>MORAN Method · 5 Steps</div>
              <h3 className={styles.title}>從戰略到落地，創造可量化成果</h3>
              <p className={styles.desc}>
                企業老闆不需要了解 AI 技術細節，需要的是一套能降低成本、提升效率、驅動成長的智能營運系統
                我們用五個步驟，確保 AI 系統真正融入企業，持續創造業務價值
              </p>

              <div className={styles.points}>
                <div className={styles.point}>
                  <div className={styles.pointK}>成果導向</div>
                  <div className={styles.pointV}>以 KPI 與業務目標驅動每個導入決策</div>
                </div>
                <div className={styles.point}>
                  <div className={styles.pointK}>風險可控</div>
                  <div className={styles.pointV}>分階段驗收，確保每步都能看到成效</div>
                </div>
                <div className={styles.point}>
                  <div className={styles.pointK}>持續成長</div>
                  <div className={styles.pointV}>系統隨業務擴展，持續優化與規模化</div>
                </div>
              </div>

              <div className={styles.actions}>
                <Link className="btn primary" href="/contact">
                  預約免費顧問諮詢
                </Link>
                <Link className="btn" href="/solutions">
                  了解產品方案
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className={styles.steps} aria-label="五步驟導入流程">
          <div className={styles.stepsHead}>
            <h3 className={styles.stepsTitle}>五步驟 AI 導入流程</h3>
            <p className={styles.stepsSub}>
              每個步驟都有明確的業務成果與驗收指標，從戰略規劃到系統落地，確保投資產生實際回報
            </p>
          </div>

          <div className={styles.stepsGrid}>
            {steps.map((s) => (
              <article className={styles.stepCard} key={s.num} style={{ padding: 0, overflow: "hidden" }}>
                {/* 彩色標題區塊 */}
                <div style={{
                  position: "relative",
                  zIndex: 1,
                  background: s.color,
                  padding: "18px 20px 16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 8,
                }}>
                  <div>
                    <div style={{
                      fontSize: 10,
                      fontWeight: 700,
                      color: "rgba(255,255,255,0.65)",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      marginBottom: 6,
                    }}>
                      {s.subtitle}
                    </div>
                    <div className={styles.stepTitle} style={{ color: "#ffffff", fontSize: 15 }}>
                      {s.title}
                    </div>
                  </div>
                  <div style={{
                    fontSize: 44,
                    fontWeight: 900,
                    color: "rgba(255,255,255,0.18)",
                    lineHeight: 1,
                    flexShrink: 0,
                    letterSpacing: "-0.03em",
                    userSelect: "none",
                  }}>
                    {s.num}
                  </div>
                </div>

                {/* 卡片內容 */}
                <div style={{ position: "relative", zIndex: 1, padding: "14px 18px 16px" }}>
                  <p className={styles.stepDesc} style={{ margin: "0 0 10px" }}>{s.desc}</p>
                  <ul className={styles.stepList}>
                    {s.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>

    </main>
  );
}
