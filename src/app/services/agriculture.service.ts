import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export interface CropPrice {
  作物名稱: string;
  市場名稱: string;
  交易日期: string;
  平均價: string;
  交易量: string;
}

export interface AgricultureStats {
  totalFarms: number;
  totalArea: number;
  totalProduction: number;
  activeMarkets: number;
}

export interface TopCrop {
  name: string;
  count: number;
}

@Injectable({
  providedIn: 'root'
})
export class AgricultureService {
  private apiUrl = 'https://data.moa.gov.tw/Service/OpenData/FromM/FarmTransData.aspx';

  constructor(private http: HttpClient) {}

  getCropPrices(): Observable<CropPrice[]> {
    return this.http.get<CropPrice[]>(this.apiUrl).pipe(
      map(data => data.slice(0, 20)),
      catchError(error => {
        console.error('Error fetching crop prices:', error);
        return of([]);
      })
    );
  }

  getAgriculturalStats(): Observable<AgricultureStats> {
    return of({
      totalFarms: 758234,
      totalArea: 795683,
      totalProduction: 1234567,
      activeMarkets: 18
    });
  }

  getTopCrops(): Observable<TopCrop[]> {
    return this.getCropPrices().pipe(
      map(data => {
        const cropCounts: { [key: string]: number } = {};
        data.forEach(item => {
          const crop = item.作物名稱;
          cropCounts[crop] = (cropCounts[crop] || 0) + 1;
        });

        return Object.entries(cropCounts)
          .sort(([, a], [, b]) => b - a)
          .slice(0, 5)
          .map(([name, count]) => ({ name, count }));
      })
    );
  }
}
