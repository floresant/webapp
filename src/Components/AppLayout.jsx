import { Outlet, useLocation } from "react-router-dom";
import ChatWidget from "./ChatWidget";
import Header from "./Header";
import Footer from "./Footer";

function AppLayout() {
  const location = useLocation();
  const hideChat = location.pathname === "/";

  return (
    <div className="layout-wrapper">
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
      {!hideChat && <ChatWidget />}
      <Footer />
    </div>
  );
}

export default AppLayout;
