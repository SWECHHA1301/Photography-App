import React from 'react'
import DropDown from '../../Common/DropDown'
import Title from '../../Common/Titles/Title'
import Service from './Components/Service'
import Status from './Components/Status'
export default function Offer() {
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
          <Title title={"What You Offer"}/>
          <DropDown heading={"Service /Specialities "} section={<Service/>}/>
         <DropDown heading={"Status"} section={<Status/>}/>
          </div>
    </>
  )
}
