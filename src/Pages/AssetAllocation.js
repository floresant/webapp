import { useState } from "react";
import WelcomeBar from "../Components/WelcomeBar";
import SideMenu from "../Components/SideMenu";
import ToggleSwitch from "../Components/ToggleSwitch";
import PortfolioTypeButtons from "../Components/PortfolioTypeButtons";
import { ClientPieChart, ExamplePieChart } from "../Components/PieCharts";
import '../Styles/AssetAllocation.css'

function AssetAllocation() {
  const [menuVisible, setMenuVisible] = useState(true);
  const [dollarVisible, setDollarVisible] = useState(false);
  const [selectedPortfolio, setSelectedPortfolio] = useState('Aggressive');

  const handleToggle = (event) => {
    setDollarVisible(event.target.checked);
  }

  const handleSelection = (portfolio) => {
    setSelectedPortfolio(portfolio)
  }


  
  return (
    <div className="wrapper">
      <WelcomeBar />
      <div className="page-body">
        <SideMenu visible={menuVisible} onToggle={() => setMenuVisible((prev) => !prev)} />
        <div className="page-content pie-charts">
          <div className="pie-chart client">
            <h1>Your Portfolio</h1>
            <ClientPieChart dollarVisible={dollarVisible}/>
          </div>
          <div>
            <div className="show-dollar-button">
              <ToggleSwitch left={"Show %"} right={"Show $"} onChange={handleToggle}/>
              <PortfolioTypeButtons selectedPortfolio={selectedPortfolio} handleSelection={handleSelection} />
            </div>
          </div>
          <div className="pie-chart example">
            <h1>Sample Portfolio</h1>
            <p>{selectedPortfolio} Type</p>
            <ExamplePieChart dollarVisible={dollarVisible} selectedPortfolio={selectedPortfolio}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AssetAllocation;
