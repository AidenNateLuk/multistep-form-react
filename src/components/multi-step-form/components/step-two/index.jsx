import arcadeImg from "../../../../assets/images/icon-arcade.svg";
import proImg from "../../../../assets/images/icon-pro.svg";
import advancedImg from "../../../../assets/images/icon-advanced.svg";
import "./styles.css";
import { useState } from "react";

export default function StepTwo({
  plans,
  paymentFrequency,
  togglePaymentFrequency,
  paymentPlan,
  setPaymentPlan,
}) {
  const selectPlan = (event) => {
    console.log({ event });
    setPaymentPlan();
  };

  return (
    <>
      <div className="title">
        <h1>Select Your Plan</h1>
        <p>You have the option of monthly or yearly billing</p>
      </div>
      <div className="content">
        {plans.map((plan, i) => {
          return (
            <button
              key={i}
              type="button"
              className="payment-plan"
              onClick={(e) => selectPlan(e)}
            >
              <img src={arcadeImg} />
              <div className="paymentplan-content">
                <h3>Arcade</h3>
                {paymentFrequency === "Monthly" && (
                  <p>${plan.monthlyPrice}/mo</p>
                )}
                {paymentFrequency === "Yearly" && <p>${plan.yearlyPrice}/yr</p>}
              </div>
            </button>
          );
        })}

        <div className="monthly-yearly">
          <div className={paymentFrequency === "Monthly" ? "monthly" : ""}>
            Monthly
          </div>
          <div
            className={
              paymentFrequency === "Monthly"
                ? "toggle monthly"
                : "toggle yearly"
            }
            onClick={togglePaymentFrequency}
          >
            <div></div>
          </div>
          <div className={paymentFrequency === "Yearly" ? "yearly" : ""}>
            Yearly
          </div>
        </div>
      </div>
    </>
  );
}
