import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./RestaurantPage.css";
import NextNavbar from "../nextNavbar/NextNavbar";
import Footer from "../footer/Footer";
import Card from "../Cards/Card";
import SkeletonSet from "../skeleton/SkeletonSet";

function RestaurantPage() {
  const navigate = useNavigate();
  const [restaurantdata, setRestaurantdata] = useState([]);

  const daata = localStorage.getItem("cityInfo");

  useEffect(() => {
    console.log("going to fetch this city : ", daata);
    fetch(`/${daata}/allRestaurants`)
      .then((res) => {
        return res.json();
      })
      .then((resData) => {
        setRestaurantdata(resData);
        if (restaurantdata.isEmpty()) {
          setTimeout(() => {
            console.log("not found!")
          }, 6000);
        }
        navigate("/restaurantPage");
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="RestroContainer">
      <NextNavbar city={daata} />

      <div className="RestaurantsFetch">
        {console.log(restaurantdata)}
        {restaurantdata && restaurantdata.length ? (
          <Card data={restaurantdata} />
        ) : (
          <>
            <SkeletonSet />
            <SkeletonSet />
            <SkeletonSet />
            <SkeletonSet />
            <SkeletonSet />
            <SkeletonSet />
          </>
        )}
      </div>
      <Footer removepadding="removepadding" />
    </div>
  );
}

export default RestaurantPage;
