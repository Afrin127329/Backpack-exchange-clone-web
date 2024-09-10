import Loading from "@/app/loading";
import { useCallback, useEffect, useState } from "react";
import CryptoPriceChart from "../components/PriceSvg";

const useHistoricalData = (coinId: string, days = 7) => {
  const [data, setData] = useState<number[][] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);

      const url = `/api/fetchHistoricalData?coinId=${coinId}&days=${days}`;
      const res = await fetch(url);

      if (!res.ok) {
        throw new Error(`Error fetching data: ${res.status} ${res.statusText}`);
      }
      const result = await res.json();
      console.log(result);
      setData(result.prices); // Prices is an array of [timestamp, price]
      setLoading(false);
    } catch (err: any) {
      setError(err);
      setLoading(false);
    }
  }, [coinId, days]);

  useEffect(() => {
    fetchData();
  }, [coinId, fetchData]);

  return { data, loading, error };
};

// Create a new component to use the hook
export const HistoricalPriceChart = ({ coinId }: { coinId: string }) => {
  const { data, loading, error } = useHistoricalData(coinId, 7); // Fetch 7 days of data

  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );
  if (error) return <div>Error loading data</div>;
  if (!data) return <div>No data</div>;

  return (
    <div className="font-medium text-base">
      <CryptoPriceChart cryptoData={data} />
    </div>
  );
};

export default useHistoricalData;
