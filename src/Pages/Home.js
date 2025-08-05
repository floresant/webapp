import { useState } from "react";
import WelcomeBar from "../Components/WelcomeBar";
import SideMenu from "../Components/SideMenu";
import WealthGraph from "../Components/WealthGraph";
import Calendar from "../Components/Calendar";
import "../Styles/WelcomeBar.css";
import "../Styles/Home.css"

function Home() {
  const [menuVisible, setMenuVisible] = useState(true);

  return (
    <div className="wrapper">
      <SideMenu
        visible={menuVisible}
        onToggle={() => setMenuVisible((prev) => !prev)}
      />
      <div className="page-body">
        <WelcomeBar />
        <div className="page-content">
          <div className="calendar">
            <Calendar />
          </div>
          <WealthGraph />
        </div>
      </div>
    </div>
  );
}

export default Home;
