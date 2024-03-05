import "./styles.css";

export default function StepFour({
  paymentPlan,
  filteredAddons,
  paymentFrequency,
}) {
  const calculateTotal = () => {
    let total = 0;
    if (paymentPlan) {
      if (paymentFrequency === "Monthly") {
        total += paymentPlan.monthlyPrice;
      } else if (paymentFrequency === "Yearly") {
        total += paymentPlan.yearlyPrice;
      }
    }
    filteredAddons.forEach((addon) => {
      if (paymentFrequency === "Monthly") {
        total += addon.monthlyPrice;
      } else if (paymentFrequency === "Yearly") {
        total += addon.yearlyPrice;
      }
    });
    return total;
  };

  return (
    <>
      <div className="title">
        <h2>Finishing up</h2>
        <p>Double-check everything looks OK before confirming.</p>
      </div>
      <div className="content">
        <div className="payment-container">
          <div className="step-two-data">
            <div className="plan">
              <p>
                {paymentPlan.name}
                {paymentFrequency == "Monthly" && "(Monthly)"}
                {paymentFrequency == "Yearly" && "(Yearly)"}
              </p>
              <p id="change">Change</p>
            </div>
            {paymentFrequency == "Monthly" && (
              <p className="yearly-amount">${paymentPlan.monthlyPrice}/mo</p>
            )}
            {paymentFrequency == "Yearly" && (
              <p className="monthly-amount">${paymentPlan.yearlyPrice}/yr</p>
            )}
          </div>
          <div className="step-three-data">
            <ul>
              {filteredAddons.map((addon, index) => (
                <li key={index}>
                  <p>{addon.title}</p>
                  {paymentFrequency == "Monthly" && (
                    <p className="monthly-amount">+${addon.monthlyPrice}/mo</p>
                  )}
                  {paymentFrequency == "Yearly" && (
                    <p className="yearly-amount">+${addon.yearlyPrice}/yr</p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="total">
          <p>
            Total {paymentFrequency == "Monthly" && "(per month)"}
            {paymentFrequency == "Yearly" && "(per year)"}:
          </p>
          <p id="total-amount">
            {" "}
            ${calculateTotal()}
            {paymentFrequency === "Yearly" && "/yr"}
          </p>
        </div>
      </div>
    </>
  );
}
