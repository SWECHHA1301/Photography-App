import React from "react";

export default function ContactInfo() {
  const fields = [
    "Email",
    "Phone",
    "Address",
    "Linkedin id",
    "Instagram id",
  ];

  const styles = {
    row: {
      display: "flex",
      alignItems: "center",
      marginBottom: "12px",
            flexWrap: "wrap",
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
      {fields.map((field, index) => (
        <div key={index} style={styles.row}>
          <div style={styles.label}>{field} :</div>
          {field === "Address" ? (
            <textarea style={styles.textarea} />
          ) : (
            <input style={styles.input} />
          )}
        </div>
      ))}
    </div>
  );
}
