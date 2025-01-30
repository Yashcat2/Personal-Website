import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './Section/Home';
import Skills from './Section/Skills';
import Projects from './Section/Projects';
import Contact from './Section/Contact';
import Navbar from './Section/Navbar';
import Footer from './Section/Footer';
import Achievements from './Section/Achivements';
import Scanning from './Section/Components/PreLoad/FingerPrint'; // Import Scanning Component

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoading = () => {
    setIsLoading(false);
  };

  // Simulate a longer loading time by setting a timeout
  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      handleLoading(); // Change the state to false after the specified time
    }, 2000); // Keep the loading screen visible for 5 seconds

    return () => clearTimeout(loadingTimeout); // Cleanup the timeout when the component unmounts
  }, []);

  // Only show the Scanning component while loading
  return isLoading ? (
    <div className="loader-container">
      <Scanning /> {/* Show your fingerprint loading animation */}
    </div>
  ) : (
    <div className="App">
      {/* Ensure Navbar stays on top */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center">
        <Navbar />
      </div>

      {/* Apply background layer to home section */}
      <div className="relative text-brightWhite" id="homepage">
        <Home />
        <div className="flex flex-col">
          <Skills />
          <Projects />
          <Achievements />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
