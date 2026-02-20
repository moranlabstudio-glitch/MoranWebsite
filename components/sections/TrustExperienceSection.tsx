import ScrollReveal from "@/components/ScrollReveal";

/** 首頁：解決企業痛點區塊 */

const painPoints = [
  { problem: "客戶資料分散", solution: "CRM 整合，統一客戶資料中樞" },
  { problem: "銷售依賴人工", solution: "AI 自動成交，智能跟進與報價" },
  { problem: "客服人力不足", solution: "AI 客服，24 小時即時回應" },
  { problem: "行銷無法精準", solution: "AI 行銷分析，精準分群與推播" },
  { problem: "營運靠人工經驗", solution: "數據與 AI 決策，即時洞察支援" },
];

export default function TrustExperienceSection() {
  return (
    <section className="section-block section-block--alt">
      <div className="container">
        <div className="media-block">
          <ScrollReveal direction="left">
            <div className="media-block__img">
              <img src="/images/discuss.png" alt="企業 AI 智能營運" />
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={150}>
            <div className="media-block__body">
              <h3>企業成長的五大瓶頸，以 AI 系統根本解決</h3>
              <p>當企業規模成長，流程與資料開始分散、跟進與回覆變慢、決策仰賴經驗。沐苒以「資料中樞 + AI 引擎 + 自動化流程」的方式，系統性解決從獲客到成交、從客服到營運分析的核心痛點</p>
              <br></br>
              <ul className="list">
                {painPoints.map((item) => (
                  <li key={item.problem}>
                    <strong>{item.problem}</strong> → {item.solution}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
