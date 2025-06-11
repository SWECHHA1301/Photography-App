import React, { useState } from 'react';
import InputBar from '../../../Common/InputBar'
import ColorPallete from '../../../Common/ColorPallete';

export default function WhatYouOffer() {
  const [services, setServices] = useState([
    {
      title: '',
      description: '',
      icon: '',
      category: '',
      color: ''
    }
  ]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleChange = (index, field, value) => {
    const updated = [...services];
    updated[index][field] = value;
    setServices(updated);
  };

  const addService = () => {
    setServices([...services, {
      title: '',
      description: '',
      icon: '',
      category: '',
      color: ''
    }]);
    setActiveIndex(services.length);
  };

  const activeService = services[activeIndex];

  return (
    <div>
      
      
      <div style={{ display: 'flex', marginBottom: 10 }}>
        {services.map((_, index) => (
          <button
            key={index}
            style={{
              marginRight: 10,
              padding: '5px 10px',
              backgroundColor: activeIndex === index ? '#359597' : '#fff',
              color: activeIndex === index ? '#fff' : '#2C7A7B',
              border:  activeIndex === index ? 'none' : '1px solid #2C7A7B', 
              borderRadius: 10,
              cursor: 'pointer',
               width:'100%',
            fontSize:'16px',
            fontWeight:'400',
            maxWidth:'113px',
            height:'27',
            }}
            onClick={() => setActiveIndex(index)}
          >
            Service {index + 1}
          </button>
        ))}
        <button
          onClick={addService}
          style={{
            padding: '5px 10px',
            backgroundColor: '#FFFFFF',
            color: '#2F2F2F',
            border: '1px solid #767676',
            borderRadius: 10,
            cursor: 'pointer',
            width:'100%',
            fontSize:'16px',
            fontWeight:'400',
            maxWidth:'113px',
            height:'27',
          }}
        >
          + Add Card
        </button>
      </div>

      <div style={{  padding: 15}}>

     <InputBar label="Title" holder="e.g. Wedding Photography"
     value={activeService.title}
            onChange={e => handleChange(activeIndex, 'title', e.target.value)}/>


            <InputBar label="Description" holder="Description"
      value={activeService.description}
            onChange={e => handleChange(activeIndex, 'description', e.target.value)}/>


            <InputBar label="Icon" holder="e.g. heart"
     value={activeService.icon}
            onChange={e => handleChange(activeIndex, 'icon', e.target.value)}/>

            <InputBar label="Category" holder="e.g. Weddings "
      value={activeService.category}
            onChange={e => handleChange(activeIndex, 'category', e.target.value)}/>
       
            <ColorPallete
  value={activeService.color}
  onChange={color => handleChange(activeIndex, 'color', color)}
/>
       
      </div>
    </div>
  );
}