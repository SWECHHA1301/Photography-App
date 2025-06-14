import React from 'react';

const colors = ['#F4C430', '#2C7A7B', '#EB8F8F', '#9E3F3F', '#000000', '#A3C9A8'];

export default function ColorPallete({ value, onChange }) {
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    flexWrap: 'wrap',
    marginBottom: '24px',
    gap: '12px',
  };

  const labelContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    flex: '0.3',
    minWidth: '100px',
  };

  const labelTextStyle = {
    fontSize: '16px',
    fontWeight: '400',
    marginRight: '6px',
    flex:'2.9'
  };

  const colonStyle = {
    flex: 1,
  };

  const colorWrapperStyle = {
    display: 'flex',
    flex: '0.2',
    gap: '10px',

  };

  const circleStyle = (c) => ({
    width: 24,
    height: 24,
    borderRadius: '50%',
    backgroundColor: c,
    border: value === c ? '2px solid #47F84D' : '1px solid #ccc',
    cursor: 'pointer',
  });

  return (
    <div style={containerStyle}>
      <div style={labelContainerStyle}>
        <span style={labelTextStyle}>Color</span>
        <span style={colonStyle}>:</span>
      </div>
      <div style={colorWrapperStyle}>
        {colors.map((c, index) => (
          <div
            key={index}
            onClick={() => onChange(c)}
            style={circleStyle(c)}
          />
        ))}
      </div>
    </div>
  );
}
