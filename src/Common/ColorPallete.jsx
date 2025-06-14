import React from 'react';

const colors = ['#F4C430', '#2C7A7B', '#EB8F8F', '#9E3F3F', '#000000', '#A3C9A8'];

export default function ColorPallete({ value, onChange }) {
  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    width: '100%',
    gap: '12px',
    marginBottom: '24px',
  };

  const labelContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    fontSize: '16px',
    fontWeight: '400',
    gap: '20px',
    flex: '0.18 1 240px',
    minWidth: '250px',
  };

  const colorWrapperStyle = {
    display: 'flex',
    flex: '1 1 240px',
    flexWrap: 'wrap',
    gap: '12px',
  };

  const circleStyle = (c) => ({
    width: value === c ? 28 : 24,
    height: value === c ? 28 : 24,
    transition: 'all 0.2s ease-in-out',
    borderRadius: '50%',
    backgroundColor: c,
    border: value === c ? '3px solid #47F84D' : '1px solid #ccc',
    cursor: 'pointer',
  });

  return (
    <div style={containerStyle}>
      <div style={labelContainerStyle}>
        <span>Color</span>
        <span>:</span>
      </div>
      <div style={colorWrapperStyle}>
        {colors.map((c, index) => (
          <div key={index} onClick={() => onChange(c)} style={circleStyle(c)} />
        ))}
      </div>
    </div>
  );
}
