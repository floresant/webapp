import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import WelcomeBar from "../Components/WelcomeBar";
import SideMenu from "../Components/SideMenu";
import InvestmentsDisplay from "../Components/InvestmentsDisplay";

function Futures() {
  const { menuVisible, setMenuVisible } = useOutletContext();

  const [futures, setFutures] = useState({
    "ES!": { exchange: "CME_MINI", symbol: "ES1!" },
    "CL!": { exchange: "NYMEX", symbol: "CL1!" },
    "GC1!": { exchange: "COMEX", symbol: "GC1!" },
    "ZC1!": { exchange: "CBOT", symbol: "ZC1!" },
    "FDAX1!": { exchange: "EUREX", symbol: "FDAX1!" },
  });
  const exchanges = [
    { id: 1, value: "CME" },
    { id: 2, value: "NYMEX" },
    { id: 3, value: "COMEX" },
    { id: 4, value: "CBOT" },
    { id: 5, value: "EUREX" },
  ];
  const [exchangeInput, setExchangeInput] = useState("CME");
  const [symbolInput, setSymbolInput] = useState("");
  const [selectedToRemove, setSelectedToRemove] = useState({});
  const [storiesVisible, setStoriesVisible] = useState(false);

  const handleAdd = () => {
    const symbol = symbolInput.trim().toUpperCase();
    const exchange = exchangeInput.trim().toUpperCase();
    if (!symbol || futures[symbol]) return;
    setFutures((prev) => ({ ...prev, [symbol]: { exchange, symbol } }));
    setSymbolInput("");
  };

  const toggleSelection = (symbol) => {
    setSelectedToRemove((prev) => ({
      ...prev,
      [symbol]: !prev[symbol],
    }));
  };

  const removeSelected = () => {
    setFutures((prev) => {
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
            Futures
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
            data={futures}
            selectedToRemove={selectedToRemove}
            storiesVisible={storiesVisible}
            exchanges={exchanges}
            example={"ES1!"}
          />
        </div>
      </div>
    </div>
  );
}

export default Futures;
