import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react"; // Or use your own icons

const EyeToggle = ({ disabled = false }) => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    if (!disabled) {
      setIsVisible(!isVisible);
    }
  };

  const iconStyle = {
    color: disabled ? "#9eb3b4" : "#2C7A7B",
    fontSize: "24px",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
  };

  return (
    <div onClick={toggleVisibility}>
      {!disabled ? (
        isVisible ? (
          <Eye style={iconStyle} />
        ) : (
          <EyeOff style={iconStyle} />
        )
      ) : (
        <EyeOff style={iconStyle} /> // Use EyeOff faded as "disabled" placeholder
      )}
    </div>
  );
};

export default EyeToggle;
