import React from "react";

const TransactionList = () => {
  return (
    <div>
      <>
        <h3>History</h3>
        <ul className="list">
          <li className="minus">
            Cash <span>-$400</span>
            <button className="delete-button">X</button>
          </li>
          <li className="minus">
            Cash <span>-$400</span>
            <button className="delete-button">X</button>
          </li>
          <li className="minus">
            Cash <span>-$400</span>
            <button className="delete-button">X</button>
          </li>
        </ul>
      </>
    </div>
  );
};

export default TransactionList;