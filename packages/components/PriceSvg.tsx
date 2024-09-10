// @ts-ignore
const CryptoPriceChart = ({ cryptoData, width = 100, height = 30 }) => {
  if (!cryptoData || cryptoData.length === 0) {
    return null;
  }

  // Extract prices from the CoinGecko data (which is an array of [timestamp, price])
  // @ts-ignore
  const prices = cryptoData.map((dataPoint) => dataPoint[1]);

  const maxPrice = Math.max(...prices);
  const minPrice = Math.min(...prices);
  const priceRange = maxPrice - minPrice;

  // Normalize the data to fit within the SVG height
  // @ts-ignore
  const normalize = (price) => {
    return priceRange === 0
      ? height / 2
      : ((price - minPrice) / priceRange) * height;
  };

  // Create the SVG path using the normalized data
  const pathData = prices
    // @ts-ignore
    .map((price, index) => {
      const x = (index / (prices.length - 1)) * width;
      const y = height - normalize(price); // Invert the Y-axis (higher prices should go up)
      return `${x},${y}`;
    })
    .join(" L ");

  // Determine stroke color based on the last price point's trend
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
