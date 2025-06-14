import React from 'react'

export default function Title({title}) {
  return (
<>
<div
          style={{
            // width:'100%',
            height: "90px",
            display:'flex',
            alignItems:'center',
            padding:'0 16px',
            // borderBottom: "1px solid #767676",

          }}
        >
          <span style={{fontSize: "32px",
            fontWeight: "400",
            color: "#f4b400",
            minWidth:'200px',
            padding:'4px 16px'}}>{title}</span>

        </div>

</>
  )
}
