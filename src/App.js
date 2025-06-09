
import logo from './logo.svg';
import './App.css';
import BrandFoundation from './BrandFoundation/BrandFoundation';
import MainContainer from './MainContainer';
import BrandColors from './BrandFoundation/components/BrandColors';
import Stepper from "./Common/Stepper";
import InputWeb from './InputWeb';

function App() {
  return (
    <div>
      <MainContainer children={
        <BrandFoundation />
      } />

      {/* <InputWeb/> */}
    </div>
  );
}

export default App;
