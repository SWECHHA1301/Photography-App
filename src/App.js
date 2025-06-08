import logo from './logo.svg';
import './App.css';
import BrandFoundation from './BrandFoundation/BrandFoundation';
import MainContainer from './MainContainer';
import BrandColors from './BrandFoundation/components/BrandColors';

function App() {
  return (
    <div>
      <MainContainer children={
        <BrandFoundation />
      } />
    </div>
  );
}

export default App;
