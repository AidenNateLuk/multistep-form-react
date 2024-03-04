import "./StepThree.css";
export default function StepThree({ isMonthly, isYearly }) {
  return (
    <main>
      <form>
        <div className="card-title">
          <h1>Pick add-ons</h1>
          <p>Add-ons help enhance your gaming experience.</p>
        </div>
        <div class="add-on">
          <div>
            <input type="checkbox"></input>
          </div>
          <div>
            <h4>Online Service</h4>
            <p>Access to multiplayer games</p>
          </div>
          <div>
            {isMonthly && <p>+$1/mo</p>}
            {isYearly && <p>+$10/yr </p>}
          </div>
        </div>
        <div class="add-on">
          <div>
            <input type="checkbox"></input>
          </div>
          <div>
            <h4>Larger Storage</h4>
            <p>Extra 1TB of cloud save</p>
          </div>
          <div>
            {isMonthly && <p>+$2/mo</p>}
            {isYearly && <p>+$20/yr </p>}
          </div>
        </div>
        <div class="add-on">
          <div>
            <input type="checkbox"></input>
          </div>
          <div>
            <h4>Customizable profile</h4>
            <p>Custom theme on your profile</p>
          </div>
          <div>
            {isMonthly && <p>+$2/mo</p>}
            {isYearly && <p>+$20/yr </p>}
          </div>
        </div>
      </form>
    </main>
  );
}
