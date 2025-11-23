import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { DialogModule } from 'primeng/dialog';

interface NewsItem {
  id: number;
  title: string;
  category: '政策' | '技術' | '市場' | '活動';
  date: string;
  summary: string;
  content: string;
}

@Component({
  selector: 'app-news-section',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule, TagModule, DialogModule],
  templateUrl: './news-section.component.html',
  styleUrls: ['./news-section.component.css']
})
export class NewsSectionComponent implements OnInit {
  news: NewsItem[] = [];
  selectedNews: NewsItem | null = null;
  displayDialog: boolean = false;
  currentTime = new Date();

  ngOnInit() {
    this.loadNews();
  }

  loadNews() {
    this.news = [
      {
        id: 1,
        title: '農業部推動智慧農業發展計畫',
        category: '政策',
        date: '2025-11-22',
        summary: '農業部宣布投入新台幣 50 億元推動智慧農業發展，協助農民導入 AI 與 IoT 技術...',
        content: '農業部今日宣布「智慧農業 4.0 計畫」，將投入新台幣 50 億元，協助農民導入人工智慧（AI）與物聯網（IoT）技術，提升農業生產效率與品質。計畫內容包括：建置智慧溫室、發展精準農業、推廣無人機應用等。預計在 3 年內協助 5,000 家農戶轉型為智慧農業經營模式。'
      },
      {
        id: 2,
        title: '有機農業面積突破 2 萬公頃',
        category: '市場',
        date: '2025-11-21',
        summary: '台灣有機農業種植面積首次突破 2 萬公頃，較去年同期成長 15%...',
        content: '根據農業部最新統計，台灣有機農業種植面積已達 20,156 公頃，較去年同期成長 15%，創歷史新高。有機驗證農戶數也突破 4,500 戶。農業部表示，將持續推動有機農業，目標在 2030 年達到有機及友善耕作面積占總耕地 10%。消費者對有機農產品需求持續增加，帶動有機市場快速成長。'
      },
      {
        id: 3,
        title: '新型抗旱稻米品種研發成功',
        category: '技術',
        date: '2025-11-20',
        summary: '農業試驗所成功研發出新型抗旱稻米品種，可減少 30% 灌溉用水...',
        content: '農業試驗所歷經 8 年研發，成功培育出新型抗旱稻米品種「台稻 35 號」。此品種在缺水環境下仍能維持良好產量，可減少 30% 灌溉用水，特別適合乾旱或水資源不足地區種植。初步試驗顯示，台稻 35 號在缺水條件下產量僅減少 10%，遠優於一般品種的 40-50% 減產率。預計明年開始推廣種植。'
      },
      {
        id: 4,
        title: '2025 農業科技展 12 月盛大舉辦',
        category: '活動',
        date: '2025-11-19',
        summary: '年度最大規模農業科技展覽將於 12 月 15-18 日在台北世貿展出...',
        content: '2025 台灣農業科技展將於 12 月 15-18 日在台北世貿一館盛大舉辦，預計將有超過 300 家廠商參展，展示最新農業科技成果。今年展覽主題為「智慧永續 × 科技農業」，將展出智慧溫室、自動化農機、精準農業設備、農業大數據應用等創新技術。現場還將舉辦多場論壇與技術交流會，歡迎農民及業者共襄盛舉。'
      },
      {
        id: 5,
        title: '農產品外銷創新高 突破 60 億美元',
        category: '市場',
        date: '2025-11-18',
        summary: '今年農產品外銷金額可望突破 60 億美元，其中水果出口表現亮眼...',
        content: '根據農業部統計，今年 1-10 月農產品外銷金額已達 52 億美元，預估全年可突破 60 億美元，創歷史新高。其中，水果類外銷表現最為亮眼，芒果、鳳梨、釋迦等銷往日本、中國大陸、美國等市場。農業部表示，將持續拓展國際市場，協助優質農產品行銷海外，提升台灣農產品國際競爭力。'
      },
      {
        id: 6,
        title: '農民職災保險給付再提升',
        category: '政策',
        date: '2025-11-17',
        summary: '農民職業災害保險給付金額調整，最高可領取 12 個月投保薪資...',
        content: '勞動部宣布調整農民職業災害保險給付標準，自明年 1 月起，農民因職業傷害致失能者，給付金額由原本的 10 個月提高至 12 個月投保薪資。此外，醫療給付上限也從 5 萬元提高至 7 萬元。目前已有超過 11 萬名農民加保農民職災保險，提供基本的職業安全保障。農委會鼓勵更多農民加保，保障自身權益。'
      }
    ];
  }

  showNewsDetail(news: NewsItem) {
    this.selectedNews = news;
    this.displayDialog = true;
  }

  getCategorySeverity(category: string): 'success' | 'info' | 'warning' | 'danger' {
    switch (category) {
      case '政策': return 'info';
      case '技術': return 'success';
      case '市場': return 'warning';
      case '活動': return 'danger';
      default: return 'info';
    }
  }
}
