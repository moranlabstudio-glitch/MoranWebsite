import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import { SectionBlock } from "@/components/sections";
import { IntegrationIcon, GrowthIcon, DevicesIcon, AnalyticsIcon, AutomationIcon } from "@/components/ServiceIcons";

export const metadata = { title: "AI 解決方案" };

const services = [
  {
    id: "svc-integration",
    title: "AI 智能營運導入",
    desc: "從企業現況盤點出發，規劃 AI 智能營運架構，建立 CRM、自動化與決策分析系統，協助企業完成從人工流程到 AI 驅動的全面轉型，降低人力成本並提升整體競爭力",
    Icon: IntegrationIcon
  },
  {
    id: "svc-consulting",
    title: "AI 業務成長顧問",
    desc: "協助企業老闆與決策層釐清 AI 導入優先順序，設計以成果為導向的成長策略，從銷售自動化到客戶經營，讓 AI 真正為企業創造可量化的業績成長",
    Icon: GrowthIcon
  },
  {
    id: "svc-development",
    title: "AI Agent 與系統開發",
    desc: "客製開發符合企業業務邏輯的 AI Agent、自動化工作流與智能應用，整合既有系統並持續優化，讓企業以最小投入獲得最大的 AI 效益",
    Icon: DevicesIcon
  },
  {
    id: "svc-analytics",
    title: "營運數據與決策分析",
    desc: "整合企業各系統資料，打造即時 KPI 儀表板與 AI 分析報告，讓管理層以數據掌握銷售、客服與行銷表現，將直覺決策轉化為數據驅動",
    Icon: AnalyticsIcon
  },
  {
    id: "svc-automation",
    title: "全流程自動化建置",
    desc: "評估並重新設計企業核心流程，導入 AI 自動化引擎，讓銷售、客服、行銷與內部管理全面自動運作，實現人力成本的結構性降低",
    Icon: AutomationIcon
  },
];

const customItems = [
  { title: "AI CRM 與自動成交系統", desc: "整合客戶資料、AI 分析與自動跟進，建立可複製的銷售機制，大幅提升業務效能與成交率" },
  { title: "AI 客服與知識助理平台", desc: "結合企業知識庫與 AI 語言模型，建立 24 小時智能客服，降低人工成本，提升服務品質" },
  { title: "AI 行銷自動化系統", desc: "依客戶行為自動分群、推播與執行再行銷，即時追蹤 ROAS 與轉換分析，讓行銷預算發揮最大效益" },
  { title: "客戶經營與流失預測系統", desc: "自動執行續約提醒、個人化推薦與流失預警，將客戶生命週期轉化為可預測的穩定收入來源" },
  { title: "AI 決策分析與 KPI 儀表板", desc: "整合各系統數據，提供即時 KPI 監控、銷售預測與 AI 策略建議，讓管理層決策有據可依" },
  { title: "企業系統整合平台", desc: "無縫串接 ERP、財務、電商、行銷工具與 IoT 設備，打通資料孤島，建立統一智能營運中樞" },
  { title: "AI 業務助理與自動報價", desc: "AI 自動生成報價、跟進提醒與成交建議，讓業務人員專注在高價值互動，提升整體銷售效率" },
  { title: "數位化作業與 SOP 自動化", desc: "將企業內部 SOP 轉化為可執行的自動化工作流，減少人工錯誤，提升作業一致性與效率" },
  { title: "多渠道整合管理平台", desc: "整合網站、電商、社群與線下渠道，建立統一管理介面，讓訂單、客戶與行銷活動即時同步" },
  { title: "AI 預測與智能推薦系統", desc: "以 AI 模型分析購買行為與市場趨勢，提供個人化推薦與需求預測，讓數據驅動企業成長策略" },
];

export default function ServicesPage() {
  return (
    <main className="page">
      <div className="container">
        <SectionTitle
          subtitleEn="AI Solutions"
          title="AI 解決方案"
          desc="我們是企業 AI 智能營運系統解決方案商，協助企業建立可自動運轉的營運中樞，從 CRM、AI Agent 到流程自動化，全面提升效率、降低成本、驅動成長"
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
          title="客製 AI 智能系統"
          desc="以企業實際營運流程為核心，從需求盤點、架構設計到系統上線，量身打造符合企業成長目標的 AI 智能解決方案"
        />
        <div className="media-block">
          <div className="media-block__img">
            <img src="/images/6.png" alt="客製 AI 智能系統" />
          </div>
          <div className="media-block__body">
            <h3>依企業需求，打造專屬 AI 營運系統</h3>
            <p>
              我們深入了解企業的業務模式與成長目標，從 AI 策略規劃到系統落地，提供一站式完整解決方案，無論是強化銷售轉換、降低客服成本，或建立數據驅動的決策機制，我們都能以最適合的 AI 架構實現
            </p>
            <p>不論企業規模大小，我們皆依實際需求量身打造，確保 AI 系統真正融入企業流程，持續創造可量化的營運價值</p>
          </div>
        </div>
        <SectionTitle
          subtitleEn="Customizable"
          title="常見客製方向"
          desc="以下為企業導入 AI 智能營運系統的常見客製化方向，可依業務需求靈活組合"
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
          <Link className="btn primary" href="/contact">預約免費顧問諮詢</Link>
          <Link className="btn" href="/solutions">了解產品方案</Link>
        </div>
      </SectionBlock>
    </main>
  );
}
