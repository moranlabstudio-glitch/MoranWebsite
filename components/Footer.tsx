"use client";

import Link from "next/link";
import { site } from "@/lib/site";
import { useEffect, useState } from "react";

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Column 1 - 服務項目 */}
          <div className="footer-col">
            <h4 className="footer-heading">服務項目</h4>
            <nav className="footer-links">
              <Link href="/services#svc-integration" className="footer-link">系統整合與平台建置</Link>
              <Link href="/services#svc-consulting" className="footer-link">數位轉型顧問</Link>
              <Link href="/services#svc-development" className="footer-link">跨平台應用開發</Link>
              <Link href="/services#svc-analytics" className="footer-link">資料分析與決策</Link>
              <Link href="/services#svc-automation" className="footer-link">流程自動化</Link>
              <Link href="/solutions" className="footer-link">客製智能系統</Link>
            </nav>
          </div>

          {/* Column 2 - 解決方案 */}
          <div className="footer-col">
            <h4 className="footer-heading">解決方案</h4>
            <nav className="footer-links">
              <Link href="/solutions" className="footer-link">產品方案</Link>
              <Link href="/method" className="footer-link">導入方法</Link>
            </nav>
          </div>

          {/* Column 3 - 公司訊息 */}
          <div className="footer-col">
            <h4 className="footer-heading">公司訊息</h4>
            <nav className="footer-links">
              <Link href="/about" className="footer-link">關於我們</Link>
              <Link href="/contact" className="footer-link">聯絡我們</Link>
            </nav>
          </div>

          {/* Column 4 - 聯絡我們 */}
          <div className="footer-col footer-contact-col">
            <h4 className="footer-heading">聯絡我們</h4>
            <div className="footer-contact-info">
              <p>沐苒資訊</p>
              <p>統一編號：60023214</p>
            </div>
            <div className="footer-social">
              {/* LINE 官方帳號 */}
              <a href="https://line.me/R/ti/p/@898wshkx" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="LINE 官方帳號">
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386a.63.63 0 01-.63-.629V8.108a.63.63 0 01.63-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016a.63.63 0 01-.63.629.626.626 0 01-.51-.262l-2.397-3.274v2.906a.63.63 0 01-.629.63.63.63 0 01-.63-.63V8.108a.63.63 0 01.63-.63c.2 0 .381.095.51.262l2.397 3.274V8.108a.63.63 0 011.259 0v4.771zm-5.741 0a.63.63 0 01-1.26 0V8.108a.63.63 0 011.26 0v4.771zm-2.527.629H4.856a.63.63 0 01-.63-.629V8.108a.63.63 0 011.26 0v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} {site.enName}. All rights reserved.
          </p>
        </div>
      </div>

      {/* Back to top button */}
      <button
        className={`back-to-top ${showTop ? "visible" : ""}`}
        onClick={scrollToTop}
        aria-label="回到頂部"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>
    </footer>
  );
}
