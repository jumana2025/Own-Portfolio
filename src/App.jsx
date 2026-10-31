import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import CustomCursor, { ScrollProgress } from "./components/CustomCursor";

function App() {
  return (
    <Router>
      <div className="relative w-full min-w-0 max-w-full overflow-x-hidden">
        <CustomCursor />
        <ScrollProgress />

        {/* NAVBAR */}
        <Navbar />

        {/* MAIN CONTENT */}
        <main className="relative w-full min-w-0 max-w-full overflow-x-hidden">
          <Home />
          <About />
          <Projects />
          <Contact />
        </main>
        <Footer />

      </div>
    </Router>
  );
}

export default App;
