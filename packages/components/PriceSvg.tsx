// @ts-ignore
const CryptoPriceChart = ({ cryptoData, width = 100, height = 30 }) => {
  if (!cryptoData || cryptoData.length === 0) {
    return null;
  }
  // @ts-ignore
  const prices = cryptoData.map((dataPoint) => dataPoint[1]);

  const maxPrice = Math.max(...prices);
  const minPrice = Math.min(...prices);
  const priceRange = maxPrice - minPrice;

  // @ts-ignore
  const normalize = (price) => {
    return priceRange === 0
      ? height / 2
      : ((price - minPrice) / priceRange) * height;
  };

  const pathData = prices
    // @ts-ignore
    .map((price, index) => {
      const x = (index / (prices.length - 1)) * width;
      const y = height - normalize(price);
      return `${x},${y}`;
    })
    .join(" L ");

  const lastPrice = prices[prices.length - 1];
  const firstPrice = prices[0];
  const strokeColor = lastPrice >= firstPrice ? "#16c784" : "#ea3943";

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <path
        d={`M ${pathData}`}
        fill="none"
        stroke={strokeColor}
        strokeWidth="2"
      />
    </svg>
  );
};

export default CryptoPriceChart;
