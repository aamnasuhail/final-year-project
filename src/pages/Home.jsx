import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <div className="signup-form">
        <div className="container">
          <div className="header">
            <h1>Create an Account</h1>
            <p>Get started for free!</p>
          </div>
          <form>
            <div className="input">
              <i className="fa-solid fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input">
              <i className="fa-solid fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input">
              <i className="fa-solid fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input className="signup-btn" type="submit" value="SIGN UP" />
          </form>
          <p>Or sign up with</p>
          <div className="social-icons">
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-google"></i>
          </div>
          <p>
            Already have an account <Link to="/signin">sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
