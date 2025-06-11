import logo from "./logo.svg";
import "./App.css";
import MainContainer from "./MainContainer/MainContainer";
import InputWeb from "./InputWeb/InputWeb";
import DriveAction from "./InputWeb/DriveAction/DriveAction";
<<<<<<< HEAD
import TransitionHistory from "./TransitionHistory/TransitionHistory";
=======
import CreditCard from "./BuyCredits/CreditCard/CreditCard";
import BuyCredits from "./BuyCredits/BuyCredits";
>>>>>>> 63e87f475138c7fd4ba8b9e535911c7141fd06d0




function App() {
  return (
    <div>
<<<<<<< HEAD
      <MainContainer children={<TransitionHistory />} />
    
=======
      {/* <MainContainer children={<InputWeb />} /> */}
      <BuyCredits/>
    {/* <CreditCard/> */}
>>>>>>> 63e87f475138c7fd4ba8b9e535911c7141fd06d0

    </div>
    
 
  );
}

export default App;
