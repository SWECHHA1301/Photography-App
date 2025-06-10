import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function SEO() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    keywords: "",
    secondaryButton: ""
  });

  const fields = [
    { 
      label: "Title", 
      type: "select",
      name: "title",
      placeholder: "eg. 2024",
      options: ["Select a title", "2024", "2023", "2022"] 
    },
    { 
      label: "Description", 
      type: "textarea",
      name: "description",
      placeholder: "eg. Professional photographer specializing in weddings, portraits, and events. Based in San Francisco, capturing life's most precious moments with artistry and emotion",
      maxLength: 80
    },
    { 
      label: "Keywords", 
      type: "input",
      name: "keywords",
      placeholder: "eg. photographer, wedding photography",
      maxLength: 30
    },
    { 
      label: "Secondary Button", 
      type: "input",
      name: "secondaryButton",
      placeholder: "eg. View Portfolio"
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const styles = {
    row: {
      display: "flex",
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
      width: "240px",
    },
    select: {
      width: "100%",
      height: "40px",
      padding: "8px 12px",
      borderRadius: "8px",
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
    counter: {
      position: "absolute",
      right: "10px",
      bottom: "10px",
      fontSize: "12px",
      color: "#888",
    },
    inputWrapper: {
      position: "relative",
    }
  };

  return (
    <div>
      {fields.map((field, index) => (
        <div key={index} style={styles.row}>
          <div style={styles.label}>{field.label}:</div>
          <div style={styles.inputWrapper}>
            {field.type === "select" ? (
              <div style={styles.selectWrapper}>
                <select 
                  style={styles.select}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                >
                  {field.options.map((option, i) => (
                    <option key={i} value={option}>{option}</option>
                  ))}
                </select>
                <ChevronDown size={16} style={styles.chevron} />
              </div>
            ) : field.type === "textarea" ? (
              <>
                <textarea 
                  style={styles.textarea} 
                  placeholder={field.placeholder}
                  maxLength={field.maxLength}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                />
                {field.maxLength && (
                  <div style={styles.counter}>
                    {formData[field.name]?.length || 0}/{field.maxLength}
                  </div>
                )}
              </>
            ) : (
              <>
                <input 
                  style={styles.input} 
                  placeholder={field.placeholder}
                  maxLength={field.maxLength}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                />
                {field.maxLength && (
                  <div style={{...styles.counter, bottom: "auto", top: "8px"}}>
                    {formData[field.name]?.length || 0}/{field.maxLength}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}