import { useOutletContext } from "react-router-dom";
import WelcomeBar from "../Components/WelcomeBar";
import SideMenu from "../Components/SideMenu";

function Settings() {
const { menuVisible, setMenuVisible } = useOutletContext();

  return (
    <div className="wrapper">
        <SideMenu
          visible={menuVisible}
          onToggle={() => setMenuVisible((prev) => !prev)}
        />
      <div className="page-body">
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
            Settings
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Settings;
