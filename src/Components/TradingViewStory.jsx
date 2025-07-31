import { useEffect, useRef, memo } from "react";

function TradingViewStory({ exchange, symbol }) {
  const container = useRef();
  const isScriptAdded = useRef(false);

  useEffect(() => {
    if (isScriptAdded.current) return;
    isScriptAdded.current = true;

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
        {
          "displayMode": "adaptive",
          "feedMode": "symbol",
          "symbol": "${exchange}:${symbol}",
          "colorTheme": "light",
          "isTransparent": true,
          "locale": "en",
          "width": "100%",
          "height": 450
        }`;
    container.current.appendChild(script);
  }, [exchange, symbol]);

  return (
    <div className="card" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
}

export default memo(TradingViewStory);
