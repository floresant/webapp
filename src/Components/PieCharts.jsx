import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";

const percentFormatter = (item) => `${item.value}%`;
const dollarFormatter = (item) => `$${item.value}M`;

const clientData = [
  { label: "US Stock", value: 50 },
  { label: "Foreign Stock", value: 30 },
  { label: "Bond", value: 10 },
  { label: "Short-term Investments", value: 10 },
];

const portfolioData = {
  Aggressive: [
    { label: "US Stock", value: 60 },
    { label: "Foreign Stock", value: 30 },
    { label: "Bond", value: 10 },
    { label: "Short-term investments", value: 0 },
  ],
  Moderate: [
    { label: "US Stock", value: 40 },
    { label: "Foreign Stock", value: 20 },
    { label: "Bond", value: 30 },
    { label: "Short-term investments", value: 10 },
  ],
  Conservative: [
    { label: "US Stock", value: 25 },
    { label: "Foreign Stock", value: 10 },
    { label: "Bond", value: 50 },
    { label: "Short-term investments", value: 15 },
  ],
  "Capital Preservation": [
    { label: "US Stock", value: 10 },
    { label: "Foreign Stock", value: 5 },
    { label: "Bond", value: 40 },
    { label: "Short-term investments", value: 45 },
  ],
};

const size = {
  width: 300,
  height: 300,
};

const innerRadius = 0 //30;
const outerRadius = 100;
const cornerRadius = 0 //5;
const arcLabelMinAngle = 20;
const arcLabelRadius = "50%";
const fadedInnerRadius = 0 //30;
const fadedAdditionalRadius = -30;
const fadedColor = "gray";
const colors = [
          "rgb(93, 15, 60)",
          "rgb(84, 64, 64)",
          "rgb(177, 171, 143)",
          "rgb(190, 152, 61)",
        ];

const convertToDollar = (data) => {
  return data.map((e) => ({
    ...e,
    label: e.label,
    value: normalize(e.value),
  }));
};

const normalize = (n) =>
  Number.parseFloat(((100e6 * (n / 100)) / 1e6).toFixed(0));

export function ClientPieChart({ dollarVisible }) {
  return (
    <div>
      <PieChart
        colors={colors}
        series={[
          {
            data: dollarVisible ? convertToDollar(clientData) : clientData,
            innerRadius: innerRadius,
            outerRadius: outerRadius,
            cornerRadius: cornerRadius,
            arcLabel: dollarVisible ? dollarFormatter : percentFormatter,
            arcLabelMinAngle: arcLabelMinAngle,
            arcLabelRadius: arcLabelRadius,
            highlightScope: { fade: "global", highlight: "item" },
            faded: {
              innerRadius: fadedInnerRadius,
              additionalRadius: fadedAdditionalRadius,
              color: fadedColor,
            },
            valueFormatter: dollarVisible ? dollarFormatter : percentFormatter,
          },
        ]}
        sx={{
          [`& .${pieArcLabelClasses.root}`]: {
            fill: 'white',
            fontWeight: "bold",
          },
        }}
        {...size}
      />
    </div>
  );
}

export function ExamplePieChart({ dollarVisible, selectedPortfolio }) {
  return (
    <div>
      <PieChart
        colors={colors}
        series={[
          {
            data: dollarVisible
              ? convertToDollar(portfolioData[selectedPortfolio])
              : portfolioData[selectedPortfolio],
            innerRadius: innerRadius,
            outerRadius: outerRadius,
            cornerRadius: cornerRadius,
            arcLabel: dollarVisible ? dollarFormatter : percentFormatter,
            arcLabelMinAngle: arcLabelMinAngle,
            arcLabelRadius: arcLabelRadius,
            highlightScope: { fade: "global", highlight: "item" },
            faded: {
              innerRadius: fadedInnerRadius,
              additionalRadius: fadedAdditionalRadius,
              color: fadedColor,
            },
            valueFormatter: dollarVisible ? dollarFormatter : percentFormatter,
          },
        ]}
        sx={{
          [`& .${pieArcLabelClasses.root}`]: {
            fill: "white",
            fontWeight: "bold",
          },
        }}
        {...size}
      />
    </div>
  );
}
