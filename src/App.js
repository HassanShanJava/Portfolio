import React from "react";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import Home from "./components/Home";
// import NavBar from "./components/NavBar";
// import Portfolio from "./components/Portfolio";
// import Skills from "./components/Skills";

import {Routes, Route} from "react-router-dom" 
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SkillPage from "./pages/SkillPage";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";

// {/* ALWAYS REMEMBER, TAILWINDSCSS IS A MOBILE-FIRST APPROCH*/}


function App() {
  return (
    <> 
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/about' element={<AboutPage/>} />
          <Route path='/skills' element={<SkillPage/>} />
          <Route path='/portfolio' element={<PortfolioPage/>} />
          <Route path='/contact' element={<ContactPage/>} />
          

        </Routes>

    </>
  );
}

export default App;
