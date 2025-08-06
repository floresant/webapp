import { useOutletContext } from "react-router-dom";
import WelcomeBar from "../Components/WelcomeBar";
import SideMenu from "../Components/SideMenu";
import WealthGraph from "../Components/WealthGraph";
import Calendar from "../Components/Calendar";
import DiscussionCard from "../Components/DiscussionCard";
import USERS from "../Components/Assets/Users";
import "../Styles/WelcomeBar.css";
import "../Styles/Home.css";

function Home() {
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
          <div className="calendar">
            <Calendar />
            <div className="posts">
              <span className="posts-title">Recent Posts</span>
              <div className="posts-scroll">
                {Object.entries(USERS).map(([key, { image, title, name }]) => (
                  <DiscussionCard image={image} title={title} name={name} />
                ))}
              </div>
            </div>
          </div>
          <WealthGraph />
        </div>
      </div>
    </div>
  );
}

export default Home;
