import { LegacyRef, memo, useRef, useState } from "react";
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";




function TradingViewWidget() {
  const container: any = useRef<LegacyRef<HTMLDivElement> | null>(null);
  const [hideSideBar, setHideSideBar] = useState(false);

  const handleSideBar = () => {
    const sideBarElem = document.querySelector("#drawing-toolbar")
    console.log(sideBarElem)
  }

  return (

    <div className="w-[980px] h-[610px] bg-slate-500">
      <button
        className="tradingview-widget-container__close-button"
        onClick={handleSideBar}
      >
        Hide
      </button>
      <AdvancedRealTimeChart container_id="advanced-real-time-chart" theme="dark" autosize width={980} height={610} symbol="COINBASE:BTCUSD"></AdvancedRealTimeChart>
    </div>

  );
}

export default memo(TradingViewWidget);
