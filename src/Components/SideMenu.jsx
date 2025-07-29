import { Link } from 'react-router-dom';
import { NavLink, useLocation } from "react-router-dom";
import '../Styles/SideMenu.css';


function SideMenu({ visible, onToggle}) {
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
    { name: "LOGOUT", path: "/"}
  ]


  return (
    <div className='side-menu-wrapper'>
      <div className={`side-menu ${visible ? '' : 'hidden'}`}>
        {visible && (menuItems.map((item) => (
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
        )))}
      </div>
      <button className="menu-toggle-btn" onClick={onToggle}>
        {visible ? '<' : '>'}
      </button>
    </div>
  );
}

export default SideMenu;
