import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { MessageModule } from 'primeng/message';

interface WeatherData {
  location: string;
  temperature: number;
  humidity: number;
  rainfall: number;
  condition: string;
  icon: string;
}

interface WeatherAlert {
  severity: 'warn' | 'info' | 'success';
  title: string;
  message: string;
  time: string;
}

@Component({
  selector: 'app-weather-section',
  standalone: true,
  imports: [CommonModule, CardModule, MessageModule],
  templateUrl: './weather-section.component.html',
  styleUrls: ['./weather-section.component.css']
})
export class WeatherSectionComponent implements OnInit {
  weatherData: WeatherData[] = [];
  alerts: WeatherAlert[] = [];
  currentTime = new Date();

  ngOnInit() {
    this.loadWeatherData();
    this.loadAlerts();
  }

  loadWeatherData() {
    this.weatherData = [
      { location: '台北', temperature: 26, humidity: 75, rainfall: 0, condition: '多雲', icon: '⛅' },
      { location: '台中', temperature: 28, humidity: 68, rainfall: 0, condition: '晴天', icon: '☀️' },
      { location: '高雄', temperature: 30, humidity: 82, rainfall: 5, condition: '陰天', icon: '☁️' },
      { location: '花蓮', temperature: 25, humidity: 88, rainfall: 15, condition: '小雨', icon: '🌧️' }
    ];
  }

  loadAlerts() {
    this.alerts = [
      { severity: 'warn', title: '高溫警示', message: '未來三天預計高溫達 35°C，請注意作物灌溉與遮陰', time: '2小時前' },
      { severity: 'info', title: '降雨預報', message: '明日下午可能有局部陣雨，建議提前準備排水措施', time: '5小時前' },
      { severity: 'success', title: '適宜耕作', message: '本週氣候穩定，適合進行田間作業與施肥', time: '1天前' }
    ];
  }
}
