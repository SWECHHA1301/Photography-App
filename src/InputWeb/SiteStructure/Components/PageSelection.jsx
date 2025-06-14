import React from "react";
import ToggleSwitch from "../../../Common/Toggles/ToggleSwitch";

export default function PageSelection({ data = {}, updateData }) {
  const ableList = [
    { id: "home", label: "Home, Portfolio, Contact", isDisabled: true },
    { id: "about", label: "About", isDisabled: false },
    { id: "pricing", label: "Pricing", isDisabled: false },
    { id: "testimonials", label: "Testimonials", isDisabled: false },
    { id: "faqs", label: "FAQ’s", isDisabled: false },
    { id: "blog", label: "Blog", isDisabled: false },
    { id: "faqs2", label: "FAQ’s", isDisabled: false },
  ];

  const styles = {
    toggleContent: {
      width: "100%",
      maxWidth: "771px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: "50px",
    },
    content: {
      fontSize: "16px",
      fontWeight: "400",
    },
  };

  const handleToggle = (id) => {
    const updated = {
      ...data,
      [id]: !data[id],
    };
    updateData?.(updated);
  };

  return (
    <>
      <div>
        {ableList.map((item) => (
          <div key={item.id} style={styles.toggleContent}>
            <p style={styles.content}>{item.label}</p>
            <ToggleSwitch
              checked={item.isDisabled ? true : data?.[item.id] || false}
              onChange={() => handleToggle(item.id)}
              disabled={item.isDisabled}
            />
          </div>
        ))}
      </div>
    </>
  );
}
