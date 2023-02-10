import React from "react";
import Nav from "../components/Nav";
import { useSelector } from "react-redux";
import { selectUser } from "../features/counter/userSlice";
import { auth } from "./firebase";
import "./ProfileScreen.css";

function ProfileScreen() {
  const user = useSelector(selectUser);
  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1> Edit Profile</h1>
        <div className="profileScreen__info">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" />
          <div className="profileScreen__content">
            <h2> {user.email}</h2>
            <div className="profileScreen__plans">
              <button
                onClick={() => auth.signOut()}
                className="profileScreen__signut"
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
