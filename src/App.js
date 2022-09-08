import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
function App() {
  return (
    <div >

      {/* ALWAYS REMEMBER, TAILWINDSCSS IS A MOBILE-FIRST APPROCH*/}
        <NavBar/>
        <Home/>
        <About/>
        <Skills/>
        <Portfolio/>
        <Contact/>
    </div>
  );
}

export default App;
