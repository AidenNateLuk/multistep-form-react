import "./App.css";
import { useState } from "react";
import Header from "./components/Header.jsx";
import StepOne from "./components/StepOne.jsx";
import StepTwo from "./components/StepTwo.jsx";

function App() {
  const [currentStep, setCurrentStep] = useState("StepOne");
  const handleNext = () => {
    if (currentStep == "StepOne") {
      setCurrentStep("StepTwo");
    }
  };
  const handlePrevious = () => {
    if (currentStep == "StepTwo") {
      setCurrentStep("StepOne");
    }
  };
  return (
    <>
      <Header title={currentStep} onTitleChange={handleNext} />
      <div className="card">
        {currentStep == "StepOne" && <StepOne />}
        {currentStep == "StepTwo" && <StepTwo />}
      </div>
      <footer>
        {currentStep == "StepTwo" && (
          <button id="back-btn" onClick={handlePrevious}>
            Back
          </button>
        )}
        <button onClick={handleNext} id="next">
          Next Step
        </button>
      </footer>
    </>
  );
}

export default App;
