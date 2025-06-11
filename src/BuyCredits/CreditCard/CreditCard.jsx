import React, { useState } from 'react';

export default function CreditCard() {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const cardData = [
    {
      title: 'Starter',
      description:' Ideal for new photographers.Kickstart your journey with essential tools and limited credits.',
      price: '₹99',
      creditPoints:'Per user & per credit',
      credits: '1 Credit (1 Project)',
      features: ['Upload up to 5000 images', 'No monthly or hidden cost'],
      id: 'starter'
    },
    {
      title: 'Business',
      description:'Best for growing photographers managing multiple clients.',
      price: '₹449',
       creditPoints:'Per user & per 5 credit',
      credits: '5 Credits (5 Projects)',
      features: ['Upload up to 5000 images in each project', 'No monthly or extra cost'],
      id: 'business'
    },
    {
      title: 'Premium',
       description:'For professional studios and high-volume photographers',
      price: '₹999',
       creditPoints:'Per user & per 12 credit',
      credits: '12 Credits (12 Projects)',
      features: ['Upload up to 5000 images in each project', 'No monthly or extra cost', '24/7 support & early access'],
      id: 'premium'
    }
  ];

  const getCardStyle = (id) => ({
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '24px',
    // margin: '10px',
    width: '390px',
    cursor: 'pointer',
    background: selectedPlan === id 
      ? 'linear-gradient(to bottom, #ACDCDD, #FFFFFF)' 
      : '#fff',
    color: selectedPlan === id ? '#000' : '#333',
    boxShadow: '4px 4px 4px #00000040',
    transition: '0.3s'
  });

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap:'42px'
    }}>
      {cardData.map((card) => (
        <div
          key={card.id}
          style={getCardStyle(card.id)}
          onClick={() => setSelectedPlan(card.id)}
        >
          <span style={{
            fontSize:'24px',
            fontWeight:'700',
            
          }}>{card.title}</span>
          <p style={{
             fontSize:'14px',
            fontWeight:'400',
            color:'#767676',
          }}>
           {card.description}
          </p>

          <div style={{ fontSize: '32px', fontWeight: '700' }}>{card.price}</div>
          <div style={{
             fontSize:'14px',
            fontWeight:'600',
            color:'#767676',
          }}
          >{card.creditPoints}</div>
          <p>{card.credits}</p>
          <ul>
            {card.features.map((feature, index) => (
              <li key={index}>✔ {feature}</li>
            ))}
          </ul>
          <button style={{
            padding: '10px 20px',
            marginTop: '10px',
            backgroundColor: selectedPlan === card.id ? '#003566' : '#e0e0e0',
            color: selectedPlan === card.id ? '#fff' : '#000',
            border: 'none',
            borderRadius: '5px'
          }}>
            {`Buy ${card.credits.split(' ')[0]} Credit${card.credits.startsWith('1') ? '' : 's'}`}
          </button>
        </div>
      ))}
    </div>
  );
}
