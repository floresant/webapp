import Button from "@mui/material/Button";

export default function PortfolioButton({ label, onClick, isSelected }) {
  return (
    <Button
      variant={isSelected ? "contained" : "outlined"}
      color={isSelected ? "primary" : "inherit"}
      // color={isSelected ? "rgb(102, 3, 60)" : "inherit"}
      onClick={onClick}
    >
      {label}
    </Button>
  );
}
