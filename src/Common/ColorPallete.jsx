import React from 'react';

const colors = ['#F4C430', '#2C7A7B', '#EB8F8F','#9E3F3F', '#000000', '#A3C9A8'];

export default function ColorPallete({ value, onChange }) {
  return (

    <div style={{display:'flex',alignItems:'center',width:'100%', marginTop: '10px'}}>
      <p style={{
         fontSize:'16px',
            fontWeight:'400',
                flex:'0.2',
      }}>Color</p>
      <p style={{width:'100%', flex:'0.1'}}>:</p>
    <div style={{ display: 'flex',   flex:'0.2',}}>
      {colors.map((c, index) => (
        <div
          key={index}
          onClick={() => onChange(c)}
          style={{
            width: 24,
            height: 24,
            borderRadius: '50%',
            backgroundColor: c,
            marginRight: 10,
            border: value === c ? '2px solid #47F84D' : '1px solid #ccc',
            cursor: 'pointer',
          }}
        />
      ))}
    </div>
    </div>
  );
}
