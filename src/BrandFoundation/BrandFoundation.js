import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import Stepper from "../Common/Stepper";
import BuisnessInfo from "./components/BuisnessInfo";
import ContactInfo from "./components/ContactInfo";
import BrandColors from "./components/BrandColors";
import Title from "../Common/Title";
import DropDown from "../Common/DropDown";

export default function BrandFoundation() {
  const styles = {
    outerWrapper: {
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      minHeight: "100vh",
      padding: "16px",
      boxSizing: "border-box",
      backgroundColor: "#f7f7f7",
    },
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: "#fff",
      padding: "16px",
      fontFamily: "sans-serif",
      borderRadius: "12px",
      border: "1px solid #ddd",
      width: "100%",
      maxWidth: "1322px",
      boxSizing: "border-box",
    },
    sectionWrapper: {
      borderTop: "1px solid #767676",
      padding: "24px 12px",
      width: "100%",
      boxSizing: "border-box",
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
      width: "100%",
      flexWrap: "wrap",
    },
    nextButton: {
      padding: "10px 20px",
      backgroundColor: "#2c7a7b",
      color: "#fff",
      fontWeight: "bold",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      margin: "16px",
    },
    contentBox: {
      width: "100%",
      borderRadius: "10px",
      backgroundColor: "#fff",
      boxShadow: "0 0 8px rgba(0,0,0,0.05)",
      border: "1px solid #767676",
      boxSizing: "border-box",
    },
  };

  return (
    <div style={styles.outerWrapper}>
      <div style={styles.container}>
        <Stepper />

        <div style={styles.contentBox}>
          <Title title={"Brand Foundation"} />

          <DropDown heading={"BusinessInfo"} section={<BuisnessInfo />} />
          <DropDown heading={"Contact Info"} section={<ContactInfo />} />
          <DropDown heading={"Brand Colors"} section={<BrandColors />} />

          <div style={styles.nextBtnWrap}>
            <button style={styles.nextButton}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
