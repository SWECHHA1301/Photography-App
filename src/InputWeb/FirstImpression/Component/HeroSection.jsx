import { useState, useEffect } from 'react';
import InputBar from '../../../Common/InputBar';
import HeroMedia from './HeroMedia';
import ViewPortfolio from '../../../Common/Buttons/ViewPortfolio';
import AboutUsBtn from '../../../Common/Buttons/AboutUsBtn';

export default function HeroSection({ data, updateData }) {
  const [formData, setFormData] = useState({
    Title: '',
    Subtitle: '',
    CtaPrimary: '',
    CtaSecondary: '',
    AvailabilityText: '',
  });

  useEffect(() => {
    if (data) {
      setFormData(prev => ({
        ...prev,
        ...data,
      }));
    }
  }, [data]);

  const handleChange = (key, value) => {
    const updated = {
      ...formData,
      [key]: value,
    };
    setFormData(updated);
    updateData(updated);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '24px 0' }}>
      <InputBar
        label="Title"
        holder="e.g. Sarah Mitchell"
        customStyle={{ flex: '0.1 400px' }}
        value={formData.Title}
        onChange={(e) => handleChange('Title', e.target.value)}
      />

      <InputBar
        label="Subtitle"
        holder="e.g. Capturing life’s most precious moments through the lens of artistry and emotion"
        customStyle={{ height: '75px', flex: '0.1 400px' }}
        value={formData.Subtitle}
        onChange={(e) => handleChange('Subtitle', e.target.value)}
      />

      <HeroMedia />

      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <InputBar
          label="Cta Primary"
          holder="e.g. View Portfolio"
          customStyle={{ flex: '0.1 400px' }}
          value={formData.CtaPrimary}
          onChange={(e) => handleChange('CtaPrimary', e.target.value)}
          suffixComponent={<ViewPortfolio holder={formData.CtaPrimary || 'View Portfolio'} />}
        />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <InputBar
          label="Cta Secondary"
          holder="e.g. About Us"
          customStyle={{ flex: '0.1 400px' }}
          value={formData.CtaSecondary}
          onChange={(e) => handleChange('CtaSecondary', e.target.value)}
          suffixComponent={<AboutUsBtn holder={formData.CtaSecondary || 'About Us'} />}
        />
      </div>

      <InputBar
        label="Availability Text"
        holder="e.g. Available for bookings"
        customStyle={{ flex: '0.1 400px' }}
        value={formData.AvailabilityText}
        onChange={(e) => handleChange('AvailabilityText', e.target.value)}
      />
    </div>
  );
}
