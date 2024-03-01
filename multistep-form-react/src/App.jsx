import "./App.css";
import { useState } from "react";
import Header from "./components/Header.jsx";
import StepOne from "./components/StepOne.jsx";
import StepTwo from "./components/StepTwo.jsx";

function App() {
  const [currentStep, setCurrentStep] = useState("StepOne");
  function handleNext() {
    if (currentStep == "StepOne") {
      setCurrentStep("StepTwo");
    }
  }
  return (
    <>
      <Header />
      <div className="card">
        {currentStep == "StepOne" && <StepOne />}
        {currentStep == "StepTwo" && <StepTwo />}
      </div>
      <footer>
        <button onClick={handleNext} id="next">
          Next Step
        </button>
      </footer>
    </>
  );
}

export default App;
