import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import BrandStory from './components/BrandStory';
import Services from './components/Services';
import DeliveryZone from './components/DeliveryZone';
import JoinUs from './components/JoinUs';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/story" element={<BrandStory />} />
            <Route path="/services" element={<Services />} />
            <Route path="/delivery" element={<DeliveryZone />} />
            <Route path="/join" element={<JoinUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

