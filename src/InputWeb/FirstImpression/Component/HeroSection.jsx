import { useState } from 'react';
import InputBar from '../../../Common/InputBar';
import HeroMedia from './HeroMedia';
import ViewPortfolio from '../../../Common/Buttons/ViewPortfolio';
import AboutUsBtn from '../../../Common/Buttons/AboutUsBtn';

export default function HeroSection() {
  const [ctaPrimary, setCtaPrimary] = useState('');
  const [ctaSecondary, setCtaSecondary] = useState('');

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '24px 0' }}>
        <InputBar label="Title" holder="e.g. Sarah Mitchell" customStyle={{ flex: '0.4 200px' }} />

        <InputBar
          label="Subtitle"
          holder="e.g. Capturing life’s most precious moments through the lens of artistry and emotion"
          customStyle={{ height: '75px', flex: '0.4 200px' }}
        />

        <HeroMedia />

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', }}>
          <InputBar
            label="Cta Primary"
            holder="e.g. View Portfolio"
            customStyle={{ flex: '0.4 200px' }}
            value={ctaPrimary}
            onChange={(e) => setCtaPrimary(e.target.value)}
            suffixComponent={
              <ViewPortfolio holder={ctaPrimary || 'View Portfolio'} />
            }
          />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <InputBar
            label="Cta Secondary"
            holder="e.g. About Us"
            customStyle={{ flex: '0.4 200px' }}
            value={ctaSecondary}
            onChange={(e) => setCtaSecondary(e.target.value)}
            suffixComponent={
              <AboutUsBtn holder={ctaSecondary || 'About Us'} />
            }
          />

        </div>

        <InputBar
          label="Availability Text"
          holder="e.g. Available for bookings"
          customStyle={{ flex: '0.4 200px' }}
        />
      </div>
    </>
  );
}

