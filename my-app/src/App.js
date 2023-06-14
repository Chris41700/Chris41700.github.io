import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import SocialLinks from "./components/SocialLinks";

export default function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <SocialLinks />
    </div>
  );
}
