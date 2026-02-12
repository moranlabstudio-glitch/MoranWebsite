import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import styles from "./MethodPage.module.css";

export const metadata = { title: "導入流程" };

const steps = [
  {
    num: "01",
    title: "需求盤點",
    subtitle: "Problem Discovery",
    desc: "盤點流程、資料、痛點與成功指標，將「想做」轉成可衡量的「要解決什麼」",
    bullets: ["流程與角色釐清", "資料來源與落點", "KPI / 成功定義"],
  },
  {
    num: "02",
    title: "架構設計",
    subtitle: "System Design",
    desc: "定義資料流、權限、介面與知識結構，先把「可營運」與「可維運」設計到位",
    bullets: ["資料流與系統邊界", "權限與稽核", "知識結構與版本策略"],
  },
  {
    num: "03",
    title: "系統建置",
    subtitle: "Build & Integrate",
    desc: "落地前後端與整合，串接 CRM / 工單 / DB，並建立日誌、監控與告警機制",
    bullets: ["API / 串接整合", "日誌與監控", "壓測與風險清單"],
  },
  {
    num: "04",
    title: "分階上線",
    subtitle: "Launch",
    desc: "以灰度上線控風險，依真實對話與案例回收修正，穩定逼近可用品質",
    bullets: ["灰度 / A-B 設定", "回饋回收機制", "品質門檻與驗收"],
  },
  {
    num: "05",
    title: "營運優化",
    subtitle: "Operate & Improve",
    desc: "迭代知識與規則，提升命中率、補足例外情境，讓系統越用越準、越用越省",
    bullets: ["命中率與轉接率優化", "例外情境補齊", "知識維運流程交付"],
  },
];


export default function MethodPage() {
  return (
    <main className={`${styles.methodPage} page`}>
      <div className="container">
        <SectionTitle
          subtitleEn="Methodology"
          title="導入流程"
          desc="我們以「可追蹤、可維運、可迭代」為原則，將想法轉成能融入日常流程的系統"
        />

        {/* Hero / Overview */}
        <section className={styles.hero} aria-label="導入流程概覽">
          <div className={styles.heroGrid}>
            <div className={styles.visual} aria-hidden="true" style={{ padding: 0, display: 'block', overflow: 'hidden' }}>
              <img src="/images/7.jpg" alt="導入流程" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>

            <div className={styles.content}>
              <div className={styles.badge}>MORAN Method · 5 Steps</div>
              <h3 className={styles.title}>從盤點到營運，完整閉環</h3>
              <p className={styles.desc}>
                你不需要理解底層參數；你需要的是一套可放進流程、可交付給團隊維運的系統
                我們用五個步驟，確保上線後仍能持續成長
              </p>

              <div className={styles.points}>
                <div className={styles.point}>
                  <div className={styles.pointK}>流程先行</div>
                  <div className={styles.pointV}>先把角色、權限、資料落點說清楚</div>
                </div>
                <div className={styles.point}>
                  <div className={styles.pointK}>KPI 驅動</div>
                  <div className={styles.pointV}>以解決率、轉接率、工時節省量化成效</div>
                </div>
                <div className={styles.point}>
                  <div className={styles.pointK}>案例回收</div>
                  <div className={styles.pointV}>用真實對話與例外情境迭代品質</div>
                </div>
              </div>
           
              <div className={styles.actions}>
                <Link className="btn primary" href="/contact">
                  了解導入方式
                </Link>
                <Link className="btn" href="/solutions">
                  先看產品介紹
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className={styles.steps} aria-label="五步驟導入流程">
          <div className={styles.stepsHead}>
            <h3 className={styles.stepsTitle}>五步驟導入流程</h3>
            <p className={styles.stepsSub}>
              每一步都有明確輸出物與可驗收項目，避免「做完看不到成效」
            </p>
          </div>

          <div className={styles.stepsGrid}>
            {steps.map((s) => (
              <article className={styles.stepCard} key={s.num}>
                <div className={styles.stepTop}>
                  <div className={styles.stepNum}>{s.num}</div>
                  <div className={styles.stepMeta}>
                    <div className={styles.stepTitle}>{s.title}</div>
                    <div className={styles.stepSubtitle}>{s.subtitle}</div>
                  </div>
                </div>

                <p className={styles.stepDesc}>{s.desc}</p>

                <ul className={styles.stepList}>
                  {s.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </div>

    </main>
  );
}
