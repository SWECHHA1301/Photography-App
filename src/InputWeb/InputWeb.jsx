import React from 'react'
import Stepper from '../Common/Stepper'
import SiteStructure from './SiteStructure/SiteStructure'
import FirstImpression from './FirstImpression/FirstImpression'
import BrandFoundation from '../BrandFoundation/BrandFoundation'

export default function InputWeb() {
    const styles ={
        mainCotainer:{
            width:'100%',
            backgroundColor:'#FFFFFF',
            maxWidth:'1322px',
            margin:'24px',
            padding:'24px',
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            borderRadius:'20px',
        }
    }
  return (
    <>
    <div style={styles.mainCotainer}>
         <Stepper/>
         {/* <FirstImpression/> */}
         {/* <SiteStructure/> */}
         <BrandFoundation />
    </div>
    </>
  )
}
