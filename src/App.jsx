import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import PostsList from "./components/PostsList";
import Footer from "./components/Footer";
import SideMenu from "./components/SideMenu/SideMenu";
import Trends from "./components/Trends/Trends";

function App() {
  return (
    <div className="App">
      <SideMenu />
      <Header />
      <PostsList />
      <div className="shareATweet">
        <img
          src="https://img.icons8.com/ios-glyphs/512/hand-with-pen.png"
          alt="Share a post"
        />
      </div>
      <Trends />
      <Footer />
    </div>
  );
}

export default App;
