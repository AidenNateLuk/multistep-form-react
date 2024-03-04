import { useEffect, useState } from "react";
import "./styles.css";

export default function StepThree({ addons }) {
  //   const toggleChecked = () => {
  //     if (!isChecked) {
  //       setIsChecked(true);
  //     }
  //     setIsChecked(false);
  //   };

  const toggleAddOn = () => {
    console.log("kelev");
  };

  useEffect(() => {
    console.log({ addons });
  }, []);

  return (
    <>
      {addons.map((addon, i) => {
        return (
          <div
            key={i}
            className={`add-on ${addon.isChecked ? "selected" : ""}`}
            onClick={toggleAddOn}
          >
            <input type="checkbox" checked={addon.isChecked} />
            {addon.title}
            {/* checkbox input */}

            {/* text */}
            {/* price */}
          </div>
        );
      })}
    </>
  );

  //   return (
  //     <main>
  //       <form>
  //         <div className="card-title">
  //           <h1>Pick add-ons</h1>
  //           <p>Add-ons help enhance your gaming experience.</p>
  //         </div>
  //         <div className="card-content">
  //           <div className={`add-on ${isChecked ? "checked" : ""}`}>
  //             <div className="description">
  //               <input
  //                 type="checkbox"
  //                 onClick={toggleChecked}
  //                 value={isChecked}
  //               />
  //               <div className="text">
  //                 <h4>Online Service</h4>
  //                 <p>Access to multiplayer games</p>
  //               </div>
  //             </div>
  //             <div className="price">
  //               {isMonthly && <p>+$1/mo</p>}
  //               {isYearly && <p>+$10/yr </p>}
  //             </div>
  //           </div>
  //           <div className={`add-on ${isChecked ? "checked" : ""}`}>
  //             <div className="description">
  //               <input
  //                 type="checkbox"
  //                 onChange={toggleChecked}
  //                 value={isChecked}
  //               />
  //               <div className="text">
  //                 <h4>Larger Storage</h4>
  //                 <p>Extra 1TB of cloud save</p>
  //               </div>
  //             </div>
  //             <div className="price">
  //               {isMonthly && <p>+$2/mo</p>}
  //               {isYearly && <p>+$20/yr </p>}
  //             </div>
  //           </div>
  //           <div className={`add-on ${isChecked ? "checked" : ""}`}>
  //             <div className="description">
  //               <input
  //                 type="checkbox"
  //                 onClick={toggleChecked}
  //                 value={isChecked}
  //               />
  //               <div className="text">
  //                 <h4>Customizable profile</h4>
  //                 <p>Custom theme on your profile</p>
  //               </div>
  //             </div>
  //             <div className="price">
  //               {isMonthly && <p>+$2/mo</p>}
  //               {isYearly && <p>+$20/yr </p>}
  //             </div>
  //           </div>
  //         </div>
  //       </form>
  //     </main>
  //   );
  // }
}
