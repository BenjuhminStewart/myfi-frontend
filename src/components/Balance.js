import React, { useContext } from "react";

import { Transaction } from "./Transaction";
import { GlobalContext } from "../context/GlobalState";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);

  let balance = 0;
  for (const amount of amounts) {
    balance += amount;
  }

  const negative = balance < 0 ? "-" : "";

  return (
    <>
      <h4>Account Balance</h4>
      <h1>
        {negative}${Math.abs(balance).toFixed(2)}
      </h1>
    </>
  );
};
