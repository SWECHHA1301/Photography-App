import React, { useState } from "react";
import { PlusCircle } from "lucide-react";
import SwitchButton from "../TransitionHistory/components/SwitchButton";
import TransitionTable from "../TransitionHistory/components/TransitionTable";
import CreditHistoryTable from "../TransitionHistory/components/CreditHistoryTable";

export default function TransitionHistory() {
 const [activeTab, setActiveTab] = useState("Transaction History");


  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
        width: "95%",
        height: "680px",
        margin: "20px",
        paddingBottom: "30px",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <SwitchButton activeTab={activeTab} setActiveTab={setActiveTab} />

      <div
        style={{
          marginTop: 20,
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 20px",
          }}
        >
          <span style={{ fontSize: "20px", fontWeight: 600, color: "#2C7A7B" }}>
            {activeTab}
          </span>

          <button
            style={{
              width: "170px",
              padding: "10px",
              backgroundColor: "#2F5D62",
              color: "#fff",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              justifyContent: "center",
            }}
          >
            Add Members <PlusCircle size={18} />
          </button>
        </div>

        <div style={{ flexGrow: 1, overflowY: "auto", scrollbarWidth: "none",}}>
  {activeTab === "Transaction History" ? (
    <TransitionTable />
  ) : (
    <CreditHistoryTable />
  )}
</div>

      </div>

      <div style={{ borderTop: "1px solid #ccc" }}>
        <div
          style={{
            position: "absolute",
            bottom: "10px",
            right: "30px",
            color: "#666",
            fontSize: "14px",
          }}
        >
          &lt; 1/10 &gt;
        </div>
      </div>
    </div>
  );
}
