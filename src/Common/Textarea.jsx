import React from 'react';

export default function Textarea({
  label = '',
  holder = '',
  value = '',
  onChange = () => {},
  customStyle = {},
  divStyle = {},
  containerStyle = {},
}) {
  const styles = {
    title: {
      fontSize: '16px',
      fontWeight: '400',
      width: '100%',
      flex: '0.2',
    },
    inputcontainer: {
      width: '100%',
      flex: '0.34',
      backgroundColor: '#E9EEEA',
      borderRadius: '10px',
      border: '1px solid #767676',
      fontSize: '16px',
      fontWeight: '400',
      padding: '8px 16px',
      resize: 'vertical', // allows resizing, optional
      ...customStyle,
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
      <textarea
        placeholder={holder}
        style={styles.inputcontainer}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

