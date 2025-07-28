import React, { createRef } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './Pages/Login';
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Pages/Home';
import AssetAllocation from './Pages/AssetAllocation';
import IncomeSpending from './Pages/IncomeSpending';
import PrivateMarket from './Pages/PrivateMarket';
import PrivateEquityGlossary from './Pages/PrivateEquityGlossary';
import Stocks from './Pages/Stocks';
import Crypto from './Pages/Crypto';
import Futures from './Pages/Futures';
import Contact from './Pages/Contact';
import Settings from './Pages/Settings';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>
  },
  {
    path: "home",
    element: <Home/>
  },
  {
    path: "asset-allocation",
    element: <AssetAllocation/>
  },
  {
    path: "income-spending",
    element: <IncomeSpending/>
  },
  {
    path: "private-market",
    element: <PrivateMarket/>
  },
  {
    path: "private-equity-glossary",
    element: <PrivateEquityGlossary/>
  },
  {
    path: "stocks",
    element: <Stocks/>
  },
  {
    path: "crypto",
    element: <Crypto/>
  },
  {
    path: "futures",
    element: <Futures/>
  },
  {
    path: "contact",
    element: <Contact/>
  },
  {
    path: "settings",
    element: <Settings/>
  },

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <div>
      <RouterProvider router={router} />
    </div>
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
