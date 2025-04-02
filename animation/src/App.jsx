import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Workspace from './components/Workspace';
import Products from './components/pages/Products';
import Company from './components/pages/Company';
import Legal from './components/pages/Legal';
import Features from './components/pages/Features';
import Pricing from './components/pages/Pricing';
import Updates from './components/pages/Updates';
import About from './components/pages/About';
import Blog from './components/pages/Blog';
import Contact from './components/pages/Contact';
import Privacy from './components/pages/Privacy';
import Terms from './components/pages/Terms';
import Security from './components/pages/Security';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/workspace" element={<Workspace />} />
        <Route path="/products" element={<Products />} />
        <Route path="/company" element={<Company />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/updates" element={<Updates />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/security" element={<Security />} />
      </Routes>
    </Router>
  );
}

export default App;