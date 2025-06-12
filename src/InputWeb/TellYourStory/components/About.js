import React, { useState } from "react";

export default function About() {
  const inputs = [
    { label: "Greeting Intro", placeholder: "e.g. Hello, I am name" },
    {
      label: "Bio",
      placeholder:
        "Sarah captured our wedding day perfectly! Her attention to detail and ability to capture candid moments was incredible.",
    },
  ];

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      gap: "20px",
    },
    row: {
      display: "flex",
      alignItems: "flex-start", // important for vertical alignment with textarea
      gap: "20px",
    },
    label: {
      width: "400px",
      fontSize: "16px",
      fontWeight: "400",
      color: "#2F2F2F",
      lineHeight: "32px", // aligns with input height
    },
    input: {
      width: "389px",
      padding: "6px 10px",
      borderRadius: "10px",
      border: "1px solid #ccc",
      backgroundColor: "#E9EEEA",
      height: "32px",
      fontSize: "14px",
    },
    textarea: {
      width: "781px",
      height: "300px",
      padding: "6px 10px",
      borderRadius: "10px",
      border: "1px solid #767676",
      backgroundColor: "#E9EEEA",
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
          {input.label === "Bio" ? (
            <textarea
              placeholder={input.placeholder}
              style={{...styles.textarea, marginBottom: "20px"}}
            />
          ) : (
            <input
              placeholder={input.placeholder}
              style={styles.input}
            />
          )}
        </div>
      ))}
    </div>
  );
}
