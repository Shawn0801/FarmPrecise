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

## 專案結構

```
FarmPrecise/
├── app/
│   ├── dashboard/          # 儀表板頁面
│   │   ├── page.tsx       # 主要儀表板
│   │   ├── loading.tsx    # 載入畫面
│   │   └── error.tsx      # 錯誤處理
│   ├── layout.tsx         # 根佈局
│   ├── page.tsx           # 首頁
│   └── globals.css        # 全域樣式
├── components/            # React 元件
│   ├── StatCard.tsx      # 統計卡片元件
│   ├── CropPriceTable.tsx # 價格表格元件
│   └── TopCropsChart.tsx  # 圖表元件
├── lib/
│   └── api.ts            # API 整合函式
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
