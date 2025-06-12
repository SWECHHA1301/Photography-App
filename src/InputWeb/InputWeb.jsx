import  { useState } from 'react';
import Stepper from '../Common/Stepper';
import SiteStructure from './SiteStructure/SiteStructure';
import FirstImpression from './FirstImpression/FirstImpression';
import BrandFoundation from './BrandFoundation/BrandFoundation';
import Offer from './Offer/Offer';
import DriveAction from './DriveAction/DriveAction';
import AboutPage from './TellYourStory/AboutPage';


export default function InputWeb() {
  const [currentStep, setCurrentStep] = useState(0);
  const handleStepClick = (stepIndex) => {
  setCurrentStep(stepIndex);
};

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
      overflow: 'hidden',
    },
  };

  const components = [
    <BrandFoundation />,
    <SiteStructure />,
    <FirstImpression />,

    <Offer/>,
    <AboutPage />,
    <DriveAction />,

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
  onNext={() => setCurrentStep((prev) => prev + 1)}
  onPrev={() => setCurrentStep((prev) => prev - 1)}
  totalSteps={6}
  onStepClick={handleStepClick}
/>


      {/* Render only the current component */}
      <div style={{ marginTop: '20px', width: '100%' }}>
        {components[currentStep]}
      </div>
    </div>
  );
}

