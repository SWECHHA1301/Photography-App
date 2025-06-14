import React from 'react'
import Title from '../../Common/Titles/Title'
import DropDown from '../../Common/DropDown'
import HeroSection from './Component/HeroSection'


export default function FirstImpression({ data, updateData }) {
      const styles ={
        constainer:{
             borderRadius:'10px',
             border:'1px solid #767676',
             width:'100%',
        }
    }
  return (
   <>
      <div style={styles.constainer}>
      <Title title={"First Impression"}/>
      <DropDown heading={"Hero Section"} section={<HeroSection data={data.heroSection || {}}
            updateData={(updated) =>
              updateData({ heroSection: { ...data.heroSection, ...updated } })
            }/>}/>
     
      </div>
      </>
  )
}
