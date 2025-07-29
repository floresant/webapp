import { useState } from "react";
import WelcomeBar from "../Components/WelcomeBar";
import SideMenu from "../Components/SideMenu";

function AssetAllocation() {
  const [menuVisible, setMenuVisible] = useState(true);
  
  return (
    <div className="wrapper">
      <WelcomeBar />
      <div className="page-body">
        <SideMenu visible={menuVisible} onToggle={() => setMenuVisible((prev) => !prev)} />
        <div className="page-content">
          <h1>ASSET ALLOCATION</h1>
        </div>
      </div>
    </div>
  )
}

export default AssetAllocation;
