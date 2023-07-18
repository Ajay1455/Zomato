import React from 'react';
import CartItem from './CartItem';

const Cart = ({ cartItems, onAdd, onRemove, onDelete }) => {
  const itemsPrice = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
  const taxPrice = itemsPrice * 0.1;
  const totalPrice = itemsPrice + taxPrice;

  return (
    <div className="Cart">
      <div className="Cart-items">
        {cartItems.length === 0 && <div>Your cart is empty</div>}
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} onAdd={onAdd} onRemove={onRemove} onDelete={onDelete} />
        ))}
      </div>
      {cartItems.length !== 0 && (
        <div className="Cart-summary">
          <h4>Cart Summary</h4>
          <div>
            <div>Items Price</div>
            <div>${itemsPrice.toFixed(2)}</div>
          </div>
          <div>
            <div>Tax Price (10%)</div>
            <div>${taxPrice.toFixed(2)}</div>
          </div>
          <div>
            <div>Total Price</div>
            <div>${totalPrice.toFixed(2)}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
