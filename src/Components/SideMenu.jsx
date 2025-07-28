import { Link } from 'react-router-dom';
import { NavLink, useLocation } from "react-router-dom";
import '../Styles/SideMenu.css';


function SideMenu() {
  const menuItems = [
    { name: "HOME", path: "/home"},
    { name: "ASSET ALLOCATION", path: "/asset-allocation"},
    { name: "INCOME & SPENDING", path: "/income-spending"},
    { name: "PRIVATE MARKET INVESTMENTS", path: "/private-market"},
    { name: "PRIVATE EQUITY GLOSSARY", path: "/private-equity-glossary"},
    { name: "STOCKS", path: "/stocks"},
    { name: "CRYPTOCURRENCIES", path: "/crypto"},
    { name: "FUTURES", path: "/futures"},
    { name: "CONTACT US", path: "/contact"},
    { name: "SETTINGS", path: "/settings"},
  ]


  return (
    <div className='side-menu'>
      {menuItems.map((item) => (
        <NavLink
        key={item.path}
        to={item.path}
        className={({ isActive }) =>(
          isActive ? "nav-link active" : "nav-link"
        ) 
        }
        >
          {item.name}
        </NavLink>
      ))}
    </div>
  );
}

export default SideMenu;
