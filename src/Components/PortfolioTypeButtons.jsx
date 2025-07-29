import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import PortfolioButton from "./PortfolioButton";

const portfolios = [
  "Aggressive",
  "Moderate",
  "Conservative",
  "Capital Preservation",
];

function PortfolioTypeButtons({selectedPortfolio, handleSelection}) {
  return (
    <Box
      sx={{
        display: "flex",
        "& > *": {
          m: 1,
        },
      }}
    >
      <ButtonGroup
        orientation="vertical"
        aria-label="Vertical button group"
        // variant="outlined"
      >
        {portfolios.map((p) => (
          <PortfolioButton
            key={p}
            label={p}
            isSelected={selectedPortfolio === p}
            onClick={() => handleSelection(p)}
          />
        ))}
      </ButtonGroup>
    </Box>
  );
}

export default PortfolioTypeButtons;
