import { useState } from "react";
import WelcomeBar from "../Components/WelcomeBar";
import SideMenu from "../Components/SideMenu";
import WealthGraph from "../Components/WealthGraph";
import "../Styles/WelcomeBar.css";

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
          <WealthGraph />
        </div>
      </div>
    </div>
  );
}

export default Home;
