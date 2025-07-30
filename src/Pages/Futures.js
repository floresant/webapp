import { useState } from "react";
import WelcomeBar from "../Components/WelcomeBar";
import SideMenu from "../Components/SideMenu";
import TradingViewSymbolInfo from "../Components/TradingViewSymbolInfo";
import TradingViewStory from "../Components/TradingViewStory";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { RegularToggleSwitch } from "../Components/ToggleSwitch";
import "../Styles/Stocks.css";

function Futures() {
  const [menuVisible, setMenuVisible] = useState(true);
  const [stocks, setStocks] = useState({
    "ES!": { exchange: "CME_MINI", symbol: "ES1!" },
    "CL!": { exchange: "NYMEX", symbol: "CL1!" },
    "GC1!": { exchange: "COMEX", symbol: "GC1!" },
    "ZC1!": { exchange: "CBOT", symbol: "ZC1!" },
    "FDAX1!": { exchange: "EUREX", symbol: "FDAX1!" },
  });
  const [exchangeInput, setExchangeInput] = useState("CME");
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
            Futures
          </h2>
          <div className="stock-form">
            <div className="add-stock">
              <FormControl>
                <InputLabel id="demo-simple-select-label">
                  Futures Exchange
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={exchangeInput}
                  label="Crypto Exchange"
                  size="small"
                  onChange={(e) => setExchangeInput(e.target.value)}
                >
                  <MenuItem value="CME">CME</MenuItem>
                  <MenuItem value="NYMEX">NYMEX</MenuItem>
                  <MenuItem value="COMEX">COMEX</MenuItem>
                  <MenuItem value="CBOT">CBOT</MenuItem>
                  <MenuItem value="EUREX">EUREX</MenuItem>
                </Select>
              </FormControl>
              <TextField
                id="outlined-helperText"
                label="Symbol"
                defaultValue=""
                helperText="e.g., ES1!"
                size="small"
                value={symbolInput}
                onChange={(e) => setSymbolInput(e.target.value.toUpperCase())}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={handleAdd}
                startIcon={<AddIcon />}
                disabled={!symbolInput || stocks[symbolInput]}
              >
                Add Future
              </Button>
            </div>
            <div className="remove">
              <Button
                variant="contained"
                color="error"
                onClick={removeSelected}
                startIcon={<DeleteIcon />}
                disabled={Object.values(selectedToRemove).every((v) => !v)}
              >
                Remove
              </Button>
            </div>
            <div className="stories-toggle">
              <span>Stories {storiesVisible ? "shown" : "hidden"}</span>
              <RegularToggleSwitch onChange={handleToggle} />
            </div>
          </div>
          <div className="stocks">
            {Object.entries(stocks).map(([key, { symbol, exchange }]) => (
              <div
                className={storiesVisible ? "stock-story" : "stock"}
                key={symbol}
              >
                <Checkbox
                  onChange={() => toggleSelection(symbol)}
                  sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                />
                {storiesVisible ? (
                  <>
                    <div className="symbol">
                      <TradingViewSymbolInfo
                        exchange={exchange}
                        symbol={symbol}
                      />
                    </div>
                    <div className="story">
                      <TradingViewStory exchange={exchange} symbol={symbol} />
                    </div>
                  </>
                ) : (
                  <TradingViewSymbolInfo exchange={exchange} symbol={symbol} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Futures;
