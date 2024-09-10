import Error from "next/error";
import { useCallback, useEffect, useState } from "react";
import { DetailedCryptoData } from "./type";

const useCoinData = () => {
  const [data, setData] = useState<DetailedCryptoData[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);

  const url =
    "/api/fetchCoinData?ids=solana,usd-coin,pyth-network,jito-governance-token,tether,bonk,helium,helium-mobile,bitcoin,ethereum,dogwifcoin,jupiter-exchange-solana,parcl,render-token,tensor,wormhole,wen-4,cat-in-a-dogs-world,book-of-meme,raydium,hivemapper,kamino,drift-protocol,nyan,jeo-boden,habibi-sol,io,zeta,mother-iggy,sanctum-2,shuffle-2,pepe,shiba-inu,chainlink,uniswap,ondo-finance,holograph,starknet,matic-network,mon-protocol,blur,worldcoin-wld,polyhedra-network,unagi-token,layerzero,aave,lido-dao,matr1x";

  const fetchData = useCallback(async () => {
    try {
      setLoading(true); // Start loading
      setError(null); // Clear errors before fetching

      const res = await fetch(url);

      if (!res.ok) {
        setError("No data returned");
        // throw new Error(`Error fetching data: ${res.status} ${res.statusText}`);
      }

      const result = await res.json();
      if (res.status >= 400 || result.error) {
        // throw new Error(
        //   result.error?.message || `Error: ${res.status} ${res.statusText}`
        // );
        setError("Something went wrong!");
        setLoading(false);
        return;
      }
      console.log(result);

      setData(result);
      localStorage.setItem("coinData", JSON.stringify(result));
      setLoading(false);
    } catch (err: Error | any) {
      setError(err.message);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error };
};

export default useCoinData;
