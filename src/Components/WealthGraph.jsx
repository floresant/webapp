import { LineChart } from "@mui/x-charts";
import '../Styles/WealthGraph.css';

function WealthGraph() {
  return (
    <div className="wealth-graph">
        <h1>Net Worth</h1>
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
                min: (550000),
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
                  600000, // Jan
                  635000, // Feb
                  590000, // Mar
                  710000, // Apr
                  780000, // May
                  720000, // Jun
                  860000, // Jul 1
                  1000000, // Today
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
