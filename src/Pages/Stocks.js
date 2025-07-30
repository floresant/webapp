import { useState } from "react";
import WelcomeBar from "../Components/WelcomeBar";
import SideMenu from "../Components/SideMenu";
import InvestmentsDisplay from "../Components/InvestmentsDisplay";


function Stocks() {
  const [menuVisible, setMenuVisible] = useState(true);
  const [stocks, setStocks] = useState({
    MSFT: { exchange: "NASDAQ", symbol: "MSFT" },
    AAPL: { exchange: "NASDAQ", symbol: "AAPL" },
    NVDA: { exchange: "NASDAQ", symbol: "NVDA" },
    META: { exchange: "NASDAQ", symbol: "META" },
    AMZN: { exchange: "NASDAQ", symbol: "AMZN" },
  });
  const exchanges = [
    {id: 1, value: "NASDAQ"},
    {id: 2, value: "NYSE"},
    {id: 3, value: "AMEX"},
  ]
  const [exchangeInput, setExchangeInput] = useState("NASDAQ");
  const [symbolInput, setSymbolInput] = useState("");
  const [selectedToRemove, setSelectedToRemove] = useState({});
  const [storiesVisible, setStoriesVisible] = useState(false);

  const handleAdd = () => {
    const symbol = symbolInput.trim().toUpperCase();
    const exchange = exchangeInput.trim().toUpperCase();
    if (!symbol || stocks[symbol]) return;
    setStocks((prev) => ({ ...prev, [symbol]: { exchange, symbol } }));
    setSymbolInput("");
  };

  const toggleSelection = (symbol) => {
    setSelectedToRemove((prev) => ({
      ...prev,
      [symbol]: !prev[symbol],
    }));
  };

  const removeSelected = () => {
    setStocks((prev) => {
      const updated = { ...prev };
      Object.keys(selectedToRemove).forEach((symbol) => {
        if (selectedToRemove[symbol]) {
          delete updated[symbol];
        }
      });
      return updated;
    });
    setSelectedToRemove({});
  };

  const handleToggle = (event) => {
    setStoriesVisible(event.target.checked);
  };

  return (
    <div className="wrapper-stocks">
      <WelcomeBar />
      <div className="page-body">
        <SideMenu
          visible={menuVisible}
          onToggle={() => setMenuVisible((prev) => !prev)}
        />
        <div className="page-content">
          <h2
            className="cn-main-title"
            style={{
              fontSize: "42px",
              fontWeight: "700",
              color: "rgb(102, 2, 60)",
              padding: "12px",
              fontFamily: "Lato, sans-serif",
            }}
          >
            Stocks
          </h2>
          <InvestmentsDisplay handleAdd={handleAdd} toggleSelection={toggleSelection} removeSelected={removeSelected} handleToggle={handleToggle} exchangeInput={exchangeInput} setExchangeInput={setExchangeInput} symbolInput={symbolInput} setSymbolInput={setSymbolInput} data={stocks} selectedToRemove={selectedToRemove} storiesVisible={storiesVisible} exchanges={exchanges} example={"AAPL"}/>
        </div>
      </div>
    </div>
  );
}

export default Stocks;
