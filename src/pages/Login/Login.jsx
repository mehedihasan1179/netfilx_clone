import React, { useState } from "react";
import "./Login.css";
import bcg from "../../assets/background_large.jpg";
import logo from "../../assets/logo.png";
import xmark_icon from "../../assets/circle-xmark.svg";
import { login, signup } from "../../firebase";
import netflix_spinner from "../../assets/netflix_spinner.gif";

const Login = () => {

  const [signinState, setSigninState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const user_auth = async (event) => {
    event.preventDefault();
    setLoading(true);
    if(signinState === "Sign In") {
      await login(email, password);
    } else {
      await signup(name, email, password);
    }
    setLoading(false);
  }

  return (
    loading ? <div className="loading-spinner">
      <img src={netflix_spinner} alt="" /> 
    </div> :
    <div className="log-in">
      <img src={bcg} alt="" className="bcg-image" />

      <div className="container">
        <img src={logo} alt="" className="logo" />

        <div className="signin-info">
          <form action="">
            <h1>{signinState}</h1>

            {signinState === "Sign Up"? <label htmlFor="">
              <input
                value={name}
                onChange={(e) => {setName(e.target.value)}}
                type="text"
                placeholder="Enter your name"
                className="email"
              />
            </label> : <></>}
            

            <label htmlFor="">
              <input
                value={email}
                onChange={(e) => {setEmail(e.target.value)}}
                type="text"
                placeholder="Email or mobile number"
                className="email"
              />
              <div className="error-massage">
                <img src={xmark_icon} alt="" className="x-mark" />
                <p>Please enter a valid email or phone number.</p>
              </div>
            </label>

            <label htmlFor="">
              <input
                value={password}
                onChange={(e) => {setPassword(e.target.value)}}
                type="password"
                placeholder="Password"
                className="password"
              />
              <div className="error-massage">
                <img src={xmark_icon} alt="" className="x-mark" />
                <p>Your password must contain between 4 and 60 characters.</p>
              </div>
            </label>

            <button onClick={user_auth} type="submit" className="btn">{signinState}</button>
            <span>Forgot password?</span>
              <div className="checkbox">
            <input type="checkbox" />
            <label> Remember me</label>
            </div>
            <div className="signupOrSignIn">
              {signinState === "Sign In" ? <p>
                New to Netflix? <span onClick={() => setSigninState("Sign Up")}> Sign up now.</span>
              </p> : <p>
                Already have a account? <span onClick={() => setSigninState("Sign In")}>Sign In.</span>
              </p>}
              
              
            </div>
          </form>
        </div>
      </div>
    </div>
    
    

  );
    
    
};

export default Login;
