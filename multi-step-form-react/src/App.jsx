import "./App.css";
import { useState } from "react";
import Header from "./components/Header.jsx";
import StepOne from "./components/StepOne.jsx";
import StepTwo from "./components/StepTwo.jsx";
import StepThree from "./components/StepThree.jsx";

function App() {
  const [currentStep, setCurrentStep] = useState("StepOne");

  const handleNext = () => {
    if (currentStep == "StepOne") {
      setCurrentStep("StepTwo");
    } else if (currentStep == "StepTwo") {
      setCurrentStep("StepThree");
    }
  };
  const handlePrevious = () => {
    if (currentStep == "StepTwo") {
      setCurrentStep("StepOne");
    } else if (currentStep == "StepThree") {
      setCurrentStep("StepTwo");
    }
  };

  const isStepOne = currentStep === "StepOne";
  const isStepTwo = currentStep === "StepTwo";
  const isStepThree = currentStep === "StepThree";

  //payment plan state
  const [paymentPlan, setPaymentPlan] = useState("Monthly");
  const isMonthly = paymentPlan == "Monthly";
  const isYearly = paymentPlan == "Yearly";
  return (
    <>
      <Header
        isStepOne={isStepOne}
        isStepTwo={isStepTwo}
        isStepThree={isStepThree}
      />
      <div className="card">
        {isStepOne && <StepOne />}
        {isStepTwo && (
          <StepTwo
            isMonthly={isMonthly}
            isYearly={isYearly}
            setPaymentPlan={setPaymentPlan}
          />
        )}
        {isStepThree && <StepThree isMonthly={isMonthly} isYearly={isYearly} />}
      </div>
      <footer>
        {(isStepTwo || isStepThree) && (
          <button id="back-btn" onClick={handlePrevious}>
            Go Back
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
