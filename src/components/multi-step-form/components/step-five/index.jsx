import "./styles.css";

import iconImage from "../../../../assets/images/icon-thank-you.svg";
export default function StepFive() {
  return (
    <>
      <div className="content">
        <img src={iconImage} />
        <h2>Thank you!</h2>
        <p>
          Thanks for confirming your subscription! <br /> We hope you have fun
          using our <br /> platform. if you ever need support, <br /> please
          feel free to email us at <br /> support@loremgaming.com.
        </p>
      </div>
    </>
  );
}
