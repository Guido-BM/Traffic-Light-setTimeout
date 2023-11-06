import React from "react";
import { useState, useEffect } from "react";

const colors = {
  red: "red",
  yellow: "rgba(255, 167, 0, 1)",
  green: "rgba(0, 255, 0, 1)",
};
const TrafficLight = () => {
  const [activeColor, setActiveColor] = useState(colors.red);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    const nextColor = {
      [colors.red]: colors.green,
      [colors.yellow]: colors.red,
      [colors.green]: colors.yellow,
    };

    if (!isRunning) return;

    const timer = setTimeout(() => {
      setActiveColor((prevColor) => nextColor[prevColor] || colors.red);
    }, 1000);

    return () => clearTimeout(timer);
  }, [isRunning, activeColor]);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "20px",
            backgroundColor: "#CCCC00",
            borderRadius: "15px",
          }}
        >
          <div
            style={{
              width: activeColor === colors.red ? "220px" : "200px",
              height: activeColor === colors.red ? "220px" : "200px",

              borderRadius: "50%",
              margin: "10px",
              background: activeColor === colors.red ? colors.red : 'rgba(180, 0, 0, 1)',
    boxShadow: activeColor === colors.red ? '0 0 30px red' : 'none',
            }}
          ></div>
          <div
            style={{
              width: activeColor === colors.yellow ? "220px" : "200px",
              height: activeColor === colors.yellow ? "220px" : "200px",

              borderRadius: "50%",
              margin: "10px",
              background: activeColor === colors.yellow ? colors.yellow : 'rgba(208, 124, 0, 1)',
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
              background: activeColor === colors.green ? colors.green : 'rgba(0, 150, 0, 1)',
              boxShadow:
                activeColor === colors.green ? "0 0 30px green" : "none",
            }}
          ></div>

                  <button
          onClick={() => {
            setIsRunning(!isRunning);
            setActiveColor(colors.red);
          }}
        >
          {isRunning ? "Pedestrian press" : "Restart Traffic"}
        </button>
        </div>

      </div>
    </>
  );
};
export default TrafficLight;
