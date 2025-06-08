import React from "react";
import Stepper from "../Common/Stepper";
import BuisnessInfo from "./components/BuisnessInfo";
import ContactInfo from "./components/ContactInfo";
import BrandColors from "./components/BrandColors";

export default function BrandFoundation() {
  const styles = {
    container: {
      backgroundColor: "#fff",
      padding: "24px",
      fontFamily: "sans-serif",
      borderRadius: "12px",
      border: "1px solid #ddd",
      width: "100%",
      maxWidth: "1322px", 
      maxHeight: "1660px",
    },
    heading: {
      fontSize: "18px",
      margin: "16px 0 4px",
    },
    subText: {
      fontSize: "13px",
      color: "#777",
      marginBottom: "24px",
    },
    sectionWrapper: {
      borderTop: "1px solid #ccc",
      paddingTop: "20px",
      marginTop: "20px",
    },
    sectionTitle: {
      fontSize: "16px",
      fontWeight: "700",
      color: "#2F2F2F",
      marginBottom: "12px",
    },
    nextBtnWrap: {
      display: "flex",
      justifyContent: "flex-end",
      marginTop: "32px",
    },
    nextButton: {
      padding: "10px 20px",
      backgroundColor: "#2c7a7b",
      color: "#fff",
      fontWeight: "bold",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container}>
      <Stepper />

      <div
  style={{
    width: "1274px",
    borderRadius: "10px",
    backgroundColor: "#fff",
    padding: "24px",
    boxShadow: "0 0 8px rgba(0,0,0,0.05)",
    border: "1px solid #ddd",
    margin: "auto",
  }}
>
  {/* Header */}
  <div
    style={{
      fontSize: "20px",
      fontWeight: "600",
      color: "#f4b400", // or your preferred yellow shade
      height: "20px",
    }}
  >
    Brand Foundation
  </div>

  {/* Sections */}
  <div style={styles.sectionWrapper}>
    <div style={styles.sectionTitle}>Business Info</div>
    <BuisnessInfo />
  </div>

  <div style={styles.sectionWrapper}>
    <div style={styles.sectionTitle}>Contact Info</div>
    <ContactInfo />
  </div>

  <div style={styles.sectionWrapper}>
    <div style={styles.sectionTitle}>Brand Colors</div>
    <BrandColors />
  </div>

  {/* Button */}
  <div style={styles.nextBtnWrap}>
    <button style={styles.nextButton}>Next</button>
  </div>
</div>

    </div>
  );
}
