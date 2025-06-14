import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import ColorPallete from "../../../Common/ColorPallete";

export default function Timeline() {
  const [selectedYear, setSelectedYear] = useState("");

  const years = Array.from({ length: 50 }, (_, i) => 1980 + i);

  const [services, setServices] = useState([
    {
      year: 2024,
      title: "",
      description: "",
      icon: "",
      category: "",
      color: "",
    },
  ]);

  const [activeIndex, setActiveIndex] = useState(0);

  const handleChange = (index, field, value) => {
    const updated = [...services];
    updated[index][field] = value;
    setServices(updated);
  };

  const addService = () => {
    const lastYear = services[services.length - 1]?.year || 2024;
    setServices((prev) => [
      ...prev,
      {
        year: lastYear + 1,
        title: "",
        description: "",
        icon: "",
        category: "",
        color: "",
      },
    ]);
    setActiveIndex(services.length);
  };

  const activeService = services[activeIndex];

  const inputs = [
    { label: "Title", placeholder: "e.g. Sarah Mitchell" },
    { label: "Description", placeholder: "" },
  ];

  const styles = {
    row: {
      display: "flex",
      alignItems: "center",
      marginBottom: "12px",
    },
    label: {
      flex: "0.2",
      fontSize: "16px",
      fontWeight: "400",
      color: "#2F2F2F",
    },
    colon: {
      flex: "0.1",
      fontSize: "16px",
      fontWeight: "400",
      color: "#2F2F2F",
    },
    fieldWrapper: {
      flex: "0.7",
      display: "flex",
      alignItems: "center",
      position: "relative",
    },
    input: {
      maxWidth: "485px",
      width: "100%",
      padding: "6px 10px",
      borderRadius: "10px",
      border: "1px solid #ccc",
      backgroundColor: "#E9EEEA",
      height: "32px",
      fontSize: "14px",
    },
    textarea: {
      maxWidth: "485px",
      width: "100%",
      height: "64px",
      padding: "6px 10px",
      borderRadius: "10px",
      border: "1px solid #ccc",
      backgroundColor: "#E9EEEA",
      fontFamily: "inherit",
      fontSize: "14px",
      resize: "none",
    },
    select: {
      maxWidth: "335px",
      width: "100%",
      height: "40px",
      padding: "6px 30px 6px 10px", // extra right padding for icon space
      borderRadius: "10px",
      border: "1px solid #ccc",
      backgroundColor: "#E9EEEA",
      appearance: "none",
      WebkitAppearance: "none",
      MozAppearance: "none",
      fontSize: "14px",
    },
    chevron: {
      position: "absolute",
      left: "30%", // This was your custom position
    },
  };

  return (
    <div>
      {/* Year Buttons */}
      <div style={{ display: "flex", marginBottom: 10 }}>
        {services.map((service, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            style={{
              marginRight: 10,
              padding: "8px",
              backgroundColor: activeIndex === index ? "#359597" : "#fff",
              color: activeIndex === index ? "#fff" : "#2C7A7B",
              border: activeIndex === index ? "none" : "1px solid #2C7A7B",
              borderRadius: 10,
              cursor: "pointer",
              maxWidth: "113px",
              width: "100%",
              fontSize: "16px",
              fontWeight: "400",
              height: "27px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {service.year}
          </button>
        ))}

        <button
          onClick={addService}
          style={{
            padding: "11px ",
            backgroundColor: "#FFFFFF",
            color: "#2F2F2F",
            border: "1px solid #767676",
            borderRadius: 10,
            cursor: "pointer",
            maxWidth: "113px",
            width: "100%",
            fontSize: "16px",
            fontWeight: "400",
            height: "27px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          + Add Card
        </button>
      </div>

      {/* Year Dropdown */}
      <div style={styles.row}>
        <div style={styles.label}>Year</div>
        <div style={styles.colon}>:</div>
        <div style={styles.fieldWrapper}>
          <select
            style={styles.select}
            value={activeService.year}
            onChange={(e) =>
              handleChange(activeIndex, "year", parseInt(e.target.value))
            }
          >
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
          <ChevronDown size={16} style={styles.chevron} />
        </div>
      </div>

      {/* Title & Description */}
      {inputs.map((input, index) => (
        <div key={index} style={styles.row}>
          <div style={styles.label}>{input.label}</div>
          <div style={styles.colon}>:</div>
          <div style={styles.fieldWrapper}>
            {input.label === "Description" ? (
              <textarea
                placeholder={input.placeholder}
                style={styles.textarea}
                value={activeService.description}
                onChange={(e) =>
                  handleChange(activeIndex, "description", e.target.value)
                }
              />
            ) : (
              <input
                placeholder={input.placeholder}
                style={styles.input}
                value={activeService.title}
                onChange={(e) =>
                  handleChange(activeIndex, "title", e.target.value)
                }
              />
            )}
          </div>
        </div>
      ))}

      {/* Color Picker */}
      <ColorPallete />
    </div>
  );
}
