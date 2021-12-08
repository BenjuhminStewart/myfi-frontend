import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";

import { Account } from "./Account";

export const Balance = () => {
  const { transactions, accounts, getAccounts } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);

  useEffect(() => {
    getAccounts();
  }, []);
  console.log(JSON.stringify(accounts));
  let balance = 0;
  for (const amount of amounts) {
    balance += amount;
  }

  const negative = balance < 0 ? "-" : "";

  return (
    <>
      <h4>Account Balance</h4>
      <select>
        {accounts.map((account) => (
          <Account key={accounts.checkings_id} account={account} />
        ))}
      </select>
      <h1>
        {negative}${Math.abs(balance).toFixed(2)}
      </h1>
    </>
  );
};
