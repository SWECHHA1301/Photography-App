import React, { useState } from 'react';

export default function LayoutOptions() {
  const [selectedLayout, setSelectedLayout] = useState('2x2');

  const styles = {
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      width: '100%',
      marginTop: '10px',
      alignItems: 'center',
      gap: '12px',
      flex: '3',
    },
    heading: {
      fontWeight: '400',
      fontSize: '16px',
      flex: '1.2',
      minWidth: '120px',
    },
    optionsContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '16px',
      flex: '3',
    },
    label: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontSize: '16px',
      fontWeight: '400',
      color: '#767676',
      flexWrap: 'wrap',
      minWidth:'150px'
    },
    radio: {
      accentColor: '#2C7A7B',
    },
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.heading}>Layout Options</h3>
      <div style={styles.optionsContainer}>
        <label style={styles.label}>
          <input
            type="radio"
            name="layout"
            value="2x2"
            checked={selectedLayout === '2x2'}
            onChange={() => setSelectedLayout('2x2')}
            style={styles.radio}
          />
          2 x 2 Layout
        </label>

        <label style={styles.label}>
          <input
            type="radio"
            name="layout"
            value="horizontal"
            checked={selectedLayout === 'horizontal'}
            onChange={() => setSelectedLayout('horizontal')}
            style={styles.radio}
          />
          Horizontal Timeline Style
        </label>
      </div>
    </div>
  );
}
