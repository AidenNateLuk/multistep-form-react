import "./styles.css";

export default function Header({ steps, currentStep }) {
  return (
    <header>
      {steps.map((s, i) => {
        return (
          <div
            id="indicator"
            key={i}
            className={currentStep === s ? "selected" : ""}
          >
            {s}
          </div>
        );
      })}
    </header>
  );
}
