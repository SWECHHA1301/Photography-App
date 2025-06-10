import React, { useRef, useEffect } from "react";
import { Pencil, Star, ChevronRight, Check } from "lucide-react";
import MainTitle from "./Titles/MainTitle";
import NextBtn from "./Buttons/NextBtn";
import PreviousBtn from "./Buttons/PreviousBtn";

const styles = {
  container: {
    width: "100%",
  },
  
  header: {
    color: "#2C7A7B",
    fontWeight: "600",
    fontSize: "24px",
    marginBottom: "20px",
  },
  trackWrapper: {
    position: "relative",
    paddingBottom: "40px",
    marginBottom: "30px",
    overflowY: "hidden",
    overflowX: "auto", 
  },
  trackLine: {
    position: "absolute",
    top: "30px",
    left: "90px",
    right: "140px",
    height: 2,
    backgroundColor: "#aaa",
    zIndex: 0,
  },
  stepperContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
    zIndex: 1,
    minWidth: "700px",
  },
  stepWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    width: "100%",
    position: "relative",
  },
  stepLabel: {
    fontSize: 16,
    fontWeight: "400",
    lineHeight: "20px",
    color: "#333",
    maxWidth: 90,
    position: "absolute",
    bottom: "-60px",
    height: "50px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignSelf: "center",
  },
  finalStepWrapper: {
    display: "flex",
    flexDirection: "row", // already fine
    gap: "12px",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    width: "100%",
    position: "relative",
  },

  finalStepCircle: {
    width: 60,
    height: 60,
    minWidth: 60,
    minHeight: 60,
    flexShrink: 0,
    borderRadius: "50%",
    backgroundColor: "#D3E3E4",
    border: "2px solid #167b78",
    color: "#167b78",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2,
  },
  finalStepLabel: {
    fontSize: 12,
    fontWeight: 600,
    color: "#111",
    textAlign: "center",
    lineHeight: "14px",
    position: "absolute",
    bottom: "-20px",
  },
};

const steps = [
  { label: "Brand Foundation", icon: <Pencil size={14} fill="#000000" /> },
  { label: "Site Structure" },
  { label: "First Impression" },
  { label: "What You Offer" },
  { label: "Tell Your Story" },
  { label: "Drive Action & Visibility" },
];

const Stepper = ({ currentStep, onNext, onPrev, totalSteps }) => {
  const stepRefs = useRef([]);

  useEffect(() => {
    // Scroll current step into view
    if (stepRefs.current[currentStep]) {
      stepRefs.current[currentStep].scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [currentStep]);

  return (
    <div style={styles.container}>
      <div style={styles.header}>Setup Your Website</div>

      <div style={styles.trackWrapper}>
        <div style={styles.trackLine} />

        <div style={styles.stepperContent}>
          {steps.map((step, index) => {
            let icon, bgColor, border;

            if (index < currentStep) {
              icon = <Check size={14} color="#147D73" />;
              bgColor = "#D3E3E4";
              border = "2px solid #147D73";
            } else if (index === currentStep) {
              icon = <Pencil size={14} color="black" fill={"black"} />;
              bgColor = "#fff6dc";
              border = "2px solid #F4C430";
            } else {
              icon = (
                <span
                  style={{ fontSize: 20, fontWeight: "700", color: "#666" }}
                >
                  {index + 1}
                </span>
              );
              bgColor = "#E3D3D3";
              border = "2px solid  #DF5151";
            }

            return (
              <div
                key={index}
                ref={(el) => (stepRefs.current[index] = el)}
                style={styles.stepWrapper}
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
                    zIndex: 2,
                  }}
                >
                  {icon}
                </div>
                <div style={styles.stepLabel}>{step.label}</div>
              </div>
            );
          })}

          <div style={styles.finalStepWrapper}>
            <div style={styles.finalStepCircle}>
              <Star size={30} fill={"#167b78"} />
            </div>
            <div
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: "#111",
              }}
            >
              Your Website is Ready
            </div>
          </div>
        </div>
      </div>

      {/* Header and Buttons */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          gap: "24px",
        }}
      >
        <MainTitle />

        <div style={{ display: "flex", gap: "16px" }}>
          {currentStep !== 0 && <PreviousBtn onClick={onPrev} />}
          <NextBtn onClick={onNext} disabled={currentStep === totalSteps - 1} />
        </div>
      </div>
    </div>
  );
};

export default Stepper;
