import React from "react";

export default function SwitchButton({ activeTab, setActiveTab }) {
  const tabs = ["Transaction History", "Credit History"];

  return (
    <div style={{ display: "flex", padding: "20px", gap: "20px" }}>
      {tabs.map((tab) => (
        <div
          key={tab}
          onClick={() => setActiveTab(tab)}  // ✅ this line is crucial
          style={{
            fontSize: "20px",
            padding: "10px 20px",
            cursor: "pointer",
            borderBottom: activeTab === tab ? "3px solid #2F2F2F" : "3px solid transparent",
            color: activeTab === tab ? "#2C7A7B" : "#767676",
            fontWeight: "600",
            transition: "all 0.3s ease",
          }}
        >
          {tab}
        </div>
      ))}
    </div>
  );
}
