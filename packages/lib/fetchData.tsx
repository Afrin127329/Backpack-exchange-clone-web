import { useCallback, useEffect, useState } from "react";
import { DetailedCryptoData } from "./type";

const useCoinData = () => {
  const [data, setData] = useState<DetailedCryptoData | null>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=solana,usd-coin,pyth-network,jito-governance-token,tether,bonk,helium,helium-mobile,bitcoin,ethereum,dogwifcoin,jupiter-exchange-solana,parcl,render-token,tensor,wormhole,wen-4,cat-in-a-dogs-world,book-of-meme,raydium,hivemapper,kamino,drift-protocol,nyan,jeo-boden,habibi-sol,io,zeta,mother-iggy,sanctum-2,shuffle-2,pepe,shiba-inu,chainlink,uniswap,ondo-finance,holograph,starknet,matic-network,mon-protocol,blur,worldcoin-wld,polyhedra-network,unagi-token,layerzero,aave,lido-dao,matr1x";

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetch(url, {
        method: "GET",
        headers: {
          accept: "application/json",
          x_cg_demo_api_key: process.env.NEXT_PUBLIC_COIN_GECKO_API_KEY,
          "Access-Control-Allow-Origin": "*",
        } as HeadersInit,
      });
      const result = await res.json();
      setData(result);
      setLoading(false);
    } catch (err: any) {
      setError(err);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return { data, loading, error };
};

export default useCoinData;
