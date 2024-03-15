import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import "../styles/HomePage2.css";
import "../styles/home.css";

import featuredImage from "../assets/gray_bg.png"; // Ensure you have a featured image in your assets
import productImage from "../assets/gray_bg.png"; // Ensure you have product images in your assets

import Header from "./Header/header";

const Home = () => {
//   const customerId = localStorage.getItem("user_id");
  const [products, setProducts] = useState([]);

  const productImages = [productImage, productImage, productImage]; // Repeat the same image for demonstration

  useEffect(() => {
    axios
      .get("/fetchprod")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

//   const addToCart = (productId) => {
//     fetch("/addtocart", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ customerID: customerId, productID: productId }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.error) {
//           alert(data.error);
//         } else {
//           alert("Product added successfully.");
//         }
//       });
//   };

  return (
    <div className="home-page">
      <div className="homepage2">
        <Header />

        <header className="featured-product">
          <img src={featuredImage} alt="Featured Product" />
          <div className="featured-text">
            <h1>Discover Amazing Tech</h1>
            <p>Experience innovation with our top selection of tech.</p>
            <a href="#featured" className="btn-primary">
              Shop Now
            </a>
          </div>
        </header>

        <section className="product-grid">
          {products.map((product) => (
            <div key={product._id}>
              <h3>{product.name}</h3>
              <p>Price: {product.price}</p>
              {/* <button onClick={() => addToCart(product._id)}>
                Add to Cart
              </button> */}
            </div>
          ))}
        </section>

        <footer className="footer">
          <p>&copy; 2024 OLumsX, Inc. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
