import { useOutletContext } from "react-router-dom";
import Glossary from "../Components/Glossary";
import WelcomeBar from "../Components/WelcomeBar";
import SideMenu from "../Components/SideMenu";

function PrivateEquityGlossary() {
  const { menuVisible, setMenuVisible } = useOutletContext();

  return (
    <div className="wrapper">
      <SideMenu
        visible={menuVisible}
        onToggle={() => setMenuVisible((prev) => !prev)}
      />
      <div className="page-body">
        <WelcomeBar />
        <div className="page-content">
          <div className="">
            <h2
              className="cn-main-title"
              style={{
                fontSize: "42px",
                fontWeight: "700",
                color: "rgb(102, 2, 60)",
                padding: "12px",
                fontFamily: "Lato, sans-serif",
              }}
            >
              Private Equity Glossary
            </h2>
            <p
              className="cn-description"
              style={{
                fontSize: "22px",
                fontWeight: "600",
                color: "black",
                fontFamily: "&quot;Source Sans Pro&quot, sans-serif",
                padding: "8px",
              }}
            >
              A comprehensive guide to foundational terms in private markets,
              designed to support informed investment and strategy decisions.
            </p>
            <Glossary />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivateEquityGlossary;
