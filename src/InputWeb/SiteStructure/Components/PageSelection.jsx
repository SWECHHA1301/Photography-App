import React from 'react'
import ToggleSwitch from '../../../Common/ToggleSwitch'

export default function PageSelection() {

    const ableList =[
        "Home, Portfolio, Contact",
        "About",
        "Pricing",
        "Testimonials",
        "FAQ’s",
        "Blog",
        "FAQ’s"
    ]
    const styles={
        toggleContent:{
        width:'100%',
        maxWidth:'771px',
        display:'flex',
        alignItems:'center',
        justifyContent:"space-between",
        height:'50px',
        borderBottom:'1px soild #767676'
        },
        content:{
            fontSize:'16px',
            fontWeight:'400',
        }
    }
  return (
    <>
    <div>
    {
        ableList.map((item,index) => (
            <div key={index} style={styles.toggleContent}>
             <p style={styles.content}>{item}</p>
             <ToggleSwitch/>
            </div>
        ))
    }

    </div>
    
    </>
  )
}
