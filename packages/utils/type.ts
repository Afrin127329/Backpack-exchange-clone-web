export interface CryptoData {
  name: string;
  price: string;
  change: string;
}

export interface DetailedCryptoData {
  name: string;
  symbol: string;
  price: string;
  marketCap: string;
  volume: string;
  change24h: string;
  changeType: "positive" | "negative";
}
