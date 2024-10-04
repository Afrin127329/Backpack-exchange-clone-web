"use client";

import TradingViewWidget from "@/packages/components/TradingViewWidget";

function Trade() {
  return (
    <div className="flex min-h-screen flex-col md:flex-row items-center justify-center gap-4 p-2">
      <TradingViewWidget />
      {/* <div className="text-3xl text-greenText bg-greenBgTransparent rounded-lg mr-8 p-4">
        <h1>Coming Soon</h1>
      </div> */}
    </div>
  );
}

export default Trade;
