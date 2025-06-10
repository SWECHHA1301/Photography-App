import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import InputBar from '../../../Common/InputBar';
import ColorPallete from '../../../Common/ColorPallete';
import Textarea from '../../../Common/Textarea';

export default function WhatYouOffer() {
  const [services, setServices] = useState([]); // start with no services
  const [activeIndex, setActiveIndex] = useState(0);

  const handleChange = (index, field, value) => {
    const updated = [...services];
    updated[index][field] = value;
    setServices(updated);
  };

  const addService = () => {
    setServices(prev => {
      const newServices = [
        ...prev,
        {
          title: '',
          description: '',
          icon: '',
          category: '',
          color: ''
        }
      ];
      setActiveIndex(newServices.length - 1); // Set focus to the new service
      return newServices;
    });
  };

  const activeService = services[activeIndex];

  return (
    <div>
      {/* Buttons */}
      <div style={{ display: 'flex', marginBottom: 10 }}>
        {services.length > 0 && services.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            style={{
              marginRight: 10,
              padding: '5px 10px',
              backgroundColor: activeIndex === index ? '#359597' : '#fff',
              color: activeIndex === index ? '#fff' : '#2C7A7B',
              border: activeIndex === index ? 'none' : '1px solid #2C7A7B',
              borderRadius: 10,
              cursor: 'pointer',
              maxWidth: '113px',
              width: '100%',
              fontSize: '16px',
              fontWeight: '400',
              height: '27px'
            }}
          >
            Service {index + 1}
          </button>
        ))}

        {/* Always show Add button */}
        <button
          onClick={addService}
          style={{
            padding: '5px 10px',
            backgroundColor: '#FFFFFF',
            color: '#2F2F2F',
            border: '1px solid #767676',
            borderRadius: 10,
            cursor: 'pointer',
            maxWidth: '113px',
            width: '100%',
            fontSize: '16px',
            fontWeight: '400',
            height: '27px'
          }}
        >
          + Add Card
        </button>
      </div>

      {/* Only show form when a service is active */}
      {services.length > 0 && (
        <div style={{ padding: 15 }}>
          <InputBar
            label="Title"
            holder="e.g. Wedding Photography"
            value={activeService.title}
            onChange={e => handleChange(activeIndex, 'title', e.target.value)}
          />

          <Textarea   label="Description"
            holder="Description" 
            value={activeService.description}
            onChange={e => handleChange(activeIndex, 'description', e.target.value)}
            customStyle={{
              height:'92px'
            }}/>
          {/* <InputBar
            label="Description"
            holder="Description"
            value={activeService.description}
            onChange={e => handleChange(activeIndex, 'description', e.target.value)}
          /> */}
          <InputBar
            label="Icon"
            holder="e.g. heart"
            value={activeService.icon}
            onChange={e => handleChange(activeIndex, 'icon', e.target.value)}
          />
          <InputBar
            label="Category"
            holder="e.g. Weddings"
            value={activeService.category}
            onChange={e => handleChange(activeIndex, 'category', e.target.value)}
          />
          <ColorPallete
            value={activeService.color}
            onChange={color => handleChange(activeIndex, 'color', color)}
          />
        </div>
      )}
    </div>
  );
}
