import TitleBar from "./TitleBar";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div>
      <TitleBar />
      <div className="accent-primary"></div>
      <div className="accent-secondary"></div>
      <div className="overlay"></div>

      <div id="login-container">
        <h2 id="login-header">Welcome!</h2>
        <h4 id="login-subheader">Let's get started!</h4>
        <div id="login-email-title">Email</div>
        <input id="login-email" type="text"></input>
        <div id="login-password-title">Password</div>
        <input id="login-password" type="password"></input>
        <Link to="/dashboard">
          <button id="login-button" className="primary-color-button">
            Login
          </button>
        </Link>
        <div className="login-links">
          <a href="/">Forgot Password?</a>
          <a href="/">Create Account</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
