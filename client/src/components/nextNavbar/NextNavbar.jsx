import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./NextNavbar.css";

function NextNavbar({ city }) {
  const [input, setInput] = useState("");
  const [restaurantdata, setRestaurantdata] = useState([]);
  const [isClicked, setisClicked] = useState(false);

  const handleInput = (e) => {
    e.preventDefault();
    const data = e.target.value;
    setInput(data);
    setisClicked(true);
    console.log(input, " user info.");
  };

  useEffect(() => {
    fetch(`http://localhost:2000/restaurants/search?q=${input}&c=${city}`)
      .then((res) => {
        return res.json();
      })
      .then((resData) => {
        setRestaurantdata(resData);
        console.log(resData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [input]);

  return (
    <div className="nextNavbar">
      <NavLink to={"/"}>
        <img
          src={
            "https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
          }
          height={30}
          alt=""
        />
      </NavLink>
      <div className="searchbar">
        <div className="HeadSearch" style={{ display: "flex" }}>
          <select name="cities" id="cities">
            <option value={city}>{city}</option>
          </select>
          <div className="imginput">
            <img
              src="https://png.pngitem.com/pimgs/s/25-253949_search-magnifying-glass-icon-search-icon-png-transparent.png"
              width={25}
              height={25}
              alt=""
            />
            <input
              onChange={handleInput}
              onBlur={() => setisClicked(false)}
              placeholder="Search for restaurant, cuisine or a dish"
              type="text"
            />
          </div>
          <div className={isClicked ? "updataDiv" : "searched"}>
            {restaurantdata.map((data) => {
              return (
                <div className="fetchedItems">
                  <img
                    style={{ marginRight: "20px" }}
                    src={data.image}
                    width={100}
                    height={100}
                    alt=""
                  />
                  <div>
                    <h3>{data.name}</h3>
                    {/* <p>{Data}</p> */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <h2>Log in</h2>
      <h2>Sign Up</h2>
    </div>
  );
}

export default NextNavbar;
