"use client";

import Hero from "@/packages/components/Hero";
import { CryptoDataTable } from "@/packages/components/Tables/CryptoDataTable";
import Markets from "@/packages/components/Tables/Markets";
import { cryptoData } from "@/packages/lib/data";
import useCoinData from "@/packages/lib/fetchData";
import { CryptoData } from "@/packages/lib/type";
import { Suspense } from "react";
import Loading from "./loading";

export default function Home() {
  const marketData: CryptoData[] = cryptoData;
  const { data, loading } = useCoinData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2">
      <Hero />
      <div className="w-11/12 flex flex-col lg:flex-row gap-4 my-6 justify-between items-center">
        <Suspense fallback={<Loading />}>
          {data && (
            <>
              <Markets marketData={data} />
              <Markets marketData={data} />
              <Markets marketData={data} />
            </>
          )}
        </Suspense>
      </div>
      <div className="w-11/12 flex flex-col lg:flex-row gap-4 my-6 justify-between items-center">
        {loading ? <Loading /> : <CryptoDataTable data={data} />}
      </div>
    </main>
  );
}
