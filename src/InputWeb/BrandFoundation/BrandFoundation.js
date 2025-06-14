import React from "react";
import BuisnessInfo from "./components/BuisnessInfo";
import ContactInfo from "./components/ContactInfo";
import BrandColors from "./components/BrandColors";
import Title from "../../Common/Titles/Title";
import DropDown from "../../Common/DropDown";

export default function BrandFoundation({ data, updateData }) {
  const styles = {
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
      <Title title={"Brand Foundation"} />
      <DropDown
        heading={"Business Info"}
        section={
          <BuisnessInfo
            data={data.businessInfo || {}}
            updateData={(updated) =>
              updateData({ businessInfo: { ...data.businessInfo, ...updated } })
            }
          />
        }
      />
      <DropDown
        heading={"Contact Info"}
        section={
          <ContactInfo
            data={data.contactInfo || {}}
            updateData={(updated) =>
              updateData({ contactInfo: { ...data.contactInfo, ...updated } })
            }
          />
        }
      />
      <DropDown
        heading={"Brand Colors"}
        section={
          <BrandColors
            data={data.brandColors || {}}
            updateData={(updated) =>
              updateData({ brandColors: { ...data.brandColors, ...updated } })
            }
          />
        }
      />
    </div>
  );
}
