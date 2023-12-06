import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Aos from "aos";
import "aos/dist/aos.css";
import NavMobile from "./components/NavMobile";

function App() {
  const [navMobile, setNavMobile] = useState(true);
  useEffect(() => {
    Aos.init({
      duration: 2500,
      delay: 400,
    });
  });
  return (
    <div className=" overflow-hidden">
      <Header />
      <Hero />
      <div
        className={`${
          navMobile ? "right-0" : "-right-full"
        }fixed z-10 top-0 h-full transition-all duration-200`}>
        <NavMobile setNavMobile={setNavMobile} />
      </div>
    </div>
  );
}

export default App;
