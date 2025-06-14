import React, { useRef, useEffect } from "react";
import { Pencil, Star, ChevronRight, Check } from "lucide-react";
import MainTitle from "./Titles/MainTitle";
import NextBtn from "./Buttons/NextBtn";
import PreviousBtn from "./Buttons/PreviousBtn";

const styles = {
  container: {
    width: "100%",
    flex:'1'
  },
  trackWrapper: {
    position: "relative",
    
    marginBottom: "40px",
    overflowY: "hidden",
    overflowX: "auto",
    scrollbarWidth: "none",
    msOverflowStyle: "none",
    height:'120px',
   
  },
  trackLine: {
    position: "absolute",
    top: "30px",
    left: "90px",
    right: "180px",
    height: 2,
    backgroundColor: "#aaa",
    minWidth: "500px",
  
    // zIndex: 0,
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
    maxWidth: 100,
    position: "absolute",
    bottom: "-60px",
    height: "50px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignSelf: "center",
    padding :'0 5px'
  },
  finalStepWrapper: {
    display: "flex",
    flexDirection: "row",
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
    fontSize: 14,
    fontWeight: 600,
    color: "#111",
    minWidth:'150px'
  },
  bottomControls: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    gap: "24px",
    flexWrap: "wrap",
  },
  navButtons: {
    display: "flex",
    gap: "16px",
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

const Stepper = ({ currentStep, onNext, onPrev, totalSteps, onStepClick }) => {
  const stepRefs = useRef([]);

  useEffect(() => {
    if (stepRefs.current[currentStep]) {
      stepRefs.current[currentStep].scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [currentStep]);

  const getStepStyle = (index) => {
    if (index < currentStep) {
      return {
        icon: <Check size={14} color="#147D73" />,
        bgColor: "#D3E3E4",
        border: "2px solid #147D73",
      };
    } else if (index === currentStep) {
      return {
        icon: <Pencil size={14} color="black" fill="black" />,
        bgColor: "#fff6dc",
        border: "2px solid #F4C430",
      };
    } else {
      return {
        icon: (
          <span style={{ fontSize: 20, fontWeight: "700", color: "#666" }}>
            {index + 1}
          </span>
        ),
        bgColor: "#E3D3D3",
        border: "2px solid  #DF5151",
      };
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.trackWrapper}>
        <div style={styles.trackLine} />

        <div style={styles.stepperContent}>
          {steps.map((step, index) => {
            const { icon, bgColor, border } = getStepStyle(index);
            return (
              <div
                key={index}
                ref={(el) => (stepRefs.current[index] = el)}
                style={styles.stepWrapper}
                onClick={() => onStepClick(index)}
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
                    cursor: "pointer",
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
            <div style={styles.finalStepLabel}>Your Website is Ready</div>
          </div>
        </div>
      </div>

      <div style={styles.bottomControls}>
        <MainTitle />
        <div style={styles.navButtons}>
          {currentStep !== 0 && <PreviousBtn onClick={onPrev} />}
          <NextBtn onClick={onNext} disabled={currentStep === totalSteps - 1} />
        </div>
      </div>
    </div>
  );
};

export default Stepper;
