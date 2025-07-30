import { LineChart } from "@mui/x-charts";
import '../Styles/WealthGraph.css';

function WealthGraph() {
  return (
    <div className="wealth-graph">
        <h1>Portfolio Balance</h1>
        <LineChart
            xAxis={[
              {
                data: [
                  new Date("2025-01-01"),
                  new Date("2025-02-01"),
                  new Date("2025-03-01"),
                  new Date("2025-04-01"),
                  new Date("2025-05-01"),
                  new Date("2025-06-01"),
                  new Date("2025-07-01"),
                  new Date("2025-07-28"),
                ],
                scaleType: "time",
                min: new Date("2025-01-01"),
                valueFormatter: (date) =>
                  new Intl.DateTimeFormat("en-US", { month: "short" }).format(
                    date
                  ),
              },
            ]}
            yAxis={[
              {
                min: (55000000),
                valueFormatter: (value) =>
                  new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                    maximumFractionDigits: 0,
                  }).format(value),
              },
            ]}
            series={[
              {
                data: [
                  60000000, // Jan
                  63500000, // Feb
                  59000000, // Mar
                  71000000, // Apr
                  78000000, // May
                  72000000, // Jun
                  86000000, // Jul 1
                  100000000, // Today
                ],
                area: true,
                color: "url(#Gradient)",
              },
            ]}
            height={500}
          >
            <linearGradient id="Gradient" x1="0%" y1="25%" x2="0%" y2="100%">
              <stop offset="0" stopColor="rgba(102, 3, 60, 1)" />
              <stop offset="1" stopColor="transparent" />
            </linearGradient>
          </LineChart>
    </div>
  )
}

export default WealthGraph;
