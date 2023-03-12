import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import PostsList from "./components/PostsList";
import Footer from "./components/Footer";
import SideMenu from "./components/SideMenu/SideMenu";
import Trends from "./components/Trends/Trends";
import Modal from "./components/Modal/Modal";
import TweetModal from "./components/TweetModal/TweetModal";

function App() {
  const [inputValue, setInputValue] = useState("");

  const [modalOpened, setModalOpened] = useState(false);

  const [TweetModalOpened, setTweetModalOpen] = useState(false);

  const [postId, setpostId] = useState(null);

  const open_closeTweetModal = () => {
    setTweetModalOpen((prev) => !prev);
  };

  return (
    <div className="App">
      <SideMenu setTweetModalOpen={setTweetModalOpen} />
      <Header input={setInputValue} />
      <PostsList
        filteredInput={inputValue}
        setModalOpen={setModalOpened}
        setpostId={setpostId}
      />

      <div className="shareATweet" onClick={open_closeTweetModal}>
        <img
          src="https://img.icons8.com/ios-glyphs/512/hand-with-pen.png"
          alt="Share a post"
        />
      </div>
      <Trends />
      <Footer />
      <Modal
        modalOpened={modalOpened}
        setModalOpen={setModalOpened}
        postId={postId}
      />
      <TweetModal
        tweetModalOpened={TweetModalOpened}
        setTweetModalOpened={setTweetModalOpen}
      />
    </div>
  );
}

export default App;
