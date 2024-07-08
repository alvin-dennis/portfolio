import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills'; 
import Portfolio from './components/Portfolio'
import ContactMe from './components/ContactMe';
import { FadeLoader } from 'react-spinners';

import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div style={{minHeight:"100vh", width: "100%", display:"flex",justifyContent:"center",alignItems:"center"}}>
          <FadeLoader color="#800000" loading={loading} size={200} />
        </div>
      ) : (
        <>
          <Navbar />
          <Header />
          <AboutMe />
          <Skills /> 
          <Portfolio />
          <ContactMe />
          {/* Render additional sections/components as needed */}
        </>
      )}
    </div>
  );
}

export default App;
