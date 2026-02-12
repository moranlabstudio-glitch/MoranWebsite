import ScrollReveal from "@/components/ScrollReveal";

/** 首頁：左圖右文區塊（多樣化呈現） */

export default function TrustExperienceSection() {
  return (
    <section className="section-block section-block--alt">
      <div className="container">
        <div className="media-block">
          <ScrollReveal direction="left">
            <div className="media-block__img">
              <img src="/images/discuss.png" alt="實務導入經驗" />
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={150}>
            <div className="media-block__body">
              <h3>以實務導入經驗為基礎，專注於「能用、好用、可維運」</h3>
              <p>我們以溫和但務實的節奏，陪你把需求說清楚、把系統做穩，並確保上線後能被團隊真正使用</p>
              <ul className="list">
                <li>大型系統導入經驗：重視可靠性、資安與跨系統整合</li>
                <li>專案管理與文件規範：節奏清楚、可驗收、可追溯</li>
                <li>整合與客製開發：以可維運、可擴充為設計前提</li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
