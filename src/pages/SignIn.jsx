import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
const SignIn = () => {
  return (
    <div>
      <div className="signup-form">
        <div className="container">
          <div className="header">
            <h1>Sign In</h1>
            <p>Log in to your account</p>
          </div>
          <form>
            <div className="input">
              <i className="fa-solid fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input">
              <i className="fa-solid fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input className="signup-btn" type="submit" value="SIGN IN" />
          </form>
          <p>Or login with</p>
          <div className="social-icons">
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-google"></i>
          </div>
          <p>
            Don't have an account <Link to="/">Create an Account</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
