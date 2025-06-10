import logo from "./logo.svg";
import "./App.css";
import MainContainer from "./MainContainer/MainContainer";
import InputWeb from "./InputWeb/InputWeb";
import ColorPallete from "./Common/ColorPallete";
import LayoutOptions from "./Common/LayoutOptions";



function App() {
  return (
    <div>
      <MainContainer children={<InputWeb />} />
    
    </div>
  );
}

export default App;
