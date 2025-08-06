import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import WelcomeBar from "../Components/WelcomeBar";
import SideMenu from "../Components/SideMenu";
import InvestmentsDisplay from "../Components/InvestmentsDisplay";

function Crypto() {
  const { menuVisible, setMenuVisible } = useOutletContext();

  const [cryptos, setCryptos] = useState({
    BTCUSDT: { exchange: "BINANCE", symbol: "BTCUSDT" },
    ETHUSDT: { exchange: "BINANCE", symbol: "ETHUSDT" },
    SOLUSD: { exchange: "COINBASE", symbol: "SOLUSD" },
    ADAUSDT: { exchange: "BINANCE", symbol: "ADAUSDT" },
    AVAXUSD: { exchange: "COINBASE", symbol: "AVAXUSD" },
  });
  const exchanges = [
    { id: 1, value: "BINANCE" },
    { id: 2, value: "COINBASE" },
    { id: 3, value: "BYBIT" },
    { id: 4, value: "KRAKEN" },
    { id: 5, value: "BITSTAMP" },
  ];
  const [exchangeInput, setExchangeInput] = useState("BINANCE");
  const [symbolInput, setSymbolInput] = useState("");
  const [selectedToRemove, setSelectedToRemove] = useState({});
  const [storiesVisible, setStoriesVisible] = useState(false);

  const handleAdd = () => {
    const symbol = symbolInput.trim().toUpperCase();
    const exchange = exchangeInput.trim().toUpperCase();
    if (!symbol || cryptos[symbol]) return;
    setCryptos((prev) => ({ ...prev, [symbol]: { exchange, symbol } }));
    setSymbolInput("");
  };

  const toggleSelection = (symbol) => {
    setSelectedToRemove((prev) => ({
      ...prev,
      [symbol]: !prev[symbol],
    }));
  };

  const removeSelected = () => {
    setCryptos((prev) => {
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
    <div className="wrapper">
      <SideMenu
        visible={menuVisible}
        onToggle={() => setMenuVisible((prev) => !prev)}
      />
      <div className="page-body">
        <WelcomeBar />
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
            Cryptocurrencies
          </h2>
          <InvestmentsDisplay
            handleAdd={handleAdd}
            toggleSelection={toggleSelection}
            removeSelected={removeSelected}
            handleToggle={handleToggle}
            exchangeInput={exchangeInput}
            setExchangeInput={setExchangeInput}
            symbolInput={symbolInput}
            setSymbolInput={setSymbolInput}
            data={cryptos}
            selectedToRemove={selectedToRemove}
            storiesVisible={storiesVisible}
            exchanges={exchanges}
            example={"BTCUSDT"}
          />
        </div>
      </div>
    </div>
  );
}

export default Crypto;
