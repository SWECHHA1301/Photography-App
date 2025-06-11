import React from "react";

export default function TransitionTable({ data }) {
  return (
    <div style={{ overflowY: "auto", maxHeight: "250px", border: "1px solid #ccc", marginTop: "10px" }}>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ backgroundColor: "#f8f8f8", textAlign: "left" }}>
            <th style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>Transaction ID</th>
            <th style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>Amount</th>
            <th style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>Status</th>
            <th style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>Credit Points</th>
            <th style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>Payment Source</th>
            <th style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>Created At</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td style={{ padding: "10px", borderBottom: "1px solid #eee" }}>{item.id}</td>
              <td style={{ padding: "10px", borderBottom: "1px solid #eee" }}>{item.amount}</td>
              <td style={{ padding: "10px", borderBottom: "1px solid #eee" }}>{item.status}</td>
              <td style={{ padding: "10px", borderBottom: "1px solid #eee" }}>{item.points}</td>
              <td style={{ padding: "10px", borderBottom: "1px solid #eee" }}>{item.source}</td>
              <td style={{ padding: "10px", borderBottom: "1px solid #eee" }}>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}