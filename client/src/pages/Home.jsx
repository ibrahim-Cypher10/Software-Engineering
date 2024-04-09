import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Header from "../components/Header/Header";
import Navbar from '../components/Header/Navbar';
import AdBanner from '../components/AdBanners';

export default function Home() {
  // Initialize state to hold fetched products
  const [products, setProducts] = useState([]);

  // Fetch products when the component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/product/fetchprod');
        setProducts(response.data); // Update state with fetched products
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    fetchProducts();
  }, []); // Empty dependency array ensures this runs once on mount

  const addRandomProduct = async () => {
    // Example random product data
    const randomProduct = {
      name: `Product ${Math.floor(Math.random() * 100)}`, // Generates a random product name
      category: 'Example Category',
      price: Math.floor(Math.random() * 100) + 1, // Random price between 1 and 100
      vendor: 'Example Vendor',
      description: 'This is a randomly generated product.',
    };

    try {
      // Replace '/api/product/add' with your actual API endpoint to add a product
      const response = await axios.post('/api/product/addproduct', randomProduct);
      console.log(response.data.message); // Log success message
      // Handle success (e.g., show notification, update UI)
    } catch (error) {
      console.error('Failed to add random product:', error);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <>
      <button onClick={addRandomProduct} className="p-2 bg-blue-500 text-white rounded">
        Add Random Product
      </button>
      <Navbar currentPage="Home" />
      <Header />
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <AdBanner />

        {/* Products Grid */}
        <section className="py-8">
          <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map(product => (
              <div key={product.id} className="border rounded-lg overflow-hidden">
                <img src={product.imageUrl} alt={product.name} className="w-full h-56 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-gray-500">{product.description}</p>
                  <div className="mt-2 font-bold">{product.price}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}