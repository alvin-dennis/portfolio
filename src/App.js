// src/App.js

import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills'; 
import Portfolio from './components/Portfolio'
import ContactMe from './components/ContactMe';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <AboutMe />
      <Skills /> 
      <Portfolio />
      <ContactMe />
      {/* Render the Skills component */}
      {/* Add more sections as needed */}
    </div>
  );
}

export default App;
