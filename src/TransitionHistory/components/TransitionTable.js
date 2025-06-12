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
    <div style={{ maxHeight: "500px", overflowY: "auto", marginTop: "10px" }}>
      <style>
        {`
          ::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>

      <div style={{ overflowX: "auto" }}>
        <table
          style={{
            width: "100%",
            minWidth: "700px",
            borderCollapse: "separate",
            borderSpacing: "0 10px", // creates spacing between rows
          }}
        >
          <thead>
  <tr style={{ height: "40px", borderBottom: "1px solid #ccc", borderTop: "1px solid #ccc" }}>
    <th style={{ ...thStyle, textAlign: "left" }}>Transaction ID</th>
    <th style={{ ...thStyle, textAlign: "center" }}>
      Amount <ArrowDown size={14} style={{ paddingLeft: "10px" }} />
    </th>
    <th style={{ ...thStyle, textAlign: "center" }}>
      Status <ArrowDown size={14} style={{ paddingLeft: "10px" }} />
    </th>
    <th style={{ ...thStyle, textAlign: "center" }}>
      Credit Points <ArrowDown size={14} style={{ paddingLeft: "10px" }} />
    </th>
    <th style={{ ...thStyle, textAlign: "center" }}>Payment Source</th>
    <th style={{ ...thStyle, textAlign: "right" }}>Created At</th>
  </tr>
</thead>

<tbody>
  {transactionData.map((item, index) => (
    <tr key={index}>
      <td style={{ ...tdStyle, textAlign: "left" }}>{item.id}</td>
      <td style={{ ...tdStyle, textAlign: "center" }}>{item.amount}</td>
      <td style={{ ...tdStyle, textAlign: "center" }}>{item.status}</td>
      <td style={{ ...tdStyle, textAlign: "center" }}>{item.points}</td>
      <td style={{ ...tdStyle, textAlign: "center" }}>{item.source}</td>
      <td style={{ ...tdStyle, textAlign: "right" }}>{item.date}</td>
    </tr>
  ))}
</tbody>

        </table>
      </div>
    </div>
  );
}

const thStyle = {
  padding: "10px",
  fontWeight: "600",
  color: "#2F2F2F",
  whiteSpace: "nowrap",
  borderBottom: "1px solid #ccc",
  borderTop: "1px solid #ccc",
};

const tdStyle = {
  padding: "10px",
  fontSize: "15px",
  color: "#2F2F2F",
  whiteSpace: "nowrap",
  backgroundColor: "#fff",
  borderBottom: "2px solid #ccc",
  height: "80px",
};
