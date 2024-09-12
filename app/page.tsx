"use client";

import Hero from "@/packages/components/Hero";
import { CryptoDataTable } from "@/packages/components/Tables/CryptoDataTable";
import Markets from "@/packages/components/Tables/Markets";
import useCoinData from "@/packages/lib/fetchData";
import { DetailedCryptoData } from "@/packages/lib/type";
import { useEffect, useState } from "react";
import Loading from "./loading";

export default function Home() {
  const [coinData, setCoinData] = useState<DetailedCryptoData[] | null>();
  const { data, loading, error } = useCoinData();
  useEffect(() => {
    setCoinData(data);
    if (error) {
      const cachedData = localStorage.getItem("coinData");
      setCoinData(cachedData ? JSON.parse(cachedData) : null);
    }
  }, [data, error]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2">
      <Hero />
      <div className="w-11/12 flex flex-col lg:flex-row gap-4 my-6 justify-between items-center">
        {coinData ? (
          <>
            <Markets marketData={coinData} title={"New"} sliceIndex={0} />
            <Markets
              marketData={coinData}
              title={"Top Gainers"}
              sliceIndex={4}
            />
            <Markets marketData={coinData} title={"Popular"} sliceIndex={9} />
          </>
        ) : error ? (
          <div className="text-red-500 text-3xl font-bold text-center w-full">
            <span>No data</span>
          </div>
        ) : (
          <Loading />
        )}
      </div>
      <div className="w-11/12 flex flex-col lg:flex-row gap-4 my-6 justify-between items-center">
        {coinData ? (
          <CryptoDataTable data={coinData} />
        ) : loading ? (
          <Loading />
        ) : (
          <div className="text-red-500 text-3xl font-bold text-center w-full">
            No data
          </div>
        )}
      </div>
    </main>
  );
}
