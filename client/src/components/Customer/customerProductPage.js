import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const CustomerProductPage = () => {
  const navigator = useNavigate();
  const customerId = localStorage.getItem("user_id");
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState("");

  const userType = localStorage.getItem("user_type");
  if (!userType) {
    alert("User not logged in");
    navigator("/");
  }
  else if (userType !== "Customer")
  {
    alert("You are not a customer");
    navigator("/");
  }

  useEffect(() => {
    fetch("/fetchprod")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, []);

  const addToCart = (productId) => {
    fetch("/addtocart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ customerID: customerId, productID: productId }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
          navigator("/customerHome");
        } else {
          alert("Product added successfully.");
        }
      });
  };

  const handleSearch = () => {
    fetch("/searchbar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ searchString: searchText }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
          if (data.error == "No products found.")
          {
            setProducts([]);
          }
        } else {
          setProducts(data);
        }
      });
  };

  return (
    <div>
      <div>
        <Link to="/cart">Go to Cart</Link>
        <br />
        <Link to="/customerHome">Go back to Home page</Link>
      </div>

      <div>
        Search Bar:
        <br />
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {products.map((product) => (
        <div key={product._id}>
          <h3>{product.name}</h3>
          <p>Color: {product.color}</p>
          <p>Price: {product.price}</p>
          <button onClick={() => addToCart(product._id)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default CustomerProductPage;
