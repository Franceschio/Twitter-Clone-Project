import "./index.css";

import { useEffect, useState } from "react";

const Post = ({ Postdata, setModalOpen, setpostId }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${Postdata.userId}`)
      .then((res) => res.json())
      .then((data) => {
        !data ? null : setUser(data);
      });
  }, []);

  const modifyThePost = () => {
    setModalOpen((prev) => !prev);
    setpostId(() => Postdata.id);
  };

  //   fetch('https://dummyjson.com/posts/1', {
  //   method: 'PUT', /* or PATCH */
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({
  //     title: 'I think I should shift to the moon',
  //   })
  // })
  // .then(res => res.json())
  // .then(console.log);

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
            src="https://img.icons8.com/external-sbts2018-outline-sbts2018/512/external-modify-basic-ui-elements-2.5-sbts2018-outline-sbts2018.png"
            alt="modify"
            onClick={modifyThePost}
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
