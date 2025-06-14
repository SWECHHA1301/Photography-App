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
      flex: '0.3',
     display: 'flex',
      alignItems: 'center',
      ...divStyle,
      gap: '20px',
      marginTop:'10px'
    },
    inputcontainer: {
      width: '100%',
      flex: '1 1 auto',
      backgroundColor: '#E9EEEA',
      borderRadius: '10px',
      border: '1px solid #767676',
    fontSize:'16px',
    fontWeight:'400',
      padding: '8px 16px',
      minWidth:'150px',
      resize: 'vertical', // allows resizing, optional
      ...customStyle,
    },
    container: {
      display: 'flex',
       flexWrap: 'wrap',
      width: '100%',
      alignItems: 'flex-start',
      ...containerStyle,
      gap: '8px',
    

    },
  };

  return (
    <div style={styles.container}>
      
      <label style={styles.title}>
     <span style={{
          flex: '3',
        }}>{label}</span>
        <span style={{ flex: '1',}}>:</span>
      </label>
      <textarea
        placeholder={holder}
        style={styles.inputcontainer}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

