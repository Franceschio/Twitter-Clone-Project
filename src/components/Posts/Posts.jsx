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

  const setLikeIcon = () => {
    setLike((prev) => !prev);
  };

  const removeLike = () => setNLikes(parseInt(nLikes) - 1);

  const addLike = () => setNLikes(parseInt(nLikes) + 1);

  const [isLiked, setLike] = useState(false);
  const [nLikes, setNLikes] = useState(0);

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

          <div className="like" onClick={setLikeIcon}>
            {isLiked === true ? (
              <img
                src="https://img.icons8.com/fluency/512/hearts.png"
                alt="heart"
                onClick={removeLike}
              />
            ) : (
              <img
                src="https://img.icons8.com/ios-glyphs/256/hearts.png"
                alt="heart"
                onClick={addLike}
              />
            )}
            <span>{nLikes}</span>
          </div>

          <img src="https://img.icons8.com/ios/256/upload.png" alt="upload" />
        </div>
      </div>
    </div>
  );
};

export default Post;
