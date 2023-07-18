import React from "react";
import "./AllCountries.css";

function AllCountries() {
  const countries = [
    { name: "India", flag: "🇮🇳", code: "IN", dial_code: "+91" },
    { name: "Afghanistan", flag: "🇦🇫", code: "AF", dial_code: "+93" },

    { name: "Argentina", flag: "🇦🇷", code: "AR", dial_code: "+54" },

    { name: "Australia", flag: "🇦🇺", code: "AU", dial_code: "+61" },

    { name: "Bangladesh", flag: "🇧🇩", code: "BD", dial_code: "+880" },

    { name: "Belgium", flag: "🇧🇪", code: "BE", dial_code: "+32" },

    { name: "Bhutan", flag: "🇧🇹", code: "BT", dial_code: "+975" },

    { name: "Brazil", flag: "🇧🇷", code: "BR", dial_code: "+55" },

    { name: "Canada", flag: "🇨🇦", code: "CA", dial_code: "+1" },

    { name: "China", flag: "🇨🇳", code: "CN", dial_code: "+86" },


    { name: "Egypt", flag: "🇪🇬", code: "EG", dial_code: "+20" },

    { name: "Finland", flag: "🇫🇮", code: "FI", dial_code: "+358" },
    { name: "France", flag: "🇫🇷", code: "FR", dial_code: "+33" },


    { name: "Germany", flag: "🇩🇪", code: "DE", dial_code: "+49" },


    { name: "Hong Kong", flag: "🇭🇰", code: "HK", dial_code: "+852" },

    { name: "Iceland", flag: "🇮🇸", code: "IS", dial_code: "+354" },
    { name: "Indonesia", flag: "🇮🇩", code: "ID", dial_code: "+62" },

    { name: "Iraq", flag: "🇮🇶", code: "IQ", dial_code: "+964" },
    { name: "Ireland", flag: "🇮🇪", code: "IE", dial_code: "+353" },

    { name: "Israel", flag: "🇮🇱", code: "IL", dial_code: "+972" },
    { name: "Italy", flag: "🇮🇹", code: "IT", dial_code: "+39" },
    { name: "Jamaica", flag: "🇯🇲", code: "JM", dial_code: "+1876" },
    { name: "Japan", flag: "🇯🇵", code: "JP", dial_code: "+81" },
    { name: "Jersey", flag: "🇯🇪", code: "JE", dial_code: "+44" },
    { name: "Jordan", flag: "🇯🇴", code: "JO", dial_code: "+962" },

    { name: "Liberia", flag: "🇱🇷", code: "LR", dial_code: "+231" },

    { name: "Malaysia", flag: "🇲🇾", code: "MY", dial_code: "+60" },

    { name: "Mexico", flag: "🇲🇽", code: "MX", dial_code: "+52" },

    { name: "Myanmar", flag: "🇲🇲", code: "MM", dial_code: "+95" },

    { name: "Nepal", flag: "🇳🇵", code: "NP", dial_code: "+977" },
    { name: "Netherlands", flag: "🇳🇱", code: "NL", dial_code: "+31" },

    { name: "New Zealand", flag: "🇳🇿", code: "NZ", dial_code: "+64" },

    { name: "Norway", flag: "🇳🇴", code: "NO", dial_code: "+47" },

    { name: "Pakistan", flag: "🇵🇰", code: "PK", dial_code: "+92" },

    { name: "Peru", flag: "🇵🇪", code: "PE", dial_code: "+51" },
    { name: "Philippines", flag: "🇵🇭", code: "PH", dial_code: "+63" },

    { name: "Poland", flag: "🇵🇱", code: "PL", dial_code: "+48" },

    { name: "Qatar", flag: "🇶🇦", code: "QA", dial_code: "+974" },
    { name: "Romania", flag: "🇷🇴", code: "RO", dial_code: "+40" },
    { name: "Russia", flag: "🇷🇺", code: "RU", dial_code: "+7" },

    { name: "Saudi Arabia", flag: "🇸🇦", code: "SA", dial_code: "+966" },

    { name: "Singapore", flag: "🇸🇬", code: "SG", dial_code: "+65" },

    { name: "South Africa", flag: "🇿🇦", code: "ZA", dial_code: "+27" },

    { name: "Spain", flag: "🇪🇸", code: "ES", dial_code: "+34" },
    { name: "Sri Lanka", flag: "🇱🇰", code: "LK", dial_code: "+94" },

    { name: "Sweden", flag: "🇸🇪", code: "SE", dial_code: "+46" },
    { name: "Switzerland", flag: "🇨🇭", code: "CH", dial_code: "+41" },

    { name: "Thailand", flag: "🇹🇭", code: "TH", dial_code: "+66" },

    { name: "Turkey", flag: "🇹🇷", code: "TR", dial_code: "+90" },

    { name: "Uganda", flag: "🇺🇬", code: "UG", dial_code: "+256" },
    { name: "Ukraine", flag: "🇺🇦", code: "UA", dial_code: "+380" },

    { name: "United Kingdom", flag: "🇬🇧", code: "GB", dial_code: "+44" },
    { name: "United States", flag: "🇺🇸", code: "US", dial_code: "+1" },
    { name: "Vietnam", flag: "🇻🇳", code: "VN", dial_code: "+84" },
  ];

  return (
    <div className="CountryContainer">
      <h1>All Countries</h1>
      <div className="country">
        {countries.map((data,idx) => {
          return (
            <div className="list" id={idx}>
              <div className="LeftPart">
                <span className="flag">{data.flag}</span>
                <p>{data.name}</p>
              </div>
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
          );
        })}
      </div>
    </div>
  );
}

export default AllCountries;
