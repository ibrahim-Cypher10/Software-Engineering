import React from 'react';
import '../styles/HomePage.css'; // Make sure this points to your CSS file

const HomePage: React.FC = () => {
  return (
    <div className="homepage">
      <nav className="navbar">
        <div className="container">
          <h1>OLumsX</h1>
          <div className="search-bar">
            <input type="text" placeholder="Search for products" />
            <button type="submit">Search</button>
          </div>
          <ul>
            <li>Deals</li>
            <li>Categories</li>
            <li>Cart</li>
            <li>Account</li>
          </ul>
        </div>
      </nav>
      <header className="hero-banner">
        <div className="container hero-content">
          <h2>Welcome to OLumsX - The best tech deals!</h2>
          <p>Find the latest gadgets at the most affordable prices.</p>
          <button>Shop Now</button>
        </div>
      </header>
      <section className="featured-products container">
        <h2>Featured Products</h2>
        <div className="product-grid">
          {/* Placeholder for products; in a real app, map through product data here */}
          <div className="product-card">Product 1</div>
          <div className="product-card">Product 2</div>
          <div className="product-card">Product 3</div>
          {/* ... more products */}
        </div>
      </section>
      <footer className="footer">
        <div className="container">
          <p>© 2024 OLumsX, Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
