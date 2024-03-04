import "./Header.css";

export default function Header({ isStepOne, isStepTwo, isStepThree }) {
  return (
    <header>
      <div className={isStepOne ? "selected" : " "}>1</div>
      <div className={isStepTwo ? "selected" : " "}>2</div>
      <div className={isStepThree ? "selected" : " "}>3</div>
      <div>4</div>
    </header>
  );
}
