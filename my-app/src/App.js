import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";

export default function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <SocialLinks />
    </div>
  );
}
