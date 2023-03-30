import React from "react";
import "./styles/App.css";
import "./styles/normalize.css";
import data from "./data";
import BirthdayWishes from "./components/Wishes";

const App = () => {
  return (
    <div>
      <BirthdayWishes data={data} />
    </div>
  );
};

export default App;
