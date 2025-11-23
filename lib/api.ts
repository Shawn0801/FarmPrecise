// 農產品交易行情API
export interface CropPrice {
  作物名稱: string;
  市場名稱: string;
  交易日期: string;
  平均價: string;
  交易量: string;
}

// 取得農產品批發市場交易行情
export async function getCropPrices() {
  try {
    // 使用農業資料開放平台API
    // 這裡使用政府開放資料平台的農產品批發市場交易行情API
    const response = await fetch(
      'https://data.moa.gov.tw/Service/OpenData/FromM/FarmTransData.aspx',
      { next: { revalidate: 3600 } } // 快取1小時
    );

    if (!response.ok) {
      throw new Error('Failed to fetch crop prices');
    }

    const data = await response.json();
    return data.slice(0, 20); // 取前20筆資料
  } catch (error) {
    console.error('Error fetching crop prices:', error);
    return [];
  }
}

// 取得農業統計資料
export async function getAgriculturalStats() {
  // 模擬統計資料
  return {
    totalFarms: 758234,
    totalArea: 795683,
    totalProduction: 1234567,
    activeMarkets: 18
  };
}

// 取得熱門農產品
export async function getTopCrops() {
  try {
    const data = await getCropPrices();

    // 統計出現次數最多的作物
    const cropCounts = data.reduce((acc: any, item: CropPrice) => {
      const crop = item.作物名稱;
      acc[crop] = (acc[crop] || 0) + 1;
      return acc;
    }, {});

    return Object.entries(cropCounts)
      .sort(([, a]: any, [, b]: any) => b - a)
      .slice(0, 5)
      .map(([name, count]) => ({ name, count: count as number }));
  } catch (error) {
    console.error('Error fetching top crops:', error);
    return [];
  }
}
