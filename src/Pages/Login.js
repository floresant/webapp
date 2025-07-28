import { FaUser } from "react-icons/fa";
import { TbLockPassword } from "react-icons/tb";
import '../Styles/Login.css';

function Login() {
    return (
        <div className="wrapper">
            <form className="form" action="">
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder="Username" required/>
                    <FaUser className="icon"/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" required />
                    <TbLockPassword className="icon"/>
                </div>
                <div className="forgot">
                    <a href="#">Forgot Password?</a>
                </div>
                <div className="login">
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login;