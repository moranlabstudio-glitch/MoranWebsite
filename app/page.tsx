import Link from "next/link";
import { site } from "@/lib/site";
import {
  TrustExperienceSection,
  ServicesSection,
  ProcessSection,
  ModuleSection,
  ContactSection,
} from "@/components/sections";

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <div className="heroShell">
            <div className="heroContent">
              <p className="heroEyebrow">AI 智能營運系統解決方案</p>
              <h1 className="heroTitle">打造可自動運轉的企業 AI 營運中樞</h1>
              <p className="heroLead">整合 CRM｜AI Agent｜營運自動化｜決策分析<br />讓企業降低人力成本、提升效率、持續成長</p>
              <p className="heroDesc">{site.description}</p>
              <div className="heroActions">
                <Link className="btn primary" href="/contact">
                  預約免費顧問諮詢
                  <svg className="btnIcon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <Link className="btn" href="/solutions">
                  了解產品方案
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustExperienceSection />
      <ServicesSection />
      <ProcessSection />
      <ModuleSection />
      <ContactSection />
    </main>
  );
}
