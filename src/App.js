import logo from "./logo.svg";
import "./App.css";
import MainContainer from "./MainContainer/MainContainer";
import InputWeb from "./InputWeb/InputWeb";
import DriveAction from "./InputWeb/DriveAction/DriveAction";
import CreditCard from "./BuyCredits/CreditCard/CreditCard";
import BuyCredits from "./BuyCredits/BuyCredits";
import TransitionHistory from "./TransitionHistory/TransitionHistory";
import Inquiries from "./Inquiries/Inquiries";
import IconCategorySelector from "./Common/IconCategorySelector";

function App() {
  return (
    <div>
      <MainContainer children={<InputWeb />} />
      {/* <BuyCredits /> */}
      {/* <TransitionHistory /> */}
      {/* <IconCategorySelector/> */}
      {/* <Inquiries /> */}
    </div>
  );
}

export default App;
