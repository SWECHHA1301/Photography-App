import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import Testimonial from "./components/Testimonials";
import CallToActions from "./components/CallToActions";
import SEO from "./components/SEO";
import Title from "../../Common/Titles/Title";
import DropDown from "../../Common/DropDown";


export default function DriveAction({ data, updateData }) {
  const styles = {
    sectionWrapper: {
      borderTop: "1px solid #767676",
      padding: "24px 12px",
      width: "100%",
      boxSizing: "border-box",
    },
    sectionTitle: {
      fontSize: "16px",
      fontWeight: "700",
      color: "#2F2F2F",
      marginBottom: "12px",
    },
    nextBtnWrap: {
      display: "flex",
      justifyContent: "flex-end",
      marginTop: "32px",
      width: "100%",
      flexWrap: "wrap",
    },
    nextButton: {
      padding: "10px 20px",
      backgroundColor: "#2c7a7b",
      color: "#fff",
      fontWeight: "bold",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      margin: "16px",
    },
    contentBox: {
      width: "100%",
      borderRadius: "10px",
      backgroundColor: "#fff",
      boxShadow: "0 0 8px rgba(0,0,0,0.05)",
      border: "1px solid #767676",
      boxSizing: "border-box",
    },
  };

  return (
    <div style={styles.contentBox}>
      <Title title={"Drive Action And Visibility"} />

      <DropDown heading={"Testimonial"} section={<Testimonial 
      data={data.testimonial || {}}
            updateData={(updated) =>
              updateData({ testimonial: { ...data.testimonial, ...updated } })
            }
            />
            } />
      <DropDown heading={"Call To Actions"} section={<CallToActions 
      data={data.callToActions || {}}
            updateData={(updated) =>
              updateData({ callToActions: { ...data.callToActions, ...updated } })
            }/>} />
      <DropDown heading={"SEO"} section={<SEO 
      data={data.seo || {}}
            updateData={(updated) =>
              updateData({ seo: { ...data.seo, ...updated } })
            }
            />} />
    </div>
  );
}
