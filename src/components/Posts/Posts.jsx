import "./index.css";

const Post = ({ Postdata }) => {
  return (
    <div className="Post">
      <img className="PostPhoto" src={Postdata.photo} alt={Postdata.userName} />
      <div className="PostContent">
        <span className="PostUserName">{Postdata.userName}</span>
        <span className="PostUserMail"> {Postdata.email}</span>
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
