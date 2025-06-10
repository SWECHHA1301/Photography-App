import logo from "./logo.svg";
import "./App.css";
import MainContainer from "./MainContainer/MainContainer";
import InputWeb from "./InputWeb/InputWeb";
import DriveAction from "./InputWeb/DriveAction/DriveAction";


function App() {
  return (
    <div>
      <MainContainer children={<DriveAction/>} />
    </div>
 
  );
}

export default App;
