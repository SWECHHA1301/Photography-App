import React from "react";
import { ChevronDown } from "lucide-react";

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
      position: "relative", // for select + icon
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
    selectWrapper: {
      position: "relative",
      width: "235px",
    },
    select: {
      width: "235px",
      height: "40px",
      padding: "6px 10px",
      borderRadius: "10px",
      border: "1px solid #ccc",
      backgroundColor: "#eef0ec",
      appearance: "none", // hide default arrow
      WebkitAppearance: "none",
      MozAppearance: "none",
      fontSize: "14px",
    },
    chevron: {
      position: "absolute",
      right: "10px",
      top: "50%",
      transform: "translateY(-50%)",
      pointerEvents: "none",
      color: "#555",
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

      {/* Established Time with Chevron */}
      <div style={styles.row}>
        <div style={styles.label}>Established Time :</div>
        <div style={styles.selectWrapper}>
          <select style={styles.select}>
            <option>Year</option>
            <option>2024</option>
            <option>2023</option>
            <option>2022</option>
          </select>
          <ChevronDown size={16} style={styles.chevron} />
        </div>
      </div>
    </div>
  );
}
