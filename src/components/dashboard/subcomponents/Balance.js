import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

import { Account } from "./Account";

export const Balance = () => {
  const {
    transactions,
    getTransactions,
    filterTransactions,
    accounts,
    getAccounts,
  } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);

  useEffect(() => {
    getAccounts();
  }, []);

  let balance = 0;
  for (const amount of amounts) balance += amount;
  const negative = balance < 0 ? "-" : "";

  function handleEvent(e) {
    try {
      if (e.target.value == -1 || e.target.value == "All Accounts") {
        getTransactions();
      } else {
        console.log(e.target.value);
        filterTransactions(Number.parseInt(e.target.value));
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="pb-3">
        <h4>Account Balance</h4>
        <select
          className="form-select pt-3 pb-3"
          onChange={(e) => handleEvent(e)}
        >
          <option value={-1}>All Accounts</option>
          {accounts.map((account) => (
            <Account key={accounts.checkings_id} account={account} />
          ))}
        </select>
      </div>
      <h1>
        {negative}${Math.abs(balance).toFixed(2)}
      </h1>
    </>
  );
};
