import React from 'react';
import '../styles/cart.css';

const Cart = () => {
  return (
    <div className="cart-page">
      <div className="cart-details">
        <h2>Your cart is empty</h2>
        <p>Have an account? <a href="/signin">Sign in to see your cart</a></p>
        <div className="saved-items">
          <h3>Saved Items</h3>
          <div className="empty-list">
            Your list is currently empty
            <p>Need inspiration? Check out <a href="/recommended">recommended items</a>, or search for items to save.</p>
          </div>
        </div>
      </div>
      <div className="order-summary">
        <h3>Order Summary</h3>
        <div className="total">
          <span>Total</span>
          <span>$0.00</span>
        </div>
        <button type="button">Continue Shopping</button>
        <div className="lease-option">
          <p>Looking for a lease to own option?</p>
          <p>Enjoy the tech you want today. <a href="/learn-more">Learn more</a></p>
        </div>
      </div>
    </div>
  );
}

export default Cart;

