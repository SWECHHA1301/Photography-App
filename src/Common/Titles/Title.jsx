import React from 'react'

export default function Title({title}) {
  return (
<>
<div
          style={{
            // width:'100%',
            height: "70px",
            display:'flex',
            alignItems:'center',
            padding:'0 16px',
            // borderBottom: "1px solid #767676",

          }}
        >
          <p style={{fontSize: "32px",
            fontWeight: "400",
            color: "#f4b400",
            padding:'0 16px'}}>{title}</p>

        </div>

</>
  )
}
