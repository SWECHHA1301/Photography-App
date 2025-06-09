import React from 'react'
import EyeToggle from "../../../Common/EyeToggle"
import { GripVertical } from 'lucide-react'
export default function NavigationOrder() {

   const content =[
    { id: '1.', order:'Home '},
    { id:'2. ', order:'Portfolio'},
    { id:'3. ', order:'Contact '},
    { id:'4. ', order:'About'},
   ]

    const styles={

         toggleContent:{
        width:'100%',
        maxWidth:'760px',
        display:'flex',
        alignItems:'center',
        justifyContent:"space-between",
        height:'64px',
        padding:'24px 0'
        // borderBottom:'1px soild #767676'
        },

        elementContainer:{
        display:'flex',
        alignItems:'center',
        gap:'24px',
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
        content.map((item,index) => (
            <div key={index} style={styles.toggleContent} >
                <div style={styles.elementContainer}>
                  <GripVertical/>
             <p style={styles.content}>{item.id}</p>
              <p style={styles.content}>{item.order}</p>
              </div>
             <EyeToggle/>
            </div>
        ))
    }

    </div>
    
    </>
    
  )
}
