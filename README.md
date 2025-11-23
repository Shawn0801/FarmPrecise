# FarmPrecise 🌾

農業資料開放平台儀表板 - 整合台灣政府農業API的資料視覺化平台

## 功能特色

- 📊 即時農產品批發市場交易行情
- 🌤️ 農業氣象資訊與提醒
- 📈 熱門農產品趨勢分析
- 📰 最新農業消息
- 🌱 農業統計資料視覺化
- 🎨 使用 Tailwind CSS + PrimeNG 設計的響應式介面
- ⚡ Angular 17 獨立元件架構

## 技術架構

- **框架**: Angular 17 (Standalone Components)
- **語言**: TypeScript
- **樣式**: Tailwind CSS
- **UI 元件庫**: PrimeNG
- **部署**: GitHub Pages
- **資料來源**: 行政院農業委員會農業資料開放平台

## 快速開始

### 安裝依賴

```bash
npm install
```

### 開發模式

```bash
npm start
```

在瀏覽器中開啟 [http://localhost:4200](http://localhost:4200)

### 建置生產版本

```bash
npm run build
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
   # 靜態檔案會生成在 dist/farmprecise/browser 目錄
   ```

## 專案結構

```
FarmPrecise/
├── .github/
│   └── workflows/
│       └── deploy.yml            # GitHub Actions 部署設定
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── home/            # 首頁元件
│   │   │   ├── dashboard/       # 儀表板主頁
│   │   │   ├── weather-section/ # 農業氣象區
│   │   │   ├── trading-section/ # 交易行情區
│   │   │   └── news-section/    # 最新消息區
│   │   ├── services/
│   │   │   └── agriculture.service.ts  # 農業資料服務
│   │   ├── app.component.ts     # 根元件
│   │   └── app.routes.ts        # 路由設定
│   ├── assets/                  # 靜態資源
│   ├── index.html              # 入口 HTML
│   ├── main.ts                 # 應用程式進入點
│   └── styles.css              # 全域樣式
├── angular.json                # Angular 配置
├── tailwind.config.js         # Tailwind CSS 配置
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
儀表板提供三大功能區，透過側邊導航欄切換：

#### 🌤️ 農業氣象
- 氣象提醒與警示
- 主要產區天氣資訊（溫度、濕度、降雨量）
- 農事建議與注意事項

#### 📊 交易行情
- 農業統計資料卡片（農戶總數、耕地面積、年產量、批發市場）
- 熱門農產品圖表
- 市場動態資訊
- 詳細的農產品交易行情表格

#### 📰 最新消息
- 農業政策、技術、市場、活動分類
- 新聞卡片展示
- 詳細內容彈窗
- 新聞分類過濾

## PrimeNG 元件使用

本專案使用以下 PrimeNG 元件：
- **Button**: 按鈕元件
- **Card**: 卡片容器
- **Table**: 資料表格
- **Dialog**: 對話框
- **ProgressBar**: 進度條
- **Tag**: 標籤
- **Message**: 訊息提示
- **TabMenu**: 分頁選單

## 開發說明

### 新增元件

使用 Angular CLI 生成新元件：

```bash
ng generate component components/your-component --standalone
```

### 新增服務

```bash
ng generate service services/your-service
```

### 整合新 API

在 `src/app/services/agriculture.service.ts` 中新增 API 函式:

```typescript
getNewData(): Observable<any> {
  return this.http.get<any>('API_URL').pipe(
    catchError(error => {
      console.error('Error:', error);
      return of([]);
    })
  );
}
```

## 授權

本專案僅供學習與研究使用
