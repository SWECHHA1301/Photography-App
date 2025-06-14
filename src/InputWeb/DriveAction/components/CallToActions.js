import React from "react";

export default function CallToActions({ data, updateData }) {
  const inputs = [
    {
      label: "Title",
      placeholder: "e.g. 2024",
      maxLength: 30,
    },
    {
      label: "Description",
      placeholder:
        "Sarah captured our wedding day perfectly! Her attention to detail and ability to capture candid moments was incredible.",
      maxLength: 80,
    },
    {
      label: "Primary Button",
      placeholder: "Book a Session",
      maxLength: 30,
    },
    {
      label: "Secondary Button",
      placeholder: "View Portfolio",
      maxLength: 30,
    },
  ];

  const styles = {
    row: {
      display: "flex",
      alignItems: "center",
      marginBottom: "12px",
      position: "relative",
      flexWrap: "wrap",
    },
    label: {
      width: "418px",
      fontSize: "16px",
      fontWeight: "400",
      color: "#2F2F2F",
    },
    input: {
      maxWidth: "389px",
      width: "100%",
      padding: "6px 10px",
      borderRadius: "10px",
      border: "1px solid #ccc",
      backgroundColor: "#eef0ec",
      height: "32px",
    },
    textarea: {
      maxWidth: "389px",
      width: "100%",
      height: "65px",
      padding: "6px 10px",
      borderRadius: "10px",
      border: "1px solid #ccc",
      backgroundColor: "#eef0ec",
      fontFamily: "inherit",
      fontSize: "14px",
      resize: "none",
    },
    charCount: {
      position: "absolute",
      bottom: "2px",
      right: "-5px",
      fontSize: "12px",
      color: "#767676",
    },
  };

  const handleChange = (label, value) => {
    updateData({ [label]: value });
  };

  return (
    <div>
      {inputs.map((input, index) => {
        const value = data[input.label] || "";
        const maxLength = input.maxLength || 100;

        return (
          <div key={index} style={{ ...styles.row, alignItems: "flex-start" }}>
            <div style={styles.label}>{input.label} :</div>
            <div style={{ position: "relative", width: "389px" }}>
              {input.label === "Description" ? (
                <>
                  <textarea
                    placeholder={input.placeholder}
                    maxLength={maxLength}
                    value={value}
                    onChange={(e) =>
                      handleChange(input.label, e.target.value)
                    }
                    style={styles.textarea}
                  />
                  <div style={styles.charCount}>
                    {value.length}/{maxLength}
                  </div>
                </>
              ) : (
                <>
                  <input
                    placeholder={input.placeholder}
                    maxLength={maxLength}
                    value={value}
                    onChange={(e) =>
                      handleChange(input.label, e.target.value)
                    }
                    style={styles.input}
                  />
                  <div style={styles.charCount}>
                    {value.length}/{maxLength}
                  </div>
                </>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
