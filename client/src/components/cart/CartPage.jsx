import React, { useState, useEffect } from "react";
import "./CartPage.css";

const cartItems = [
  {
    id: 1,
    name: "Margherita Pizza",
    price: 12.99,
    quantity: 2,
    image: "https://via.placeholder.com/150",
    description: "Tomato sauce, mozzarella, and basil"
  },
  {
    id: 2,
    name: "Spaghetti Bolognese",
    price: 8.99,
    quantity: 1,
    image: "https://via.placeholder.com/150",
    description: "Spaghetti with meat sauce"
  },
  {
    id: 3,
    name: "Caesar Salad",
    price: 5.99,
    quantity: 3,
    image: "https://via.placeholder.com/150",
    description: "Romaine lettuce, croutons, and Parmesan cheese"
  }
];

const orderSummary = {
  subtotal: 55.95,
  tax: 4.48,
  deliveryFee: 2.99,
  total: 63.42
};

function CartItem(props) {
  return (
    <div className="CartItem">
      <img src={props.item.image} alt={props.item.name} />
      <div>
        <h3>{props.item.name}</h3>
        <p>{props.item.description}</p>
      </div>
      <div>
        <p>Quantity: {props.item.quantity}</p>
        <p>Price: ${props.item.price}</p>
      </div>
    </div>
  );
}

function Cart() {
  // const [cartItems, setCartItems] = useState([]);

  // useEffect(() => {
  //   // Update cart items state with fake data
  //   setCartItems(cartItems);
  // }, []);

  const cartItemComponents = cartItems.map((item) => {
    return <CartItem key={item.id} item={item} />;
  });

  return (
    <div className="Cart">
      <div className="Cart-items">{cartItemComponents}</div>
      <div className="Cart-summary">
        <h2>Order Summary</h2>
        <div>
          <p>Subtotal: ${orderSummary.subtotal.toFixed(2)}</p>
          <p>Tax: ${orderSummary.tax.toFixed(2)}</p>
          <p>Delivery Fee: ${orderSummary.deliveryFee.toFixed(2)}</p>
          <hr />
          <p>Total: ${orderSummary.total.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="Navbar">
      <div className="Navbar-logo">
        <img
          src="https://cdn.iconscout.com/icon/free/png-256/free-zomato-1937646-1637644.png"
          alt="Zomato logo"
        />
      </div>
      <div className="Navbar-cart">
        <i className="fas fa-shopping-cart">
          <img
            style={{ height: "2.5rem" }}
            src="https://cdn-icons-png.flaticon.com/512/4108/4108854.png"
          />
        </i>
        <span>3</span>
      </div>
    </nav>
  );
}

function CartPage() {
  return (
    <div>
      <Navbar />
      <Cart />
    </div>
  );
}

export default CartPage;
