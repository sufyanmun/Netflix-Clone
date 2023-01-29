import React, { useRef } from "react";
import "./SignUpScreen.css";
import { getAuth } from "firebase/auth";

function SignUpScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    getAuth.createUserWithEmailAndPassword();
  };

  const signIn = (e) => {
    e.preventDefault();
  };
  return (
    <div className="signUpScreen">
      <form>
        <h1> Sign In </h1>
        <input ref={emailRef} placeholder="Email" type="email" />
        <input ref={passwordRef} placeholder="Password" type="Password" />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
        <h4>
          <span className="signUpScreen__gray">New to Netflix? </span>
          <span className="signUpScreen__link" onClick={register}>
            Sign up now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignUpScreen;
