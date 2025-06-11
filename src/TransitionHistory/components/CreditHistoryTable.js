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
            <tr
              style={{
                textAlign: "center",
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

          <tbody>
            {data.map((item, index) => (
              <tr
                key={index}
                style={{
                  backgroundColor: "#fff",
                  textAlign: "center",
                }}
              >
                <td style={{ ...tdStyle, borderRadius: "0 0 0 10px" }}>{item.type}</td>
                <td style={tdStyle}>{item.credits}</td>
                <td style={tdStyle}>{item.description}</td>
                <td style={{ ...tdStyle, borderRadius: "0 0 10px 0" }}>{item.date}</td>
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
