import { LegacyRef, memo, useEffect, useRef } from "react";

function TradingViewWidget() {
  const container: any = useRef<LegacyRef<HTMLDivElement> | null>(null);
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "width": "730",
        "height": "550",
        "symbol": "COINBASE:BTCUSD",
          "interval": "60",
          "timezone": "Etc/UTC",
          "theme": "dark",
          "style": "1",
          "locale": "en",
          "hide_side_toolbar": false,
          "allow_symbol_change": false,
          "calendar": false,
          "support_host": "https://www.tradingview.com"
      }`;
    const containerElement = container.current;
    if (containerElement) {
      containerElement.appendChild(script);
    }

    return () => {
      if (containerElement) {
        containerElement.removeChild(script);
      }
    };
  }, []);

  return (
    <div
      className="tradingview-widget-container min-h-screen"
      ref={container}
      style={{ height: "610px", width: "980px" }}
    >
      <div
        className="tradingview-widget-container__widget"
        style={{ height: "610px", width: "980px" }}
      ></div>
    </div>
  );
}

export default memo(TradingViewWidget);
