# AI 圖片生成指南

為了讓網站看起來更專業，建議使用以下工具生成 AI 圖片：

## 推薦的 AI 圖片生成工具

### 1. **Midjourney** (推薦)
- 網址：https://midjourney.com
- 適合生成：科技感、專業的企業形象圖片
- 建議提示詞：
  - "Futuristic AI technology dashboard, dark blue and cyan color scheme, professional, clean, modern, 4k"
  - "AI neural network visualization, abstract tech background, blue and green gradient, professional"
  - "Enterprise AI system interface, dark theme, blue and cyan accents, minimalist"

### 2. **DALL-E 3** (OpenAI)
- 網址：https://openai.com/dall-e-3
- 適合生成：清晰的產品展示圖
- 建議提示詞：
  - "Professional AI technology illustration, dark background, blue and cyan colors, modern, clean design"
  - "Abstract AI network visualization, tech background, professional corporate style"

### 3. **Stable Diffusion**
- 網址：https://stability.ai
- 適合生成：高品質的視覺元素
- 建議提示詞：
  - "AI technology concept art, dark blue background, glowing cyan accents, professional, 8k"

### 4. **Leonardo.ai**
- 網址：https://leonardo.ai
- 適合生成：多樣化的視覺風格
- 建議提示詞：
  - "Modern AI dashboard, dark theme, blue gradient, professional UI design"

## 圖片規格建議

### Hero 區域圖片
- 尺寸：1200x600px 或 1600x800px
- 格式：WebP 或 PNG
- 風格：抽象、科技感、漸變背景
- 顏色：深藍色 (#070A12) + 品牌藍 (#57A6FF) + 沐苒綠 (#56F0C7)

### 卡片插圖
- 尺寸：400x300px
- 格式：SVG 或 WebP
- 風格：簡約、圖標化
- 用途：服務卡片、解決方案展示

### 背景圖片
- 尺寸：1920x1080px
- 格式：WebP (壓縮後)
- 風格：抽象、低對比度、不搶主體

## 圖片放置位置

將生成的圖片放在 `public/images/` 目錄下：

```
public/
  images/
    hero-bg.webp          # Hero 背景圖
    ai-visual.webp        # AI 視覺元素
    service-1.webp        # 服務卡片圖
    service-2.webp
    service-3.webp
```

## 使用方式

在代碼中引用圖片：

```tsx
import Image from "next/image";

<Image 
  src="/images/hero-bg.webp" 
  alt="AI Technology" 
  width={1200} 
  height={600}
  priority
/>
```

## 免費替代方案

如果暫時無法生成圖片，可以使用：

1. **Unsplash** (https://unsplash.com)
   - 搜尋：AI, technology, digital transformation
   - 免費高品質圖片

2. **Pexels** (https://pexels.com)
   - 搜尋：artificial intelligence, tech background
   - 免費商用圖片

3. **CSS 漸變 + SVG**
   - 目前網站已使用此方式
   - 可以繼續優化現有的視覺效果

## 圖片優化建議

1. 使用 WebP 格式以減少檔案大小
2. 使用 Next.js Image 組件自動優化
3. 添加適當的 alt 文字以提升 SEO
4. 考慮響應式圖片（不同尺寸）

## 當前視覺元素

網站目前使用：
- SVG 圖形元素（已添加 AIVisual 組件）
- CSS 漸變背景
- 動畫效果

這些已經提供了專業的視覺效果，可以在此基礎上添加實際圖片。

