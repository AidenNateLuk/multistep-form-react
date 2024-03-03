import "./StepOne.css";
export default function StepOne() {
  return (
    <main>
      <form>
        <div className="card-title">
          <h1>Personal Info</h1>
          <p>Please provide your name, email address and phone number.</p>
        </div>
        <div className="card-content">
          <label htmlFor="name">Name</label>
          <input id="name" type="text" placeholder="e.g. Stephen King" />
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            placeholder="e.g. stephenking@lorem.com"
          />
          <label htmlFor="number">Phone Number</label>
          <input id="number" type="number" placeholder="e.g. +1 234 567 890" />
        </div>
      </form>
    </main>
  );
}
