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
      flex: '0.4',
     display: 'flex',
      alignItems: 'center',
      minWidth: '250px',
      
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
      minWidth:'200px',
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
     <span>{label}</span>
        <span>:</span>
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

