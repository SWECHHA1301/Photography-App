import React, { useState } from "react";
import { Pencil, Star, ChevronRight } from "lucide-react";

const steps = [
  { label: "Brand Foundation", icon: <Pencil size={14} fill="#000000" /> },
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


  return (
    <div
      style={{
        fontFamily: "'Segoe UI', sans-serif",
        width: "100%",
        maxWidth: "1322px",
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
          {steps.map((step, index) => (
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
                  border:
                    index === currentStep
                      ? "2px solid #f4c542"
                      : "2px solid #e57474",
                  backgroundColor:
                    index === currentStep ? "#fff6dc" : "#f9e2e2",
                  color: "#333",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 14,
                  fontWeight: 600,
                  marginBottom: 5,
                  zIndex: 2,
                }}
              >
                {index === 0 && currentStep === 0
                  ? steps[0].icon
                  : index + 1}
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
          ))}

          {/* Final Step (Star) */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              marginLeft: 12,
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                backgroundColor: "#d2eeed",
                border: "2px solid #167b78",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Star
                size={20}
                fill={currentStep === steps.length ? "#2C7A7B" : "none"}
                color="#167b78"
              />
            </div>
            <div
              style={{
                fontSize: 16,
                fontWeight: 700,
                color: "#111",
                lineHeight: "18px",
              }}
            >
              Your Website <br /> is Ready
            </div>
          </div>
        </div>
      </div>

      {/* Section Header */}
      {/* Section Header + Button in Same Row */}
<div
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "12px",
    flexWrap: "wrap", // for small screens
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

  <button
    onClick={goNext}
    disabled={currentStep >= steps.length}
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
      marginTop: "10px", // fallback for narrow view
    }}
  >
    Next <ChevronRight size={14} />
  </button>
</div>

    </div>
  );
};

export default Stepper;
