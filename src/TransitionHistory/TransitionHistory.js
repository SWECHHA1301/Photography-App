import React, { useState } from "react";
import SwitchButton from "../../components/SwitchButton";
import TransitionTable from "../../components/TransitionTable";

export default function TransitionHistory() {
  const [activeTab, setActiveTab] = useState("Transaction History");
  const [rows, setRows] = useState([{
    id: "TXN258904555",
    amount: "₹99",
    status: "Success",
    points: 1,
    source: "UPI",
    date: "02 June 2025"
  }]);

  const addMember = () => {
    const newRow = { ...rows[0] };
    setRows(prev => [...prev, newRow]);
  };

  return (
    <div style={{ fontFamily: "Arial", padding: 20, backgroundColor: "#f4f9f4", borderRadius: 12, width: "90%", margin: "auto" }}>
      <SwitchButton activeTab={activeTab} setActiveTab={setActiveTab} />

      <div style={{ marginTop: 20 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontWeight: "bold", fontSize: "18px", color: "#2C7A7B" }}>Transaction</span>
          <button
            onClick={addMember}
            style={{ padding: "8px 16px", backgroundColor: "#2C7A7B", color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer" }}
          >
            Add Members
          </button>
        </div>
        <TransitionTable data={rows} />
        <div style={{ textAlign: "right", marginTop: 10, color: "#666" }}>
          <span>{`< 1/10 >`}</span>
        </div>
      </div>
    </div>
  );
}
