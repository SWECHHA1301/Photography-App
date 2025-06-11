import React, { useState } from 'react';
import CreditCard from '../../BuyCredits/CreditCard/CreditCard';
import StorageCard from '../../BuyCredits/StorageCard/StorageCard';

export default function BuyCreditsTabs() {
  const [activeTab, setActiveTab] = useState('credits');

  return (
    <div>
      {/* Switch-style tabs */}
      <div style={switchWrapper}>
        <div
          onClick={() => setActiveTab('credits')}
          style={{
            ...switchOption,
            backgroundColor: activeTab === 'credits' ? '#2C7A7B' : '#E2E2E2',
            color: activeTab === 'credits' ? '#fff' : '#2F2F2F',
          }}
        >
          Credits
        </div>
        <div
          onClick={() => setActiveTab('storage')}
          style={{
            ...switchOption,
            backgroundColor: activeTab === 'storage' ? '#2C7A7B' : '#E2E2E2',
            color: activeTab === 'storage' ? '#fff' : '#2F2F2F',
          }}
        >
          Storage
        </div>
      </div>

      {/* Conditional rendering */}
      <div style={{ marginTop: '20px' }}>
        {activeTab === 'credits' ? <CreditCard /> : <StorageCard />}
      </div>
    </div>
  );
}

// Styles
const switchWrapper = {
  display: 'flex',
  backgroundColor: '#E2E2E2',
  borderRadius: '8px',
  width: 'fit-content',
  padding: '4px',
  cursor: 'pointer',
};

const switchOption = {
  padding: '10px 20px',
  borderRadius: '5px',
  fontWeight: '400',
  fontSize: '14px',
  transition: '0.3s',
};
