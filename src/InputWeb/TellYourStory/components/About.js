import React, { useState } from "react";

export default function About({ data, updateData }) {
  const inputs = [
    { label: "Greeting Intro", key: "greetings", placeholder: "e.g. Hello, I am name" },
    {
      label: "Bio",
      key: "bio",
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
      flexWrap: "wrap",
      alignItems: "flex-start",
      gap: "20px",
    },
    label: {
      width: "400px",
      fontSize: "16px",
      fontWeight: "400",
      color: "#2F2F2F",
      lineHeight: "32px",
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
              value={data[input.key] || ""} // ✅ corrected from inputs.key
              onChange={(e) => updateData({ [input.key]: e.target.value })} // ✅ corrected
              style={{ ...styles.textarea, marginBottom: "20px" }}
            />
          ) : (
            <input
              placeholder={input.placeholder}
              value={data[input.key] || ""}
              onChange={(e) => updateData({ [input.key]: e.target.value })}
              style={styles.input}
            />
          )}
        </div>
      ))}
    </div>
  );
}
