export interface CryptoData {
  pair: string;
  price: string;
  change: string;
  changeType: string;
}

export interface DetailedCryptoData {
  id?: string;
  name?: string;
  image?: string;
  symbol?: string;
  current_price?: number;
  market_cap?: number;
  market_cap_change_24h?: number;
  total_volume: number;
  price_change_percentage_24h: number;
}
