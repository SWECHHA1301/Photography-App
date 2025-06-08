import React, { useState } from "react";
import { Pencil, Star,ChevronRight } from "lucide-react";

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
                backgroundColor: "#d2eeed",
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
                size={16}
                fill={currentStep === steps.length ? "#2C7A7B" : "none"}
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
              Your <br /> Website is Ready
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div style={{ display: "flex", justifyContent: "flex-end", gap: 10 }}>
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
            padding: "6px 12px",
            borderRadius: 5,
            backgroundColor: "#2C7A7B",
            color: "#fff",
            border: "none",
            cursor: "pointer",
           
          }}
        >
          Next <ChevronRight size={14} />
        </button>
      </div>
    </div>
  );
};

export default Stepper;
