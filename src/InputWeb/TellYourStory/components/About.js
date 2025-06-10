import React, { useState } from "react";
import { ChevronDown, Star } from "lucide-react";

export default function Testimonial() {
  const [rating, setRating] = useState(0);
  const inputs = [
    { label: "Greeting Intro", placeholder: "e.g. Hello, I am name" },
    
    {
      label: "Bio",
      placeholder:
        "Sarah captured our wedding day perfectly! Her attention to detail and ability to capture candid moments was incredible.",
    },
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
      width: "781px",
      height: "306px",
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
          {input.label === "Bio" ? (
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