import { useState } from 'react';
import Stepper from '../Common/Stepper';
import SiteStructure from './SiteStructure/SiteStructure';
import FirstImpression from './FirstImpression/FirstImpression';
import BrandFoundation from './BrandFoundation/BrandFoundation';
import Offer from './Offer/Offer';
import DriveAction from './DriveAction/DriveAction';
import AboutPage from './TellYourStory/AboutPage';
import PageTitle from "../Common/Titles/PageTitle";

export default function InputWeb() {
  const [currentStep, setCurrentStep] = useState(0);

  // ✅ Main state to store all form data
  const [formData, setFormData] = useState({
    brandFoundation: {},
    siteStructure: {},
    firstImpression: {},
    offer: {},
    aboutPage: {},
    driveAction: {},
  });

  // ✅ Update function for each section
  const updateSection = (section, newData) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        ...newData,
      },
    }));
  };

  const styles = {
    mainContainer: {
      backgroundColor: '#FFFFFF',
      margin: '24px',
      padding: '24px',
      display: 'flex',
      flexDirection: 'column',
      borderRadius: '20px',
      overflow: 'hidden',
    },
  };

  // ✅ Pass current data + update function to each component
  const components = [
    <BrandFoundation
      data={formData.brandFoundation}
      updateData={(data) => updateSection('brandFoundation', data)}
    />,
    <SiteStructure
      data={formData.siteStructure}
      updateData={(data) => updateSection('siteStructure', data)}
    />,
    <FirstImpression
      data={formData.firstImpression}
      updateData={(data) => updateSection('firstImpression', data)}
    />,
    <Offer
      data={formData.offer}
      updateData={(data) => updateSection('offer', data)}
    />,
    <AboutPage
      data={formData.aboutPage}
      updateData={(data) => updateSection('aboutPage', data)}
    />,
    <DriveAction
      data={formData.driveAction}
      updateData={(data) => updateSection('driveAction', data)}
    />,
  ];

  // Navigation
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

  const handleStepClick = (stepIndex) => {
    setCurrentStep(stepIndex);
  };

  return (
    <div style={styles.mainContainer}>
      <PageTitle />
      <Stepper
        currentStep={currentStep}
        onNext={handleNext}
        onPrev={handlePrev}
        totalSteps={components.length}
        onStepClick={handleStepClick}
      />
      <div style={{ marginTop: '20px', width: '100%' }}>
        {components[currentStep]}
      </div>
    </div>
  );
}
