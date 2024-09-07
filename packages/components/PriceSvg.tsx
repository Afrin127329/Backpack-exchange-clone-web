// @ts-ignore
const CryptoPriceChart = ({ cryptoData, width = 100, height = 30 }) => {
  if (!cryptoData) {
    return null;
  }

  // Use the 24h change percentage to determine the direction of the line
  const changePercentage = cryptoData.price_change_percentage_24h;

  // Create a simple two-point line based on the 24h change
  const startY = height / 2;
  const endY = startY - ((cryptoData / 100) * height) / 2;

  const pathData = `M 0,${startY} L ${width},${endY}`;

  // Determine stroke color based on price trend
  const strokeColor = cryptoData >= 0 ? "#16c784" : "#ea3943";

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <path d={pathData} fill="none" stroke={strokeColor} strokeWidth="2" />
    </svg>
  );
};

export default CryptoPriceChart;
