import React from 'react'
import InputBar from '../../../Common/InputBar'
import HeroMedia from './HeroMedia'
export default function HeroSection() {
 
  return (
    <>
    <div style={{display:'flex' ,flexDirection:'column',gap:'16px', padding:'24px 0'}}>

       <InputBar label="Title" holder="e.g. Sarah Mitchell "/>
          
          <InputBar label="Subtitle" holder="e.g. Capturing life’s most precious moments through the 
          lens of artistry and emotion "   customStyle={{
   height:'75px',
  }}/>

            <HeroMedia/>
        <InputBar label="Cta Primary" holder="e.g. View Portfolio"/>
        <div>
         <InputBar label="Cta Secondary" holder="e.g. About Us"/>
         </div>
         <div>
          <InputBar label="Availability Text" holder="e.g. Available for bookings"/>
          </div>
    
    </div>
    </>
  )
}
