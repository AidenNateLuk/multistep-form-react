import "./StepTwo.css";
import { useState } from "react";
export default function StepTwo({ ...props }) {
  const [paymentMethod, setPaymentMethod] = useState("Monthly");
  function handleMonthToYear() {
    if (paymentMethod == "Monthly") {
      setPaymentMethod("Yearly");
    }
  }
  function handleYearToMonth() {
    if (paymentMethod == "Yearly") {
      setPaymentMethod("Monthly");
    }
  }

  return (
    <main>
      <form>
        <div className="card-title">
          <h1>Select Your Plan</h1>
          <p>You have the option of monthly or yearly billing</p>
        </div>
        <div className="card-content">
          <div className="paymentPlan">
            <img />
            <div className="paymentPlan-content">
              <h3>Arcade</h3>
              {paymentMethod == "Monthly" ? <p>$9/mo</p> : null}
              {paymentMethod == "Yearly" ? <p>$90/yr</p> : null}
            </div>
            <div className="paymentPlan-content">
              <h3>Advanced</h3>
              {paymentMethod == "Monthly" ? <p>$12/mo</p> : null}
              {paymentMethod == "Yearly" ? <p>$120/yr</p> : null}
            </div>
            <div className="paymentPlan-content">
              <h3>Pro</h3>
              {paymentMethod == "Monthly" && <p>$15/mo</p>}
              {paymentMethod == "Yearly" && <p>$150/yr</p>}
            </div>
          </div>
        </div>
        <div className="monthly-yearly">
          <button type="button" onClick={handleYearToMonth}>
            Monthly
          </button>
          <button type="button" onClick={handleMonthToYear}>
            Yearly
          </button>
        </div>
      </form>
    </main>
  );
}
