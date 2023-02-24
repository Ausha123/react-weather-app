import React from "react";
import "../login/login.css";
import profile from "./../login/image/a.png";
import email from "./../login/image/email.jpg";
import pass from "./../login/image/pass.png";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  function loginButton() {
    navigate("/search");
  }

  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div className="imgs">
            <div className="container-image">
              <img src={profile} alt="profile" className="profile" />
            </div>
          </div>
          <div>
            <h1>Login Page</h1>
            <div>
              <img src={email} alt="email" className="email" />
              <input type="text" placeholder="user name" className="name" />
            </div>
            <div className="second-input">
              <img src={pass} alt="pass" className="email" />
              <input type="password" placeholder="password" className="name" />
            </div>
            <div className="login-button">
              <button className="login" type="submit" onClick={loginButton}>
                Login
              </button>
            </div>

            <p className="link">
              <label className="forgot">Forgot password ?</label>
              <label className="forgot">Sign Up</label>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// export default login;
