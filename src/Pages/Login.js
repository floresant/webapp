import { useRef, useState, useEffect } from "react";
import { Link, useNavigate, useNavigationType } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { TbLockPassword } from "react-icons/tb";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { LogIn } from 'lucide-react';
import "../Styles/Login.css";
import "../Styles/App.css";

function Login() {
  const userRef = useRef();
  const errRef = useRef();
  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState("false");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add authentication later
    navigate("/home");
  };

  return (
    <div className="layout-wrapper">
      <Header />
      <main className="main-content">
        <div className="login-page center">
          <form className="form" onSubmit={handleSubmit}>
            <p
              ref={errRef}
              className={errMsg ? "errmsg" : "offscreen"}
              aria-live="assertive"
            >
              {errMsg}
            </p>
            <h1>Login</h1>
            <div className="input-box">
              <input
                type="text"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                placeholder="Username"
                value={user}
                // required
              />
              <FaUser className="icon" />
            </div>
            <div className="input-box">
              <input
                type="password"
                onChange={(e) => setPwd(e.target.value)}
                placeholder="Password"
                value={pwd}
                // required
              />
              <TbLockPassword className="icon" />
            </div>
            <div className="forgot">
              <a href="#">Forgot Password?</a>
            </div>
            <div className="login">
              <button type="submit"> <LogIn /> Login</button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Login;
