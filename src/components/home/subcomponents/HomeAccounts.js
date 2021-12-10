import React from "react";

const HomeAccounts = () => {
  return (
    <div className="p-3">
      <h4 className="text-center">Select an account</h4>
      <hr></hr>
      <ul className="list">
        <button className="list-buttons">All Accounts</button>
      </ul>
      <h5>Checkings</h5>
      <ul className="list">
        <button className="list-buttons">Umpqua</button>
        <button className="list-buttons">Bank of America</button>
        <button className="list-buttons">Chase</button>
      </ul>
      <hr></hr>
      <h5>Savings</h5>
      <ul className="list">
        <button className="list-buttons">Retirement</button>
        <button className="list-buttons">BECU</button>
      </ul>
    </div>
  );
};

export default HomeAccounts;
