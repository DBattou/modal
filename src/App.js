import React, { useState } from "react";
import Modal from "react-modal";
import "./App.css";
import Header from "./Header";
import Bookmark from "./Bookmark";
import Search from "./Search";
import Edition from "./Edition";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="BottomContainer">
        <Bookmark></Bookmark>
        <Search></Search>
        <Edition></Edition>
      </div>
    </div>
  );
}

export default App;
