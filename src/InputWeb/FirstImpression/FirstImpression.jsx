import React from 'react'
import Title from '../../Common/Title'
import DropDown from '../../Common/DropDown'
import HeroSection from './Component/HeroSection'

export default function FirstImpression() {
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
      <Title title={"Site Structure"}/>
      <DropDown heading={"Hero Section"} section={<HeroSection/>}/>
      </div>
      </>
  )
}
