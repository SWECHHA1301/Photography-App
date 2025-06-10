import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import BuisnessInfo from "./components/BuisnessInfo";
import ContactInfo from "./components/ContactInfo";
import BrandColors from "./components/BrandColors";
import Title from "../../Common/Titles/Title";
import DropDown from "../../Common/DropDown";

export default function BrandFoundation() {
  const styles = {
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
    <div style={styles.contentBox}>
      <Title title={"Brand Foundation"} />

      <DropDown heading={"BusinessInfo"} section={<BuisnessInfo />} />
      <DropDown heading={"Contact Info"} section={<ContactInfo />} />
      <DropDown heading={"Brand Colors"} section={<BrandColors />} />
    </div>
  );
}
