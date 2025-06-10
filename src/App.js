import logo from "./logo.svg";
import "./App.css";
import MainContainer from "./MainContainer/MainContainer";
import InputWeb from "./InputWeb/InputWeb";


function App() {
  return (
    <div>
      <MainContainer children={<InputWeb />} />
    </div>
  );
}

export default App;
