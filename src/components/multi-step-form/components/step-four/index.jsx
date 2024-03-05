import "./styles.css";

export default function StepFour({
  paymentPlan,
  filteredAddons,
  paymentFrequency,
}) {
  return (
    <>
      <div className="title">
        <h2>Finishing up</h2>
        <p>Double-check everything looks OK before confirming.</p>
      </div>
      <div className="content">
        <div className="payment-container">
          <div className="step-two-data">
            <p>{paymentPlan.name}</p>
            {paymentFrequency == "Monthly" && (
              <p>${paymentPlan.monthlyPrice}/mo</p>
            )}
            {paymentFrequency == "Yearly" && (
              <p>${paymentPlan.yearlyPrice}/yr</p>
            )}
          </div>
          <div className="step-three-data">
            <ul>
              {filteredAddons.map((addon, index) => (
                <li key={index}>
                  {addon.title}
                  {paymentFrequency == "Monthly" && (
                    <p>${addon.monthlyPrice}/mo</p>
                  )}
                  {paymentFrequency == "Yearly" && (
                    <p>${addon.yearlyPrice}/yr</p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="total"></div>
      </div>
    </>
  );
}
