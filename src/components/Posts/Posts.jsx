import "./index.css";

import { useEffect, useState } from "react";

const Post = ({ Postdata }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${Postdata.userId}`)
      .then((res) => res.json())
      .then((data) => {
        !data ? null : setUser(data);
      });
  }, []);

  return (
    <div className="Post">
      <img className="PostPhoto" src={user.image} alt={user.userName} />
      <div className="PostContent">
        <span className="PostUserName">{`${user.firstName} ${user.lastName}`}</span>
        <span className="PostUserMail"> {user.email}</span>
        <p>{Postdata.body}</p>
        <div className="PostIcons">
          <img
            src="https://img.icons8.com/external-those-icons-lineal-those-icons/256/external-Chat-Bubble-messages-and-chat-those-icons-lineal-those-icons-10.png"
            alt="chat"
          />
          <img
            src="https://img.icons8.com/material-sharp/256/sorting-arrows-horizontal.png"
            alt="arrow"
          />
          <img
            src="https://img.icons8.com/ios-glyphs/256/hearts.png"
            alt="heart"
          />
          <img src="https://img.icons8.com/ios/256/upload.png" alt="upload" />
        </div>
      </div>
    </div>
  );
};

export default Post;
