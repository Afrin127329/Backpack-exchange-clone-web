"use client";

import { CryptoDataTable } from "@/packages/components/CryptoDataTable";
import Hero from "@/packages/components/Hero";
import Markets from "@/packages/components/Markets";
import { cryptoData } from "@/packages/lib/data";
import useCoinData from "@/packages/lib/fetchData";
import { CryptoData } from "@/packages/lib/type";

export default function Home() {
  const marketData: CryptoData[] = cryptoData;
  const { data, loading, error } = useCoinData();
  console.log(data);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2">
      <Hero />
      <div className="w-11/12 flex flex-col lg:flex-row gap-4 my-6 justify-between items-center">
        <Markets marketData={marketData} />
        <Markets marketData={marketData} />
        <Markets marketData={marketData} />
      </div>
      <div className="w-11/12 flex flex-col lg:flex-row gap-4 my-6 justify-between items-center">
        <CryptoDataTable data={data} />
      </div>
    </main>
  );
}
