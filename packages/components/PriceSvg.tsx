// @ts-ignore
const CryptoPriceChart = ({ cryptoData, width = 100, height = 30 }) => {
  if (!cryptoData || cryptoData.length === 0) {
    return null;
  }

  const maxPrice = Math.max(...cryptoData);
  const minPrice = Math.min(...cryptoData);
  const priceRange = maxPrice - minPrice;

  // Normalize the data to fit within the SVG height
  // @ts-ignore

  const normalize = (price) => {
    return ((price - minPrice) / priceRange) * height;
  };

  // Create the SVG path using the normalized data

  const pathData = cryptoData
    // @ts-ignore
    .map((price, index) => {
      const x = (index / (cryptoData.length - 1)) * width;
      const y = height - normalize(price); // Invert the Y-axis (higher prices should go up)
      return `${x},${y}`;
    })
    .join(" L ");

  // Determine stroke color based on the last price point's trend
  const lastPrice = cryptoData[cryptoData.length - 1];
  const firstPrice = cryptoData[0];
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
