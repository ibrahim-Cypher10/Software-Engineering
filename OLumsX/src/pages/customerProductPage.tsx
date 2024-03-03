import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const CustomerProductPage: React.FC = () => {
  const navigator = useNavigate();
  const customerId = localStorage.getItem("user_id");
  const [products, setProducts] = useState<any[]>([]);
  const [searchText, setSearchText] = useState<string>("");

  

  const addToCart = (productId: string) => {
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
    fetch("/app/v1/product/fetchprod", {
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
          if (data.error === "No products found.") {
            setProducts([]);
          }
        } else {
          setProducts(data);
        }
      });
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <Link to="/cart" className="btn btn-primary">Go to Cart</Link>
          <br />
          <Link to="/customerHome" className="btn btn-primary">Go back to Home page</Link>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search items..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button className="btn btn-primary" type="button" onClick={handleSearch}>Search</button>
          </div>
        </div>
      </div>

      <div className="row">
        {products.map((product) => (
          <div key={product._id} className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">{product.name}</h3>
                <p className="card-text">Color: {product.color}</p>
                <p className="card-text">Price: {product.price}</p>
                <button className="btn btn-primary" onClick={() => addToCart(product._id)}>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerProductPage;
