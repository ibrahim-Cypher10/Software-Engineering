import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const VendorDeleteProduct = () => {
  const navigator = useNavigate();
  const user_id = localStorage.getItem("user_id");
  const [products, setProducts] = useState([]);

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

  useEffect(() => {
    fetch("/fetchproductsByVendor", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ vendorID: user_id }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
          navigator("/vendorHome");
        } else {
          setProducts(data);
        }
      });
  }, []);

  const handleDeleteProduct = (productId) => {
    fetch("/deleteproduct", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ productId: productId }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
        } else {
          alert(data.message);
        }
      })
      .then(navigator("/vendorHome"))
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      {products.map((product) => (
        <div key={product._id}>
          <p>Name: {product.name}</p>
          <p>Color: {product.color}</p>
          <p>Price: {product.price}</p>
          <button onClick={() => handleDeleteProduct(product._id)}>
            Delete Product
          </button>
        </div>
      ))}
    </div>
  );
};

export default VendorDeleteProduct;
