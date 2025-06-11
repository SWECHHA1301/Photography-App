import logo from "./logo.svg";
import "./App.css";
import MainContainer from "./MainContainer/MainContainer";
import InputWeb from "./InputWeb/InputWeb";
import DriveAction from "./InputWeb/DriveAction/DriveAction";
import CreditCard from "./BuyCredits/CreditCard/CreditCard";
import BuyCredits from "./BuyCredits/BuyCredits";




function App() {
  return (
    <div>
      {/* <MainContainer children={<InputWeb />} /> */}
      <BuyCredits/>
    {/* <CreditCard/> */}

    </div>
    
 
  );
}

export default App;
