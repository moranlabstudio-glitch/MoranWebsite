"use client";

import Image from "next/image";
import { useState } from "react";
import { site } from "@/lib/site";
import ScrollReveal from "@/components/ScrollReveal";

type ContactSectionProps = {
  /** 獨立頁使用時設為 true，標題用 h1 */
  asPageTitle?: boolean;
};

/** 聯絡我們區塊 — 可放在首頁或獨立聯絡頁，左圖文 + 右表單 */
export default function ContactSection({ asPageTitle }: ContactSectionProps) {
  const TitleTag = asPageTitle ? "h1" : "h2";
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setOk(null);
    setLoading(true);
    const form = new FormData(e.currentTarget);
    const payload = {
      name: String(form.get("name") || ""),
      company: String(form.get("company") || ""),
      phone: String(form.get("phone") || ""),
      email: String(form.get("email") || ""),
      topic: String(form.get("topic") || ""),
      message: String(form.get("message") || ""),
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json()) as { ok: boolean; id?: string; error?: string };
      if (!data.ok) throw new Error(data.error || "submit failed");
      setOk(`已送出！我們會盡快回覆（編號：${data.id}）`);
      (e.target as HTMLFormElement).reset();
    } catch (err: unknown) {
      setOk(`送出失敗：${err instanceof Error ? err.message : "unknown"}（也可直接寄信至 ${site.email}）`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="section-block contact-section">
      <div className="container contact-page__container">
        <ScrollReveal direction="left">
          <div className="contact-page__left">
            <TitleTag className="contact-page__title">諮詢服務</TitleTag>
            <p className="contact-page__desc">
              不論您是否已有具體規劃，或僅有初步想法，都歡迎留下聯絡資訊與簡要描述，我們將儘速與您聯繫            </p>
            <div className="contact-page__img">
              <Image
                src="/images/ContactUs.png"
                alt="聯絡我們"
                fill
                sizes="(max-width: 1200px) 100vw, 50vw"
                className="contact-page__img-inner"
              />
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal direction="right" delay={150}>
        <div className="contact-page__right">
          <div className="contact-form-card">
            <form onSubmit={onSubmit} className="contact-form">
              <div className="contact-form__row">
                <label className="contact-form__label">
                  <span className="contact-form__label-text">姓名<span className="contact-form__asterisk">*</span></span>
                  <input className="contact-form__input" name="name" placeholder="請輸入姓名" required />
                </label>
                <label className="contact-form__label">
                  <span className="contact-form__label-text">公司名稱</span>
                  <input className="contact-form__input" name="company" placeholder="公司/單位（可不填）" />
                </label>
              </div>
              <div className="contact-form__row">
                <label className="contact-form__label">
                  <span className="contact-form__label-text">連絡電話<span className="contact-form__asterisk">*</span></span>
                  <input className="contact-form__input" name="phone" type="tel" placeholder="請輸入連絡電話" required />
                </label>
                <label className="contact-form__label">
                  <span className="contact-form__label-text">電子信箱<span className="contact-form__asterisk">*</span></span>
                  <input className="contact-form__input" name="email" type="email" placeholder="請輸入 Email" required />
                </label>
              </div>
              <label className="contact-form__label">
                <span className="contact-form__label-text">詢問類型<span className="contact-form__asterisk">*</span></span>
                <select className="contact-form__input" name="topic" defaultValue="客製智能系統" required>
                  <option>客製智能系統</option>
                  <option>現成方案（標準版）</option>
                  <option>數位轉型顧問</option>
                  <option>其他</option>
                </select>
              </label>
              <label className="contact-form__label">
                <span className="contact-form__label-text">需求描述<span className="contact-form__asterisk">*</span></span>
                <textarea
                  className="contact-form__textarea"
                  name="message"
                  placeholder="請描述您的需求（550 字以內）"
                  maxLength={550}
                  required
                />
                <span className="contact-form__hint">請描述需求，我們將根據行業別與類型，指派專人與您聯繫。</span>
              </label>
              <button className="btn primary contact-form__submit" type="submit" disabled={loading}>
                {loading ? "送出中..." : "送出"}
              </button>
              {ok ? <p className="contact-form__feedback">{ok}</p> : null}
            </form>
          </div>
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
