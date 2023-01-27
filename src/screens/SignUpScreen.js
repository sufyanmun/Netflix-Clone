import React from "react";
import "./SignUpScreen.css";
function SignUpScreen() {
  return (
    <div className="signUpScreen">
      <form>
        <h1> Sign In </h1>
        <input placeholder="Email" type="email" />
        <input placeholder="Password" type="Password" />
        <button type="submit">Sign In</button>
        <h4>
          <span className="signUpScreen__gray">New to Netflix? </span>
          <span className="signUpScreen__link">Sign up now.</span>
        </h4>
      </form>
    </div>
  );
}

export default SignUpScreen;
