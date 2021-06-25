import React from "react";
import Stats from "./Stats.jsx";

export default function Card() {
  return (
    <div className="wrapper">
      <div className="profile">
        <img
          className="profile__pic"
          src="../images/image-victor.jpg"
          alt="profile pic"
        />
        <div className="profile__person">
          Victor Crest <span className="profile__age"> 26</span>
        </div>
        <div className="profile__location">London</div>
      </div>

      <div className="stats">
        <Stats numbers="80K" category="Followers" />
        <Stats numbers="803K" category="Likes" />
        <Stats numbers="1.4K" category="Photos" />
      </div>
    </div>
  );
}
