import React from 'react';
import { ChevronRight } from "lucide-react";

export default function NextBtn({ onClick, disabled }) {
  const buttonStyle = {
    padding: "8px 16px",
    borderRadius: 10,
    backgroundColor: "#2C7A7B",
    color: "#fff",
    border: "none",
    // cursor: disabled ? "not-allowed" : "pointer",
    cursor:'pointer',
    display: "flex",
    alignItems: "center",
    gap: 6,
    height: "40px",
    marginTop: "10px",
    // opacity: disabled ? 0.5 : 1,
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={buttonStyle}
    >
     <p> Next </p><ChevronRight size={20} />
    </button>
  );
}

