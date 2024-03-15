import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";


const Cart = () => {
  const navigator = useNavigate();
  const user_id = localStorage.getItem("user_id");
  const [products, setProducts] = useState([]);
  const [tot_price, setTotalPrice] = useState(0);

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

  const updateTotalPrice = () => {
    fetch("/getcarttotalprice", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ customerID: user_id }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
          navigator("/customerHome");
        } else {
          setTotalPrice(data.tot_price);
          // console.log(tot_price);
        }
      });
  };

  useEffect(() => {
    fetch("/getproductsincart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ customerID: user_id }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
          navigator("/customerHome");
        } else {
          // console.log(data);
          setProducts(data);
          updateTotalPrice();
        }
      });
  }, []);

  const handleRemoveProduct = (productId) => {
    fetch("/removefromcart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ customerID: user_id, productID: productId }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
          navigator("/customerHome");
        } else {
          alert(data.message);

          fetch("/getproductsincart", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ customerID: user_id }),
          })
            .then((response) => response.json())
            .then((data) => {
              if (data.error) {
                alert(data.error);
                navigator("/customerHome");
              } else {
                // console.log(data);
                setProducts(data);
                updateTotalPrice();
              }
            });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleCheckout = () => {
    // fetch("/getproductsincart", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ customerID: user_id }),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     if (data.error) {
    //       alert(data.error);
    //       navigator("/customerHome");
    //     } else {
    //       fetch("/createorderwithgroups", {
    //         method: "POST",
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({ customerId: user_id, products: data }),
    //       })
    //         .then((response) => response.json())
    //         .then((data2) => {
    //           if (data2.error) {
    //             alert(data2.error);
    //             navigator("/customerHome");
    //           } else {
    //             alert(data2.message);
    //           }
    //         });
    //     }
    //   });

    fetch("/createorderwithgroups", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ customerId: user_id, products: products }),
    })
      .then((response) => response.json())
      .then((data2) => {
        if (data2.error) {
          alert(data2.error);
          navigator("/customerHome");
        } else {
          alert(data2.message);
        }
      });
  };

  return (
    <div>
      <Link to="/customerHome">Go back to Home page</Link>;
      <br />
      {products.map((product) => (
        <div key={product._id}>
          <p>Name: {product.name}</p>
          <p>Color: {product.color}</p>
          <p>Price: {product.price}</p>
          <p>Quantity: {product.quantity}</p>
          <button onClick={() => handleRemoveProduct(product._id)}>
            Remove 1 qty from cart
          </button>
        </div>
      ))}
      <br />
      <h3>Total Price {tot_price}</h3>
      <br />
      <button onClick={() => handleCheckout()}>Place Order</button>
    </div>
  );
};

export default Cart;
