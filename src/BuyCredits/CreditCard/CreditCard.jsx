import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';

export default function CreditCard() {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const cardData = [
    {
      title: 'Starter',
      description: 'Ideal for new photographers.Kickstart your journey with essential tools and limited credits.',
      price: '₹99',
      creditPoints: 'Per user & per credit',
      credits: '1 Credit (1 Project)',
      features: ['Credit will be used to create 1 project and can upload upto 5000 images. No monthly or hidden cost'],
      id: 'starter',
    },
    {
      title: 'Business',
      description: 'Best for growing photographers managing multiple clients.',
      price: '₹449',
      creditPoints: 'Per user & per 5 credits',
      credits: '5 Credits (5 Projects)',
      features: ['Credits will be used to create 5 projects and upload upto 5000 images in each project. No monthly or extra cost.'],
      id: 'business',
      popular: true,
    },
    {
      title: 'Premium',
      description: 'For professional studios and high-volume photographers',
      price: '₹999',
      creditPoints: 'Per user & per 12 credits',
      credits: '12 Credits (12 Projects)',
      features: [
        'Credits will be used to create 12 projects and upload upto 5000 images in each project. No monthly or extra cost.',
        '24/7 support Early access to new launch.',
      ],
      id: 'premium',
    },
  ];

  const getCardStyle = (id) => ({
    border: '1px solid #ccc',
    borderRadius: '20px',
    padding: '24px',
    flex: '1 1 300px',
    minWidth: '300px',
    maxWidth: '390px',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    background: selectedPlan === id
      ? 'linear-gradient(to bottom, #ACDCDD, #FFFFFF)'
      : '#fff',
    boxShadow: '4px 4px 4px #00000040',
    position: 'relative',
    transition: '0.3s',
  });

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'stretch',
      flexWrap: 'wrap',
      gap: '42px',
    }}>
      {cardData.map((card) => (
        <div
          key={card.id}
          style={getCardStyle(card.id)}
          onClick={() => setSelectedPlan(card.id)}
        >
          {card.popular && (
            <div style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              backgroundColor: '#fff',
              border: '1px solid #2C7A7B',
              borderRadius: '10px',
              fontSize: '12px',
              fontWeight: '600',
              padding: '4px 10px',
              color: '#2C7A7B',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}>
              <span>Popular</span>
            </div>
          )}

          <div>
            <h2 style={{
              fontSize: '24px',
              fontWeight: '700',
              marginBottom: '8px',
            }}>{card.title}</h2>
            <p style={{
              fontSize: '14px',
              fontWeight: '400',
              color: '#767676',
              marginBottom: '16px',
            }}>{card.description}</p>

            <div style={{ fontSize: '32px', fontWeight: '700' }}>{card.price}</div>
            <div style={{
              fontSize: '14px',
              fontWeight: '600',
              color: '#767676',
              marginBottom: '12px',
            }}>{card.creditPoints}</div>

            <button style={{
              padding: '10px 40px',
              width: '100%',
              marginTop: '8px',
              marginBottom: '20px',
              backgroundColor: selectedPlan === card.id ? '#2F5D62' : '#fff',
              color: selectedPlan === card.id ? '#fff' : '#2C7A7B',
              border: '2px solid #2F5D62',
              borderRadius: '10px',
              fontWeight: '600',
              cursor: 'pointer',
            }}>
              {`Buy ${card.credits.split(' ')[0]} Credit${card.credits.startsWith('1') ? '' : 's'}`}
            </button>

            <hr style={{ borderColor: '#ccc' }} />
            <div style={{ marginTop: '16px' }}>
              <h4 style={{ fontSize: '16px', fontWeight: '600' }}>Features</h4>
              <p style={{ fontSize: '14px', color: '#767676', marginBottom: '12px' }}>
                {card.id === 'starter'
                  ? 'Everything in our free plan includes'
                  : card.id === 'business'
                  ? 'Everything in our growing Business'
                  : 'Everything in our starter, business & Premium'}
              </p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '8px' }}>
                  <CheckCircle size={16} color="#2C7A7B" style={{ marginRight: '8px' }} />
                  {card.credits}
                </li>
                {card.features.map((feature, index) => (
                  <li key={index} style={{ marginBottom: '8px' }}>
                    <CheckCircle size={16} color="#2C7A7B" style={{ marginRight: '8px' }} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
