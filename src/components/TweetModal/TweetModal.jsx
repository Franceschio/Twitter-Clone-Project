import { useRef } from "react";
import "./index.css";

const TweetModal = ({ tweetModalOpened, setTweetModalOpened }) => {
  const closeModal = () => {
    setTweetModalOpened((prev) => !prev);
  };

  const publicPost = (e) => {
    e.preventDefault();
    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        body: `${postPublicationText.current.value}`,
        userId: `${postPublicationId.current.value}`,
      }),
    })
      .then((res) => res.json())
      .then(console.log);
  };

  const postPublicationId = useRef(null);
  const postPublicationText = useRef(null);

  return (
    <div className={`TweetModal ${tweetModalOpened && "opened"}`}>
      <div className="tweetModalOverflow" onClick={closeModal}></div>
      <div className="postPublication">
        <div className="publicationHeader">
          <h3 className="closePublication" onClick={closeModal}>
            X
          </h3>
          <h3>Publication</h3>
          <img
            src="https://img.icons8.com/color/256/twitter--v1.png"
            alt="Logo"
          />
        </div>
        <div className="publicationContent">
          <form action="publication" onSubmit={publicPost}>
            <input
              type="text"
              ref={postPublicationId}
              name="idPublication"
              className="idPublication"
              placeholder="New id"
            />

            <input
              type="text"
              ref={postPublicationText}
              name="textPublication"
              className="textPublication"
              placeholder="New text"
            />
            <input
              type="submit"
              value={"submit"}
              className="submitPublication"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default TweetModal;
