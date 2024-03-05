import React, { useState } from "react";
import "./styles.css";
import Header from "../header";
import StepOne from "./components/step-one";
import StepTwo from "./components/step-two";
import StepThree from "./components/step-three";

// images
import arcadeImg from "../../assets/images/icon-arcade.svg";
import proImg from "../../assets/images/icon-pro.svg";
import advancedImg from "../../assets/images/icon-advanced.svg";

export default function MultiStepForm() {
  const [steps, setSteps] = useState([1, 2, 3, 4]);
  const [currentStep, setCurrentStep] = useState(steps[0]);
  const [plans, setPlans] = useState([
    {
      name: "Arcade",
      monthlyPrice: 9,
      yearlyPrice: 90,
      image: arcadeImg,
    },
    {
      name: "Advanced",
      monthlyPrice: 12,
      yearlyPrice: 120,
      image: advancedImg,
    },
    {
      name: "Pro",
      monthlyPrice: 15,
      yearlyPrice: 150,
      image: proImg,
    },
  ]);
  const [paymentFrequency, setPaymentFrequency] = useState("Monthly");
  const [paymentPlan, setPaymentPlan] = useState(1);
  const [addons, setAddons] = useState([
    {
      title: "Arcade",
      description: "Arcade",
      monthlyPrice: 10,
      yearlyPrice: 100,
      isChecked: true,
    },
    {
      title: "Arcade",
      description: "Arcade",
      monthlyPrice: 10,
      yearlyPrice: 100,
      isChecked: false,
    },
    {
      title: "Arcade",
      description: "Arcade",
      monthlyPrice: 10,
      yearlyPrice: 100,
      isChecked: false,
    },
  ]);

  const nextStep = () => {
    if (currentStep === steps[steps.length - 1]) {
      return;
    }

    setCurrentStep(currentStep + 1);
  };

  const previousStep = () => {
    if (currentStep === 1) {
      return;
    }

    setCurrentStep(currentStep - 1);
  };

  const togglePaymentFrequency = () => {
    if (paymentFrequency === "Monthly") {
      setPaymentFrequency("Yearly");
    } else {
      setPaymentFrequency("Monthly");
    }
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return <StepOne />;
      case 2:
        return (
          <StepTwo
            plans={plans}
            paymentPlan={paymentPlan}
            setPaymentPlan={setPaymentPlan}
            paymentFrequency={paymentFrequency}
            togglePaymentFrequency={togglePaymentFrequency}
          />
        );
      case 3:
        return <StepThree addons={addons} />;
      // case 4:
      //   return <StepOne />;
      default:
        return <div>Step was not found...</div>;
    }
  };

  return (
    <>
      <Header steps={steps} currentStep={currentStep} />
      <div className="content">
        <div className="card">
          {renderCurrentStep()}
          <div className="card__actions">
            {currentStep > 1 && (
              <button onClick={previousStep}>Previous Step</button>
            )}
            <button onClick={nextStep}>Next Step</button>
          </div>
        </div>

        {/* {isStepOne && <StepOne />}
        {isStepTwo && (
          <StepTwo
            isMonthly={isMonthly}
            isYearly={isYearly}
            setPaymentPlan={setPaymentPlan}
          />
        )}
        {isStepThree && <StepThree isMonthly={isMonthly} isYearly={isYearly} />} */}
      </div>
    </>
  );
}
