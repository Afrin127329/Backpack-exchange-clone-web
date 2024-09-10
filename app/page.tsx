"use client";

import Hero from "@/packages/components/Hero";
import { CryptoDataTable } from "@/packages/components/Tables/CryptoDataTable";
import Markets from "@/packages/components/Tables/Markets";
import useCoinData from "@/packages/lib/fetchData";
import { Suspense } from "react";
import Loading from "./loading";

export default function Home() {
  const { data, loading, error } = useCoinData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2">
      <Hero />
      <div className="w-11/12 flex flex-col lg:flex-row gap-4 my-6 justify-between items-center">
        <Suspense fallback={<Loading />}>
          {data ? (
            <>
              <Markets marketData={data} />
              <Markets marketData={data} />
              <Markets marketData={data} />
            </>
          ) : error ? (
            <div>No data</div>
          ) : (
            <Loading />
          )}
        </Suspense>
      </div>
      <div className="w-11/12 flex flex-col lg:flex-row gap-4 my-6 justify-between items-center">
        {data ? (
          <CryptoDataTable data={data} />
        ) : loading ? (
          <Loading />
        ) : (
          <div>No data</div>
        )}
      </div>
    </main>
  );
}
