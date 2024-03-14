import React from 'react';
import '../styles/productpage.css'; // Make sure to create this CSS file with the styles provided below
import random from './random.jpg'
import macbook from "../assets/image/macbook.jpeg"
import deal from "../assets/image/deal.jpg"

const ProductPage: React.FC = () => {
  return (
    <div className="product-page">
      <div className="product-gallery">
        {/* This would be dynamically loaded with your product's images */}
        <img src={random} alt="Main Product" className="main-image" />
        <div className="thumbnail-container">
          {/* Thumbnails or small preview images */}
          <img src={macbook} alt="Thumbnail 1" className="thumbnail" />
          <img src={deal} alt="Thumbnail 2" className="thumbnail" />
          {/* Add as many thumbnails as you have */}
        </div>
      </div>
      <div className="product-details">
        <h1>Product Title</h1>
        <p className="item-number">Model: XYZ123</p>
        <div className="rating">
          {/* Display star rating here */}
          ★★★★★
          <span className="review-count">(25 Reviews)</span>
        </div>
        <div className="price-section">
          <span className="price">$249.99</span>
          <span className="discount">Save $80</span>
          <span className="original-price">Was $329.99</span>
        </div>
        {/* Other details like trade-in options, storage capacity selections, etc. */}
      </div>
    </div>
  );
};
export default ProductPage;