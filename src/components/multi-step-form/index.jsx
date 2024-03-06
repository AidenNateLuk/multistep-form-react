import React, { useState, useEffect } from "react";
import "./styles.css";
import Header from "../header";
import StepOne from "./components/step-one";
import StepTwo from "./components/step-two";
import StepThree from "./components/step-three";
import StepFour from "./components/step-four";
import StepFive from "./components/step-five";

// images
import arcadeImg from "../../assets/images/icon-arcade.svg";
import proImg from "../../assets/images/icon-pro.svg";
import advancedImg from "../../assets/images/icon-advanced.svg";

export default function MultiStepForm() {
  const [steps, setSteps] = useState([1, 2, 3, 4, 5]);
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
      title: "Online Service",
      description: "Access to multiplayer games",
      monthlyPrice: 1,
      yearlyPrice: 10,
      isChecked: false,
    },
    {
      title: "Larger Storage",
      description: "Extra 1TB of cloud save",
      monthlyPrice: 2,
      yearlyPrice: 20,
      isChecked: false,
    },
    {
      title: "Customizable profile",
      description: "Custom theme on your profile",
      monthlyPrice: 2,
      yearlyPrice: 20,
      isChecked: false,
    },
  ]);
  const [filteredAddons, setFilteredAddons] = useState([]);

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

  const toggleAddOn = (index) => {
    const newAddons = addons.map((addon, i) => {
      if (index === i) {
        return { ...addon, isChecked: !addon.isChecked };
      } else {
        return addon;
      }
    });
    setAddons(newAddons);
  };
  useEffect(() => {
    const newFilteredAddons = addons.filter((addon) => addon.isChecked);
    setFilteredAddons(newFilteredAddons);
    console.log(newFilteredAddons);
  }, [addons]);

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return <StepOne nextStep={nextStep} />;
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
        return (
          <StepThree
            paymentFrequency={paymentFrequency}
            addons={addons}
            toggleAddOn={toggleAddOn}
          />
        );
      case 4:
        return (
          <StepFour
            paymentPlan={paymentPlan}
            filteredAddons={filteredAddons}
            paymentFrequency={paymentFrequency}
          />
        );
      case 5:
        return <StepFive />;
      default:
        return <div>Step was not found...</div>;
    }
  };

  return (
    <>
      <Header steps={steps} currentStep={currentStep} />
      <div className="container">
        <div className="card">
          {renderCurrentStep()}
          {currentStep === 5 ? (
            ""
          ) : (
            <div className="card__actions">
              {currentStep > 1 && (
                <button id="back" onClick={previousStep}>
                  Previous Step
                </button>
              )}
              <button
                id={currentStep === 4 ? "confirm" : "next"}
                onClick={nextStep}
              >
                {currentStep === 4 ? "Confirm" : "Next Step"}
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
