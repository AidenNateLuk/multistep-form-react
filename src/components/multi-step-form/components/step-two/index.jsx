import "./styles.css";
import { useEffect, useState } from "react";

export default function StepTwo({
  plans,
  paymentFrequency,
  togglePaymentFrequency,
  paymentPlan,
  setPaymentPlan,
}) {
  const selectPlan = (selectedPlan) => {
    setPaymentPlan(selectedPlan);
  };
  useEffect(() => {
    console.log(paymentPlan);
  }, [paymentPlan]);

  return (
    <>
      <div className="title">
        <h2>Select Your Plan</h2>
        <p>You have the option of monthly or yearly billing</p>
      </div>
      <div className="content">
        {plans.map((plan, i) => {
          return (
            <button
              key={i}
              type="button"
              className="payment-plan"
              onClick={() => selectPlan(plan)}
            >
              <div className="image">
                <img src={plan.image} />
              </div>
              <div className="paymentplan-content">
                <h3>{plan.name}</h3>
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
