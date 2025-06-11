import React from "react";

export default function CreditHistoryTable() {
  const data = [
    {
      type: "Debited",
      credits: 1,
      description: "New Project: Wedding",
      date: "5/20/2025, 9:06:26 PM",
    },
    {
      type: "Credited",
      credits: 2,
      description: "Registration Bonus",
      date: "5/20/2025, 8:48:58 PM",
    },
    {
      type: "Credited",
      credits: 2,
      description: "Registration Bonus",
      date: "5/20/2025, 8:48:58 PM",
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

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          display: "grid",
        }}
      >
        <thead>
          <tr
            style={{
              textAlign: "center",
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              height: "40px",
              borderBottom: "1px solid #ccc",
              borderTop: "1px solid #ccc",
            }}
          >
            <th style={thStyle}>Transaction Type</th>
            <th style={thStyle}>Number of Credits</th>
            <th style={thStyle}>Description</th>
            <th style={thStyle}>Created At</th>
          </tr>
        </thead>

        <tbody
          style={{
            display: "block",
            maxHeight: "450px",
            overflowY: "auto",
          }}
        >
          {data.map((item, index) => (
            <tr
              key={index}
              style={{
                backgroundColor: "#fff",
                borderBottom: "1px solid #000",
                borderBottomLeftRadius: "12px",
                borderBottomRightRadius: "12px",
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                textAlign: "center",
                width: "100%",
                height: "80px",
              }}
            >
              <td style={tdStyle}>{item.type}</td>
              <td style={tdStyle}>{item.credits}</td>
              <td style={tdStyle}>{item.description}</td>
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
  fontWeight: "600",
  color: "#2F2F2F",
};

const tdStyle = {
  padding: "10px",
  fontSize: "15px",
  color: "#2F2F2F",
};
