import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Cards from "./components/Cards";
import SecondCard from "./components/SecondCard";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState("white");
  return (
    <div
      className={`px-2 md:p-0 ${theme} ${ theme === "white" ? "text-black" : "text-white"}   `}>
      <Navbar setTheme={setTheme} theme={theme} />
      <Main />
      <Cards />
      <SecondCard theme={theme}   />
      <Footer theme={theme} />
    </div>
  );
}

export default App;
