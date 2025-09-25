import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Features from './components/Features/Features';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Legal from './components/Legal/Legal';
import Chatbot from './components/Chatbot/Chatbot';

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    // Handle hash scrolling when navigating from other pages
    if (location.hash) {
      const elementId = location.hash.substring(1); // Remove the # symbol
      const element = document.getElementById(elementId);
      if (element) {
        // Add a small delay to ensure the element is rendered
        setTimeout(() => {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
          });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Services />
            {/* <Features /> */}
            <Contact />
          </>
        } />
        <Route path="/legal" element={<Legal />} />
      </Routes>
      <Footer />
      <Chatbot />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <AppContent />
      </div>
    </Router>
  );
}

export default App;