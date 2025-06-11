import React from 'react'
import BuyCreditsTabs from '../Common/Buttons/BuyCreditsTabs';

export default function BuyCredits() {
    const styles = {
    mainContainer: {
      backgroundColor: '#FFFFFF',
      margin: '24px',
      padding: '24px',
      borderRadius: '20px',
  
    },
  };

  return (
    <>
    <div style={styles.mainContainer}>
        <div>
            <h2 style={{
                fontSize:'20px',
                fontWeight:'600',
                color:'#767676'
            }}>Buy Credits</h2>
        </div>
           
        <BuyCreditsTabs/>

    </div>
    </>
  )
}
