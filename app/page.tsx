"use client";

import Hero from "@/packages/components/Hero";
import { CryptoDataTable } from "@/packages/components/Tables/CryptoDataTable";
import Markets from "@/packages/components/Tables/Markets";
import useCoinData from "@/packages/lib/fetchData";
import Loading from "./loading";

export default function Home() {
  const { data, loading, error } = useCoinData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2">
      <Hero />
      <div className="w-11/12 flex flex-col lg:flex-row gap-4 my-6 justify-between items-center">
        {data ? (
          <>
            <Markets marketData={data} />
            <Markets marketData={data} />
            <Markets marketData={data} />
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
        {data ? (
          <CryptoDataTable data={data} />
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
