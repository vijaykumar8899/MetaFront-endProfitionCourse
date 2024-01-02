import logo from "./logo.svg";
import "./App.css";
import Intro1 from "./components/Intro1";
import Intro2 from "./components/Intro2";
import Nav from "./components/week1-JSX_syntax_and_the_arrow_function";
import Promo from "./components/Heading";
import Intro3 from "./components/Intro3";
import Footer from "./components/Footer";
import Hook from "./components/hooks";
import Form from "./components/form";
import UseRef from "./components/useRef";
import React, { useState } from "react";

function App() {
  const [word, setWord] = useState("Anonynous");
  function handleClick() {
    setWord("Vijay");
  }
  return (
    <div>
      <Promo name={word} />
      <button onClick={handleClick}>click me</button>
    </div>
  );
}

export default App;
