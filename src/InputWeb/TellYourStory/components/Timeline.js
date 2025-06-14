import React, { useState } from "react";
import InputBar from '../../../Common/InputBar'
import ColorPallete from '../../../Common/ColorPallete';
import Textarea from '../../../Common/Textarea';

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

  
  const styles = {
    row: {
      display: "flex",
      alignItems: "center",
      marginBottom: "12px",
      gap:'8px'
    },
    
    fieldWrapper: {
      flex: "0.13 400px",
      display: "flex",
      alignItems: "center",
      position: "relative",
      minWidth:'250px'
    },
 
   
    select: {
         
      width: "100%",
      height: "40px",
      padding: "6px 30px 6px 10px", // extra right padding for icon space
      borderRadius: "10px",
      border: "1px solid #767676",
      backgroundColor: "#E9EEEA",
      // appearance: "none",
      // WebkitAppearance: "none",
      // MozAppearance: "none",
      fontSize: "16px",
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
        <div style={{  flex: '0.39',display:'flex',alignItems:'center',gap:'20px'}}>
        <div>Year</div>
        <div>:</div></div>
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
         
        </div>
      </div>
<div style={{display:'flex',flexDirection:'column',gap:'16px'}}>
       <InputBar label="Title" holder="eg.  International Recognition"
           value={activeService.title}
                  onChange={e => handleChange(activeIndex, 'title', e.target.value)}
                  customStyle={{flex :'0.1 400px' }}
                  />
                      <Textarea label="Description" holder="eg. Featured in Photography
                               Masters Magazine and won the
                               International Wedding Photography Award."
                        value={activeService.description}
                              onChange={e => handleChange(activeIndex, 'description', e.target.value)}
                             customStyle={{flex :'0.1 400px' ,height:'92px'}}/>
                              <ColorPallete />
                             </div>
    
     
    </div>
  );
}
