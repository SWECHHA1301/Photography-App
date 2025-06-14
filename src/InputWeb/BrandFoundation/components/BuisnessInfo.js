import React from "react";
import { ChevronDown } from "lucide-react";

export default function BuisnessInfo({ data, updateData }) {
  const inputs = [
    { label: "Name", key: "name", placeholder: "e.g. Sarah Mitchell" },
    { label: "Tagline", key: "tagline", placeholder: "e.g. Photography" },
    {
      label: "Full Name For the Site",
      key: "fullName",
      placeholder: "e.g. Sarah Mitchell Photography",
    },
    { label: "Description", key: "description", placeholder: "" },
    { label: "Location", key: "location", placeholder: "e.g. Street/Area, Country" },
  ];

  const styles = {
    row: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      marginBottom: "12px",
      position: "relative",
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
  };

  return (
    <div>
      {inputs.map((input, index) => (
        <div key={index} style={styles.row}>
          <div style={styles.label}>{input.label} :</div>
          {input.key === "description" || input.key === "location" ? (
            <textarea
              placeholder={input.placeholder}
              style={styles.textarea}
              value={data[input.key] || ""}
              onChange={(e) => updateData({ [input.key]: e.target.value })}
            />
          ) : (
            <input
              placeholder={input.placeholder}
              style={styles.input}
              value={data[input.key] || ""}
              onChange={(e) => updateData({ [input.key]: e.target.value })}
            />
          )}
        </div>
      ))}

      <div style={styles.row}>
        <div style={styles.label}>Established Time :</div>
        <div style={styles.selectWrapper}>
          <select
            style={styles.select}
            value={data.establishedTime || ""}
            onChange={(e) => updateData({ establishedTime: e.target.value })}
          >
            <option value="">Year</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
          </select>
          <ChevronDown size={16} style={styles.chevron} />
        </div>
      </div>
    </div>
  );
}
