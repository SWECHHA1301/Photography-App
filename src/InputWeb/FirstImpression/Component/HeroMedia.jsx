import React from 'react'

export default function HeroMedia() {
  const containerStyle = {
    display: 'flex',
    // justifyContent: 'space-between',
    width: '100%',
    // maxWidth: '850px',
    alignItems: 'flex-start',
  };

  const labelStyle = {
    fontSize: '16px',
    fontWeight: '400',
    width: '100%',
     flex:'0.2',
       padding:'19px 0',
    // maxWidth: '200px',
  };

  const colonStyle = {
    // maxWidth: '50px',
  
    flex:'0.1',
    width: '100%',
  };

  const dropAreaStyle = {
    border: '1px solid #767676',
    padding: '10px 16px',
    textAlign: 'center',
    backgroundColor: '#E9EEEA',
    borderRadius: '10px',
    // maxWidth: '415px',
     flex:'0.6',
    width: '100%',
    color: '#767676',
    height:'212px',
    display:'flex',
    justifyContent:'center',
    flexDirection:'column',
    alignItems:'center',
  };

  const buttonStyle = {
    maxWidth: '156px',
    backgroundColor: '#2C7A7B',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    height: '38px',
    width: '100%',
    fontSize: '20px',
    fontWeight: '400',
    cursor:'pointer'
  };

  return (
    <div style={containerStyle}>
      <label style={labelStyle}>Upload Hero Media</label>
      <p style={colonStyle}>:</p>
      <div style={dropAreaStyle}>
        <p>
        Drag and drop your Hero Background image here (wwww x hhhh)
        Supports JPG, PNG, GIF up to 10M</p>
      
        <button style={buttonStyle}>Browse</button>
      </div>
    </div>
  );
}
