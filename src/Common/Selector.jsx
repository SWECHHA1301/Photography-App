import React from 'react';

export default function Selector({ label, placeholder, options = [], value, onChange,divStyle = {}, customStyle = {}, }) {
    const styles ={
        title:{
              fontSize: '16px',
      fontWeight: '400',
      flex: '0.3',
     display: 'flex',
      alignItems: 'center',
      ...divStyle,
      gap: '18px',
    
        }
    }
  return (
    <div style={{  display: 'flex',
       flexWrap: 'wrap',
      width: '100%',
      alignItems: 'center',
    
      }}>

      {label && (
         <label style={styles.title}>
     <span style={{
          flex: '2.7',
        }}>{label}</span>
        <span style={{ flex: '1', }}>:</span>
      </label>
      )}
      <select
        value={value}
        onChange={onChange}
        style={{
          width: '100%',
          padding: '8px 12px',
          borderRadius: '8px',
          border: '1px solid  #767676',
          fontSize: '16px',
          backgroundColor:'#E9EEEA',
          flex: '1 1 auto',
           resize: 'vertical',
             ...customStyle,

        }}
      >
        <option value="" disabled hidden>{placeholder}</option>
        {options.map((year, index) => (
          <option key={index} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
}
