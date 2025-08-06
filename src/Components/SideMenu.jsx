import { Link } from "react-router-dom";
import { NavLink, useLocation } from "react-router-dom";
import {
  House,
  ChartPie,
  DollarSign,
  GlobeLock,
  BookA,
  ChartLine,
  Bitcoin,
  ScrollText,
  Headset,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import User from "./Assets/User.jpg";
import "../Styles/SideMenu.css";

function SideMenu({ visible, onToggle }) {
  const topMenuItems = [
    { name: "HOME", icon: <House />, path: "/home" },
    { name: "ASSET ALLOCATION", icon: <ChartPie />, path: "/asset-allocation" },
    {
      name: "INCOME & SPENDING",
      icon: <DollarSign />,
      path: "/income-spending",
    },
    {
      name: "PRIVATE MARKET INVESTMENTS",
      icon: <GlobeLock />,
      path: "/private-market",
    },
    {
      name: "PRIVATE EQUITY GLOSSARY",
      icon: <BookA />,
      path: "/private-equity-glossary",
    },
    { name: "STOCKS", icon: <ChartLine />, path: "/stocks" },
    { name: "CRYPTOCURRENCIES", icon: <Bitcoin />, path: "/crypto" },
    { name: "FUTURES", icon: <ScrollText />, path: "/futures" },
    { name: "CONTACT US", icon: <Headset />, path: "/contact" },
  ];
  const bottomMenuItems = [
    { name: "SETTINGS", icon: <Settings />, path: "/settings" },
    { name: "LOGOUT", icon: <LogOut />, path: "/" },
  ];

  return (
    <div className="side-menu-wrapper">
      <button className="menu-toggle-btn" onClick={onToggle}>
        {visible ? <X /> : <Menu />}
      </button>
      <div className={`side-menu ${visible ? "" : "hidden"}`}>
        <div className="side-menu-top">
          <div className="user">
            <div className="nav-icon">
              <img src={User} alt="Profile picture" />
            </div>
            <div className="greeting">
              <span>WELCOME,</span>
              <span>Anthony</span>
            </div>
          </div>
          <hr className="rounded" />
          {topMenuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              <div className="nav-icon">{item.icon}</div>
              {visible && <div className="nav-item">{item.name}</div>}
            </NavLink>
          ))}
        </div>
        <div className="side-menu-bottom">
          {bottomMenuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              <div className="nav-icon">{item.icon}</div>
              {visible && <div className="nav-item">{item.name}</div>}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SideMenu;
