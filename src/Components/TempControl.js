import React, { useState, useEffect } from "react";

function TempControl() {
  const [temp, setTemp] = useState(10);
  const [tempColor, setTempColor] = useState("cold");

  const increaseTemp = () => {
    if (temp <= 29) {
      setTemp(temp + 1);
    } else {
      alert("TOO HOT!");
    }
    if (temp >= 15) {
      setTempColor("hot");
    }
  };
  const decreaseTemp = () => {
    if (temp >= 1) {
      setTemp(temp - 1);
    } else {
      alert("TOO COLD!");
    }
    if (temp > 15) {
      setTempColor("cold");
    }
  };

  return (
    <div className="thermostat">
      <div className={`temp-display ${tempColor}`}>
        <p>{temp}°C</p>
      </div>
      <div className="controls">
        <button className="btn" onClick={decreaseTemp}>
          -
        </button>
        <button className="btn" onClick={increaseTemp}>
          +
        </button>
      </div>
    </div>
  );
}

export default TempControl;
