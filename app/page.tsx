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
              <p className="heroEyebrow">專業系統顧問 × 智能整合夥伴</p>
              <h1 className="heroTitle">把複雜變簡單，把技術變成果</h1>
              <p className="heroLead">{site.description}</p>
              <div className="heroActions">
                <Link className="btn primary" href="/contact">
                  預約顧問諮詢
                  <svg className="btnIcon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <Link className="btn" href="/services">
                  了解服務項目
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
