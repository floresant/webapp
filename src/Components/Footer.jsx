import logo from '../Logo-LongAngle.png';
import '../Styles/Footer.css';

function Footer() {
    return (
        <div className="Footer">
            <small className='copyright-text'>&copy; 2025 Long Angle, Inc. All rights reserved.</small>
            <img className="FooterLogo" src={logo} alt="Long Angle - The Trusted Community for Navigating Wealth"></img>
        </div>
    )
}

export default Footer;
