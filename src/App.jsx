import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import PostsList from "./components/PostsList";
import Footer from "./components/Footer";
import SideMenu from "./components/SideMenu/SideMenu";
import Trends from "./components/Trends/Trends";
import Modal from "./components/Modal/Modal";

function App() {
  const [inputValue, setInputValue] = useState("");

  const [modalOpened, setModalOpened] = useState(false);

  const [postId, setpostId] = useState(null);

  return (
    <div className="App">
      <SideMenu />
      <Header input={setInputValue} />
      <PostsList
        filteredInput={inputValue}
        setModalOpen={setModalOpened}
        setpostId={setpostId}
      />

      <div className="shareATweet">
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
    </div>
  );
}

export default App;
