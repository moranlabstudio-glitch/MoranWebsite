import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import { SectionBlock } from "@/components/sections";
import { IntegrationIcon, GrowthIcon, DevicesIcon, AnalyticsIcon, AutomationIcon } from "@/components/ServiceIcons";

export const metadata = { title: "關於沐苒" };



export default function AboutPage() {
  return (
    <main className="page">
      <div className="container">
        <SectionTitle
          subtitleEn="About"
          title="關於沐苒 MORAN"
          desc="我們相信：技術的價值，來自它能被真正使用。"
        />
        <div className="media-block" style={{ alignItems: 'center', marginTop: 40 }}>
          <div className="media-block__img" style={{ aspectRatio: 'auto', minHeight: 420 }}>
            <Image src="/images/4.jpg" alt="數位轉型・系統整合" fill />
          </div>
          <div className="media-block__body">
            <h3 className="page-intro__headline" style={{ marginBottom: 12 }}>Hello!</h3>
            <p className="page-intro__lead" style={{ margin: 0 }}>
              團隊是由大型企業數位資深成員於2024年共同創立，專注於數位轉型、系統開發與 AI 智慧應用導入。我們由一群熱愛技術、善於傾聽且擁有高度責任感的工程師與顧問組成，結合顧問思維與工程實力，以使用者需求為核心，打造真正能落地與創造價值的解決方案。期望以穩定技術底層與靈活創新思維，讓科技成為企業成長的推動力。
            </p>
          </div>
        </div>

        <div className="value-section">
          <div className="value-section__header">
            <span className="value-section__en">Our Values</span>
            <h3 className="value-section__title">我們的價值</h3>
          </div>
          <div className="value-grid">
            <div className="value-card">
              <div className="value-card__marker"></div>
              <h4 className="value-card__title">專業價值</h4>
              <p className="value-card__desc">
                具備企業級專案導入與顧問經驗，熟悉跨產業運作模式與挑戰。不只是執行，更以策略思維協助企業落地創新。
              </p>
            </div>
            <div className="value-card">
              <div className="value-card__marker"></div>
              <h4 className="value-card__title">高效價值</h4>
              <p className="value-card__desc">
                能快速理解業務脈絡與需求，將複雜的問題轉化為具體可行的行動方案，協助企業以更高效的方式達成目標。
              </p>
            </div>
            <div className="value-card">
              <div className="value-card__marker"></div>
              <h4 className="value-card__title">敏捷價值</h4>
              <p className="value-card__desc">
                小團隊結構靈活、決策快速、執行深入，能隨市場變化快速調整方向，持續推進專案與創新成果。
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
