import React, { useState } from "react";
import "./Menu.css";

function Menu(props) {
  const res = props.res;

  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...exist, qty: exist.qty + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...exist, qty: exist.qty - 1 } : item
        )
      );
    }
  };

  const onDelete = (product) => {
    setCartItems(cartItems.filter((item) => item.id !== product.id));
  };

  return (
    <div className="Menu">
      <div className="topmenu">
        <h2>Order Online</h2>
        <div className="menuSearch">
          <img
            src="https://png.pngitem.com/pimgs/s/25-253949_search-magnifying-glass-icon-search-icon-png-transparent.png"
            width={25}
            height={25}
            alt=""
          />
          <input type="text" placeholder="Search within menu" />
        </div>
      </div>

      <div className="menuproduct">
        {res.products.map((data) => {
          return (
            <div className="productdiv">
              <img
                src={data.image}
                style={{ margin: "20px", marginLeft: 0, borderRadius: "5px" }}
                width={200}
                height={200}
                alt=""
              />
              <div className="productdesc">
                <h3>{data.name}</h3>
                <p
                  style={{
                    backgroundColor: "orange",
                    width: "85px",
                    borderRadius: "4px",
                  }}
                >
                  BESTSELLER
                </p>
                <p>⭐⭐⭐⭐</p>
                <p>₹{data.price}</p>
                <p style={{ color: "grey" }}>{data.desc}</p>
                <button onClick={() => onAdd(data)}>Add to Cart</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Menu;

// const [cartItems, setCartItems] = useState([]);
//   const [cartTotal, setCartTotal] = useState(0);

//   function addToCart(item) {
//     const newCartItems = [...cartItems, item];
//     setCartItems(newCartItems);
//     setCartTotal(cartTotal + item.price);
//   }

// const removeFromCart = (product) => {
//   const index = cart.findIndex((p) => p.id === product.id);
//   if (index !== -1) {
//     const newCart = [...cart];
//     newCart.splice(index, 1);
//     setCart(newCart);
//   }
// };
