import React from 'react';
import './Confirmation.css';

function Confirmation() {
  return (
    <div className="confirmation-container">
      <h1 className="confirmation-title">Order Confirmed</h1>
      <p className="confirmation-subtitle">Your order has been placed successfully</p>
      <div className="order-details">
        <h2 className="order-details-title">Order Details</h2>
        <div className="order-details-content">
          <p><strong>Order Number:</strong> #12345</p>
          <p><strong>Estimated Delivery Time:</strong> 30 minutes</p>
          <p><strong>Items Ordered:</strong></p>
          <ul className="order-items">
            <li>Chicken Tikka Masala x 2</li>
            <li>Garlic Naan x 1</li>
            <li>Butter Chicken x 1</li>
          </ul>
          <p><strong>Total Cost:</strong> $50.00</p>
          <p><strong>Special Instructions:</strong> Please call when you arrive</p>
        </div>
      </div>
      <button className="continue-button">Continue Shopping</button>
    </div>
  );
}

export default Confirmation;
