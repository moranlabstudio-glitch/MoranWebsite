import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import { SectionBlock } from "@/components/sections";
import { IntegrationIcon, GrowthIcon, DevicesIcon, AnalyticsIcon, AutomationIcon } from "@/components/ServiceIcons";

export const metadata = { title: "服務項目" };

const services = [
  {
    id: "svc-integration",
    title: "系統整合與平台建置",
    desc: "從企業整體營運流程出發，先進行需求盤點與架構規劃，再實際執行系統整合與平台建置，串連進銷存、門市、生產與客戶管理，打造可長期擴充的一體化營運環境",
    Icon: IntegrationIcon
  },
  {
    id: "svc-consulting",
    title: "數位轉型顧問與導入服務",
    desc: "協助企業釐清數位化方向與優先順序，制定可落地的轉型策略，並負責後續系統導入與流程優化，讓技術真正為營運與管理創造效益",
    Icon: GrowthIcon
  },
  {
    id: "svc-development",
    title: "跨平台應用開發與優化",
    desc: "從使用情境與管理需求規劃功能架構與介面設計，實際開發網站與行動應用，並持續優化系統效能與使用體驗，確保真正落地與被使用",
    Icon: DevicesIcon
  },
  {
    id: "svc-analytics",
    title: "資料分析與決策顧問",
    desc: "將整合後的資料轉化為清晰報表與指標分析，提供企業即時洞察與決策支援，協助管理層快速掌握業績、庫存與客戶狀況",
    Icon: AnalyticsIcon
  },
  {
    id: "svc-automation",
    title: "流程自動化與效率提升",
    desc: "評估企業日常操作與重複流程，規劃並導入自動化方案，提升工作效率、減少錯誤，讓團隊能專注於更有價值的業務活動",
    Icon: AutomationIcon
  },
];

const customItems = [
  { title: "企業管理系統（ERP / CRM / 進銷存）", desc: "整合採購、庫存、銷售、客戶與財務管理，建立完整的企業資源規劃平台，提升跨部門協作效率與營運透明度" },
  { title: "客製化後台管理平台", desc: "依據企業實際管理流程，打造專屬的後台操作介面，涵蓋內容管理、權限控管、審核流程與數據查詢等功能" },
  { title: "智能客服與 AI 對話系統", desc: "結合自然語言處理與企業知識庫，建立 24 小時智能客服，支援品牌口吻回覆、情緒偵測與專人轉接" },
  { title: "知識庫與智能助理系統", desc: "將企業內部文件、SOP 與規範整合為可搜尋、可對話的知識平台，降低重複詢問與人員培訓成本" },
  { title: "流程自動化與智能判斷系統", desc: "評估企業日常操作與重複流程，導入自動化規則與智能判斷邏輯，減少人工錯誤，提升作業效率" },
  { title: "多系統整合平台（API / 資料串接）", desc: "串接企業既有系統與第三方服務，透過 API 整合實現資料同步與流程自動化，消除資訊斷層" },
  { title: "數據分析與營運儀表板", desc: "將散落各系統的資料彙整為即時視覺化報表，提供關鍵指標監控與趨勢分析，輔助經營決策" },
  { title: "訂單 / 會員 / 權限 / 報表系統", desc: "建立完整的訂單處理、會員管理、角色權限與報表產出機制，支援企業日常營運與管理需求" },
  { title: "行動裝置與跨平台應用", desc: "開發適配手機、平板與桌面的跨平台應用，確保團隊隨時隨地皆可操作系統，提升行動辦公效率" },
  { title: "智能推薦與預測分析系統", desc: "運用機器學習與數據模型，提供個人化推薦、需求預測與異常偵測，讓數據驅動企業成長策略" },
];

export default function ServicesPage() {
  return (
    <main className="page">
      <div className="container">
        <SectionTitle
          subtitleEn="Services"
          title="服務項目"
          desc="我們是數位資訊整合的系統整合服務商，專為企業提供系統開發與解決方案，涵蓋：數位轉型規劃、系統整合、客製化系統開發、平台與網站建置"
        />
        <div className="tech-services-grid">
          {services.map((s) => (
            <div id={s.id} className="tech-service-card" key={s.title}>
              <div className="tech-service-card__icon">
                <s.Icon size={48} />
              </div>
              <h3 className="tech-service-card__title">{s.title}</h3>
              <p className="tech-service-card__desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <SectionBlock alt className="svc-custom-block">
        <SectionTitle
          subtitleEn="Custom Solutions"
          title="客製智能系統"
          desc="把系統變成『可用的流程』以企業實際營運流程為核心，從需求訪談、流程盤點到系統架構規劃，量身打造可落地的智慧化解決方案"
        />
        <div className="media-block">
          <div className="media-block__img">
            <img src="/images/6.png" alt="客製智能系統" />
          </div>
          <div className="media-block__body">
            <h3>我們提供什麼</h3>
            <p>
              我們具備多年系統整合與智能應用開發經驗，依據企業實際營運流程，規劃並打造完全客製化的智能系統，從需求分析、架構設計、開發整合到上線維運，提供一站式完整解決方案，協助企業建立穩定、高效且可持續擴展的數位基礎
            </p>
            <p>無論企業規模與產業類型，我們皆可依需求量身打造最適合的系統架構，讓技術真正落地並創造實際營運價值</p>
          </div>
        </div>
        <SectionTitle
          subtitleEn="Customizable"
          title="產品客製項目"
          desc="依據企業需求量身打造，以下為常見的客製化系統方向"
        />
        <div className="custom-items-grid">
          {customItems.map((item) => (
            <div className="custom-item-card" key={item.title}>
              <h3 className="custom-item-card__title">{item.title}</h3>
              <p className="custom-item-card__desc">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="block-actions" style={{ marginTop: 40 }}>
          <Link className="btn primary" href="/contact">我要做客製系統</Link>
          <Link className="btn" href="/solutions">我想先看現成產品</Link>
        </div>
      </SectionBlock>
    </main>
  );
}
