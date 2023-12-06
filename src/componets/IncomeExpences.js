import React from "react";

const IncomeExpences = () => {
  return (
    <div className="inc-exp-container">
      <div>
        <h1>Income</h1>
        <p className="money plus">+$0.00</p>
      </div>
      <div>
        <h4>Expences</h4>
        <p className="money minus">-$0.00</p>
      </div>
    </div>
  );
};

export default IncomeExpences;
