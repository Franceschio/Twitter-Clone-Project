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
      <Trends />
      <Footer />
    </div>
  );
}

export default App;
