import React, { useState } from "react";
import { Circle } from "lucide-react";

const colorOptions = [
  {
    hex: "#D4AF37",
    description: "A rich gold tone symbolizing luxury and prestige.",
  },
  {
    hex: "#2C7A7B",
    description:
      "A calm, confident teal tone that reflects trust, creativity, and balance.",
  },
  {
    hex: "#EB6F6F",
    description: "A soft red tone evoking warmth and compassion.",
  },
  {
    hex: "#A94442",
    description: "A deep, strong red that conveys strength and urgency.",
  },
  {
    hex: "#000000",
    description: "A bold black tone representing sophistication and power.",
  },
  {
    hex: "#A0C2A0",
    description: "A muted green tone symbolizing growth and tranquility.",
  },
];

export default function BrandColors() {
  const [selectedColor, setSelectedColor] = useState(null);

  const styles = {
    container: {
      padding: "20px",
      borderRadius: "4px",
      fontFamily: "sans-serif",
    },
    label: {
      fontWeight: "bold",
      marginBottom: "10px",
    },
    paletteRow: {
      display: "flex",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "10px",
    },
    paletteLabel: {
      fontSize: "16px",
      color: "#555",
      width: "390px", 
      marginBottom: "10px", 
    },
    colorCircleWrapper: (isSelected) => ({
      cursor: "pointer",
      borderRadius: "50%",
      border: isSelected ? "2px solid #36C" : "2px solid transparent",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "all 0.2s ease-in-out",
    }),
    infoBox: {
      margin: "16px",
      backgroundColor: "#F4F2F2",
      border: "1px solid #ddd",
      borderRadius: "10px",
      width: "100%", 
      maxWidth: "222px",
      boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
      fontFamily: "sans-serif",
    },
    infoHeader: {
      fontSize: "12px",
      fontWeight: "400",
      padding: "6px 10px",
      borderBottom: "1px solid #ccc",
      backgroundColor: "#f5f5f5",
    },
    hexDisplay: {
      backgroundColor: selectedColor,
      color: "white",
      fontWeight: "bold",
      fontSize: "14px",
      textAlign: "center",
      padding: "6px 0",
      borderRadius: "20px",
      margin: "10px auto 6px",
      width: "80%", 
    },
    infoContent: {
      display: "flex",
      padding: "0 10px",
      alignItems: "flex-start",
      gap: "10px",
      flexWrap: "wrap", 
      marginBottom: "10px",
     
    },
    colorPreview: {
      backgroundColor: "#fff",
      padding: "6px",
      borderRadius: "12px",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      textAlign: "left",
      height: "auto",
      width: "auto",
      boxSizing: "border-box",
      justifyContent: "flex-start",
    },
    colorCircle: (color) => ({
      height: "13px",
      width: "41px",
      backgroundColor: color,
      borderRadius: "999px",
      marginBottom: "8px",
    }),
    colorLines: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      alignItems: "flex-start",
    },
    line1: {
      height: "2px",
      width: "14px",
      backgroundColor: "#888",
      borderRadius: "1px",
    },
    line: {
      height: "2px",
      width: "18px",
      backgroundColor: "#555",
      borderRadius: "1px",
    },
    description: {
      fontSize: "12px",
      lineHeight: "1.3",
      color: "#333",
      flex: 1,
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.paletteRow}>
        <div style={styles.paletteLabel}>Choose From Color Pallete :</div>
        {colorOptions.map((color, index) => {
          const isSelected = selectedColor === color.hex;
          return (
            <div
              key={index}
              style={styles.colorCircleWrapper(isSelected)}
              onClick={() => setSelectedColor(color.hex)}
            >
              <Circle
                size={isSelected ? 33 : 25}
                fill={color.hex}
                color={color.hex}
                strokeWidth={0}
              />
            </div>
          );
        })}
      </div>

      {selectedColor && (
        <div style={styles.infoBox}>
          <div style={styles.infoHeader}>Info</div>
          <div style={styles.hexDisplay}>
            {selectedColor.replace("#", "").toUpperCase()}
          </div>
          <div style={styles.infoContent}>
            <div style={styles.colorPreview}>
              <div style={styles.colorCircle(selectedColor)}></div>
              <div style={styles.colorLines}>
                <div style={styles.line1}></div>
                <div style={styles.line}></div>
              </div>
            </div>

            <div style={styles.description}>
              {
                colorOptions.find((c) => c.hex === selectedColor)
                  ?.description
              }
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
