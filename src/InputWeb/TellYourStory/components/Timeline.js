import React, { useState } from "react";
import InputBar from "../../../Common/InputBar";
import ColorPallete from "../../../Common/ColorPallete";
import Textarea from '../../../Common/Textarea';

export default function Timeline() {
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

  return (
    <div>
      {/* Service Tabs */}
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

      {/* Form for Active Service */}
      <div style={{}}>
        <InputBar
          label="Title"
          holder="e.g. Wedding Photography"
          value={activeService.title}
          onChange={(e) => handleChange(activeIndex, "title", e.target.value)}
        />
        <Textarea   label="Description"
                   holder="eg. Featured in Photography Masters Magazine and won the International Wedding Photography Award." 
                   value={activeService.description}
                   onChange={e => handleChange(activeIndex, 'description', e.target.value)}
                   customStyle={{
                     height:'92px'
                   }}/>
        <InputBar
          label="Icon"
          holder="e.g. heart"
          value={activeService.icon}
          onChange={(e) => handleChange(activeIndex, "icon", e.target.value)}
        />
        <InputBar
          label="Category"
          holder="e.g. Weddings"
          value={activeService.category}
          onChange={(e) =>
            handleChange(activeIndex, "category", e.target.value)
          }
        />
        <ColorPallete
          value={activeService.color}
          onChange={(color) => handleChange(activeIndex, "color", color)}
        />
      </div>
    </div>
  );
}
