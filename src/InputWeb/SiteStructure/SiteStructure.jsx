import React from "react";
import Title from "../../Common/Titles/Title";
import DropDown from "../../Common/DropDown";
import PageSelection from "./Components/PageSelection";
import NavigationOrder from "./Components/NavigationOrder";

export default function SiteStructure({ data, updateData }) {
  const styles = {
    constainer: {
      borderRadius: "10px",
      border: "1px solid #767676",
      width: "100%",
    },
  };
  return (
    <>
      <div style={styles.constainer}>
        <Title title={"Site Structure"} />
        <DropDown
          heading={"Page Selection"}
          section={
            <PageSelection
              data={data.pageSelection || {}}
              updateData={(updated) =>
                updateData({
                  pageSelection: { ...data.pageSelection, ...updated },
                })
              }
            />
          }
        />
        <DropDown
          heading={"Navigation Order"}
          section={
            <NavigationOrder
              data={data.navigateOrder || {}}
              updateData={(updated) =>
                updateData({
                  navigateOrder: { ...data.navigateOrder, ...updated },
                })
              }
            />
          }
        />
      </div>
    </>
  );
}
