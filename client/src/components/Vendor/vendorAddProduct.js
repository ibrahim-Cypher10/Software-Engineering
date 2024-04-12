import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const VendorAddProduct = () => {
  const navigator = useNavigate();
  const vendor_id = localStorage.getItem("user_id");

  const userType = localStorage.getItem("user_type");
  if (!userType) {
    alert("User not logged in");
    navigator("/");
  }
  else if (userType !== "Vendor")
  {
    alert("You are not a vendor!");
    navigator("/");
  }

  const [product, setProduct] = useState({
    name: "",
    color: "",
    price: "",
    vendor: vendor_id,
  });

  const handleAddProduct = () => {
    fetch("/addproduct", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
        } else {
          alert(data.message);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Product Name"
        name="name"
        value={product.name}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Product Color"
        name="color"
        value={product.color}
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Product Price"
        name="price"
        value={product.price}
        onChange={handleChange}
      />
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
};

export default VendorAddProduct;
