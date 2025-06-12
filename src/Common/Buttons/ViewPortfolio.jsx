import React from 'react';

export default function ViewPortfolio({ holder = "View Portfolio" }) {
  const inputStyle = {
    backgroundColor: '#2C7A7B',
    borderRadius: '10px',
    maxWidth: '156px',
    width: '100%',
    height: '30px',
    fontSize: '16px',
    fontWeight: '400',
    color: '#fff',
    border: 'none',
  };

  return (
    <>
      <style>
        {`
          #custom-placeholder::placeholder {
            color: #ffffff;
            opacity: 1;
            text-align :center;
          }
        `}
      </style>
      <input
        disabled
        readOnly
        id="custom-placeholder"
        type="text"
        placeholder={holder}
        style={inputStyle}
      />
    </>
  );
}

