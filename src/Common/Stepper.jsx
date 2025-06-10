import React, { useState } from "react";
import { Pencil, Star, ChevronRight, ChevronLeft,Check } from "lucide-react";

const steps = [
  { label: "Brand Foundation", icon: <Pencil size={14} fill="#000000" /> },
  { label: "Site Structure" },
  { label: "First Impression" },
  { label: "What You Offer" },
  { label: "Tell Your Story" },
  { label: "Drive Action & Visibility" },
];

const Stepper = ({ currentStep, onNext, onPrev, totalSteps }) => {
   return (
    <div
      style={{
        fontFamily: "'Segoe UI', sans-serif",
        width: "100%",
        maxHeight: "273px"
      }}
    >
      {/* Header */}
      <div
        style={{
          color: "#2C7A7B",
          fontWeight: "600",
          fontSize: "24px",
          marginBottom: "20px",
        }}
      >
        Setup Your Website
      </div>

      {/* Stepper Track */}
      <div style={{ position: "relative", paddingBottom: "40px" }}>
        <div
          style={{
            position: "absolute",
            top: "20px",
            left: "90px",
            right: "90px",
            height: 2,
            backgroundColor: "#aaa",
            zIndex: 0,
          }}
        />
          <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            position: "relative",
            zIndex: 1,
          }}
        >
          {steps.map((step, index) => {
            let icon, bgColor, border;

            if (index < currentStep) {
              icon = <Check size={14} color="#147D73" />;
              bgColor = "#D3E3E4";
              border = "2px solid #147D73";
            } else if (index === currentStep) {
              icon = <Pencil size={14} color="black" fill={"black"}/>;
              bgColor = "#fff6dc";
              border = "2px solid #F4C430";
            } else {
              icon = <span style={{ fontSize: 20, fontWeight:'700',color: "#666" }}>{index + 1}</span>;
              bgColor = "#E3D3D3";
              border = "2px solid  #DF5151";
            }

            return (
              <div
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    backgroundColor: bgColor,
                    border: border,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 5,
                    zIndex: 2,
                  }}
                >
                  {icon}
                </div>
                <div
                  style={{
                    fontSize: 16,
                    lineHeight: "14px",
                    color: "#333",
                    maxWidth: 80,
                  }}
                >
                  {step.label.split(" ").map((word, i) => (
                    <div key={i}>{word}</div>
                  ))}
                </div>
              </div>
            );
          })}

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap:'16px',
              alignItems: "center",
              justifyContent:'center',
              textAlign: "center",
              width: "100%",
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                backgroundColor: "#D3E3E4",
                border: "2px solid #167b78",
                color: "#167b78",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 5,
                zIndex: 2,
              }}
            >
              <Star
                size={20}
                fill ={" #167b78"}
              />
            </div>

            <div
              style={{
                fontSize: 12,
                fontWeight: 600,
                color: "#111",
                textAlign: "center",
                lineHeight: "14px",
              }}
            >
              Your Website is Ready
            </div>

          </div>

          
        </div>
      </div>

      {/* Section Header */}
<div
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "12px",
    flexWrap: "wrap", 
  }}
>
  <div>
    <div
      style={{
        fontSize: "24px",
        fontWeight: 600,
        color: "#767676",
      }}
    >
      Start Building Your Photography Portfolio
    </div>
    <div
      style={{
        fontSize: "16px",
        fontWeight: 400,
        color: "#797979",
        marginTop: "6px",
      }}
    >
      Enter about you and your photography business
    </div>
  </div>

 <div style={{ display: "flex", justifyContent: "flex-end", gap: 10 }}>
        <button
         onClick={onPrev} disabled={currentStep === 0}
          // disabled={currentStep === 0}
          style={{
           padding: "8px 16px",
      borderRadius: 10,
      backgroundColor: "#fff",
      color: "#000",
      border: "2px solid #2C7A7B",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: 6,
      height: "40px",
      marginTop: "10px",
          }}
        >
         <ChevronLeft size={14}/> Prev
        </button>
  <button
   onClick={onNext} disabled={currentStep === totalSteps - 1}
    style={{
      padding: "8px 16px",
      borderRadius: 10,
      backgroundColor: "#2C7A7B",
      color: "#fff",
      border: "none",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: 6,
      height: "40px",
      marginTop: "10px", 
    }}
  >
    Next <ChevronRight size={14} />
  </button>
</div>
</div>

    </div>
  );
};

export default Stepper;