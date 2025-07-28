import WelcomeBar from "../Components/WelcomeBar";
import SideMenu from "../Components/SideMenu";
import "../Styles/WelcomeBar.css"

function Home() {
    return (
        <div className="wrapper">
            <WelcomeBar />
            <SideMenu />
        </div>
    )
}

export default Home;