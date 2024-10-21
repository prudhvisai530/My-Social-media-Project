import React from "react";
import "./online.css";

export default function Online({ user }) {
  return (
    <div>
      <li className="onlineFriend">
        <div className="rightBarImgContainer">
          <img
            className="rightBarProfileImg"
            src={user.profilePicture}
            alt=""
          />
          <span className="rightBarOnline"></span>
        </div>
        <span className="rightBarusername">{user.username}</span>
      </li>
    </div>
  );
}
