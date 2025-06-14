import { Backpack } from 'lucide-react';
import React from 'react';

export default function InputBar({
  label,
  holder,
  customStyle = {},
  Style = {},
  divStyle = {},
  value,
  onChange,
  suffixComponent = null,
}) {
  const styles = {
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      width: '100%',
      gap: '8px',
      ...Style,
    },
    title: {
      fontSize: '16px',
      fontWeight: '400',
      flex: '0.4',
      minWidth: '250px',
      display: 'flex',
      alignItems: 'center',
    
      ...divStyle,
      gap: '20px'
  
    },
    inputContainer: {
      height: '41px',
      flex: '1 1 auto',
      backgroundColor: '#E9EEEA',
      borderRadius: '10px',
      border: '1px solid #767676',
      fontSize: '16px',
      fontWeight: '400',
      padding: '0 16px',
      width: '100%',
      minWidth:'200px',
      ...customStyle,
    },
  };

  return (
    <div style={styles.container}>
      <label style={styles.title}>
        <span>{label}</span>
        <span>:</span>
      </label>

      <input
        type="text"
        placeholder={holder}
        style={styles.inputContainer}
        value={value}
        onChange={onChange}
      />

      {suffixComponent && (
        <div style={{ flex: '0.2', display: 'flex', justifyContent: 'center' }}>
          {suffixComponent}
        </div>
      )}
    </div>
  );
}


