import React from 'react'

export default function HeroMedia() {
  return (
    <>
         <div style={{display:'flex',justifyContent:'space-between', 
                 width:'100%',
          maxWidth:'850px',
          alignItems:'center'
             }}>
              <label style={{
                  fontSize:'16px',
            fontWeight:'400',
             width:'100%',
            maxWidth:'200px',
              }}>Upload Hero Media</label>
              <p style={{maxWidth:'50px',width:'100%'}}>:</p>
      <div style={{
        border: '1px solid #767676',
        padding: '10px 16px',
        textAlign: 'center',
       
         backgroundColor:'#E9EEEA',
            borderRadius:'10px',
            maxWidth:'415px',
            width:'100%',
            color:'#767676'
      
      }}>
        Drag and drop your Hero Background image here (wwww x hhhh) <br />
        Supports JPG, PNG, GIF up to 10M
        <br /><br />
        <button style={{ maxWidth:'156px', backgroundColor: '#2C7A7B', color: '#fff', border: 'none', borderRadius: '10px' ,height:'38px'
          ,width:'100%',fontSize:'20px',fontWeight:'400'
        }}>
          Browse
        </button>
      </div>

    
    </div>
    </>
  )
}
