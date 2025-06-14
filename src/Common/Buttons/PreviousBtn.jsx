import React from 'react';
import { ChevronLeft } from "lucide-react";

export default function PreviousBtn({ onClick, disabled }) {
  const buttonStyle = {
    padding: "8px 16px",
    borderRadius: 10,
    backgroundColor: "#fff",
    color: "#000",
    border: "2px solid #2C7A7B",
    cursor: disabled ? "not-allowed" : "pointer",
    display: "flex",
    alignItems: "center",
    gap: 6,
    height: "40px",
     
    marginTop: "10px",
    opacity: disabled ? 0.5 : 1,
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={buttonStyle}
    >
      <ChevronLeft size={20} /> <p>Prev</p>
    </button>
  );
}

