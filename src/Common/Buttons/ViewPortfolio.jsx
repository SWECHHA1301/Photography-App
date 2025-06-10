import React from 'react'

export default function ViewPortfolio({ViewStyle={}}) {
  return (
    <>
    <button style={{
        backgroundColor:'#2C7A7B',
        borderRadius:'10px',
        border:'none',
        maxWidth:'156px',
        width:'100%',
        height:'30px',
        fontSize:'20px',
        fontWeight:'400',
        color:'#fff',
        display:'flex',
        alignItems:'center',
        padding:'0 11px',
        justifyContent:'space-around',
        ...ViewStyle,
    }}>
    
        View Portfolio
    
    </button>
    </>
  )
}
