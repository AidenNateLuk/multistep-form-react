import { useEffect } from "react";
import "./styles.css";

export default function StepThree({ addons, paymentFrequency, toggleAddOn }) {
  return (
    <>
      <div className="title">
        <h2>Pick add-ons</h2>
        <p>Add-ons help enhance your gaming experience</p>
      </div>
      <div className="content">
        {addons.map((addon, i) => {
          return (
            <div
              key={i}
              className={`add-on ${addon.isChecked ? "selected" : ""}`}
            >
              <input
                type="checkbox"
                defaultChecked={addons.isChecked}
                onClick={() => toggleAddOn(i)}
              />
              <div className="add-on-text">
                <h4>{addon.title}</h4>
                <p>{addon.description}</p>
              </div>
              {paymentFrequency === "Monthly" && (
                <p>${addon.monthlyPrice}/mo</p>
              )}
              {paymentFrequency === "Yearly" && <p>${addons.yearlyPrice}/yr</p>}
            </div>
          );
        })}
      </div>
    </>
  );
}
