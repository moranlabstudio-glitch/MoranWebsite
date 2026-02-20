import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import { SectionBlock } from "@/components/sections";
import { IntegrationIcon, GrowthIcon, DevicesIcon, AnalyticsIcon, AutomationIcon } from "@/components/ServiceIcons";

export const metadata = { title: "關於我們" };



export default function AboutPage() {
  return (
    <main className="page">
      <div className="container">
        <SectionTitle
          subtitleEn="About"
          title="關於 MORAN 沐苒"
          desc="協助企業建立以 AI 為核心的智能營運中樞，以更少人力、更高效率、更精準決策，實現持續成長"
        />
        <div className="media-block" style={{ alignItems: 'center', marginTop: 40 }}>
          <div className="media-block__img" style={{ aspectRatio: 'auto', minHeight: 420 }}>
            <Image src="/images/4.jpg" alt="AI 智能營運系統解決方案" fill />
          </div>
          <div className="media-block__body">
            <h3 className="page-intro__headline" style={{ marginBottom: 12 }}>企業 AI 智能營運的實踐者</h3>
            <p className="page-intro__lead" style={{ margin: 0 }}>
              MORAN 沐苒由大型企業數位轉型資深成員於 2024 年創立，專注於 AI 智能營運系統解決方案，我們相信企業成長的關鍵不在於更多人力，而在於建立可自動運作的智能中樞
            </p>
            <p className="page-intro__lead" style={{ margin: "16px 0 0" }}>
              團隊結合 AI 技術、業務顧問與系統整合三大核心能力，協助企業老闆與決策層快速導入 AI，將 CRM、客服、行銷與營運流程全面自動化，實現可量化的降本增效成果
            </p>
          </div>
        </div>

        <div className="value-section">
          <div className="value-section__header">
            <span className="value-section__en">Our Values</span>
            <h3 className="value-section__title">核心理念</h3>
          </div>
          <div className="value-grid">
            <div className="value-card">
              <div className="value-card__marker"></div>
              <h4 className="value-card__title">成果優先</h4>
              <p className="value-card__desc">
                以可量化的業務成果為導向，每一個 AI 解決方案都聚焦於降低成本、提升效率、驅動成長，讓投資產生真正的回報
              </p>
            </div>
            <div className="value-card">
              <div className="value-card__marker"></div>
              <h4 className="value-card__title">企業級可靠</h4>
              <p className="value-card__desc">
                具備企業級系統架構設計與導入經驗，重視穩定性、資安與可擴充性，確保 AI 系統能長期穩定支撐企業營運
              </p>
            </div>
            <div className="value-card">
              <div className="value-card__marker"></div>
              <h4 className="value-card__title">持續創造價值</h4>
              <p className="value-card__desc">
                AI 導入是起點，我們持續優化系統、擴展應用場景，讓企業的 AI 智能營運能力隨業務成長持續進化
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
