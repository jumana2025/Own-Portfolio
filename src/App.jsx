import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import CustomCursor, { ScrollProgress } from "./components/CustomCursor";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [showLoader, setShowLoader] = useState(true);
  const [loaderExiting, setLoaderExiting] = useState(false);

  useEffect(() => {
    const exitTimer = window.setTimeout(() => setLoaderExiting(true), 1150);
    const removeTimer = window.setTimeout(() => setShowLoader(false), 1500);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  return (
    <Router>
      <div className="relative w-full min-w-0 max-w-full overflow-x-hidden">
        {showLoader && <LoadingScreen exiting={loaderExiting} />}
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
