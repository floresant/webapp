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

function InvestmentsDisplay({
  handleAdd,
  toggleSelection,
  removeSelected,
  handleToggle,
  exchangeInput,
  setExchangeInput,
  symbolInput,
  setSymbolInput,
  data,
  selectedToRemove,
  storiesVisible,
  exchanges,
  example
}) {
  return (
    <>
      <div className="stock-form">
        <div className="add-stock">
          <FormControl>
            <InputLabel id="demo-simple-select-label">Exchange</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={exchangeInput}
              label="Exchange"
              size="small"
              onChange={(e) => setExchangeInput(e.target.value)}
            >
                {exchanges.map((exchange) => (
                  <MenuItem value={exchange.value}>{exchange.value}</MenuItem>
                ))}
            </Select>
          </FormControl>
          <TextField
            id="outlined-helperText"
            label="Symbol"
            defaultValue=""
            helperText={`e.g., ${example}`}
            size="small"
            value={symbolInput}
            onChange={(e) => setSymbolInput(e.target.value.toUpperCase())}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleAdd}
            startIcon={<AddIcon />}
            disabled={!symbolInput || data[symbolInput]}
          >
            Add Stock
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
        {Object.entries(data).map(([key, { symbol, exchange }]) => (
          <div
            className={storiesVisible ? "stock-story" : "stock"}
            key={symbol}
          >
            <Checkbox
              onChange={() => toggleSelection(symbol)}
              sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
            />
            <div className="symbol">
              <TradingViewSymbolInfo exchange={exchange} symbol={symbol} />
            </div>
            <div className={storiesVisible ? "story" : "hidden-stories"}>
              <TradingViewStory exchange={exchange} symbol={symbol} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default InvestmentsDisplay;
