
import logo from './logo.svg';
import './App.css';
import BrandFoundation from './BrandFoundation/BrandFoundation';
import MainContainer from './MainContainer';
import BrandColors from './BrandFoundation/components/BrandColors';
import Stepper from "./Common/Stepper";
import InputWeb from './InputWeb/InputWeb';
import ToggleSwitch from './Common/ToggleSwitch';
import EyeToggle from './Common/EyeToggle';

function App() {
  return (
    <div>
      {/* <MainContainer children={
        <BrandFoundation />
      } /> */}

      <InputWeb/>
      {/* <ToggleSwitch/>
      <EyeToggle/> */}
    </div>
  );
}

export default App;
