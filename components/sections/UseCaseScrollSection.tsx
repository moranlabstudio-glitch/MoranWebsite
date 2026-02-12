"use client";

import Link from "next/link";
import SectionBlock from "./SectionBlock";
import SectionTitleBlock from "./SectionTitle";

/** 適合的導入情境 — Bento Grid 專業版面 */

const featuredCards = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    label: "對外",
    title: "客戶／消費者體驗",
    desc: "從第一線客服到行銷推播，讓每一次互動都精準、一致、可追蹤。自動回覆結合知識庫（RAG），即時偵測情緒並轉接專人，確保服務品質零落差。",
    tags: ["智慧客服", "情緒偵測", "知識庫 RAG", "成效追蹤"],
    accent: "usecase-featured--external",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    label: "對內",
    title: "員工／流程效率",
    desc: "將散落在手冊、系統、人腦中的知識集中管理，讓新人快速上手、流程自動流轉。跨系統整合 CRM、工單與資料庫，減少重複作業與人為失誤。",
    tags: ["企業知識助理", "自動分類", "跨系統整合", "流程提速"],
    accent: "usecase-featured--internal",
  },
];

const gridCards = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    num: "01",
    title: "數據與報表",
    desc: "關鍵指標儀表板、對話品質分析、常見問題統計，支援決策與持續優化。",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    num: "02",
    title: "流程自動化",
    desc: "工單派送、審核流程、通知觸發，讓系統串接既有流程減少重複作業。",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    num: "03",
    title: "客服品質與培訓",
    desc: "對話紀錄分析、常見問答優化、新人訓練素材，提升服務一致性。",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    num: "04",
    title: "行銷與活動觸發",
    desc: "活動訊息推播、優惠規則、轉換追蹤，讓行銷流程可自動化與可衡量。",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="8.5" cy="7" r="4" />
        <line x1="20" y1="8" x2="20" y2="14" />
        <line x1="23" y1="11" x2="17" y2="11" />
      </svg>
    ),
    num: "05",
    title: "內部協作與審批",
    desc: "跨部門協作流程、審核派送、進度透明可追蹤，打破資訊孤島。",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
    num: "06",
    title: "合規與報表產出",
    desc: "合規紀錄、報表自動產出、稽核軌跡，支援法規與管理需求。",
  },
];

export default function UseCaseScrollSection() {
  return (
    <SectionBlock alt>
      <SectionTitleBlock
        subtitleEn="Use Cases"
        title="適合的導入情境"
        desc="從最常被問、最耗時、最容易出錯的環節開始，先做出可衡量的改善，再逐步擴大導入範圍。"
      />

      {/* 兩張主要情境卡 */}
      <div className="usecase-featured">
        {featuredCards.map((card) => (
          <div className={`usecase-featured__card ${card.accent}`} key={card.title}>
            <div className="usecase-featured__head">
              <div className="usecase-featured__icon">{card.icon}</div>
              <span className="usecase-featured__label">{card.label}</span>
            </div>
            <h3 className="usecase-featured__title">{card.title}</h3>
            <p className="usecase-featured__desc">{card.desc}</p>
            <div className="usecase-featured__tags">
              {card.tags.map((tag) => (
                <span className="usecase-tag" key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* 六張情境子卡 */}
      <div className="usecase-grid">
        {gridCards.map((card) => (
          <div className="usecase-grid__card" key={card.num}>
            <div className="usecase-grid__head">
              <div className="usecase-grid__icon">{card.icon}</div>
              <span className="usecase-grid__num">{card.num}</span>
            </div>
            <h4 className="usecase-grid__title">{card.title}</h4>
            <p className="usecase-grid__desc">{card.desc}</p>
          </div>
        ))}
      </div>

      <div className="block-actions block-actions--center" style={{ marginTop: 40 }}>
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
