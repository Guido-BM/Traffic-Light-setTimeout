import React from "react";
import { useState, useEffect } from "react";

const colors = {
  red: "red",
  yellow: "yellow",
  green: "green",
};
const TrafficLight = () => {
  const [activeColor, setActiveColor] = useState(colors.red);

  useEffect(() => {
    setTimeout(() => {
      switch (activeColor) {
        case colors.red:
          setActiveColor(colors.green);
          break;
        case colors.yellow:
          setActiveColor(colors.red);
          break;
        case colors.green:
          setActiveColor(colors.yellow);
          break;
        default:
          setActiveColor(colors.red);
      }
    }, 1000);
  }, [activeColor]);

  return (
    <>
      <div
        style={{
          background: "lightgray",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div
          style={{
            flex: "2 6 0",
            flexDirection: "column",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: activeColor === colors.red ? "220px" : "200px", 
              height: activeColor === colors.red ? "220px" : "200px", 

              borderRadius: "50%",
              margin: "10px",
              background:
                activeColor === colors.red
                  ? colors.red
                  : "rgba(255, 0, 0, 0.3)",
              boxShadow: activeColor === colors.red ? "0 0 30px red" : "none",
            }}
          ></div>
          <div
            style={{
              width: activeColor === colors.yellow ? "220px" : "200px", 
              height: activeColor === colors.yellow ? "220px" : "200px", 

              borderRadius: "50%",
              margin: "10px",
              background:
                activeColor === colors.yellow
                  ? colors.yellow
                  : "rgba(255, 255, 0, 0.3)",
              boxShadow:
                activeColor === colors.yellow ? "0 0 30px yellow" : "none",
            }}
          ></div>
          <div
            style={{
              width: activeColor === colors.green ? "220px" : "200px", 
              height: activeColor === colors.green ? "220px" : "200px", 

              borderRadius: "50%",
              margin: "10px",
              background:
                activeColor === colors.green
                  ? colors.green
                  : "rgba(0, 128, 0, 0.3)",
              boxShadow:
                activeColor === colors.green ? "0 0 30px green" : "none",
            }}
          ></div>
        </div>
      </div>
    </>
  );
};
export default TrafficLight;
