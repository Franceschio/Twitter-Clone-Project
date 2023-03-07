import "./index.css";

import { useState } from "react";

import { BsCardImage, BsFiletypeGif } from "react-icons/bs";

import UsersPostsList from "../UsersPostsMock/UsersPostsList";

const Header = () => {
  const refresh = () => {
    location.reload();
  };

  const [isActive, setActive] = useState(false);

  const giveMenu = () => {
    setActive(() => !isActive);
  };

  return (
    <div className="Header">
      <div className="nav">
        <h3 className="homeTitle">Home</h3>

        <div className="menuIcon" onClick={giveMenu}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>

        <img
          src="https://img.icons8.com/color/256/twitter--v1.png"
          alt="logo"
          id="headerLogo"
          onClick={refresh}
        />
      </div>
      <div className="stories">
        {UsersPostsList.map((user) =>
          user.hasStory === true ? (
            <img src={user.photo} alt="user story" key={user.id} />
          ) : null
        )}
      </div>
      <div className="postPublication">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
          alt="Prof. pic."
          className="postPubProfPic"
        />
        <input
          type="text"
          placeholder="What's happening?"
          className="postPubInput"
        />
        <ul>
          <li>
            <BsCardImage className="imageIcon" />{" "}
          </li>
          <li>
            <BsFiletypeGif className="gifIcon" />{" "}
          </li>
        </ul>
      </div>

      <div className={`mobileMenu ${isActive && `active`}`}>
        <ul>
          <li>
            <img
              src="https://img.icons8.com/pulsar-line/256/home-page.png"
              alt="home"
            />
            <p>Home</p>
          </li>
          <li>
            <img
              src="https://img.icons8.com/material-rounded/256/hashtag-large.png"
              alt="explore"
            />
            <p>Explore</p>
          </li>
          <li>
            <img
              src="https://img.icons8.com/material/256/jingle-bell.png"
              alt="notifications"
            />
            <p>Notifications</p>
          </li>
          <li>
            <img
              src="https://img.icons8.com/ios-glyphs/256/filled-chat.png"
              alt="messages"
            />
            <p>Messages</p>
          </li>
          <li>
            <img
              src="https://img.icons8.com/material/256/bookmark-outline.png"
              alt="bookmarks"
            />
            <p>Bookmarks</p>
          </li>
          <li>
            <img
              src="https://img.icons8.com/material-sharp/512/search.png"
              alt="search"
            />
            <p>search</p>
          </li>
        </ul>
        <button>Tweet</button>
      </div>
    </div>
  );
};

export default Header;
