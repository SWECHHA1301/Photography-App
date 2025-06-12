import React, { useState } from "react";

export default function SEO() {
  const [rating, setRating] = useState(0);
  const inputs = [
     {
      label: "Title", placeholder: "e.g. 2024"
    },
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
  };

  return (
    <div style={styles.container}>

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