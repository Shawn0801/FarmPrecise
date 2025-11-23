# FarmPrecise 🌾

農業資料開放平台儀表板 - 整合台灣政府農業API的資料視覺化平台

## 功能特色

- 📊 即時農產品批發市場交易行情
- 📈 熱門農產品趨勢分析
- 🌱 農業統計資料視覺化
- 🎨 使用 Tailwind CSS 設計的響應式介面
- ⚡ Next.js 15 App Router 架構
- 🔄 自動資料更新與快取

## 技術架構

- **框架**: Next.js 15 (App Router)
- **語言**: TypeScript
- **樣式**: Tailwind CSS
- **資料來源**: 行政院農業委員會農業資料開放平台

## 快速開始

### 安裝依賴

```bash
npm install
```

### 開發模式

```bash
npm run dev
```

在瀏覽器中開啟 [http://localhost:3000](http://localhost:3000)

### 建置生產版本

```bash
npm run build
npm start
```

### 部署到 GitHub Pages

本專案已配置自動部署到 GitHub Pages：

1. **啟用 GitHub Pages**：
   - 前往 GitHub 專案的 Settings > Pages
   - Source 選擇 "GitHub Actions"

2. **自動部署**：
   - 推送到 `main` 或 `master` 分支時自動觸發部署
   - 也可以在 Actions 頁面手動觸發部署

3. **訪問網站**：
   - 部署完成後，網站會發布在: `https://<username>.github.io/FarmPrecise/`

4. **手動建置靜態檔案**：
   ```bash
   npm run build
   # 靜態檔案會生成在 out/ 目錄
   ```

## 專案結構

```
FarmPrecise/
├── .github/
│   └── workflows/
│       └── deploy.yml     # GitHub Actions 部署設定
├── app/
│   ├── dashboard/          # 儀表板頁面
│   │   ├── page.tsx       # 主要儀表板
│   │   ├── loading.tsx    # 載入畫面
│   │   └── error.tsx      # 錯誤處理
│   ├── layout.tsx         # 根佈局
│   ├── page.tsx           # 首頁
│   └── globals.css        # 全域樣式
├── components/            # React 元件
│   ├── DashboardClient.tsx # 儀表板客戶端元件
│   ├── StatCard.tsx       # 統計卡片元件
│   ├── CropPriceTable.tsx # 價格表格元件
│   └── TopCropsChart.tsx  # 圖表元件
├── lib/
│   └── api.ts            # API 整合函式
├── next.config.js        # Next.js 配置（含靜態導出）
└── package.json
```

## API 整合

本專案整合以下農業資料API:

- **農產品批發市場交易行情**: 即時農產品價格與交易量資料
- 資料來源: 農業資料開放平台 (https://data.moa.gov.tw/)

## 頁面功能

### 首頁 (`/`)
- 專案介紹
- 快速導航至儀表板

### 儀表板 (`/dashboard`)
- **統計卡片**: 顯示農戶總數、耕地面積、年產量、批發市場數量
- **熱門農產品圖表**: 視覺化呈現交易最頻繁的農產品
- **市場動態**: 即時市場趨勢資訊
- **交易行情表格**: 詳細的農產品交易資料

## 開發說明

### 新增 API 整合

在 `lib/api.ts` 中新增 API 函式:

```typescript
export async function getNewData() {
  const response = await fetch('API_URL');
  return response.json();
}
```

### 新增元件

在 `components/` 目錄下建立新元件，使用 Tailwind CSS 進行樣式設計。

## 授權

本專案僅供學習與研究使用
