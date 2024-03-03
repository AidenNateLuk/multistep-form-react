import "./StepTwo.css";
import { useState } from "react";
import arcadeImg from "../assets/images/icon-arcade.svg";
import proImg from "../assets/images/icon-pro.svg";
import advancedImg from "../assets/images/icon-advanced.svg";

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
          <button type="button" className="payment-plan">
            <img src={arcadeImg} />
            <div className="paymentplan-content">
              <h3>Arcade</h3>
              {paymentMethod == "Monthly" ? <p>$9/mo</p> : null}
              {paymentMethod == "Yearly" ? <p>$90/yr</p> : null}
            </div>
          </button>
          <button type="button" className="payment-plan">
            <img src={advancedImg} />
            <div className="paymentplan-content">
              <h3>Advanced</h3>
              {paymentMethod == "Monthly" ? <p>$12/mo</p> : null}
              {paymentMethod == "Yearly" ? <p>$120/yr</p> : null}
            </div>
          </button>
          <button type="button" className="payment-plan">
            <img src={proImg} />
            <div className="paymentplan-content">
              <h3>Pro</h3>
              {paymentMethod == "Monthly" && <p>$15/mo</p>}
              {paymentMethod == "Yearly" && <p>$150/yr</p>}
            </div>
          </button>
          <div className="monthly-yearly">
            <button type="button" onClick={handleYearToMonth}>
              Monthly
            </button>
            <button type="button" onClick={handleMonthToYear}>
              Yearly
            </button>
          </div>
        </div>
      </form>
    </main>
  );
}
