import Link from "next/link";
import SectionBlock from "./SectionBlock";
import SectionTitleBlock from "./SectionTitle";

export default function UseCaseSection() {
  return (
    <SectionBlock>
      <SectionTitleBlock
        subtitleEn="Use Cases"
        title="適合的導入情境"
        desc="先把最常被問、最耗時、最容易出錯的流程，交給系統處理。"
      />
      <div className="block-split">
        <div className="block-panel">
          <h3>對外（客戶/消費者）</h3>
          <ul className="list">
            <li>客服自動回覆 + 知識庫（RAG）</li>
            <li>情緒偵測：需要安撫 → 轉接專人</li>
            <li>活動/優惠：一致口徑、可追蹤成效</li>
          </ul>
          <div className="badges">
            <span className="badge">售後服務</span>
            <span className="badge">品牌口吻一致</span>
            <span className="badge">可追蹤 KPI</span>
          </div>
        </div>
        <div className="block-panel">
          <h3>對內（員工/流程）</h3>
          <ul className="list">
            <li>企業知識助理：手冊/規範/FAQ 一問即答</li>
            <li>自動貼標與分類：工單、留言、客服對話</li>
            <li>跨系統整合：CRM、工單、資料庫、內部系統</li>
          </ul>
          <div className="badges">
            <span className="badge">知識沉澱</span>
            <span className="badge">流程提速</span>
            <span className="badge">降低新人上手時間</span>
          </div>
        </div>
      </div>
      <div className="hr" />
      <div className="block-actions block-actions--center">
        <Link className="btn primary" href="/contact">
          我想導入，先聊聊
          <svg className="btnIcon" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </SectionBlock>
  );
}
