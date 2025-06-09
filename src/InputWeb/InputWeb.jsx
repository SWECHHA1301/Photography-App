import React from 'react'
import Stepper from '../Common/Stepper'
import SiteStructure from './SiteStructure/SiteStructure'

export default function InputWeb() {
    const styles ={
        mainCotainer:{
            width:'100%',
            backgroundColor:'#FFFFFF',
            maxWidth:'1322px',
            maxHeight:'1185px',
            margin:'24px',
            padding:'24px',
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            borderRadius:'20px'
        }
    }
  return (
    <>
    <div style={styles.mainCotainer}>
         <Stepper/>
         <SiteStructure/>
    </div>
    </>
  )
}
