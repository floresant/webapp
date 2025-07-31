import CircleIcon from "@mui/icons-material/Circle";
import Button from "@mui/material/Button";
import "../Styles/ContactMethod.css";

function ContactMethod({ circleSize, circleColor, contactIcon, header, message, buttonIcon, buttonText }) {
  return (
    <div className="contact-method">
      <div className="icons">
        <span className="circle">
          <CircleIcon sx={{ fontSize: circleSize, color: circleColor }} />
        </span>
        <span className="contact-icon">
          {contactIcon}
        </span>
      </div>
      <div className="contact-box card">
        <h1>{header}</h1>
        <p>{message}</p>
        {buttonText || buttonIcon ? (
            <Button
          variant="contained"
          color="primary"
          startIcon={buttonIcon}
        >
          {buttonText}
        </Button>
        ) : ("")}
      </div>
    </div>
  );
}

export default ContactMethod;
