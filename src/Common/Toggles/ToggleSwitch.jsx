import React, { useState } from "react";

const ToggleSwitch = ({ disabled = false }) => {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => {
    if (!disabled) {
      setIsOn(!isOn);
    }
  };

  const getColor = () => {
    if (disabled) return "#767676";       // dark gray
    if (isOn) return "#2C7A7B";         // green-ish (you can use "#4CAF50" for classic green)
    return "#FFFFFF";                  // light blue
  };

  const styles = {
    switch: {
      width: "42px",
      height: "24px",
      borderRadius: "25px",
      display: "flex",
      alignItems: "center",
      padding:'0 4px',
      border: `2px solid ${getColor()}`,
      cursor: disabled ? "not-allowed" : "pointer",
      backgroundColor: "#D4DAED",
      transition: "border-color 0.3s ease-in-out",
    },
    knob: {
      height: "16px",
      width: "16px",
      borderRadius: "50%",
      backgroundColor: getColor(),
      transform: isOn ? "translateX(25px)" : "translateX(0)",
      transition: "transform 0.3s ease, background-color 0.3s ease",
    },
  };

  return (
    <div style={styles.switch} onClick={toggle}>
      <div style={styles.knob}></div>
    </div>
  );
};

export default ToggleSwitch;

