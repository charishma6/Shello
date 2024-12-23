import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Homepg';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cartpg';
import './styles/globalsty.css';
import Login from './pages/Login';
import ContactUs from './pages/ContactUs';
import ComplaintForm from './pages/Complaint';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/Contact" element={<ContactUs/>}/>
        <Route path="/Complaint" element={<ComplaintForm />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
