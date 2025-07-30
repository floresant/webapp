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
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
      {/* <div className="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/news-flow/?priority=top_stories"
          rel="noopener nofollow"
          target="_blank"
        >
          <span className="blue-text">Top stories by TradingView</span>
        </a>
      </div> */}
    </div>
  );
}

export default memo(TradingViewStory);
