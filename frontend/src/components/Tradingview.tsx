"use client";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useRef, memo } from "react";
// https://in.tradingview.com/widget/advanced-chart/
function TradingViewWidget() {
  const container = useRef<HTMLDivElement>(null);
  const searchParams = useSearchParams();
  const symbol = searchParams.get("sym");
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
        {
          "autosize": true,
          "symbol": "${symbol || `MARKETSCOM:ETHEREUM`}",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "dark",
          "style": "1",
          "locale": "in",
          "withdateranges": true,
          "hide_side_toolbar": false,
          "allow_symbol_change": true,
          "details": true,
          "hotlist": true,
          "calendar": false,
          "support_host": "https://www.tradingview.com"
        }`;
    if (container.current) {
      container.current.appendChild(script);
    }
  }, []);

  return (
    <div
      className="tradingview-widget-container"
      ref={container}
      style={{ height: "100%", width: "100%" }}
    >
      <div className="tradingview-widget-container__widget w-full h-full"></div>
    </div>
  );
}

export default memo(TradingViewWidget);
