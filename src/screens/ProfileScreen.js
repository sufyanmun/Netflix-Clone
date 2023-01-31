import React from "react";
import { useSelector } from "react-redux";
import Nav from "../components/Nav";
import { selectUser } from "../features/counter/userSlice";
import { auth } from "./firebase";
import "./ProfileScreen.css";

function ProfileScreen() {
  const user = useSelector(selectUser);
  return (
    <div className="profileScreen">
      <Nav />
      <div className="profilescreen__body">
        <h1> Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />
          <div className="profileScreen__content">
            <h2> {user.email}</h2>
            <div className="profileScreen__plans">
              <button
                onClick={() => auth.SignOut()}
                className="profileScreen__signout"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
