import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { ProgressBarModule } from 'primeng/progressbar';
import { AgricultureService, CropPrice, AgricultureStats, TopCrop } from '../../services/agriculture.service';

@Component({
  selector: 'app-trading-section',
  standalone: true,
  imports: [CommonModule, CardModule, TableModule, ProgressBarModule],
  templateUrl: './trading-section.component.html',
  styleUrls: ['./trading-section.component.css']
})
export class TradingSectionComponent implements OnInit {
  loading = true;
  cropPrices: CropPrice[] = [];
  stats: AgricultureStats = {
    totalFarms: 0,
    totalArea: 0,
    totalProduction: 0,
    activeMarkets: 0
  };
  topCrops: TopCrop[] = [];
  currentTime = new Date();

  constructor(private agricultureService: AgricultureService) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.loading = true;

    this.agricultureService.getAgriculturalStats().subscribe(stats => {
      this.stats = stats;
    });

    this.agricultureService.getCropPrices().subscribe(prices => {
      this.cropPrices = prices;
      this.loading = false;
    });

    this.agricultureService.getTopCrops().subscribe(crops => {
      this.topCrops = crops;
    });
  }

  getPercentage(count: number): number {
    if (this.topCrops.length === 0) return 0;
    const max = Math.max(...this.topCrops.map(c => c.count));
    return (count / max) * 100;
  }

  getProgressColor(index: number): string {
    const colors = ['green', 'blue', 'yellow', 'purple', 'red'];
    return colors[index % colors.length];
  }
}
