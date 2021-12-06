import React, { useContext } from "react";

import { Transaction } from "./Transaction";
import { GlobalContext } from "../context/GlobalState";

export const IncomeAndExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);

  let income = 0;
  let expenses = 0;

  for (const amount of amounts) {
    if (amount < 0) expenses += amount;
    else income += amount;
  }

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">${Math.abs(income).toFixed(2)}</p>
      </div>
      <div>
        <h4>Expenses</h4>
        <p className="money minus">${Math.abs(expenses).toFixed(2)}</p>
      </div>
    </div>
  );
};
