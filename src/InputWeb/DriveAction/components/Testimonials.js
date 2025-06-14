import React, { useState } from "react";
import { ChevronDown, Star } from "lucide-react";

export default function Testimonial({ data, updateData }) {
  const [rating, setRating] = useState(0);
  const input = [
    { label: "Avatar", key: "avatar", placeholder: "e.g. Hello, I am name" },
    {
      label: "Author's Name",
      key: "author",
      placeholder: "Emily & James Rodriguez",
    },
    {
      label: "Comment",
      key: "comment",
      placeholder:
        "Sarah captured our wedding day perfectly! Her attention to detail and ability to capture candid moments was incredible.",
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
      appearance: "none",
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
      {input.map((input, index) => (
        <div key={index} style={styles.row}>
          <div style={styles.label}>{input.label} :</div>
          {input.label === "Comment" ? (
            <textarea
              placeholder={input.placeholder}
              value={data[input.key] || ""}
              onChange={(e) => updateData({ [input.key]: e.target.value })}
              style={styles.textarea}
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

      <div style={styles.row}>
        <div style={styles.label}>Service Provided :</div>
        <div style={styles.selectWrapper}>
          <select
            value={data.service || ""}
            onChange={(e) => updateData({ service: e.target.value })}
            style={styles.select}
          >
            <option>Wedding Photography</option>
            <option>Birthday Party</option>
            <option>Engagement Shoot</option>
          </select>
          <ChevronDown size={16} style={styles.chevron} />
        </div>
      </div>

      <div style={styles.row}>
        <div style={styles.label}>Rating :</div>
        <div style={styles.starRow}>
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              fill={star <= rating ? "#f5b301" : "none"}
              color="#f5b301"
              size={20}
              onClick={() => setRating(star)}
              style={{ cursor: "pointer" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
