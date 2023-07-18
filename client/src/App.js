import { Route, Routes } from "react-router-dom";
import "./App.css";
import AllCountries from "./components/countryList/AllCountries";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Popular from "./components/popularContent/Popular";
import RestaurantPage from "./components/restaurantPage/RestaurantPage";
import ParticularRestaurant from "./components/particularRestaurant/ParticularRestaurant";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="topHeader">
                <Navbar />
                <Header />
              </div>
              <Popular />
              <AllCountries />
              <Footer />
            </>
          }
        />
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/home" element={<Home />} /> */}
        <Route
          path="/restaurantPage"
          element={
            <>
              <RestaurantPage />
            </>
          }
        />
        <Route path="/restaurantPage/restaurant" element={
          <>
          <ParticularRestaurant/>
          </>
        } />
      </Routes>
      
    </div>
  );
}

export default App;
