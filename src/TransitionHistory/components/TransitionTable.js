import React from "react";
import { ArrowDown } from "lucide-react";

export default function TransitionTable() {
  const transactionData = [
    {
      id: "TXN258904555",
      amount: "₹99",
      status: "Success",
      points: 1,
      source: "UPI",
      date: "02 June 2025",
    },
    {
      id: "TXN258904556",
      amount: "₹150",
      status: "Success",
      points: 2,
      source: "Card",
      date: "03 June 2025",
    },
    {
      id: "TXN258904557",
      amount: "₹200",
      status: "Failed",
      points: 0,
      source: "Wallet",
      date: "04 June 2025",
    },
    {
      id: "TXN258904558",
      amount: "₹399",
      status: "Success",
      points: 4,
      source: "Net Banking",
      date: "05 June 2025",
    },
  ];

  return (
    <div style={{ maxHeight: "500px", marginTop: "10px" }}>
      <style>
        {`
          tbody::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>

      <table
        style={{
          width: "100%",
          borderCollapse: "separate",
          borderSpacing: "0",
          display: "grid",
        }}
      >
        <thead>
          <tr
            style={{
              textAlign: "center",
              display: "grid",
              gridTemplateColumns: "repeat(6, 1fr)",
              height: "50px",
              borderBottom: "1px solid #ccc",
              borderTop: "1px solid #ccc",
            }}
          >
            <th style={thStyle}>Transaction ID</th>
            <th style={thStyle}>
              Amount <ArrowDown size={14} style={{ paddingLeft: "10px" }} />
            </th>
            <th style={thStyle}>
              Status <ArrowDown size={14} style={{ paddingLeft: "10px" }} />
            </th>
            <th style={thStyle}>
              Credit Points{" "}
              <ArrowDown size={14} style={{ paddingLeft: "10px" }} />
            </th>
            <th style={thStyle}>Payment Source</th>
            <th style={thStyle}>Created At</th>
          </tr>
        </thead>

        <tbody
          style={{
            display: "grid",
            overflowY: "scroll",
            maxHeight: "440px",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {transactionData.map((item, index) => (
            <tr
              key={index}
              style={{
                backgroundColor: "#fff",
                borderBottom: "2px solid #ccc",
                borderBottomLeftRadius: "12px",
                borderBottomRightRadius: "12px",
                display: "grid",
                gridTemplateColumns: "repeat(6, 1fr)",
                textAlign: "center",
                width: "100%",
                height: "80px",
              }}
            >
              <td style={tdStyle}>{item.id}</td>
              <td style={tdStyle}>{item.amount}</td>
              <td style={tdStyle}>{item.status}</td>
              <td style={tdStyle}>{item.points}</td>
              <td style={tdStyle}>{item.source}</td>
              <td style={tdStyle}>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const thStyle = {
  padding: "10px",
  fontWeight: "700",
  fontSize: "14px",
  color: "#555555",
};

const tdStyle = {
  padding: "10px",
  fontWeight: "400",
  fontSize: "16px",
  color: "#2F2F2F",
};  