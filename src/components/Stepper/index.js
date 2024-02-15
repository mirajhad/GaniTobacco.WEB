import React, { useState } from "react";
import "./Stepper.css";

const CHECKOUT_STEPS = [
  {
    name: "Customer Info",
    component: () => <div>Customer Info</div>,
  },
  {
    name: "Shipping",
    component: () => <div>Shipping</div>,
  },
  {
    name: "Payment",
    component: () => <div>Payment</div>,
  },
  {
    name: "Place Order",
    component: () => <div>Place Order</div>,
  },
  {
    name: "Thank You",
    component: () => <div>Thank You</div>,
  },
];

const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isCompleted, setIsCompleted] = useState(false);
  const handleNext = () => {};

  return (
    <div className="stepper">
      {CHECKOUT_STEPS.map((step, index) => {
        return (
          <>
            <div
              className={`step ${
                currentStep > index + 1 || isCompleted ? "completed" : ""
              } ${currentStep === index + 1 ? "active" : ""}`}
              key={step.name}
            >
              <div className="step-number">{index + 1}</div>
              <div className="step-name">{step.name}</div>
            </div>
            {!isCompleted && (
              <button className="btn" onClick={handleNext}>
                {currentStep === CHECKOUT_STEPS.length ? "Finish" : "Next"}
              </button>
            )}
          </>
        );
      })}
    </div>
  );
};

export default Stepper;
