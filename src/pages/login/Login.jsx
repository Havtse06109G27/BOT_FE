import React from "react";
import "./login.css";
import { FacebookFilled, GoogleCircleFilled } from "@ant-design/icons";

const Login = () => {
  return (
    <div className="page">
      <div className="cover">
        <h1>Login</h1>
        <input className="usernameInput" type="text" placeholder="Account" />
        <input
          className="passwordInput"
          type="password"
          placeholder="Password"
        />
        <div className="login-btn">Login</div>
        <a href="">Forgot Password</a>
        <p className="text">Or login using</p>
        <div className="alt-login">
          <div className="facebook">
            <FacebookFilled style={{ marginRight: '4px'}}/>
            Facebook
          </div>
          <div className="google">
            <GoogleCircleFilled style={{ marginRight: '4px'}}/>
            Google
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
