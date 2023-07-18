import React from 'react'
import { NavLink } from 'react-router-dom';

function Card({data}) {
    console.log(" this is restaurant data :",data);
  return (
    <>
    
    {data.map((data,index) => {
        return (
          <NavLink
            style={{ textDecoration: "none" }}
            to="/restaurantPage/restaurant"
            state={{ from: data }}
          >
            
              <div className="restaurant" id={index}>
                <img
                  style={{ borderRadius: "10px" }}
                  src={data.image}
                  width={300}
                  height={250}
                  alt=""
                />
                <div className="titlerate">
                  <h3>{data.name}</h3>
                  <div
                    style={{
                      background: "green",
                      borderRadius: "5px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        padding: "5px 5px",
                        height: "26px",
                        color: "white",
                      }}
                    >
                      <p style={{ color: "white" }}>3.5</p>
                      <i
                        style={{
                          color: "#FFFFFF",
                          background: "aqua;",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#FFFFFF"
                          width="0.8rem"
                          height="0.8rem"
                          viewBox="0 0 20 20"
                          aria-labelledby="icon-svg-title- icon-svg-desc-"
                          role="img"
                        >
                          <title>star-fill</title>
                          <path d="M6.76 6.8l-6.38 0.96c-0.22 0.040-0.38 0.22-0.38 0.44 0 0.12 0.040 0.24 0.12 0.32v0l4.64 4.76-1.1 6.66c0 0.020 0 0.040 0 0.080 0 0.24 0.2 0.44 0.44 0.44 0.1 0 0.16-0.020 0.24-0.060v0l5.7-3.12 5.68 3.12c0.060 0.040 0.14 0.060 0.22 0.060 0.24 0 0.44-0.2 0.44-0.44 0-0.040 0-0.060 0-0.080v0l-1.1-6.66 4.64-4.76c0.080-0.080 0.12-0.2 0.12-0.32 0-0.22-0.16-0.4-0.36-0.44h-0.020l-6.38-0.96-2.96-6.18c-0.060-0.12-0.18-0.2-0.32-0.2s-0.26 0.080-0.32 0.2v0z"></path>
                        </svg>
                      </i>
                    </div>
                  </div>
                </div>
                <p>{data.city}</p>
              </div>
          </NavLink>
        );
      })}
    </>

  )
}

export default Card