import React from 'react';

export default function ViewPortfolio({ holder = "About Us" }) {
  const inputStyle = {
    backgroundColor: '#fff',
    borderRadius: '10px',
    maxWidth: '156px',
    width: '100%',
    height: '30px',
    fontSize: '16px',
    fontWeight: '400',
    color: '#fff',
    border: '1.5px solid #2C7A7B',
    minWidth:'150px',
  };

  return (
    <>
      <style>
        {`
          #About-placeholder::placeholder {
            color: #2C7A7B;
            opacity: 1;
            text-align :center;
          }
        `}
      </style>
      <input
        disabled
        readOnly
        id="About-placeholder"
        type="text"
        placeholder={holder}
        style={inputStyle}
      />
    </>
  );
}
