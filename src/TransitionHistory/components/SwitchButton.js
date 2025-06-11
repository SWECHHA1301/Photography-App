import React from "react";

export default function SwitchButton({ activeTab, setActiveTab }) {
  return (
    <div style={{ display: "flex", borderBottom: "2px solid #e0e0e0" }}>
      {['Transaction History', 'Credit History'].map(tab => (
        <div
          key={tab}
          onClick={() => setActiveTab(tab)}
          style={{
            padding: "10px 20px",
            cursor: "pointer",
            borderBottom: activeTab === tab ? "3px solid #2C7A7B" : "none",
            color: activeTab === tab ? "#2C7A7B" : "#333",
            fontWeight: activeTab === tab ? "bold" : "normal"
          }}
        >
          {tab}
        </div>
      ))}
    </div>
  );
}