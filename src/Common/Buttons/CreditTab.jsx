import React, { useState } from 'react';

export default function CreditTab({Credits}) {
      const [activeTab, setActiveTab] = useState('');
    
      const tabStyle = (tab) => ({
        padding: '10px 20px',
        marginRight: '10px',
        borderRadius: '8px',
        border: 'none',
        cursor: 'pointer',
        fontWeight: 'bold',
        backgroundColor: activeTab === tab ? '#2C7A7B' : '#e9e9e9',
        color: activeTab === tab ? 'white' : '#2F2F2F',
        transition: '0.3s',
      });
  return (
    <>
    

      <div style={{ display: 'flex', marginBottom: '20px' }}>
        <button style={tabStyle('credits')} onClick={() => setActiveTab('credits')}>
          {Credits}
        </button>
      
      </div>
      </>
  )
}
