import React, { createContext } from "react";
import "./Popular.css";
import { NavLink, useNavigate } from "react-router-dom";

const cityName = createContext();
function Popular() {
  let loc = [
    { id: "0", city: "Mumbai" },
    { id: "7", city: "Pune" },
    { id: "12", city: "Chandigarh" },
    { id: "15", city: "Rajpura" },
    { id: "24", city: "Nashik" },
    { id: "28", city: "Kalyan-Dombivali" },
    { id: "29", city: "Vasai-Virar" },
    { id: "49", city: "Solapur" },
    { id: "56", city: "Mira-Bhayandar" },
    { id: "58", city: "Bhiwandi" },
    { id: "61", city: "Amravati" },
    { id: "72", city: "Nanded-Waghala" },
    { id: "76", city: "Sangli" },
    { id: "86", city: "Malegaon" },
    { id: "91", city: "Akola" },
    { id: "98", city: "Latur" },
    { id: "99", city: "Dhule" },
    { id: "105", city: "Ahmednagar" },
    { id: "122", city: "Ichalkaranji" },
    { id: "138", city: "Parbhani" },
    { id: "164", city: "Panvel" },
    { id: "278", city: "Yavatmal" },
    { id: "292", city: "Achalpur" },
    { id: "293", city: "Osmanabad" },
    { id: "295", city: "Nandurbar" },
    { id: "306", city: "Satara" },
    { id: "310", city: "Wardha" },
    { id: "316", city: "Udgir" },
    { id: "320", city: "Aurangabad" },
    { id: "344", city: "Amalner" },
    { id: "354", city: "Akot" },
    { id: "359", city: "Pandharpur" },
    { id: "365", city: "Shrirampur" },
    { id: "367", city: "Parli" },
    { id: "409", city: "Washim" },
    { id: "423", city: "Ambejogai" },
    { id: "435", city: "Manmad" },
    { id: "450", city: "Ratnagiri" },
    { id: "589", city: "Palghar" },
    { id: "590", city: "Shegaon" },
    { id: "603", city: "Ozar" },
    { id: "607", city: "Phaltan" },
    { id: "621", city: "Yevla" },
    { id: "625", city: "Shahade" },
    { id: "640", city: "Vita" },
    { id: "649", city: "Umarkhed" },
    { id: "657", city: "Warora" },
    { id: "670", city: "Pachora" },
    { id: "673", city: "Tumsar" },
    { id: "687", city: "Manjlegaon" },
    { id: "689", city: "Sillod" },
    { id: "697", city: "Arvi" },
    { id: "707", city: "Nandura" },
    { id: "719", city: "Vaijapur" },
    { id: "724", city: "Wadgaon Road" },
    { id: "735", city: "Sailu" },
    { id: "747", city: "Murtijapur" },
    { id: "755", city: "Tasgaon" },
    { id: "799", city: "Umarga" },
    { id: "809", city: "Paithan" },
    { id: "810", city: "Rahuri" },
    { id: "816", city: "Nawapur" },
    { id: "823", city: "Tuljapur" },
    { id: "835", city: "Morshi" },
    { id: "841", city: "Purna" },
    { id: "855", city: "Satana" },
    { id: "877", city: "Pathri" },
    { id: "880", city: "Sinnar" },
    { id: "890", city: "Uchgaon" },
    { id: "900", city: "Uran" },
    { id: "903", city: "Pen" },
    { id: "913", city: "Karjat" },
    { id: "927", city: "Manwath" },
    { id: "930", city: "Partur" },
    { id: "947", city: "Sangole" },
    { id: "956", city: "Mangrulpir" },
    { id: "992", city: "Talode" },
    { id: "993", city: "Shrigonda" },
    { id: "997", city: "Shirdi" },
    { id: "1000", city: "Raver" },
    { id: "1003", city: "Mukhed" },
    { id: "1007", city: "Rajura" },
    { id: "1010", city: "Vadgaon Kasba" },
    { id: "1023", city: "Tirora" },
    { id: "1047", city: "Mahad" },
    { id: "1069", city: "Lonar" },
    { id: "1088", city: "Sawantwadi" },
    { id: "1092", city: "Pathardi" },
    { id: "1102", city: "Pauni" },
    { id: "1172", city: "Patur" },
    { id: "1176", city: "Mhaswad" },
    { id: "1187", city: "Loha" },
    { id: "1", city: "Delhi" },
    { id: "142", city: "New Delhi" },
    { id: "2", city: "Bengaluru" },
  ];

  const navigate = useNavigate();

  const handleClick = (e) => {
    const str=e.target.innerText;
    const s = str.split(/(?<=^\S+)\s/);
    localStorage.setItem('cityInfo',(s[0]))
    console.log(" this is popular data  ",s[0] );
    navigate("/restaurantPage");
  };

  return (
    <div className="PopularContainer">
      <div className="PopularTop">
        <h1>
          {`Popular Locations in ${"🇮🇳"}`} <span className="India">India</span>
        </h1>
        <p>
          From swanky upscale restaurants to the cosiest hidden gems serving the
          most incredible food, Zomato covers it all. Explore menus, and
          millions of restaurant photos and reviews from users just like you, to
          find your next great meal.
        </p>
      </div>

      <div className="locations">
        {loc.map((data, idx) => {
          return (
            // <NavLink id={idx} to={'./restaurantPage'} state={{location:data.city}} style={{ textDecoration: 'none', color:"black" }}>
            <div className="Place" id={idx}>
              <p onClick={handleClick}>{data.city} Restaurants</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#1C1C1C"
                width="15"
                height="15"
                viewBox="0 0 20 20"
                aria-labelledby="icon-svg-title- icon-svg-desc-"
                role="img"
              >
                <title>chevron-right</title>
                <path d="M6.98 15.94c-0.3-0.28-0.3-0.76 0-1.060l4.46-4.46-4.46-4.48c-0.3-0.28-0.3-0.76 0-1.060s0.76-0.28 1.060 0l5 5c0.28 0.3 0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0z"></path>
              </svg>
            </div>
            // </NavLink>
          );
        })}
      </div>
    </div>
  );
}

export default Popular;
export { cityName };
