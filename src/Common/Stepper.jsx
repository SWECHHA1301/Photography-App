import React from "react";
import { Pencil, Star } from "lucide-react";

const steps = [
  { label: "Brand Foundation", icon: <Pencil size={14} />, active: true },
  { label: "Site Structure" },
  { label: "First Impression" },
  { label: "What You Offer" },
  { label: "Tell Your Story" },
  { label: "Drive Action & Visibility" },
];

const Stepper = () => {
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

      <div style={{ display: "flex", alignItems: "center" }}>
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              {/* Step Circle */}
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  border: step.active
                    ? "2px solid #f4c542"
                    : "2px solid #e57474",
                  backgroundColor: step.active ? "#fff6dc" : "#f9e2e2",
                  color: "#333",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 14,
                  fontWeight: 600,
                  marginBottom: 5,
                }}
              >
                {step.active ? step.icon : index + 1}
              </div>

              {/* Step Label */}
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

            {/* Connector Line */}
            {index < steps.length - 1 && (
              <div
                style={{
                  height: 2,
                  width: 30,
                  backgroundColor: "#888",
                  margin: "0 10px",
                }}
              />
            )}
          </React.Fragment>
        ))}

        {/* Final Step (Star) */}
        <div style={{ marginLeft: 10, textAlign: "center" }}>
          <div
            style={{
              width: 30,
              height: 30,
              borderRadius: "50%",
              backgroundColor: "#d2eeed",
              border: "2px solid #167b78",
              color: "#167b78",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 5px",
            }}
          >
            <Star size={16} />
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
  );
};

export default Stepper;
