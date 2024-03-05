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
              onClick={() => selectPlan(plan)}
            >
              <img src={plans[i].image} />
              <div className="paymentplan-content">
                <h3>{plans[i].name}</h3>
                {paymentFrequency === "Monthly" && (
                  <p>${plan.monthlyPrice}/mo</p>
                )}
                {paymentFrequency === "Yearly" && <p>${plan.yearlyPrice}/yr</p>}
                <div className="insentive">2 months free</div>
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
