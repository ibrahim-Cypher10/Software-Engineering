import React from 'react';
import '../styles/HomePage2.css';
import logo from '../assets/image/macbook.jpeg'; // Ensure you have a logo in your assets
import featuredImage from '../assets/image/deal.jpg'; // Ensure you have a featured image in your assets
import productImage from '../assets/image/iphone.jpeg'; // Ensure you have product images in your assets

const HomePage2: React.FC = () => {
  const productImages = [productImage, productImage, productImage]; // Repeat the same image for demonstration

  return (
    <div className="homepage2">
      <nav className="navbar">
        <img src={logo} alt="OLumsX" className="logo" />
        <ul className="nav-links">
          <li><a href="#deals">Deals</a></li>
          <li><a href="#categories">Categories</a></li>
          <li><a href="#cart">Cart</a></li>
          <li><a href="#account">Account</a></li>
        </ul>
        <div className="search-bar">
          <input type="search" placeholder="Search for products..." aria-label="Search" />
          <button type="button">Search</button>
        </div>
      </nav>
      <header className="featured-product">
        <img src={featuredImage} alt="Featured Product" />
        <div className="featured-text">
          <h1>Discover Amazing Tech</h1>
          <p>Experience innovation with our top selection of tech.</p>
          <a href="#featured" className="btn-primary">Shop Now</a>
        </div>
      </header>
      <main>
        <section className="product-grid">
          {productImages.map((src, index) => (
            <article key={index} className="product-card">
              <img src={src} alt={`Product ${index + 1}`} />
              <div className="product-info">
                <h2>Product {index + 1}</h2>
                <p>Get the best deal on this superb product.</p>
                <a href="#product" className="btn-secondary">Learn More</a>
              </div>
            </article>
          ))}
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2024 OLumsX, Inc. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage2;
