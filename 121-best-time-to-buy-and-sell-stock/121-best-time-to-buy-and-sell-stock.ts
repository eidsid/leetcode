function maxProfit(prices: number[]): number {
  let minPrice: number = prices[0]
  let maxPrice: number = 0
  let lastBestProfit: number = 0
  let bestProfit: number = 0

  for (let i = 0; i < prices.length; i++) {

    if ( prices[i]<minPrice ) {
      minPrice = prices[i]
      maxPrice = 0;
    }

    if ( prices[i]>maxPrice ) {
      maxPrice = prices[i]
    }

    bestProfit = maxPrice - minPrice

    if (lastBestProfit < bestProfit) {
      lastBestProfit = bestProfit
    }
  }

  return lastBestProfit;

};