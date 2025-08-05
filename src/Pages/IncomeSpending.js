import { useState } from "react";
import WelcomeBar from "../Components/WelcomeBar";
import SideMenu from "../Components/SideMenu";

function IncomeSpending() {
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
          <h2
            style={{
              fontSize: "42px",
              fontWeight: "700",
              color: "rgb(102, 2, 60)",
              padding: "12px",
              fontFamily: "Lato, sans-serif",
            }}
          >
            Income & Spending
          </h2>
        </div>
      </div>
    </div>
  );
}

export default IncomeSpending;
