import "./index.css";

const TrendsPosts = ({ postData }) => {
  return (
    <div className="TrendPost">
      <img
        className="TrendPostPhoto"
        src={postData.photo}
        alt={postData.userName}
      />
      <div className="TrendPostContent">
        <span className="TrendPostUserName">{postData.userName}</span>
        <span className="TrendPostUserMail"> {postData.email}</span>
        <p>{postData.body}</p>
        {postData.tags.map((tag) => (
          <span className="TrendPostTags"> #{tag}</span>
        ))}
        <br />
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

export default TrendsPosts;
