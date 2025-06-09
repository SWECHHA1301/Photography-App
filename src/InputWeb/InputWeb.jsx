import React, { useState } from 'react';
import Stepper from '../Common/Stepper';
import SiteStructure from './SiteStructure/SiteStructure';
import FirstImpression from './FirstImpression/FirstImpression';
import BrandFoundation from '../BrandFoundation/BrandFoundation';

export default function InputWeb() {
  const [currentStep, setCurrentStep] = useState(0);

  const styles = {
    mainContainer: {
      // width: '100%',
      backgroundColor: '#FFFFFF',
      // maxWidth: '1322px',
      margin: '24px',
      padding: '24px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      borderRadius: '20px',
    },
  };

  const components = [
    <BrandFoundation />,
    <SiteStructure />,
    <FirstImpression />,
  ];

  // Handlers
  const handleNext = () => {
    if (currentStep < components.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div style={styles.mainContainer}>
      {/* Stepper receives handlers to control navigation */}
      <Stepper
        currentStep={currentStep}
        onNext={handleNext}
        onPrev={handlePrev}
        totalSteps={components.length}
      />

      {/* Render only the current component */}
      <div style={{ marginTop: '20px', width: '100%' }}>
        {components[currentStep]}
      </div>
    </div>
  );
}

