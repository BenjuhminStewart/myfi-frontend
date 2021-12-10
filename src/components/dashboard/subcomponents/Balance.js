import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

import { Account } from "./Account";

export var selectedId = -1;

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
        selectedId = Number.parseInt(e.target.value);
        getTransactions();
      } else {
        console.log(e.target.value);
        filterTransactions(Number.parseInt(e.target.value));
        selectedId = Number.parseInt(e.target.value);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <h4>Account Balance</h4>
      <h2>
        {negative}${Math.abs(balance).toFixed(2)}
      </h2>
      <div className="pb-3 pt-1">
        <select
          className="form-select pt-2 pb-2"
          onChange={(e) => handleEvent(e)}
        >
          <option value={-1}>All Accounts</option>
          {accounts.map((account) => (
            <Account key={accounts.acc_id} account={account} />
          ))}
        </select>
      </div>
    </>
  );
};
