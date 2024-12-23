import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      {/* Main Navbar */}
      <nav className="navbar">
        <div className="navbar-logo">
          <a href="/">Mytalorzone</a>
        </div>
        <div className="navbar-links">
          <a href="/">Home</a>
          <a href="/products">Products</a>
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="navbar-icons">
          <a href="/profile" className="icon-link">
            <i className="fas fa-user"></i> Profile
          </a>
          <a href="/wishlist" className="icon-link">
            <i className="fas fa-heart"></i> Wishlist
          </a>
          <a href="/cart" className="icon-link">
            <i className="fas fa-shopping-cart"></i> Cart
          </a>
          <a href="/login" className="icon-link">
            <i className="fas fa-sign-in-alt"></i> Login
          </a>
        </div>
      </nav>

      {/* Secondary Navbar */}
      <div className="secondary-navbar">
        <div className="search-bar">
          <input type="text" placeholder="Search for products..." />
          <button>Search</button>
        </div>
        <ul className="category-links">
          <li>
            <a href="/ethnicwear">Ethnicwear</a>
          </li>
          <li>
            <a href="/new-collection">New Collection</a>
          </li>
          <li>
            <a href="/tops-shirts">Tops & Shirts</a>
          </li>
          <li>
            <a href="/dresses">Dresses</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;

  


      

