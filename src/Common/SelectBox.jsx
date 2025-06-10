import React from 'react';
import { ChevronDown } from 'lucide-react'; // Make sure you have lucide-react installed

export default function SelectBox({
  label = '',
  options = [],
  value = '',
  onChange = () => {},
  name = '',
  customStyle = {},
  containerStyle = {},
  divStyle = {},
}) {
  const styles = {
    title: {
      fontSize: '16px',
      fontWeight: '400',
      width: '100%',
      flex: '0.2',
    },
    selectWrapper: {
      position: 'relative',
      width: '100%',
      flex: '0.34',
      ...customStyle,
    },
    select: {
      width: '100%',
      height: '40px',
      padding: '8px 12px',
      borderRadius: '10px',
      border: '1px solid #767676',
      backgroundColor: '#E9EEEA',
      appearance: 'none',
      WebkitAppearance: 'none',
      MozAppearance: 'none',
      fontSize: '16px',
      fontWeight: '400',
    },
    chevron: {
      position: 'absolute',
      right: '10px',
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: '#555',
    },
    container: {
      display: 'flex',
      width: '100%',
      alignItems: 'center',
      ...containerStyle,
    },
  };

  return (
    <div style={styles.container}>
      <label style={styles.title}>{label}</label>
      <p style={{ width: '100%', flex: '0.1', ...divStyle }}>:</p>
      <div style={styles.selectWrapper}>
        <select
          style={styles.select}
          name={name}
          value={value}
          onChange={onChange}
        >
          {options.map((option, i) => (
            <option key={i} value={option}>
              {option}
            </option>
          ))}
        </select>
        <ChevronDown size={16} style={styles.chevron} />
      </div>
    </div>
  );
}
