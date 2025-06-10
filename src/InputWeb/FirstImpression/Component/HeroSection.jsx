
import InputBar from '../../../Common/InputBar'
import HeroMedia from './HeroMedia'
import ViewPortfolio from '../../../Common/Buttons/ViewPortfolio'
import AboutUsBtn from '../../../Common/Buttons/AboutUsBtn'

export default function HeroSection() {
 

  const inputContainer ={
    display:'flex',
    alignItems:'center',
    width:'100%',
    
  }
  
  return (

    
    <>
    <div style={{display:'flex' ,flexDirection:'column',gap:'16px', padding:'24px 0'}}>

       <InputBar label="Title" holder="e.g. Sarah Mitchell "/>
          
          <InputBar label="Subtitle" holder="e.g. Capturing life’s most precious moments through the 
          lens of artistry and emotion " customStyle={{
   height:'75px',
  }}/>

            <HeroMedia/>
       <div style={inputContainer}>
      <InputBar label="Cta Primary" holder="e.g. View Portfolio"Style={{
          flex:'1'
         }} customStyle={{
          flex:'0.39'
         }}/>

       <ViewPortfolio/> </div>
        <div style={inputContainer}>
         <InputBar label="Cta Secondary" holder="e.g. About Us" Style={{
          flex:'1'
         }} customStyle={{
          flex:'0.39'
         }}   
        />
         <AboutUsBtn/>
         </div>
        
        
          <InputBar label="Availability Text" holder="e.g. Available for bookings" 
      />
          
         
            
    
    </div>
    </>
  )
}
