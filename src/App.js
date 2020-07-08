import React from "react";
import "./App.css";
import Search from "./components/searchbar/searchbar";
import Mainscreen from "./components/mainscreen/mainscreen";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Search />
        <Mainscreen />
      </div>
    </div>
  );
}

export default App;
