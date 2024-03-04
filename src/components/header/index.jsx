import "./styles.css";

export default function Header({ steps, currentStep }) {
  return (
    <header>
      {steps.map((s, i) => {
        return (
          <div key={i} className={currentStep === s ? "selected" : ""}>
            {s}
          </div>
        );
      })}
    </header>
  );
}
