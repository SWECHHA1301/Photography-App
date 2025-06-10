import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function SEO() {
  const [rating, setRating] = useState(0);
  const inputs = [
    {
      label: "Description",
      placeholder:
        "Sarah captured our wedding day perfectly! Her attention to detail and ability to capture candid moments was incredible.",
        maxLength: 80,
    },
    { label: "Keyword", placeholder: "e.g. Hello, I am name",maxLength: 30 },
    { label: "Secondary Button", placeholder: "Emily & James Rodriguez",maxLength: 30 },
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
    starRow: {
      display: "flex",
      alignItems: "center",
      gap: "4px",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container}>

       <div style={styles.row}>
        <div style={styles.label}>Title :</div>
        <div style={styles.selectWrapper}>
          <select style={styles.select}>
            <option>2024</option>
            <option>2025</option>
            <option>2026</option>
          </select>
          <ChevronDown size={16} style={styles.chevron} />
        </div>
      </div>


      {inputs.map((input, index) => (
        <div key={index} style={styles.row}>
          <div style={styles.label}>{input.label} :</div>
          {input.label === "Description" ? (
            <textarea
              placeholder={input.placeholder}
              style={styles.textarea}
            />
          ) : (
            <input placeholder={input.placeholder} style={styles.input} />
            
          )}
        </div>
      ))}

    </div>
  );
}