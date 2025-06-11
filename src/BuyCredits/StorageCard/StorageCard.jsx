import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';

export default function StorageCard() {
  const [selectedPlan, setSelectedPlan] = useState('essential'); // Default selected

  const plans = [
    {
      title: 'Standard',
      description: 'Ideal for new photographers.Kickstart your journey with essential tools and limited credits.',
      price: '₹7490',
      frequency: 'Per user & annually',
      buttonText: 'Buy Storage',
      trial: 'Start free 7-days trial',
      features: [
        'Store 100,000 photos and 100 videos',
        'Business Branding',
        'Bulk Download',
      ],
      id: 'standard',
    },
    {
      title: 'Essential',
      description: 'Best for growing photographers managing multiple clients.',
      price: '₹14490',
      frequency: 'Per user & annually',
      buttonText: 'Switch to this Plan',
      trial: 'Start free 7-days trial',
      features: [
        'Store 200,00 photos and videos',
        'Business Branding',
        'View Clients Favorites',
        '50+ gallery themes',
        'Bulk Downloads',
        '50+ gallery themes',
        'Analytics and Participant Info',
        'Add Watermarks',
        'Portfolio Website',
      ],
      popular: true,
      id: 'essential',
    },
    {
      title: 'Premium',
      description: 'For professional studios and high-volume photographers',
      price: '₹29990',
      frequency: 'Per user & annually',
      buttonText: 'Buy Premium Plan',
      trial: 'Start free 15-days trial',
      features: [
        'Store 5,00,000 photos and videos',
        'Business Branding',
        'View Clients Favorites',
        '50+ gallery themes',
        'Bulk Downloads',
        '50+ gallery themes',
        'Analytics and Participant Info',
        'Add Watermarks',
        'Portfolio Website',
        'Sponsored Branding',
        'Anonymous Viewing',
        'Team Login and Controls',
      ],
      id: 'premium',
    },
  ];

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: '32px',
      padding: '20px'
    }}>
      {plans.map((plan) => {
        const isSelected = plan.id === selectedPlan;

        return (
          <div
            key={plan.id}
            onClick={() => setSelectedPlan(plan.id)}
            style={{
              border: '1px solid #ccc',
              borderRadius: '20px',
              padding: '24px',
              maxWidth: '370px',
              flex: '1 1 300px',
              background: isSelected ? 'linear-gradient(to bottom, #ACDCDD, #FFFFFF)' : '#fff',
              boxShadow: '4px 4px 4px #00000040',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              cursor: 'pointer',
              transition: '0.3s ease',
            }}
          >
            {plan.popular && (
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
                Popular
              </div>
            )}

            <div>
              <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '8px' }}>{plan.title}</h2>
              <p style={{ fontSize: '14px', fontWeight: '400', color: '#767676', marginBottom: '16px' }}>
                {plan.description}
              </p>
              <div style={{ fontSize: '32px', fontWeight: '700' }}>{plan.price}</div>
              <div style={{ fontSize: '14px', fontWeight: '600', color: '#767676', marginBottom: '16px' }}>
                {plan.frequency}
              </div>
              <button style={{
                padding: '10px 40px',
                width: '100%',
                backgroundColor: isSelected ? '#2C7A7B' : '#fff',
                color: isSelected ? '#fff' : '#2C7A7B',
                border: `2px solid ${isSelected ? '#2C7A7B' : '#2C7A7B'}`,
                borderRadius: '10px',
                fontWeight: '600',
                cursor: 'pointer',
                marginBottom: '8px',
                transition: '0.3s ease',
              }}>
                {plan.buttonText}
              </button>
              <div style={{
                color: '#2C7A7B',
                fontSize: '13px',
                fontWeight: '500',
                textAlign: 'center',
                marginBottom: '20px'
              }}>{plan.trial}</div>
              <hr style={{ borderColor: '#ccc' }} />
              <div style={{ marginTop: '16px' }}>
                <h4 style={{ fontSize: '16px', fontWeight: '600' }}>Features</h4>
                <p style={{ fontSize: '14px', color: '#767676', marginBottom: '12px' }}>
                  {plan.id === 'standard'
                    ? 'Everything in our standard plan includes'
                    : plan.id === 'essential'
                      ? 'Everything in our growing Business'
                      : 'Everything in our starter, business & Premium'}
                </p>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {plan.features.map((feature, index) => (
                    <li key={index} style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                      <CheckCircle size={16} color="#2C7A7B" style={{ marginRight: '8px' }} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
