import React, { useState } from 'react';

export default function LayoutOptions() {
  const [selectedLayout, setSelectedLayout] = useState('2x2');

  const radioStyle = {
    accentColor: '#2C7A7B', // This sets the blue color on select
  };

  return (
    
      <div style={{ display: 'flex', width:'100%', marginTop: '10px', alignItems: 'center' }}>
        <h3 style={{ fontWeight: '400', fontSize: '16px' ,flex:'0.29',}}>Layout Options</h3>
<div style={{flex:'0.4',display: 'flex',gap:'32px'}}>
        <label style={{ display: 'flex', alignItems: 'center', gap: '8px',fontSize:'16px',fontWeight:'400',color:'#767676' }}>
          <input
            type="radio"
            name="layout"
            value="2x2"
            checked={selectedLayout === '2x2'}
            onChange={() => setSelectedLayout('2x2')}
            style={radioStyle}
          />
          2 x 2 Layout
        </label>

        <label style={{ display: 'flex', alignItems: 'center', gap: '8px',fontSize:'16px',fontWeight:'400',color:'#767676' }}>
          <input
            type="radio"
            name="layout"
            value="horizontal"
            checked={selectedLayout === 'horizontal'}
            onChange={() => setSelectedLayout('horizontal')}
            style={radioStyle}
          />
          Horizontal Timeline Style
        </label>
      </div>
</div>
  );
}

