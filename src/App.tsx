import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Aboutus from "./components/Aboutus";
import CallToAction from "./components/CallToAction";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Aboutus />
        <div className="bg-[url('/bg.png')] w-full h-fitt bg-cover bg-center">
          <CallToAction title="Engage your customers" />
        </div>
      </main>
      <footer>
        <Navbar />
      </footer>
    </>
  );
};

export default App;
