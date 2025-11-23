import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CardModule } from 'primeng/card';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuItem } from 'primeng/api';
import { WeatherSectionComponent } from '../weather-section/weather-section.component';
import { TradingSectionComponent } from '../trading-section/trading-section.component';
import { NewsSectionComponent } from '../news-section/news-section.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    CardModule,
    TabMenuModule,
    WeatherSectionComponent,
    TradingSectionComponent,
    NewsSectionComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  activeIndex: number = 0;
  menuItems: MenuItem[] = [
    { label: '🌤️ 農業氣象', icon: 'pi pi-sun' },
    { label: '📊 交易行情', icon: 'pi pi-chart-bar' },
    { label: '📰 最新消息', icon: 'pi pi-megaphone' }
  ];

  sidebarVisible: boolean = false;

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }
}
