import { Outlet, useLocation } from "react-router-dom";
import ChatWidget from "./ChatWidget";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";

function AppLayout() {
  const [menuVisible, setMenuVisible] = useState(false);
  const location = useLocation();
  const hideChat = location.pathname === "/";
  
  return (
    <div className="layout-wrapper">
      <Header />
      <main className="main-content">
        <Outlet context={{menuVisible, setMenuVisible}}/>
      </main>
      {!hideChat && <ChatWidget />}
      <Footer />
    </div>
  );
}

export default AppLayout;
