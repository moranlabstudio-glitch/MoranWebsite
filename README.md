# 沐苒 MORAN 官網（Next.js）

這是可直接跑的官網第一版：
- **A**：完整官網文案（已寫進各頁面）
- **B**：首頁 Wireframe / 區塊邏輯（已落成 UI）
- **C**：可跑的 Next.js 程式碼
- **D**：品牌語氣與關鍵句（內嵌在內容與標語）

## 1) 安裝

```bash
npm install
```

## 2) 開發模式啟動

```bash
npm run dev
```

開啟：
- http://localhost:3000

## 3) 頁面
- `/` 首頁
- `/services` 客製智能系統
- `/solutions` 現成 AI 解決方案
- `/method` 方法論
- `/about` 關於沐苒
- `/contact` 聯絡（含示範 API）

## 4) 表單 API
- `POST /api/contact`
  - 目前示範：把表單內容印到 server console（方便你先驗證流程）
  - 下一步可改：寄信（SMTP / Gmail）、寫入 Notion、或寫入你的 CRM / MySQL

## 5) 自訂資訊
- `lib/site.ts`：網站名稱、標語、描述、Email
- `app/globals.css`：品牌色、介面風格

---

如果你要我幫你加：
- SEO（真正網域、OG 圖）
- 多語系（中/英）
- 作品案例/客戶見證
- 方案頁加入「詢價」或「預約時段」
- 接 Notion/Google Sheet/CRM

你直接跟我說要接哪一種。
