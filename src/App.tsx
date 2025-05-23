import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import LearnMore from './pages/LearnMore';
import LearnMoreBenefits from './pages/LearnMoreBenefits';
import ProductDetails from './pages/ProductDetails';
import { CartProvider } from './context/CartContext';
import CartDrawer from './components/CartDrawer';
import './index.css';

function App() {
  useEffect(() => {
    // Add Google Fonts link
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <CartProvider>
      <Router>
        <CartDrawer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learn-more" element={<LearnMore />} />
          <Route path="/learn-more-benefits" element={<LearnMoreBenefits />} />
          <Route path="/product" element={<ProductDetails />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;