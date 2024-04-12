import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Header from "../components/Header/Header";
import Navbar from '../components/Header/Navbar';
import AdBanner from '../components/AdBanners';
import ProductGrid from '../components/ProductGrid';

export default function Home() {
  // Initialize state to hold fetched products
  const [products, setProducts] = useState([
    {
      "_id": "66094f4053ee4e92dbdd5aba",
      "name": "HP 15",
      "category": "Laptop",
      "price": 120000,
      "vendor": "Arham Mirza",
      "description": "hello",
      "__v": 0
    },
    {
      "_id": "6609505953ee4e92dbdd5abd",
      "name": "Pen",
      "category": "Stationary",
      "price": 50,
      "vendor": "Arham Mirza",
      "description": "this is a pen",
      "__v": 0
    },
    {
      "_id": "6613a24120b4cbdc92739bf0",
      "name": " Dawlence Fridge",
      "category": "Appliances",
      "price": 40000,
      "vendor": "Arham Mirza",
      "description": "A very nice fridge that will make you happy.",
      "__v": 0
    },
    {
      "_id": "6613ab6e7f7844f62a50b47e",
      "name": " Dawlence Fridge",
      "category": "Appliances",
      "price": 40000,
      "vendor": "Arham Mirza",
      "description": "A very nice fridge that will make you happy.",
      "__v": 0
    },
    {
      "_id": "6613ab817f7844f62a50b480",
      "name": " Dawlence Fridge",
      "category": "Appliances",
      "price": 40000,
      "vendor": "Arham Mirza",
      "description": "A very nice fridge that will make you happy.",
      "__v": 0
    },
    {
      "_id": "6613ac167f7844f62a50b482",
      "name": " Dawlence Fridge",
      "category": "Appliances",
      "price": 40000,
      "vendor": "Arham Mirza",
      "description": "A very nice fridge that will make you happy.",
      "__v": 0
    },
    {
      "_id": "6613ad0145d61c4fab299dbc",
      "name": " Dawlence Fridge",
      "category": "Stationary",
      "price": 40000,
      "vendor": "Arham Mirza",
      "description": "A very nice fridge that will make you happy.",
      "__v": 0
    },
    {
      "_id": "6613ba6315475ba889c6a38e",
      "name": "HP 15",
      "category": "Laptop",
      "price": 60000,
      "vendor": "Arham Mirza",
      "vendor_id": "6613a7dc55dba4d67173b0da",
      "description": "laptop very nice condition",
      "__v": 0
    },
    {
      "_id": "6613bc6fabc81d59b60b1cc2",
      "name": "Pen",
      "category": "Stationary",
      "price": 100,
      "vendor": "Arham Mirza",
      "vendor_id": "6613a7dc55dba4d67173b0da",
      "description": "very nice",
      "__v": 0
    },
    {
      "_id": "6613c7b5abc81d59b60b1cc9",
      "name": "MacBook Pro M3",
      "category": "Laptop",
      "price": 300000,
      "vendor": "Arham Mirza",
      "vendor_id": "6613a7dc55dba4d67173b0da",
      "description": "best laptop of all time",
      "__v": 0
    },
    {
      "_id": "6613c7d5abc81d59b60b1ccd",
      "name": " Dawlence Fridge",
      "category": "Appliances",
      "price": 70000,
      "vendor": "Arham Mirza",
      "vendor_id": "6613a7dc55dba4d67173b0da",
      "description": "A very nice fridge that will make you happy.",
      "__v": 0
    },
    {
      "_id": "6613c9a310e07bdaef9c32e7",
      "name": "Handsfree",
      "category": "Electronics",
      "price": 500,
      "vendor": "Arham Mirza",
      "vendor_id": "6613a7dc55dba4d67173b0da",
      "description": "good",
      "__v": 0
    },
    {
      "_id": "6613d0d7fbe29b02bafc2f70",
      "name": "Redmi Note 11",
      "category": "Mobile",
      "price": 32000,
      "vendor": "Arham Mirza",
      "vendor_id": "6613a7dc55dba4d67173b0da",
      "description": "Best phone for the price. You will love it",
      "__v": 0
    },
    {
      "_id": "661574b84bf91a5b120aaf37",
      "name": "Chocolate cupcake",
      "category": "Food",
      "price": 200,
      "vendor": "Arham Mirza",
      "vendor_id": "6613a7dc55dba4d67173b0da",
      "description": "Delicious chocolate coated cupcake with chocolate filling inside as well ",
      "__v": 0
    },
    {
      "_id": "661575bc4bf91a5b120aaf4b",
      "name": "IPhone 10 (used)",
      "category": "Mobile",
      "price": 60000,
      "vendor": "Arham Mirza",
      "vendor_id": "6615757c4bf91a5b120aaf46",
      "description": "Second hand IPhone in excellent condition",
      "__v": 0
    }
  ]);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [filter, setFilter] = useState('');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(Infinity);

  useEffect(() => {
    const result = products.filter(product => {
      return (!filter || product.category === filter)
    });
    setFilteredProducts(result);
  }, [filter, products]);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value);
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
  };

  const applyPriceFilter = () => {
    const result = products.filter(product => {
      return (!filter || product.category === filter) &&
        product.price >= minPrice && product.price <= maxPrice;
    });
    setFilteredProducts(result);
  };

  // Fetch products when the component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/product/fetchprod');
        console.log(response);
        setProducts(response.data); // Update state with fetched products
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    fetchProducts();
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <>
      <Navbar currentPage="Home"/>
      <div className="pb-16"></div>
      <Header />
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <AdBanner />
        <ProductGrid />        
      </div>
    </>
  );
}