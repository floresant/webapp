import { useState } from "react";
import WelcomeBar from "../Components/WelcomeBar";
import SideMenu from "../Components/SideMenu";
import ContactMethod from "../Components/ContactMethod";
import CallIcon from "@mui/icons-material/Call";
import ChatIcon from "@mui/icons-material/Chat";
import EmailIcon from "@mui/icons-material/Email";
import "../Styles/Contacts.css";

function Contact() {
  const [menuVisible, setMenuVisible] = useState(true);
  const circleSize = 150;
  const circleColor = "rgb(102, 3, 60)";
  const iconSize = 75;
  const iconColor = "white";

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
            Contact Us
          </h2>
          <div className="contacts">
            <ContactMethod
              circleSize={circleSize}
              circleColor={circleColor}
              contactIcon={
                <CallIcon sx={{ fontSize: iconSize, color: iconColor }} />
              }
              header={"Call Us"}
              message={"1-800-555-5555"}
            />
            <ContactMethod
              circleSize={circleSize}
              circleColor={circleColor}
              contactIcon={
                <ChatIcon sx={{ fontSize: iconSize, color: iconColor }} />
              }
              header={"Chat Live"}
              message={"We're available Sun 7:00pm EST - Friday 7:00pm EST"}
              buttonText={"Chat Now"}
            />
            <ContactMethod
              circleSize={circleSize}
              circleColor={circleColor}
              contactIcon={
                <EmailIcon sx={{ fontSize: iconSize, color: iconColor }} />
              }
              header={"Ask a Question"}
              message={
                "Fill out our form and we'll get back to you in 24 hours."
              }
              buttonText={"Get Started"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
