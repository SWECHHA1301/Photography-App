import React from "react";

export default function BuisnessInfo() {
  const inputs = [
    { label: "Name", placeholder: "e.g. Sarah Mitchell" },
    { label: "Tagline", placeholder: "e.g. Photography" },
    { label: "Full Name For the Site", placeholder: "e.g. Sarah Mitchell Photography" },
    { label: "Description", placeholder: "" },
    { label: "Location", placeholder: "e.g. Street/Area, Country" },
  ];

  const styles = {
    row: {
      display: "flex",
      alignItems: "center",
      marginBottom: "12px",
    },
    label: {
      width: "418px",
      fontSize: "16px",
      fontWeight: "400",
      color: "#2F2F2F",
    },
    input: {
      width: "389px",
      padding: "6px 10px",
      borderRadius: "10px",
      border: "1px solid #ccc",
      backgroundColor: "#eef0ec",
      height: "32px",
    },
    textarea: {
      width: "389px",
      height: "64px",
      padding: "6px 10px",
      borderRadius: "10px",
      border: "1px solid #ccc",
      backgroundColor: "#eef0ec",
      fontFamily: "inherit",
      fontSize: "14px",
      resize: "none",
    },
  };

  return (
    <div>
      {inputs.map((input, index) => (
        <div key={index} style={styles.row}>
          <div style={styles.label}>{input.label} :</div>
          {(input.label === "Description" || input.label === "Location") ? (
            <textarea placeholder={input.placeholder} style={styles.textarea} />
          ) : (
            <input placeholder={input.placeholder} style={styles.input} />
          )}
        </div>
      ))}
      <div style={styles.row}>
        <div style={styles.label}>Established Time :</div>
        <select style={{...styles.input, width: "235px"}}>
          <option>Year</option>
        </select>
      </div>
    </div>
  );
}
