import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="relative w-full min-w-0 max-w-full overflow-x-hidden">

        {/* NAVBAR */}
        <Navbar />

        {/* MAIN CONTENT */}
        <main className="relative w-full min-w-0 max-w-full overflow-x-hidden">
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>

      </div>
    </Router>
  );
}

export default App;