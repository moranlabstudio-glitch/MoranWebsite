import Link from "next/link";
import SectionBlock from "./SectionBlock";
import SectionTitleBlock from "./SectionTitle";

/** 首頁：左圖右文（精選案例＋引言）＋ 下方左右滑動展示列 */

const caseScrollItems = [
  { title: "客服高峰期承接 80% 詢問", desc: "以一致口徑與知識庫支撐大量詢問，減少人力壓力" },
  { title: "會員中心串接全通路", desc: "整合 LINE / 官網 / CRM，提升轉換與留存" },
  { title: "企業知識助理減少新人訓練時間", desc: "手冊與規範可檢索，縮短上手週期" },
];

export default function CaseSection() {
  return (
    <SectionBlock>
      <SectionTitleBlock
        subtitleEn="Case Studies"
        title="成功案例與成效"
        desc="以成效為導向的導入節奏，讓系統真正成為日常運營工具"
      />
      <div className="media-block">
        <div className="media-block__img">精選案例示意圖（可替換）</div>
        <div className="media-block__body">
          <h3>不只交付，而是陪您走更長遠</h3>
          <p className="page-quote__text" style={{ marginBottom: 8 }}>
            「前後台整合順暢，操作簡單直覺，大大減少教育訓練成本」
          </p>
          <p className="page-quote__attr" style={{ marginBottom: 16 }}>— 客戶評價（可替換為實際客戶）</p>
          <p>我們協助企業把系統真正用起來，用數據說話、用流程省時</p>
        </div>
      </div>
      <div className="block-scroll-wrap" style={{ marginTop: 24 }}>
        <div className="block-scroll" role="region" aria-label="更多案例">
          {caseScrollItems.map((c) => (
            <div className="block-scroll-card" key={c.title}>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="block-actions block-actions--center" style={{ marginTop: 24 }}>
        <Link className="btn primary" href="/contact">
          預約顧問諮詢
          <svg className="btnIcon" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
        <Link className="btn" href="/solutions">先看現成方案</Link>
      </div>
    </SectionBlock>
  );
}
