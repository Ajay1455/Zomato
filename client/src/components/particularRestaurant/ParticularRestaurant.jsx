import React from "react";
import "./particularRestaurant.css";
import Menu from "./Menu";
import { useLocation } from "react-router-dom";
import Rating from "./Rating";
import NextNavbar from "../nextNavbar/NextNavbar";
import Footer from "../footer/Footer";

function ParticularRestaurant() {
  let location = useLocation();
  console.log(location.state.from);
  const product = location.state.from;
  console.log(product)

  return (
    <div className="particularRestaurant">
      <NextNavbar />

      <div className="images">
        <div style={{ height: "500px", overflow: "hidden" }}>
          <img src={product.image} height={500} alt="" />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {product.products.slice(0,2).map((data) => {
            return (
              <div style={{ overflow: "hidden" }}>
                <img
                  src={data.image}
                  width={382.7}
                  height={242}
                  alt=""
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="descriptions">
        <div className="leftpart">
          <h1>{product.name}</h1>
          <p>North Indian, Chinese, Street Food, Roast Chicken</p>
          <p>{product.city}</p>
          <p>
            {" "}
            <span style={{ color: "orangered" }}>Closed for dining</span> -
            Opens at 11am
          </p>
        </div>
        <div className="rightpart">
          <Rating count="12k" type="Dining review" />
          <Rating count="11k" type="Delivery review" />
        </div>
      </div>
      <Menu res={product} />
      <Footer removepadding="removepadding" />
    </div>
  );
}

export default ParticularRestaurant;
