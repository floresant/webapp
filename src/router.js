import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import AssetAllocation from "./Pages/AssetAllocation";
import IncomeSpending from "./Pages/IncomeSpending";
import PrivateMarket from "./Pages/PrivateMarket";
import PrivateEquityGlossary from "./Pages/PrivateEquityGlossary";
import Stocks from "./Pages/Stocks";
import Crypto from "./Pages/Crypto";
import Futures from "./Pages/Futures";
import Contact from "./Pages/Contact";
import Settings from "./Pages/Settings";
import Login from "./Pages/Login";
import AppLayout from "./Components/AppLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "asset-allocation",
        element: <AssetAllocation />,
      },
      {
        path: "income-spending",
        element: <IncomeSpending />,
      },
      {
        path: "private-market",
        element: <PrivateMarket />,
      },
      {
        path: "private-equity-glossary",
        element: <PrivateEquityGlossary />,
      },
      {
        path: "stocks",
        element: <Stocks />,
      },
      {
        path: "crypto",
        element: <Crypto />,
      },
      {
        path: "futures",
        element: <Futures />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
]);

export default router;
