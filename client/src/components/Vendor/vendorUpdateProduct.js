import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

const navigator = useNavigate();

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


const VendorUpdateProduct = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("/fetchordersvend")
            .then((response) => response.json())
            .then((data) => setProducts(data));
    }, []);

    const handleUpdateProduct = (productId) => {
        fetch("/updateproduct", {
          method: "POST",
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
          .catch((error) => {
            console.error(error);
          });
      };

    return (
        <div>
            {products.map((product) => (
                <div key={product.id}>
                    <p>Name: {product.name}</p>
                    <p>Color: {product.color}</p>
                    <p>Price: {product.price}</p>
                    <button onClick={() => handleUpdateProduct(product.id, product)}>
                        Update Product
                    </button>
                </div>
            ))}
        </div>
    );
};

export default VendorUpdateProduct;
