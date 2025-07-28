import logo from '../Logo-LongAngle.png';
import '../Styles/Header.css';

function Header() {
    return (
        <div className="Header">
            <img className="HeaderLogo" src={logo} alt="Long Angle - The Trusted Community for Navigating Wealth"></img>
        </div>
    )
}

export default Header;
