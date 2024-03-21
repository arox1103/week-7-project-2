import React from 'react';
import Header from './src/Header';
import HeroSection from './src/HeroSection.jsx';
import DestinationsSection from './src/DestinationsSection.jsx';
import ContactForm from './src/ContactForm.jsx';
import Footer from './src/Footer.jsx';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <HeroSection />
      <DestinationsSection />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
