import React, { useEffect, ReactNode } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import Headermain from "./components/Header";
import { Home } from "./components/home";
import { About } from "./components/about";
import { Portfolio } from "./components/projects";
import { ContactUs } from "./components/contact";
// import AnimatedCursor from "../hooks/AnimatedCursor";
import "./App.css";
import { Socialicons } from "./components/icons";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const App: React.FC = () => {
  return (
    
    
    <Router>
      
      <Headermain/>
      <Socialicons/>
      <TransitionGroup>
    <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<ContactUs />} /> 
        <Route path="*" element={<Home />} />
      </Routes>
      </TransitionGroup>
      </Router>
  );
};

export default App;
