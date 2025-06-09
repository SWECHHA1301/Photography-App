import React from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";
export default function DropDown({ heading, section }) {
  const [isDrawerOpen, setDrawerOpen] = useState(true);

  const styles = {
    sectionWrapper: {
      borderTop: "1px solid #767676",
      padding: " 0 24px",
    },
    sectionHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      cursor: "pointer",
      fontWeight: 700,
      fontSize: "16px",
      color: "#2F2F2F",
      height: "56px",
    },
  };
  return (
    <>
      <div style={styles.sectionWrapper}>
        <div
          style={styles.sectionHeader}
          onClick={() => setDrawerOpen(!isDrawerOpen)}
        >
          <span>{heading}</span>
          {isDrawerOpen ? (
            <ChevronDown size={24} />
          ) : (
            <ChevronRight size={24} />
          )}
        </div>
        {isDrawerOpen && section}
      </div>
    </>
  );
}
