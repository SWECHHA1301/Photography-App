import React, { useState } from "react";
import { Pencil, Star, Check, ChevronLeft, ChevronRight } from "lucide-react";

const steps = [
  { label: "Brand Foundation" },
  { label: "Site Structure" },
  { label: "First Impression" },
  { label: "What You Offer" },
  { label: "Tell Your Story" },
  { label: "Drive Action & Visibility" },
];

const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const goNext = () => {
    if (currentStep < steps.length) setCurrentStep(currentStep + 1);
  };

  const goPrev = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  return (
    <div
      style={{
        fontFamily: "'Segoe UI', sans-serif",
        padding: "20px",
        backgroundColor: "#e8edee",
      }}
    >
      <div
        style={{
          color: "#2a74d1",
          fontWeight: "600",
          fontSize: "14px",
          marginBottom: "20px",
        }}
      >
        Progress Check Points
      </div>

      <div style={{ position: "relative", paddingBottom: "40px" }}>
        {/* Progress Line */}
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
              icon = <Pencil size={14} color="#F4C430" />;
              bgColor = "#fff6dc";
              border = "2px solid #F4C430";
            } else {
              icon = <span style={{ fontSize: 12, color: "#666" }}>{index + 1}</span>;
              bgColor = "#E3D3D3";
              border = "2px solid #DF5151";
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
                    fontSize: 12,
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

          {/* Final Step (Star) */}
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
                // fill={currentStep === steps.length ? "#2C7A7B" : "none"}
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

      {/* Navigation Buttons */}
      <div style={{ display: "flex", justifyContent: "center", gap: 10 }}>
        <button
          onClick={goPrev}
          disabled={currentStep === 0}
          style={{
            padding: "6px 12px",
            borderRadius: 5,
            backgroundColor: "#ccc",
            border: "none",
            cursor: "pointer",
          }}
        >
          Previous
        </button>
        <button
          onClick={goNext}
          disabled={currentStep >= steps.length}
          style={{
            padding: "0 8px",
            borderRadius: 10,
            backgroundColor: "#2C7A7B",
            width:'70px',
            height:'36',
            color: "#fff",
            border: "none",
            cursor: "pointer",
            display :'flex',
            gap:'12px',
            alignItems:'center'
          }}
        >
          <p>Next</p>
          <ChevronRight size={20}/>
        </button>
      </div>
    </div>
  );
};

export default Stepper;

