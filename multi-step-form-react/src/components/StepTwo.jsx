import "./StepTwo.css";
import arcadeImg from "../assets/images/icon-arcade.svg";
import proImg from "../assets/images/icon-pro.svg";
import advancedImg from "../assets/images/icon-advanced.svg";

export default function StepTwo({ isMonthly, isYearly, setPaymentPlan }) {
  function handleMonthToYear() {
    if (isMonthly) {
      setPaymentPlan("Yearly");
    }
  }
  function handleYearToMonth() {
    if (isYearly) {
      setPaymentPlan("Monthly");
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
              {isMonthly && <p>$9/mo</p>}
              {isYearly && <p>$90/yr</p>}
            </div>
          </button>
          <button type="button" className="payment-plan">
            <img src={advancedImg} />
            <div className="paymentplan-content">
              <h3>Advanced</h3>
              {isMonthly && <p>$12/mo</p>}
              {isYearly && <p>$120/yr</p>}
            </div>
          </button>
          <button type="button" className="payment-plan">
            <img src={proImg} />
            <div className="paymentplan-content">
              <h3>Pro</h3>
              {isMonthly && <p>$15/mo</p>}
              {isYearly && <p>$150/yr</p>}
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
