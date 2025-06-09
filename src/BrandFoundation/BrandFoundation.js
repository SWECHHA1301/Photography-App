import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import Stepper from "../Common/Stepper";
import BuisnessInfo from "./components/BuisnessInfo";
import ContactInfo from "./components/ContactInfo";
import BrandColors from "./components/BrandColors";
import Title from "../Common/Title";
import DropDown from "../Common/DropDown";

export default function BrandFoundation() {
  const [isBusinessOpen, setBusinessOpen] = useState(true);
  const [isContactOpen, setContactOpen] = useState(true);
  const [isColorsOpen, setColorsOpen] = useState(true);

  const styles = {
    container: {
      backgroundColor: "#fff",
      padding: "24px",
      fontFamily: "sans-serif",
      borderRadius: "12px",
      border: "1px solid #ddd",
      width: "100%",
      // maxWidth: "1322px",
      maxHeight: "1660px",
    },
    sectionWrapper: {
      borderTop: "1px solid #e2e8f0",
      paddingTop: "20px",
      marginTop: "20px",
    },
    sectionHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      cursor: "pointer",
      fontWeight: 600,
      fontSize: "16px",
      color: "#333",
    },
    subText: {
      fontSize: "13px",
      color: "#777",
      marginBottom: "24px",
    },
    sectionWrapper: {
      borderTop: "1px solid #767676",
      padding: "24px",
      // marginTop: "20px",
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
          //  maxWidth: "1274px",
          width:'100%',
          borderRadius: "10px",
          backgroundColor: "#fff",
          // padding: "24px",
          boxShadow: "0 0 8px rgba(0,0,0,0.05)",
          border: "1px solid #767676",
          margin: "auto",
        }}
      >
        {/* Header */}
       
        <Title title={"Brand Foundation"}/>

          <DropDown heading={"BusinessInfo"} section={<BuisnessInfo/>}/>
         <DropDown heading={"Contact Info"} section={<ContactInfo />}/>
          <DropDown heading={"Brand Colors"} section={<BrandColors />}/>

        {/* Sections */}
        {/* <div style={styles.sectionWrapper}>
          <div
            style={styles.sectionHeader}
            onClick={() => setBusinessOpen(!isBusinessOpen)}
          >
            <span>Business Info</span>
            {isBusinessOpen ? (
              <ChevronDown size={18} />
            ) : (
              <ChevronRight size={18} />
            )}
          </div>
          {isBusinessOpen && <BuisnessInfo />}
        </div> */}
    
        {/* <div style={styles.sectionWrapper}>
          <div
            style={styles.sectionHeader}
            onClick={() => setContactOpen(!isContactOpen)}
          >
            <span>Contact Info</span>
            {isContactOpen ? (
              <ChevronDown size={18} />
            ) : (
              <ChevronRight size={18} />
            )}
          </div>
          {isContactOpen && <ContactInfo />}
        </div> */}

        {/* <div style={styles.sectionWrapper}>
          <div
            style={styles.sectionHeader}
            onClick={() => setColorsOpen(!isColorsOpen)}
          >
            <span>Brand Colors</span>
            {isColorsOpen ? (
              <ChevronDown size={18} />
            ) : (
              <ChevronRight size={18} />
            )}
          </div>
          {isColorsOpen && <BrandColors />}
        </div> */}

        {/* Button */}
        <div style={styles.nextBtnWrap}>
          <button style={styles.nextButton}>Next</button>
        </div>
      </div>
    </div>
  );
}
